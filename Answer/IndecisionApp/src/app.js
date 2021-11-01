console.log("App.js is running!");

// JSX - JavaScript XML
const user = {
  name: "elsayed hussen",
  age: 32,
  location: "Egypt",
  options: ["One", "Two"],
};
const title = "User's Data";
const subtitle = "This is The Options";
function getLocation(location) {
  if (location) {
    return <li>Location : {location}</li>;
  }
}
const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};
// start template
const template = (
  <div>
    <h1>{title}!</h1>
    <p> {subtitle}</p>
    {user.options.length > 0 && (
      <p>
        {user.options[0]}
        <br />
        {user.options[1]}
      </p>
    )}
    <ul>
      <li>{`Name : ${
        getFirstName(user.name) ? getFirstName(user.name) : "Anonymous !"
      }`}</li>
      {user.age && user.age >= 18 && <li>Age : {user.age} </li>}
      {getLocation(user.location)}
    </ul>
  </div>
);
// end template

// start render
const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
// end render
