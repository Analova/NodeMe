const express = require("express");
const projectsConroller = {};

projectsConroller.index = (req, res) => {
  res.send("<h1>Project</h1><div><img src='/img/vegeta.jpeg'/></div>");
};

module.exports = projectsConroller;
