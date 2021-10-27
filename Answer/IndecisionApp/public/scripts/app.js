"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var user = {
  name: "elsayed",
  age: 32,
  location: "Egypt"
};
var userName = "elsayed hussen";
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName
  ),
  React.createElement(
    "p",
    null,
    " This is some info"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Name : " + user.name
    ),
    React.createElement(
      "li",
      null,
      "Age : " + user.age
    ),
    React.createElement(
      "li",
      null,
      "Location : " + user.location
    )
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
