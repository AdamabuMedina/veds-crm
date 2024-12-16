import { db } from "@/db"
import { sql } from "drizzle-orm"
import Calculator from "./calculator/calculator"
import Footer from "./footer/footer"
import Header from "./header/header"
import PriceTable from "./priceTable/priceTable"

const Main = async ({ userId, logo }) => {
	const result = await db.execute(sql`SELECT current_database()`)
	console.log("result", result)

	return (
		<>
			<div className="container my-0 mx-auto">
				{JSON.stringify(result)}
				<Header logo={logo} userId={userId} />
				<main className="relative">
					<PriceTable />
					<Calculator />
				</main>
			</div>
			<Footer />
		</>
	)
}

export default Main
