import Calculator from "@/components/calculator/calculator"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import PriceTable from "@/components/priceTable/priceTable"
import { auth } from "@clerk/nextjs/server"
import logo from "../logo.jpg"

const Home = async () => {
	const { userId } = await auth()

	return (
		<>
			<div className="container my-0 mx-auto">
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

export default Home
