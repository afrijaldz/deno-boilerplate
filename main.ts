import { Application, green } from "deps";

import router from "./src/routes/index.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
console.log(green("server run on port 8000"));
