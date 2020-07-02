const express = require("express");
const blogController = {};

blogController.index = (req, res) => {
  res.send("<h1>This is the blog page</div>");
};

module.exports = blogController;
