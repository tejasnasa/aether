import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").default("uuid_generate_v4()").primaryKey(),
  username: varchar("username", { length: 32 }).notNull().unique(),
  fullname: varchar("fullname", { length: 32 }).notNull(),
  avatar: text("avatar").default("https://i.imgur.com/V4RclNb.png"),
  bio: text("bio").default(""),
});
