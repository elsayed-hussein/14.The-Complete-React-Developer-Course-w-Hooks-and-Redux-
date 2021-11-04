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
var removeAll = function removeAll() {
  user.options = [];
  renderApp();
};
var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * user.options.length);
  var option = user.options[randomNum];
  alert(option);
};
var visibility = false;
var toggleVisibility = function toggleVisibility() {
  console.log(visibility);
  visibility = !visibility;
  renderApp();
};
var renderApp = function renderApp() {
  // start template
  var template = React.createElement(
    "div",
    null,
    visibility && React.createElement(
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
      "button",
      { onClick: toggleVisibility },
      visibility ? "hide data" : "show data"
    ),
    React.createElement(
      "h1",
      null,
      title,
      "!"
    ),
    React.createElement(
      "p",
      null,
      user.options.length > 0 ? "This is The Options" : "There is no Options"
    ),
    React.createElement(
      "ul",
      null,
      user.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "p",
      null,
      user.options.length
    ),
    React.createElement(
      "button",
      { disabled: user.options.length === 0, onClick: onMakeDecision },
      "What can i do !"
    ),
    React.createElement(
      "button",
      { disabled: user.options.length === 0, onClick: removeAll },
      "Remove All"
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
  var appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

// start render
renderApp();
// end render
