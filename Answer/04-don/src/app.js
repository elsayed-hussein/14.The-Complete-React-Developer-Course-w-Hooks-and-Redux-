console.log("App.js is running!");

// JSX - JavaScript XML
const user = {
  name: "elsayed hussen",
  age: 32,
  location: "Egypt",
  options: [],
};
const title = "User's Data";
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
const removeAll = () => {
  user.options = [];
  renderApp();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * user.options.length);
  const option = user.options[randomNum];
  alert(option);
};
let visibility = false;
const toggleVisibility = () => {
  console.log(visibility);
  visibility = !visibility;
  renderApp();
};
const renderApp = () => {
  // start template
  const template = (
    <div>
      {visibility && (
        <ul>
          <li>{`Name : ${
            getFirstName(user.name) ? getFirstName(user.name) : "Anonymous !"
          }`}</li>
          {user.age && user.age >= 18 && <li>Age : {user.age} </li>}
          {getLocation(user.location)}
        </ul>
      )}

      <button onClick={toggleVisibility}>
        {visibility ? "hide data" : "show data"}
      </button>
      <h1>{title}!</h1>

      <p>
        {user.options.length > 0
          ? "This is The Options"
          : "There is no Options"}
      </p>
      <ul>
        {user.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ul>

      <p>{user.options.length}</p>
      <button disabled={user.options.length === 0} onClick={onMakeDecision}>
        What can i do !
      </button>

      <button disabled={user.options.length === 0} onClick={removeAll}>
        Remove All
      </button>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  // end template
  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

// start render
renderApp();
// end render
