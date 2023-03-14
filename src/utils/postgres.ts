import { PostgreSQL } from "deps";

export async function postgres(): Promise<PostgreSQL> {
  const client = new PostgreSQL({
    user: Deno.env.get("DB_USER"),
    database: Deno.env.get("DB_NAME"),
    hostname: Deno.env.get("DB_HOST"),
    port: Deno.env.get("DB_PORT"),
  });

  await client.connect();
  return client;
}
