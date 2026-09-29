const fs = require("fs");
const env = {};
fs.readFileSync(".env.local", "utf8").split("\n").forEach(function (l) {
  const i = l.indexOf("=");
  if (i > 0) env[l.slice(0, i).trim()] = l.slice(i + 1).trim();
});
console.log("ENV_KEYS: " + Object.keys(env).join(", "));
const url = env.NEXT_PUBLIC_SUPABASE_URL || "";
const m = url.match(/https:\/\/([a-z0-9]+)\.supabase\.co/);
const ref = m ? m[1] : "";
console.log("PROJECT_REF: " + ref);
const pw = env.SUPABASE_DB_PASSWORD || env.POSTGRES_PASSWORD || "";
console.log("PW_PRESENT: " + (pw ? "yes" : "no"));
if (!ref || !pw) { console.log("MISSING_CREDENTIALS"); process.exit(2); }
let pg;
try { pg = require("pg"); } catch (e) { console.log("PG_MODULE_MISSING"); process.exit(3); }
const Client = pg.Client;
const sql = fs.readFileSync("supabase/migrations/20260929030000_create_waitlist.sql", "utf8");
const enc = encodeURIComponent(pw);
const regions = ["us-east-1", "us-west-1", "us-east-2", "us-west-2", "eu-central-1", "eu-west-1", "eu-west-2", "ap-southeast-1", "ap-south-1", "ap-northeast-1", "ca-central-1"];
const targets = ["postgresql://postgres:" + enc + "@db." + ref + ".supabase.co:5432/postgres"];
regions.forEach(function (r) {
  targets.push("postgresql://postgres." + ref + ":" + enc + "@aws-0-" + r + ".pooler.supabase.com:6543/postgres");
  targets.push("postgresql://postgres." + ref + ":" + enc + "@aws-1-" + r + ".pooler.supabase.com:6543/postgres");
});
(async function () {
  for (const cs of targets) {
    const label = cs.split("@")[1].split("/")[0];
    try {
      const c = new Client({ connectionString: cs, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 6000 });
      await c.connect();
      console.log("CONNECTED: " + label);
      await c.query(sql);
      const t = await c.query("select count(*)::int as n from public.waitlist");
      console.log("MIGRATION_APPLIED rows=" + t.rows[0].n);
      await c.end();
      process.exit(0);
    } catch (e) {
      console.log("FAIL(" + label + "): " + String(e.message).slice(0, 80));
    }
  }
  console.log("ALL_TARGETS_FAILED");
  process.exit(1);
})();
