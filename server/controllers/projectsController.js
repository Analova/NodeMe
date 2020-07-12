const express = require("express");
const projectsConroller = {};

projectsConroller.index = (req, res) => {
  res.render("projects/index");
};

module.exports = projectsConroller;
