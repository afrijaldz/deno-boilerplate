import { Context } from "deps";

// const { DATA_API_KEY, APP_ID } = config();

// const BASE_URI = `https://ap-southeast-1.aws.data.mongodb-api.com/app/${APP_ID}/endpoint/data/v1`;
// const DATA_SOURCE = "Cluster0";
// const DATABASE = "todo_db";
// const COLLECTION = "todos";

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "api-key": DATA_API_KEY,
//   },
//   body: "",
// };

// const addTodo = async (ctx) => {
//   try {
//     if (!ctx.request)
//   } catch (error) {

//   }
// }

export const addTodo = (ctx: Context) => {
  ctx.response.body = "mengapa";
};

export const getAll = (ctx: Context) => {
  ctx.response.body = "mengapa";
};
