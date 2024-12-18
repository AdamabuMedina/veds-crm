import {
	pgEnum,
	pgTable,
	serial,
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
	clientName: varchar("clientName", { length: 255 }).notNull(),
	invoiceDate: timestamp("invoiceDate").notNull().defaultNow(),
	// commission: decimal("commission", { precision: 10, scale: 2 }).notNull(),
	// manager: varchar("manager", { length: 255 }).notNull(),
	// invoiceNumber: varchar("invoiceNumber", { length: 255 }).notNull(),
	// yuanRate: decimal("yuanRate", { precision: 10, scale: 2 }).notNull(),
	// productName: varchar("productName", { length: 255 }).notNull(),
	// productCount: integer("productCount").notNull(),
	// unitPrice: decimal("unitPrice", { precision: 10, scale: 2 }).notNull(),
	// marking: varchar("marking", { length: 255 }).notNull(),
	// delivery: decimal("delivery", { precision: 10, scale: 2 }).notNull(),
	// picture: text("picture"),
	// totalCommission: decimal("totalCommission", {
	// 	precision: 10,
	// 	scale: 2,
	// }).notNull(),
	// totalYuan: decimal("totalYuan", { precision: 10, scale: 2 }).notNull(),
	// totalRub: decimal("totalRub", { precision: 10, scale: 2 }).notNull(),
	// notes: text("notes"),
	// status: statusEnum("status").notNull(),
	// items: jsonb("items").notNull().default("{}"),
})
