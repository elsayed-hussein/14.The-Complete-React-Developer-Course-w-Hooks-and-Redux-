import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
  };
  handelDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };
  handelDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };
  handelPick = () => {
    alert(
      this.state.options[Math.floor(Math.random() * this.state.options.length)]
    );
  };
  handelAddOption = (option) => {
    if (!option) {
      return "Enter Valid value to Add";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
  componentDidMount = () => {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(e);
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  };
  render = () => {
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
  };
}

export default IndecisionApp;
