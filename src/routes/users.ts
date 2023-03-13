import { Router } from "deps";

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
