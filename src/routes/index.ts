import users from "./users.ts";
import todos from "./todos.ts";

import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";

const router = new Router();
router.use("/users", users.routes());
router.use("/todos", todos.routes());

export default router;
