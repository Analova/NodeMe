const express = require("express");
const app = express();
const webRoutes = require("./routes/web.js");
const port = 3000;
app.use(express.static("client/public"));

app.use(webRoutes);

app.listen(port, () => console.log(`Surver is running on port ${port}`));
