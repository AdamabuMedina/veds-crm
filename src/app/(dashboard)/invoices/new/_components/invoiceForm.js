"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PencilIcon, TrashIcon } from "lucide-react"

const InvoiceForm = ({
	data,
	handleChange,
	itemSubmit,
	itemDelete,
	itemEdit,
	handlePreviewInvoice,
	fileInputRef,
	createAction,
	handleOnSubmit,
}) => {
	return (
		<form action={createAction} onSubmit={handleOnSubmit}>
			<h2 className="text-slate-900 font-bold text-xl mb-4">
				Информация о клиенте
			</h2>
			<div className="grid grid-cols-3 gap-4 mb-4">
				<div className="grid w-full  items-center gap-1.5">
					<Label htmlFor="clientName">Имя клиента</Label>
					<Input
						name="clientName"
						type="text"
						id="clientName"
						value={data.clientName}
						onChange={handleChange}
						placeholder="Введите имя клиента"
						required
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="commission">Комиссия</Label>
					<Input
						name="commission"
						type="number"
						id="commission"
						placeholder="0"
						value={data.commission}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="manager">Менеджер</Label>
					<Select
						name="manager"
						onValueChange={value =>
							handleChange({ target: { id: "manager", value } })
						}
					>
						<SelectTrigger className="w-full" id="manager">
							<SelectValue placeholder="Выберите менеджера" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Менеджер</SelectLabel>
								<SelectItem value="@milanaveds">Мила</SelectItem>
								<SelectItem value="@kweyk">Марго</SelectItem>
								<SelectItem value="@risalyaveds">Рисаля</SelectItem>
								<SelectItem value="@abuhamza1444">Ильхом</SelectItem>
								<SelectItem value="@ilyabugaevvv">Илья</SelectItem>
								<SelectItem value="@adamabumedina">Адам</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 mb-4">
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="invoiceNumber">Номер счета</Label>
					<Input
						name="invoiceNumber"
						type="text"
						id="invoiceNumber"
						value={data.invoiceNumber}
						onChange={handleChange}
						placeholder="Введите номер счета"
						required
					/>
				</div>
				<div className="grid w-full  items-center gap-1.5">
					<Label htmlFor="invoiceDate">Дата счета</Label>
					<Input
						name="invoiceDate"
						type="date"
						id="invoiceDate"
						value={data.invoiceDate}
						onChange={handleChange}
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="yuanRate">Курс юаня</Label>
					<Input
						name="yuanRate"
						type="number"
						id="yuanRate"
						placeholder="0"
						value={data.yuanRate}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			<h2 className="text-slate-900 font-bold text-xl mt-8 mb-4">
				Детали товара
			</h2>
			<div className="grid grid-cols-3 gap-4 mb-4">
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="productName">Наименование товара</Label>
					<Input
						name="productName"
						type="text"
						id="productName"
						placeholder="Введите имя товара"
						value={data.productName}
						onChange={handleChange}
					/>
				</div>
				<div className="grid w-full  items-center gap-1.5">
					<Label htmlFor="productCount">Количество</Label>
					<Input
						name="productCount"
						type="number"
						id="productCount"
						placeholder="0"
						value={data.productCount}
						onChange={handleChange}
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="unitPrice">Цена за единицу</Label>
					<Input
						name="unitPrice"
						type="number"
						id="unitPrice"
						placeholder="0"
						value={data.unitPrice}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 mb-4">
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="marking">Маркировка</Label>
					<Input
						name="marking"
						type="text"
						id="marking"
						placeholder="Введите маркировку"
						value={data.marking}
						onChange={handleChange}
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="delivery">Доставка по Китаю</Label>
					<Input
						name="delivery"
						type="number"
						id="delivery"
						placeholder="0"
						value={data.delivery}
						onChange={handleChange}
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="picture">Фото товара</Label>
					<Input
						name="picture"
						id="picture"
						type="file"
						ref={fileInputRef}
						onChange={handleChange}
					/>
				</div>
			</div>
			<h2 className="text-slate-900 font-bold text-xl mt-8 mb-4">Итого</h2>
			<div className="grid grid-cols-3 gap-4 mb-4">
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="totalCommission">Комиссия</Label>
					<Input
						name="totalCommission"
						type="number"
						id="totalCommission"
						value={data.totalCommission}
						readOnly
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="totalYuan">Сумма в юанях</Label>
					<Input
						name="totalYuan"
						type="number"
						id="totalYuan"
						value={data.totalYuan}
						readOnly
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="totalRub">Сумма в рублях</Label>
					<Input
						name="totalRub"
						type="number"
						id="totalRub"
						value={data.totalRub}
						readOnly
					/>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 mt-8 mb-4">
				<Button variant="outline" onClick={itemSubmit}>
					Добавить товар
				</Button>
			</div>
			<div className="my-8 space-y-4">
				{data.items.map(item => (
					<article key={item.id} className="flex items-center justify-between">
						<div className="flex gap-4">
							<p>
								Имя товара:{" "}
								<span className="font-bold">{item.productName}</span>
							</p>
							<p>
								Цена: <span className="font-bold">{item.totalYuan}</span>
							</p>
						</div>

						<div>
							<ul className="flex gap-4">
								<li>
									<Button variant="outline" onClick={() => itemEdit(item.id)}>
										<PencilIcon />
									</Button>
								</li>
								<li>
									<Button
										variant="destructive"
										onClick={() => itemDelete(item.id)}
									>
										<TrashIcon />
									</Button>
								</li>
							</ul>
						</div>
					</article>
				))}
			</div>
			<div className="grid w-full items-center gap-1.5 my-10">
				<Label htmlFor="notes">Примечание для клиента</Label>
				<Textarea
					name="notes"
					placeholder="Примечание для клиента"
					id="notes"
					value={data.notes}
					onChange={handleChange}
				/>
			</div>

			<div className="grid grid-cols-2 gap-4 mt-8 mb-4">
				<Button type="submit" onClick={handlePreviewInvoice}>
					Посмотреть счет
				</Button>
				<Button type="submit">Сохранить счет</Button>
			</div>
		</form>
	)
}

export default InvoiceForm
