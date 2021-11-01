"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var user = {
  name: "elsayed hussen",
  age: 32,
  location: "Egypt",
  options: ["One", "Two"]
};
var title = "User's Data";
var subtitle = "This is The Options";
function getLocation(location) {
  if (location) {
    return React.createElement(
      "li",
      null,
      "Location : ",
      location
    );
  }
}
var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};
// start template
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    title,
    "!"
  ),
  React.createElement(
    "p",
    null,
    " ",
    subtitle
  ),
  user.options.length > 0 && React.createElement(
    "p",
    null,
    user.options[0],
    React.createElement("br", null),
    user.options[1]
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Name : " + (getFirstName(user.name) ? getFirstName(user.name) : "Anonymous !")
    ),
    user.age && user.age >= 18 && React.createElement(
      "li",
      null,
      "Age : ",
      user.age,
      " "
    ),
    getLocation(user.location)
  )
);
// end template

// start render
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
// end render
