import { auth } from "@clerk/nextjs/server"
import logo from "../logo.jpg"
import Main from "./main/page"

const Home = async () => {
	const { userId } = await auth()

	return (
		<>
			<Main userId={userId} logo={logo} />
		</>
	)
}

export default Home
