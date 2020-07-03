const express = require("express");
const app = express();
const webRoutes = require("./routes/web.js");
const port = 3000;
const pug = require("pug");
const path = require("path");

app.use(express.static("client/public"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../client/src/views"));

app.use(webRoutes);

app.listen(port, () => console.log(`Surver is running on port ${port}`));
