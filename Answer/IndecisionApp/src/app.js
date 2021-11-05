const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision",
};
const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handelPick}>
        What Should I do ?
      </button>
    </div>
  );
};
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handelDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};
const Options = (props) => {
  return (
    <div>
      <h3>List Of {props.options.length} Items</h3>
      <button disabled={!props.hasOptions} onClick={props.handelDeleteOptions}>
        Remove All
      </button>
      {props.options.length === 0 && <p>Please Add an Option To Get Started</p>}
      {props.options.map((option) => {
        return (
          <Option
            key={option}
            optionText={option}
            handelDeleteOption={props.handelDeleteOption}
          />
        );
      })}
    </div>
  );
};
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
    this.setState(() => ({
      error,
    }));
    if (!error) {
      e.target.elements.option.value = "";
    }
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
    this.handelDeleteOption = this.handelDeleteOption.bind(this);
    this.handelPick = this.handelPick.bind(this);
    this.handelAddOption = this.handelAddOption.bind(this);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  handelDeleteOptions() {
    this.setState(() => ({
      options: [],
    }));
  }
  handelDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
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
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  render() {
    const subTitle = "put your life in the hand of a computer";
    return (
      <div>
        <Header subtitle={subTitle} />

        <Action
          handelPick={this.handelPick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          hasOptions={this.state.options.length > 0}
          handelDeleteOptions={this.handelDeleteOptions}
          handelDeleteOption={this.handelDeleteOption}
        />
        <AddOption handelAddOption={this.handelAddOption} />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
