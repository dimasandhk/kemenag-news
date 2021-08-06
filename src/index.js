const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

// API Main Route
app.use("/api", require("./routers/main"));

app.get(/.*/, (req, res) => {
	res.redirect("/api/news");
});

app.listen(PORT, () => console.log(`Up on port ${PORT}`));
