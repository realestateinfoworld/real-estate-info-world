// Pings IndexNow (Bing, Yandex, Seznam, Naver) with every URL in the live
// sitemap so new and updated pages are recrawled within hours.
// Run after a production deploy: npm run indexnow
//
// The key below must match public/<key>.txt, which proves site ownership.

const KEY = "11a230958aceceac6f18b44d9c7192ea";
const SITE = "https://realestate-info.world";

const sitemap = await fetch(`${SITE}/sitemap.xml`).then((res) => {
  if (!res.ok) throw new Error(`Could not fetch sitemap: HTTP ${res.status}`);
  return res.text();
});
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
if (!res.ok && res.status !== 202) process.exit(1);
