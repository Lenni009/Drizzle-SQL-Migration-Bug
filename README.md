# Drizzle-SQL-Migration-Bug

Minimal repro of a bug observes in Drizzle's SQL migration file generation

## Steps to reproduce

1. run `npm i`
2. run `npm run generate`
3. choose one of the options, it doesn't matter
4. run `node main.ts`
5. observe an SQL error regardless of the option picked
