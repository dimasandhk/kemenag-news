const route = require("express").Router();
const rateLimit = require("express-rate-limit");

const newsInfo = require("../parser/index");

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100
});

route.get("/news", apiLimiter, async (req, res) => {
	res.send(await newsInfo());
});

module.exports = route;
