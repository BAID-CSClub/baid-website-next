import lunr from "lunr";
import lunrStemmer from "lunr-languages/lunr.stemmer.support.js";
import lunrZh from "lunr-languages/lunr.zh.js";
import { existsSync } from "fs";
import fs from "fs/promises";
import { exit } from "process";

const { log } = console;
lunrStemmer(lunr);
lunrZh(lunr);

// Freeze API responses
let wagtail_base = process.env["WAGTAIL_BASE"] || "https://cms.beijing.academy";

if (!wagtail_base.endsWith("/")) {
	wagtail_base = wagtail_base + "/";
}

const locales = ["zh-CN", "en-US"];

if (existsSync("./data/")) {
	log("==> Seems like ./data already exists.");
	process.stdout.write(":: Remove and re-fetch it? [Y/n] ");
	const resp = await new Promise((resolve) =>
		process.stdin.on("data", (data) => {
			resolve(data.toString().trim().toLowerCase());
		}),
	);

	if (resp === "n") {
		log("==> If you want to skip this step, go `yarn vite` next time");
		exit(0);
	}

	await fs.rm("./data/", { recursive: true });
}
await fs.mkdir("./data");

// locales.forEach((l) => fs.mkdir("./data/" + l));

for (const locale of locales) {
	await fs.mkdir("./data/" + locale);
}

async function get(path) {
	const res = await fetch(wagtail_base + "api/v2/" + path);

	if (res.error) {
		console.error("Wagtail Error:", res.error);
		process.exit(1);
	}

	return await res.json();
}

function fullLang(lang) {
	return lang === "zh" ? "zh-CN" : "en-US";
}

log("== API Freeze");
log(" - wagtail_base: ", wagtail_base);
log(" - search backend: lunr");

const pages = await get("pages/");

log(" - total pages: ", pages.items.length);

// log(":: Processing Pages...");

const documents = {
	"zh-CN": [],
	"en-US": [],
};

let i = 0;
for (let page of pages.items) {
	i++;
	process.stdout.write(`\r:: Processing Pages... ${i}/${pages.items.length}`);
	if (page.meta.type === "base.Base" || page.meta.type === "news.NewsIndex") {
		continue;
	}

	page = await get("pages/" + page.id);

	if (page.meta.type === "news.News") {
		page.href =
			"/" +
			fullLang(page.meta.locale) +
			"/news/" +
			page.date.replaceAll("-", "/") +
			"/" +
			page.meta.slug;
		documents[fullLang(page.meta.locale)].push(page);

		await fs.writeFile(
			`./data/${fullLang(page.meta.locale)}/News-${page.meta.slug}.json`,
			JSON.stringify(page),
		);
	}

	await fs.writeFile(
		`./data/${fullLang(page.meta.locale)}/${page.meta.type.split(".")[1]}.json`,
		JSON.stringify(page),
	);
}

log("\n:: Building Search Index...");
for (const lang of locales) {
	const idx = lunr(function () {
		if (lang === "zh-CN") {
			this.use(lunr.zh);
		}
		this.ref("id");
		this.field("title");
		this.field("intro");
		this.field("body");
		// Href is not indexed but used for search result
		this.metadataWhitelist = ["position"];
		documents[lang].forEach(function (doc) {
			this.add(doc);
		}, this);
	});
	await fs.writeFile(`./data/${lang}/search.json`, JSON.stringify(idx));

	const db = documents[lang].reduce((acc, cur) => {
		// Remove body
		cur.body = undefined;
		acc[cur.id] = cur;
		return acc;
	}, {});
	await fs.writeFile(`./data/${lang}/db.json`, JSON.stringify(db));
}

log("Done.");
exit(0);
