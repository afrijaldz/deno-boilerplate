import users from "./users.ts";
import todos from "./todos.ts";

import { Router } from "deps";

const router = new Router();
router.use("/users", users.routes());
router.use("/todos", todos.routes());

export default router;
