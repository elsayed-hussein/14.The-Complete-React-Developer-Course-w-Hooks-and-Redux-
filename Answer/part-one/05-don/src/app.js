class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handelPick}
        >
          What Should I do ?
        </button>
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        <h3>List Of {this.props.options.length} Items</h3>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handelDeleteOptions}
        >
          Remove All
        </button>
        {this.props.options.map((option) => {
          return <Option key={option} optionText={option} />;
        })}
      </div>
    );
  }
}
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handelAddOption(option);
    this.setState(() => {
      return {
        error,
      };
    });
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
    this.handelPick = this.handelPick.bind(this);
    this.handelAddOption = this.handelAddOption.bind(this);
    this.state = {
      options: [],
    };
  }
  handelDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handelPick() {
    alert(
      this.state.options[Math.floor(Math.random() * this.state.options.length)]
    );
  }
  handelAddOption(option) {
    if (!option) {
      return "Enter Valid value to Add";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }
  render() {
    const title = "Indecision App";
    const subTitle = "put your life in the hand of a computer";
    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <Action
          handelPick={this.handelPick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          hasOptions={this.state.options.length > 0}
          handelDeleteOptions={this.handelDeleteOptions}
        />
        <AddOption handelAddOption={this.handelAddOption} />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
