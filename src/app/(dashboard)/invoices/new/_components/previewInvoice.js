import Logo from "@/app/main/logo/logo"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { format } from "date-fns"
import Image from "next/image"

const PreviewInvoice = ({ data, logo, invoiceRef }) => {
	return (
		<div
			className="border border-slate-300 sticky top-4 p-12 rounded-lg scale-95 bg-white"
			id="pdf"
			ref={invoiceRef}
		>
			<header className="flex justify-between items-center">
				<Logo logo={logo} width={160} height={32} />
				<h1 className="text-4xl text-slate-800 font-bold">Invoice</h1>
			</header>
			<div className="flex justify-between items-center mt-7">
				<article>
					<p className="text-4xl text-slate-800 font-bold">{data.clientName}</p>
				</article>
				<article className="text-right">
					<p>
						<span className="text-slate-800 font-bold">Номер счета:</span>{" "}
						{`INV-${data.clientName}-${data.invoiceNumber}`}
					</p>
					<p>
						<span className="text-slate-800 font-bold">Дата счета:</span>{" "}
						{data.invoiceDate &&
							format(new Date(data.invoiceDate), "dd.MM.yyyy")}
					</p>
				</article>
			</div>
			<article className="mt-7">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="text-left w-[100px]">Товар</TableHead>
							<TableHead className="text-center">Маркировка</TableHead>
							<TableHead className="text-center">Фото</TableHead>
							<TableHead className="text-center">Кол-во</TableHead>
							<TableHead className="text-center">Цена за ед.</TableHead>
							<TableHead className="text-center">Доставка</TableHead>
							<TableHead className="text-right">Итого</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.items.map(item => (
							<TableRow key={item.id}>
								<TableCell className="font-semibold text-left">
									{item.productName}
								</TableCell>
								<TableCell className="text-center font-bold">
									{item.marking}
								</TableCell>
								<TableCell className="text-center">
									{item.picture ? (
										<Image
											src={item.picture}
											alt="Фото товара"
											width={64}
											height={64}
											className="object-cover"
										/>
									) : (
										<span>Нет фото</span>
									)}
								</TableCell>
								<TableCell className="text-center font-bold">
									{item.productCount}
								</TableCell>
								<TableCell className="text-center font-bold">
									{item.unitPrice} ¥
								</TableCell>
								<TableCell className="text-center font-bold">
									{item.delivery} ¥
								</TableCell>
								<TableCell className="text-right font-bold">
									{item.totalYuan} ¥
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</article>
			<article className="mt-7">
				<div className="flex justify-between items-start">
					<div>
						<h3 className="text-l text-slate-800 font-bold">
							Примечания для клиента
						</h3>
						<p>{data.notes}</p>
					</div>
					<div>
						<ul>
							<li className="flex justify-between items-end">
								<span>Итого в юанях: </span>
								<span className="font-bold">{data.totalAmount} ¥</span>
							</li>
							<li className="flex justify-between items-end">
								<span>Комиссия {data.commission}%: </span>
								<span className="font-bold">{data.totalCommission} ¥</span>
							</li>
							<li className="flex justify-between items-end">
								<span>Курс юаня: </span>
								<span className="font-bold">{data.yuanRate} ¥</span>
							</li>
							<li className="flex justify-between items-end">
								<span>Итого в рублях: </span>
								<span className="font-bold">{data.totalRub} ₽</span>
							</li>
						</ul>
					</div>
				</div>
			</article>
			<footer className="border-t border-slate-300 py-4 mt-10">
				<div className="flex justify-between items-center">
					<h2 className="font-bold text-slate-800 text-xl">Контакты</h2>
					<h2 className="font-bold text-slate-800 text-xl">Vedsolution</h2>
				</div>
				<div className="flex justify-between items-start">
					<ul className="mt-5">
						<li>
							<span>Telegram менеджера - </span>
							<span className="font-bold">{data.manager}</span>
						</li>
					</ul>
					<ul className="mt-5 text-right">
						<li>
							<span>Telegram - </span>
							<span className="font-bold">@vedsolution</span>
						</li>
						<li>
							<span>Сайт - </span>
							<span className="font-bold">vedsolution.ru</span>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	)
}

export default PreviewInvoice
