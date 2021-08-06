const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

// API Main Route
app.use("/api", require("./routers/main"));

app.listen(PORT, () => console.log(`Up on port ${PORT}`));
