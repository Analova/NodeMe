const express = require("express");
const projectsConroller = {};

projectsConroller.index = (req, res) => {
  res.render("projects/index");
};

projectsConroller.create = (req, res) => {
  res.render("projects/index");
};

projectsConroller.store = (req, res) => {
  res.render("projects/index");
};

projectsConroller.show = (req, res) => {
  res.render("projects/index");
};

projectsConroller.edit = (req, res) => {
  res.render("projects/index");
};
projectsConroller.update = (req, res) => {
  res.render("projects/index");
};

projectsConroller.destroy = (req, res) => {
  res.render("projects/index");
};

module.exports = projectsConroller;
