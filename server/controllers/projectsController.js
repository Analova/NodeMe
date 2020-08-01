const express = require("express");

const projectsConroller = {};

projectsConroller.index = (req, res) => {
  const projects = [
    {
      title: "Blog",
      tags: ["html", "css", "javascript", "php"],
      date: "12/3/19",
      img:
        "https://www.hallaminternet.com/wp-content/uploads/2020/01/Is-blogging-relevant-anymore.jpeg",
    },
    {
      title: "Mobile App",
      tags: ["IOS", "Swift"],
      date: "12/3/19",
      img:
        "https://th.bing.com/th/id/OIP.ixK0XI37W6Yah5nwfqlZFAHaEK?w=278&h=180&c=7&o=5&pid=1.7",
    },
    {
      title: "Blue Landing Page",
      tags: ["css", "javascript", "Ruby on Rails"],
      date: "12/3/19",
      img:
        "https://i.pinimg.com/564x/44/ec/5f/44ec5f405f552554ecb012d55753dbde.jpg",
    },
    {
      title: "Restaurant",
      tags: ["sass", "javascript", "pyton"],
      date: "12/3/19",
      img:
        "https://th.bing.com/th/id/OIP.AFvhjAtUsIlRVe0gPWS0mwHaE8?w=272&h=181&c=7&o=5&pid=1.7",
    },
    {
      title: "Online Shopping",
      tags: ["html", "css", "C++"],
      date: "12/3/19",
      img:
        "https://www.e-commerce-magazin.de/wp-content/uploads/sites/2/Onlineshopping_Stokkete_Shutterstock_252720625-758x506.jpg",
    },
  ];
  res.render("projects/index", {
    projects: projects,
  });
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
