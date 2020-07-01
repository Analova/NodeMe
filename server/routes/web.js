const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>It is working!</h1>");
});

router.get("/about", (req, res) => {
  res.send({ page: "About Page" });
});

router.get("/gallery", (req, res) => {
  res.send("<h1>Gallery</h1><div><img src='/img/vegeta.jpeg'/></div>");
});

module.exports = router;
