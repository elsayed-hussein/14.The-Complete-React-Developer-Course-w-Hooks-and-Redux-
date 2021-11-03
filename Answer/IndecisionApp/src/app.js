console.log("App.js is running!");

// JSX - JavaScript XML
const user = {
  name: "elsayed hussen",
  age: 32,
  location: "Egypt",
  options: [],
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
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    user.options.push(option);
    e.target.elements.option.value = "";
  }
  renderApp();
};

const renderApp = () => {
  // start template
  const template = (
    <div>
      <h1>{title}!</h1>
      <p> {subtitle}</p>
      <p>{user.options.length}</p>
      <ul>
        <li>{`Name : ${
          getFirstName(user.name) ? getFirstName(user.name) : "Anonymous !"
        }`}</li>
        {user.age && user.age >= 18 && <li>Age : {user.age} </li>}
        {getLocation(user.location)}
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  // end template
  ReactDOM.render(template, appRoot);
};

// start render
const appRoot = document.getElementById("app");
renderApp();
// end render
