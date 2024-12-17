"use server"

interface InvoiceData {
	clientName: string // Имя клиента (обязательное поле, текст)
	commission: number // Комиссия (обязательное поле, число с плавающей точкой)
	manager: string // Менеджер (обязательное поле, текст)
	invoiceNumber: string // Номер счета (обязательное поле, текст)
	invoiceDate: Date // Дата счета (обязательное поле, объект Date)
	yuanRate: number // Курс юаня (обязательное поле, число с плавающей точкой)
	productName: string // Название продукта (обязательное поле, текст)
	productCount: number // Количество товара (обязательное поле, целое число)
	unitPrice: number // Цена за единицу (обязательное поле, число с плавающей точкой)
	marking: string // Маркировка (обязательное поле, текст)
	delivery: number // Стоимость доставки (обязательное поле, число с плавающей точкой)
	picture: string | null // Путь к картинке (может быть текстом или null)
	totalCommission: number // Итоговая комиссия (обязательное поле, число с плавающей точкой)
	totalYuan: number // Итоговая сумма в юанях (обязательное поле, число с плавающей точкой)
	totalRub: number // Итоговая сумма в рублях (обязательное поле, число с плавающей точкой)
	notes: string | null // Примечания (может быть текстом или null)
	status: "не оплачено" | "оплачено" | "в обработке" // Статус счета (обязательное поле, одно из перечисленных значений)
	items: object // Товары (объект JSON)
}

function prepareInvoiceData(
	formData: FormData,
	picturePath: string | null
): InvoiceData {
	return {
		clientName: String(formData.get("clientName")), // Преобразуем в строку
		commission: parseFloat(String(formData.get("commission"))), // Преобразуем в число с плавающей точкой
		manager: String(formData.get("manager")), // Преобразуем в строку
		invoiceNumber: String(formData.get("invoiceNumber")), // Преобразуем в строку
		invoiceDate: new Date(String(formData.get("invoiceDate"))), // Преобразуем в объект Date
		yuanRate: parseFloat(String(formData.get("yuanRate"))), // Преобразуем в число
		productName: String(formData.get("productName")), // Преобразуем в строку
		productCount: parseInt(String(formData.get("productCount")), 10), // Преобразуем в целое число
		unitPrice: parseFloat(String(formData.get("unitPrice"))), // Преобразуем в число
		marking: String(formData.get("marking")), // Преобразуем в строку
		delivery: parseFloat(String(formData.get("delivery"))), // Преобразуем в число
		picture: picturePath, // Путь к картинке
		totalCommission: parseFloat(String(formData.get("totalCommission"))), // Преобразуем в число
		totalYuan: parseFloat(String(formData.get("totalYuan"))), // Преобразуем в число
		totalRub: parseFloat(String(formData.get("totalRub"))), // Преобразуем в число
		notes: formData.get("notes") ? String(formData.get("notes")) : null, // Преобразуем в строку или null
		status: "не оплачено", // Предопределенное значение для статуса
		items: formData.get("items")
			? JSON.parse(String(formData.get("items")))
			: {}, // Преобразуем в JSON или пустой объект
	}
}

import { db } from "@/db"
import { Invoices } from "./db/schema"

export async function createAction(formData: FormData) {
	try {
		const data: Record<string, any> = {}
		formData.forEach((value, key) => {
			data[key] = value
		})

		// Получаем файл из формы
		const pictureFile = formData.get("picture") as File | null

		// Обрабатываем файл, если он есть
		let picturePath = null
		if (pictureFile) {
			const fileName = `${Date.now()}_${pictureFile.name}`
			const fileBuffer = Buffer.from(await pictureFile.arrayBuffer())
			const filePath = `./public/uploads/${fileName}` // Путь для сохранения
			require("fs").writeFileSync(filePath, fileBuffer)

			// Сохраняем путь до файла
			picturePath = `/uploads/${fileName}`
		}

		// Приводим данные к структуре InvoiceData
		const invoiceData = prepareInvoiceData(formData, picturePath)

		// Вставляем данные в базу
		await db.insert(Invoices).values(invoiceData)

		return {
			success: true,
			message: "Данные успешно сохранены.",
		}
	} catch (error) {
		console.error("Ошибка при сохранении данных:", error)
		return {
			success: false,
			message: "Произошла ошибка при сохранении данных.",
		}
	}
}
