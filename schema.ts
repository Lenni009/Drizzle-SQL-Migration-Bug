import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const voteData = sqliteTable("vote_data", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  board: text().notNull(),
  isPersonVote: integer({ mode: "boolean" }).notNull(),
  isSecret: integer({ mode: "boolean" }).notNull(),
  hasStarted: integer({ mode: "boolean" }).notNull().default(false),
  isClosed: integer({ mode: "boolean" }).notNull().default(false),
  createdBy: text()
    .notNull()
    .references(() => users.userId),
  createdAt: integer()
    .notNull()
    .default(sql`(unixepoch())`),
});

// usernames and their id
// this is really messed up legacy dev code that never reached prod
export const users = sqliteTable("users", {
  userName: text().primaryKey(),
  userId: text().unique(),
});
