import {
	decimal,
	integer,
	jsonb,
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core"

// Перечисление для статуса
export const statusEnum = pgEnum("status", [
	"не оплачено",
	"оплачено",
	"в пути на склад",
	"в пути в РФ",
	"доставлено",
])

// Таблица "Invoices"
export const Invoices = pgTable("invoices", {
	id: serial("id").primaryKey().notNull(),
	clientName: varchar("clientName").notNull(),
	invoiceDate: timestamp("invoiceDate").notNull().defaultNow(),
	commission: decimal("commission", { precision: 10, scale: 2 }),
	manager: varchar("manager", { length: 255 }).notNull(),
	invoiceNumber: varchar("invoiceNumber", { length: 255 }).notNull(),
	yuanRate: decimal("yuanRate", { precision: 10, scale: 2 }),
	productName: varchar("productName", { length: 255 }).notNull(),
	productCount: integer("productCount").notNull(),
	unitPrice: decimal("unitPrice", { precision: 10, scale: 2 }),
	marking: varchar("marking", { length: 255 }).notNull(),
	delivery: decimal("delivery", { precision: 10, scale: 2 }),
	picture: text("picture"),
	totalCommission: decimal("totalCommission", {
		precision: 10,
		scale: 2,
	}),
	totalYuan: decimal("totalYuan", { precision: 10, scale: 2 }),
	totalRub: decimal("totalRub", { precision: 10, scale: 2 }),
	notes: text("notes"),
	status: statusEnum("status"),
	items: jsonb("items").notNull().default("{}"),
})
