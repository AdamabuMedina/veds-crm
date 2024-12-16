import { Button } from "@/components/ui/button"

import Link from "next/link"
import Logo from "../logo/logo"

const Header = ({ logo, userId }) => {
	return (
		<header className="bg-white">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl flex-col items-center sm:flex-row sm:justify-between py-6"
			>
				<Logo logo={logo} width={160} height={32} />

				{userId ? (
					<Link href="/dashboard">
						<Button>Панель управления</Button>
					</Link>
				) : (
					<ul className="mt-4 flex space-x-4 sm:mt-0 sm:flex-row sm:space-x-6">
						<li className="text-center sm:text-left">
							<Button>
								<Link href="/sign-in">Войти</Link>
							</Button>
						</li>
					</ul>
				)}
			</nav>
		</header>
	)
}

export default Header
