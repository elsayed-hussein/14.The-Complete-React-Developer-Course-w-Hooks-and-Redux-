"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var user = {
  name: "elsayed hussen",
  age: 32,
  location: "Egypt",
  options: []
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
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    user.options.push(option);
    e.target.elements.option.value = "";
  }
  renderApp();
};

var renderApp = function renderApp() {
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
    React.createElement(
      "p",
      null,
      user.options.length
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
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  // end template
  ReactDOM.render(template, appRoot);
};

// start render
var appRoot = document.getElementById("app");
renderApp();
// end render
