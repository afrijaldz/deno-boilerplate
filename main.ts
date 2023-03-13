import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import chalk from "npm:chalk@5";

import router from "./src/routes/index.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
console.log(chalk.green("server run on port 8000"));
