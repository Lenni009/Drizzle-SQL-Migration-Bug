import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./schema.ts",
  dialect: "sqlite",
  casing: "snake_case",
  dbCredentials: {
    url: "file:./test.db",
  },
});
