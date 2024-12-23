"use client"

import { createAction } from "@/actions"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useReactToPrint } from "react-to-print"
import { v4 } from "uuid"
import logo from "../../../../logo.jpg"
import InvoiceForm from "./_components/invoiceForm"
import PreviewInvoice from "./_components/previewInvoice"

const NewInvoice = () => {
	const fileInputRef = useRef(null)
	const invoiceRef = useRef(null)
	const [data, setFormData] = useState({
		clientName: "",
		commission: 0,
		manager: "",
		invoiceNumber: "",
		invoiceDate: new Date().toISOString().split("T")[0],
		yuanRate: 0,
		productName: "",
		productCount: 0,
		unitPrice: 0,
		marking: "",
		delivery: 0,
		picture: null,
		notes: "",
		totalCommission: 0,
		totalYuan: 0,
		totalRub: 0,
		items: [],
		isEditing: false,
		totalAmount: 0,
		previewInvoice: false,
		state: "ready",
	})

	useEffect(() => {
		const totalYuan = data.productCount * data.unitPrice + Number(data.delivery)

		const totalAmount = data.items.reduce(
			(sum, item) => sum + item.totalYuan,
			totalYuan
		)

		const totalCommission = (totalAmount * data.commission) / 100
		const totalRub = (totalAmount + totalCommission) * data.yuanRate

		setFormData(prev => ({
			...prev,
			totalYuan: parseFloat(totalYuan.toFixed(2)),
			totalRub: parseFloat(totalRub.toFixed(2)),
			totalCommission: parseFloat(totalCommission.toFixed(2)),
			totalAmount: parseFloat(totalAmount.toFixed(2)),
		}))
	}, [
		data.productCount,
		data.unitPrice,
		data.delivery,
		data.commission,
		data.yuanRate,
		data.items,
	])

	const resetProductFields = () => {
		setFormData(prev => ({
			...prev,
			productName: "",
			productCount: 0,
			unitPrice: 0,
			marking: "",
			delivery: 0,
			picture: null,
		}))
	}

	const handleOnSubmit = async e => {
		e.preventDefault()
		if (state === "pending") return
		const target = e.target
		const formData = new FormData(target)
		await createAction(formData)
		setFormData(prev => ({
			...prev,
			state: "pending",
		}))
		console.log("hey")
	}

	const handlePrint = useReactToPrint({
		content: () => document.getElementById("pdf"),
		contentRef: invoiceRef,
		onAfterPrint: () =>
			setFormData(prev => ({ ...prev, previewInvoice: false })),
		documentTitle: `${data.clientName}-${data.invoiceNumber}`,
	})

	// Обработка изменений в инпутах
	const handleChange = e => {
		const { id, value, type, files } = e.target
		setFormData(prev => ({
			...prev,
			[id]:
				type === "file" && files.length ? URL.createObjectURL(files[0]) : value,
		}))
	}

	// Обработка отправки формы
	const itemSubmit = e => {
		e.preventDefault()
		if (!data.productName || !data.unitPrice || !data.productCount) {
		} else {
			const newItem = {
				id: v4(),
				productName: data.productName,
				productCount: data.productCount,
				unitPrice: data.unitPrice,
				marking: data.marking,
				picture: data.picture,
				delivery: data.delivery,
				totalYuan: data.totalYuan,
			}

			// Обновляем formData, добавляя новый элемент в массив items
			setFormData(prev => ({
				...prev,
				items: [newItem, ...prev.items],
			}))

			// Сбрасываем только поля продукта
			resetProductFields()
		}

		if (fileInputRef.current) {
			fileInputRef.current.value = ""
		}
	}

	//delete function
	const itemDelete = id => {
		setFormData(prev => ({
			...prev,
			items: prev.items.filter(item => item.id !== id),
		}))
	}

	const itemEdit = id => {
		const itemToEdit = data.items.find(item => item.id === id)
		setFormData(prev => ({
			...prev,
			items: prev.items.filter(item => item.id !== id),
			isEditing: true,
			productName: itemToEdit.productName,
			productCount: itemToEdit.productCount,
			unitPrice: itemToEdit.unitPrice,
			marking: itemToEdit.marking,
			picture: itemToEdit.picture,
			delivery: itemToEdit.delivery,
		}))
	}

	const handlePreviewInvoice = () => {
		setFormData(prev => ({
			...prev,
			previewInvoice: !prev.previewInvoice, // Переключает true/false
		}))
	}
	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b">
				<h1 className="text-xl font-bold lg:text-2xl">Сформировать инвойс</h1>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-2">
					<div>
						<InvoiceForm
							data={data}
							handleChange={handleChange}
							itemSubmit={itemSubmit}
							itemDelete={itemDelete}
							itemEdit={itemEdit}
							handlePreviewInvoice={handlePreviewInvoice}
							createAction={createAction}
							fileInputRef={fileInputRef}
							handleOnSubmit={handleOnSubmit}
						/>
					</div>
					<div>
						<PreviewInvoice data={data} logo={logo} />
					</div>
					{data.previewInvoice && (
						<div className="fixed top-0 left-0 right-0 bottom-0 bg-black/75 overflow-y-scroll">
							<div className="max-w-5xl mx-auto mt-16">
								<ul className="flex justify-between items-center ">
									<li>
										<Button variant="secondary" onClick={handlePrint}>
											Скачать счет
										</Button>
									</li>
									<li>
										<Button variant="secondary" onClick={handlePreviewInvoice}>
											<XIcon />
										</Button>
									</li>
								</ul>
								<PreviewInvoice
									data={data}
									logo={logo}
									invoiceRef={invoiceRef}
								/>
							</div>
						</div>
					)}
				</div>

				<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
			</div>
		</div>
	)
}

export default NewInvoice
