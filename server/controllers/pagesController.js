const express = require("express");
const pagesController = {};

pagesController.homePage = (req, res) => {
  res.send("<h1>It is working!</h1>");
};

pagesController.aboutPage = (req, res) => {
  res.send({ page: "About Page" });
};

pagesController.projectsPage = (req, res) => {
  res.send("<h1>Gallery</h1><div><img src='/img/vegeta.jpeg'/></div>");
};

module.exports = pagesController;
