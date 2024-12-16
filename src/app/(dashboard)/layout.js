import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar"
import { cookies } from "next/headers"

const DashboardLayout = async ({ children }) => {
	const cookieStore = await cookies()
	const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<AppSidebar />
			<SidebarInset>
				<Separator orientation="vertical" className="mr-2 h-4" />
				<main>
					<SidebarTrigger />
					{children}
				</main>
			</SidebarInset>
		</SidebarProvider>
	)
}

export default DashboardLayout
