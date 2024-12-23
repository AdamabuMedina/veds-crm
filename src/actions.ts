"use server"

import { db } from "@/db"
import { redirect } from "next/navigation"
import { Invoices } from "./db/schema"

function prepareInvoiceData(formData: FormData, picturePath: string | null) {
	return {
		clientName: String(formData.get("clientName")),
		invoiceDate: new Date(String(formData.get("invoiceDate"))),
		commission: parseFloat(String(formData.get("commission"))),
		manager: String(formData.get("manager")),
		invoiceNumber: String(formData.get("invoiceNumber")),
		yuanRate: parseFloat(String(formData.get("yuanRate"))),
		productName: String(formData.get("productName")),
		productCount: parseInt(String(formData.get("productCount")), 10),
		unitPrice: parseFloat(String(formData.get("unitPrice"))),
		marking: String(formData.get("marking")),
		delivery: parseFloat(String(formData.get("delivery"))),
		picture: picturePath,
		totalCommission: parseFloat(String(formData.get("totalCommission"))),
		totalYuan: parseFloat(String(formData.get("totalYuan"))),
		totalRub: parseFloat(String(formData.get("totalRub"))),
		notes: formData.get("notes") ? String(formData.get("notes")) : null,
		status: "не оплачено",
		items: formData.get("items")
			? JSON.parse(String(formData.get("items")))
			: {},
	}
}

export async function createAction(formData: FormData) {
	// Логика обработки формы
	const pictureFile = formData.get("picture") as File | null

	let picturePath = null
	if (pictureFile) {
		const fileName = `${Date.now()}_${pictureFile.name}`
		const fileBuffer = Buffer.from(await pictureFile.arrayBuffer())
		const filePath = `./public/uploads/${fileName}`
		require("fs").writeFileSync(filePath, fileBuffer)

		picturePath = `/uploads/${fileName}`
	}

	const invoiceData = prepareInvoiceData(formData, picturePath)

	// Сохранение данных в базу
	const results = await db.insert(Invoices).values(invoiceData).returning({
		id: Invoices.id,
	})

	// Перенаправление
	redirect(`/invoices/${results[0].id}`)
}
