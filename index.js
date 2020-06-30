const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.send("<h1>It is working!</h1>");
});

app.get("/about", (req, res) => {
  res.send({ page: "About Page" });
});

app.get("/gallery", (req, res) => {
  res.send("<h1>Gallery</h1><div><img src='/img/vegeta.jpeg'/></div>");
});

app.listen(port, () => console.log(`Surver is running on port ${port}`));
