CREATE TYPE "public"."status" AS ENUM('не оплачено', 'оплачено', 'в пути на склад', 'в пути в РФ', 'доставлено');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"invoiceDate" timestamp DEFAULT now() NOT NULL,
	"clientName" varchar(255) NOT NULL,
	"commission" numeric(10, 2) NOT NULL,
	"manager" varchar(255) NOT NULL,
	"invoiceNumber" varchar(255) NOT NULL,
	"yuanRate" numeric(10, 2) NOT NULL,
	"productName" varchar(255) NOT NULL,
	"productCount" integer NOT NULL,
	"unitPrice" numeric(10, 2) NOT NULL,
	"marking" varchar(255) NOT NULL,
	"delivery" numeric(10, 2) NOT NULL,
	"picture" text,
	"totalCommission" numeric(10, 2) NOT NULL,
	"totalYuan" numeric(10, 2) NOT NULL,
	"totalRub" numeric(10, 2) NOT NULL,
	"notes" text,
	"status" "status" NOT NULL,
	"items" jsonb DEFAULT '{}' NOT NULL
);
