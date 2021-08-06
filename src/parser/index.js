const cheerio = require("cheerio");
const source = require("../web_source/fetcher");

async function selector() {
	const $ = cheerio.load(await source.getNews());
	const collections = [];

	for (let i = 1; i <= 6; i++) {
		const newsRow = $(
			`.home_section1 .col-md-8 .row:nth-child(5) .col-md-6:nth-child(${i})`
		).html();
		collections.push(newsRow);
	}

	return collections;
}

async function serve() {
	const news = await selector();
	const LAST_RESULT = [];

	news.forEach((html) => {
		const $ = cheerio.load(html);
		LAST_RESULT.push({
			img: $("img").attr("src"),
			type: $("strong").text(),
			title: $(".entry-title a").text(),
			date: $(".post-date").text()
		});
	});

	return LAST_RESULT;
}

module.exports = serve;
