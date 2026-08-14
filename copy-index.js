import fs from "fs";
import path from "path";

const distPath = path.resolve("dist");

fs.copyFileSync(
  path.join(distPath, "index.html"),
  path.join(distPath, "404.html")
);

console.log("404");