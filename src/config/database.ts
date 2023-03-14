import { MySQL, PostgreSQL } from "deps";
import { mysql } from "../utils/mysql.ts";
import { postgres } from "../utils/postgres.ts";

function connection(): Promise<PostgreSQL | MySQL> {
  switch (Deno.env.get("DB_DRIVER")) {
    case "postgres": {
      return postgres();
    }
    case "mysql": {
      return mysql();
    }

    default:
      console.log("Please check .env file");
      Deno.exit(1);
  }
}

const database = await connection();

export { database };
