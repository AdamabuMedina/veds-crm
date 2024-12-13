import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { cookies } from "next/headers"

const DashboardLayout = async ({ children }) => {
	const cookieStore = await cookies()
	const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<AppSidebar />
			<main>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	)
}

export default DashboardLayout
