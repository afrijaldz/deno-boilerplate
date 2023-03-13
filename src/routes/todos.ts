import { Router } from "deps";
import { getAll } from "../controllers/todos.ts";

const todos = new Router();

todos.get("/", getAll);

// todos.get("/", (ctx) => {
//   ctx.response.body = "hello world";
// });

// todos.get("/:id", );

export default todos;
