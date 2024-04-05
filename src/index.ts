import { Hono } from "hono";
import { hoshino } from "./hoshino";
import { canvas } from "./canvas";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", hoshino);
app.route("/", canvas);

export default app;
