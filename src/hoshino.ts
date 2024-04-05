import { Hono } from "hono";
import { findAllMatchSync } from "hoshino";

export const hoshino = new Hono().basePath("/hoshino").get("/", async (c) => {
  const haystack = await Bun.file(
    import.meta.dir + "/files/mandarin.txt"
  ).text();
  const patterns = [
    "爱迪生也一样，也有梦想，他的梦想就是当一名发明家，可是他是怎么成功的呢？",
  ];

  console.time("findAllMatchSync Execution Time");
  const matches = findAllMatchSync({ patterns, haystack });
  console.timeEnd("findAllMatchSync Execution Time");

  return c.json(matches);
});
