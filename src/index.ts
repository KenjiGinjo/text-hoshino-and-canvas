import { Hono } from "hono";
import { hoshino } from "./hoshino";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", hoshino);

export default app;
