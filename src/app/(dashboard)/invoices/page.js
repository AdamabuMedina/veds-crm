"use client"

import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"
import Link from "next/link"
import TableInvoices from "./tableInvoices"

const Invoices = () => {
	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b">
				<h1 className="text-xl font-bold lg:text-2xl">Инвойсы</h1>
				<p>
					<Button variant="ghost" className="inline-flex gap-2" asChild>
						<Link href="/invoices/new">
							<CirclePlus className="h-4 w-4" />
							Создать счет
						</Link>
					</Button>
				</p>
			</header>
			<div className="flex flex-1 flex-col gap-4 px-6">
				<div className="grid auto-rows-min gap-4 md:grid-cols-1">
					<TableInvoices />
				</div>
			</div>
		</div>
	)
}

export default Invoices
