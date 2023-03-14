import { MySQL } from "deps";

export async function mysql(): Promise<MySQL> {
  const client = await new MySQL();
  client.connect({
    hostname: Deno.env.get("DB_HOST"),
    username: Deno.env.get("DB_USER"),
    db: Deno.env.get("DB_NAME"),
    port: parseInt(<string>Deno.env.get("DB_PORT")),
    poolSize: parseInt(<string>Deno.env.get("DB_POOLSIZE")) || 3,
    password: Deno.env.get("DB_PASSWORD"),
  });

  return client;
}
