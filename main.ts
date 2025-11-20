import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import * as schema from "./schema.ts";

// creating DB
const db = drizzle({ connection: "file:./test.db", casing: "snake_case", schema });

// migrating DB schema if necessary
await migrate(db, { migrationsFolder: "./drizzle" });

// success message
console.log("successfully migrated!")
