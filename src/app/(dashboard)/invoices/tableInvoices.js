"use client"

import { Badge } from "@/components/ui/badge"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

const TableInvoices = () => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="p-4">Дата</TableHead>
					<TableHead className="text-center p-4">Счет №</TableHead>
					<TableHead className="text-center p-4">Клиент</TableHead>
					<TableHead className="text-center p-4">Товар</TableHead>
					<TableHead className="text-center p-4">Маркировка</TableHead>
					<TableHead className="text-center p-4">Статус</TableHead>
					<TableHead className="text-right p-4">Итого</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-bold p-4">13.10.2023</TableCell>
					<TableCell className="text-center font-bold p-4">INV001</TableCell>
					<TableCell className="text-center p-4">Клиент</TableCell>
					<TableCell className="text-center p-4">Товар</TableCell>
					<TableCell className="text-center p-4">Маркировка</TableCell>
					<TableCell className="text-center p-4">
						<Badge className="rounded-full">Оплачено</Badge>
					</TableCell>
					<TableCell className="text-right font-bold p-4">
						Сумма в юанях
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}

export default TableInvoices
