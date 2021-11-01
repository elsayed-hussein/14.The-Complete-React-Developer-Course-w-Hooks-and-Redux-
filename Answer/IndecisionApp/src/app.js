console.log("App.js is running!");

// JSX - JavaScript XML
var user = {
  name: "elsayed",
  age: 32,
  location: "Egypt",
};
var userName = "elsayed hussen elsayed";
var template = (
  <div>
    <h1>{userName}</h1>
    <p> This is some info</p>
    <ul>
      <li>{"Name : " + user.name}</li>
      <li>{"Age : " + user.age}</li>
      <li>{"Location : " + user.location}</li>
    </ul>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
