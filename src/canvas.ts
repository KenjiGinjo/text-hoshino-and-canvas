import { Hono } from "hono";
import { createCanvas } from "@napi-rs/canvas";

function generateCaptchaText(length = 6) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const canvas = new Hono().basePath("/canvas").get("/", async (c) => {
  console.time("Execution Time");
  const canvasWidth = 200;
  const canvasHeight = 50;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctx.font = "30px Arial";
  ctx.fillStyle = "#333";

  const captchaText = generateCaptchaText();

  ctx.fillText(captchaText, 50, 35);

  const pngData = await canvas.encode("png");
  const arrayBuffer = pngData.buffer.slice(
    pngData.byteOffset,
    pngData.byteOffset + pngData.byteLength
  ) as ArrayBuffer;

  console.timeEnd("Execution Time");
  return c.body(arrayBuffer, 200, {
    "Content-Type": "image/png",
  });
});
