import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";

const users = new Router();

users.get("/", (ctx) => {
  ctx.response.body = "hello world";
});

users.get("/books", (ctx) => {
  ctx.response.body = "Ini books";
});

users.get("/books/:id", (ctx) => {
  ctx.response.body = "Ini detail";
});

export default users;
