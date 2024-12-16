import Image from "next/image"
import Link from "next/link"

const Logo = ({ logo, width, height }) => {
	return (
		<div className="w-full flex justify-center sm:justify-start lg:flex-1">
			<Link href="/" className="block">
				<span className="sr-only">Vedsolution</span>
				<Image
					src={logo}
					alt="Vedsolution"
					width={width}
					height={height}
					className="h-auto w-full sm:w-auto"
				/>
			</Link>
		</div>
	)
}

export default Logo
