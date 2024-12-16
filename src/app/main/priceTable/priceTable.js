import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { prices } from "../../../lib/prices"
import PriceCaption from "./priceCaption"

const PriceTable = () => {
	const headers = [
		{
			label: "Плотность (кг/м3)",
			props: { rowSpan: 2 },
		},
		{ label: "Одежда", props: { colSpan: 2 } },
		{ label: "Хозтовары", props: { colSpan: 2 } },
	]

	const subHeaders = [
		{
			label: "10-15 дней",
			props: { scope: "col" },
		},
		{
			label: "18-25 дней",
			props: { scope: "col" },
		},
		{
			label: "10-15 дней",
			props: { scope: "col" },
		},
		{
			label: "18-25 дней",
			props: { scope: "col" },
		},
	]

	const rows = prices.map(entry => [
		entry.range.join(" - "),
		entry.clothes[0] ? `${entry.clothes[0]}$` : "-",
		entry.clothes[1] ? `${entry.clothes[1]}$` : "-",
		entry.goods[0] ? `${entry.goods[0]}$` : "-",
		entry.goods[1] ? `${entry.goods[1]}$` : "-",
	])

	return (
		<>
			<PriceCaption />
			<Table className="w-full my-10 mx-auto text-center table-auto border-collapse">
				<TableHeader>
					<TableRow className="bg-red-800 hover:bg-red-600 text-white font-bold text-lg sm:text-xl">
						{headers.map((header, index) => (
							<TableCell
								key={index}
								{...header.props}
								as="th"
								className="border border-gray-300 py-2 sm:py-4 px-3 sm:px-6"
							>
								{header.label}
							</TableCell>
						))}
					</TableRow>
					{subHeaders && (
						<TableRow className="bg-gray-200 text-black font-bold text-sm sm:text-lg">
							{subHeaders.map((subHeader, index) => (
								<TableCell
									key={index}
									{...subHeader.props}
									as="th"
									className="border border-gray-300 py-2 sm:py-4 px-3 sm:px-6"
								>
									{subHeader.label}
								</TableCell>
							))}
						</TableRow>
					)}
				</TableHeader>
				<TableBody>
					{rows.map((row, rowIndex) => (
						<TableRow
							key={rowIndex}
							className={`${
								rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
							} text-sm sm:text-lg`}
						>
							{row.map((cell, cellIndex) => (
								<TableCell
									key={cellIndex}
									className="border border-gray-300 py-2 sm:py-3 px-3 sm:px-5"
								>
									{cell}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}

export default PriceTable
