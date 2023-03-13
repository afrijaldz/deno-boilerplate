import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { getAll } from "../controllers/todos.ts";

const todos = new Router();

todos.get("/", getAll);

// todos.get("/", (ctx) => {
//   ctx.response.body = "hello world";
// });

// todos.get("/:id", );

export default todos;
