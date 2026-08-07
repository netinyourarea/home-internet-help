import fs from "fs";
import path from "path";

const routes = [
  "internet",
  "cable-tv",
  "contact",
  "privacy-policy",
  "terms",
  "refund-policy",
  "disclaimer",
];

const distDir = path.resolve("dist");
const indexHtmlPath = path.join(distDir, "index.html");

if (fs.existsSync(indexHtmlPath)) {
  const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  routes.forEach((route) => {
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, "index.html"), indexHtml);
    console.log(`Generated static route fallback for /${route}`);
  });
} else {
  console.warn("dist/index.html not found, skipping postbuild route generation.");
}
