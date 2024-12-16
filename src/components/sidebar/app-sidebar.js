import {
	Calendar,
	ChevronUp,
	Home,
	Receipt,
	ReceiptJapaneseYen,
	User2,
	Users,
} from "lucide-react"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"

// Menu items.
const data = {
	navMain: [
		{
			title: "Главная",
			url: "/",
			icon: Home,
		},
		{
			title: "Клиенты",
			url: "/clients",
			icon: Users,
		},
		{
			title: "Инвойсы",
			url: "/invoices",
			icon: ReceiptJapaneseYen,
			items: [
				{
					title: "Все счета",
					url: "/invoices",
				},
				{
					title: "Создать инвойс",
					url: "/invoices/new",
				},
			],
		},
		{
			title: "Накладные",
			url: "/overhead",
			icon: Receipt,
			items: [
				{
					title: "Создать накладную",
					url: "/overhead/new",
				},
			],
		},
		{
			title: "Календарь",
			url: "/calendar",
			icon: Calendar,
		},
	],
}

export function AppSidebar() {
	return (
		<Sidebar variant="sidebar">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{data.navMain.map(item => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url} className="font-medium">
											{item.title}
										</a>
									</SidebarMenuButton>
									{item.items?.length ? (
										<SidebarMenuSub>
											{item.items.map(item => (
												<SidebarMenuSubItem key={item.title}>
													<SidebarMenuSubButton
														asChild
														isActive={item.isActive}
													>
														<a href={item.url}>{item.title}</a>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									) : null}
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<User2 /> Username
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side="top"
								className="w-[--radix-popper-anchor-width]"
							>
								<DropdownMenuItem>
									<UserButton />
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarGroupLabel>Vedsolution</SidebarGroupLabel>
		</Sidebar>
	)
}
