/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const SITE = "https://socialkirin.com";
const PAGES_DIR = "src/pages";
const SITEMAP = "public/sitemap.xml";

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.tsx$/.test(entry.name)) out.push(full);
  }
  return out;
}

function routeOf(file) {
  let r = file.slice(PAGES_DIR.length).replace(/\.tsx$/, "");
  if (r.endsWith("/index")) r = r.slice(0, -6);
  return r === "" || r === "/" ? "/" : r;
}

function propOf(block, name) {
  const re = new RegExp(name + '="([^"]*)"');
  const m = block.match(re);
  return m ? m[1] : null;
}

const files = walk(PAGES_DIR, []).filter(
  (f) => !f.includes("/api/") && !f.includes("/_")
);

const rows = [];
for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const route = routeOf(file);
  const seo = src.match(/<SEO\b[\s\S]{0,800}?\/>/);
  const title = seo ? propOf(seo[0], "title") : null;
  const desc = seo ? propOf(seo[0], "description") : null;
  rows.push({
    file: file.replace("src/pages", ""),
    route,
    title,
    desc,
    titleLen: title ? title.length : 0,
    descLen: desc ? desc.length : 0,
    noindex: /noindex/.test(src),
    dynamic: /\[/.test(route),
  });
}

console.log("=== TOTAL PAGE FILES: " + rows.length + " ===");

console.log("\n=== MISSING SEO TAG ===");
rows.filter((r) => !r.title).forEach((r) => console.log("  " + r.route + "  (" + r.file + ")"));

console.log("\n=== TITLE TOO LONG (>60) OR SHORT (<40) ===");
rows
  .filter((r) => r.title && (r.titleLen > 60 || r.titleLen < 40))
  .sort((a, b) => b.titleLen - a.titleLen)
  .forEach((r) => console.log("  " + r.titleLen + "  " + r.route + "  |  " + r.title));

console.log("\n=== DESCRIPTION TOO LONG (>158) OR SHORT (<110) ===");
rows
  .filter((r) => r.desc && (r.descLen > 158 || r.descLen < 110))
  .sort((a, b) => b.descLen - a.descLen)
  .forEach((r) => console.log("  " + r.descLen + "  " + r.route));

const titleMap = {};
rows.forEach((r) => {
  if (!r.title) return;
  titleMap[r.title] = titleMap[r.title] || [];
  titleMap[r.title].push(r.route);
});
console.log("\n=== DUPLICATE TITLES ===");
Object.keys(titleMap)
  .filter((k) => titleMap[k].length > 1)
  .forEach((k) => console.log("  " + titleMap[k].join(", ") + "  |  " + k));

const descMap = {};
rows.forEach((r) => {
  if (!r.desc) return;
  descMap[r.desc] = descMap[r.desc] || [];
  descMap[r.desc].push(r.route);
});
console.log("\n=== DUPLICATE DESCRIPTIONS ===");
Object.keys(descMap)
  .filter((k) => descMap[k].length > 1)
  .forEach((k) => console.log("  " + descMap[k].join(", ")));

const sitemap = fs.readFileSync(SITEMAP, "utf8");
const locs = (sitemap.match(/<loc>([^<]+)<\/loc>/g) || []).map((l) =>
  l.replace(/<\/?loc>/g, "").replace(SITE, "")
);
const locSet = new Set(locs.map((l) => (l === "" ? "/" : l)));

const staticRoutes = rows.filter((r) => !r.dynamic && !r.noindex).map((r) => r.route);

console.log("\n=== STATIC ROUTES MISSING FROM SITEMAP ===");
staticRoutes
  .filter((r) => !locSet.has(r))
  .sort()
  .forEach((r) => console.log("  " + r));

console.log("\n=== SITEMAP URLS WITH NO STATIC PAGE FILE ===");
const staticSet = new Set(staticRoutes);
locs
  .filter((l) => l !== "/" && !staticSet.has(l))
  .sort()
  .forEach((l) => console.log("  " + l));

console.log("\n=== SITEMAP TOTAL URLS: " + locs.length + " ===");
console.log("=== STATIC INDEXABLE ROUTES: " + staticRoutes.length + " ===");