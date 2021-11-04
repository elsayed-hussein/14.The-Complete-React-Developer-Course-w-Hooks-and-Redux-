class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>put your life in the hand of a computer</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    return <div>options Component here</div>;
  }
}
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);
