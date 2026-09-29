import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const SITE = process.cwd();

async function main() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error("Missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const rows = JSON.parse(
    readFileSync(join(SITE, "data", "comments.json"), "utf8"),
  );

  if (!Array.isArray(rows) || rows.length === 0) {
    console.error("data/comments.json is empty");
    process.exit(1);
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase
    .from("comments")
    .upsert(rows, { onConflict: "platform,author_handle,body" })
    .select("id");

  if (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }

  const { count } = await supabase
    .from("comments")
    .select("id", { count: "exact", head: true });

  console.log("Upserted " + (data?.length ?? 0) + " rows. Bank now holds " + count + " comments.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});