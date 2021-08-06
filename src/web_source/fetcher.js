const axios = require("axios");

module.exports = class {
	static async getNews() {
		const RES = await axios.get("https://kemenag.go.id/");
		return RES.data;
	}
};
