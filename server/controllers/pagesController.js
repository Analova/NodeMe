const express = require("express");
const pagesController = {};

pagesController.homePage = (req, res) => {
  res.render("pages/home");
};

pagesController.aboutPage = (req, res) => {
  res.render("pages/about");
};

// pagesController.projectsPage = (req, res) => {
//   res.send("<h1>Gallery</h1><div><img src='/img/vegeta.jpeg'/></div>");
// };

module.exports = pagesController;
