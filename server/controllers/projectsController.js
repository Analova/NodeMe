const express = require("express");

const projectsConroller = {};

projectsConroller.index = (req, res) => {
  res.render("projects/index");
};

projectsConroller.create = (req, res) => {
  res.render("projects/create");
};

projectsConroller.store = (req, res) => {
  res.send({
    saved: true,
  });
};

projectsConroller.show = (req, res) => {
  res.render("projects/show");
};

projectsConroller.edit = (req, res) => {
  res.render("projects/edit");
};
projectsConroller.update = (req, res) => {
  res.send({
    updated: true,
  });
};

projectsConroller.destroy = (req, res) => {
  res.send({
    deleted: true,
  });
};

module.exports = projectsConroller;
