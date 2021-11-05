"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};
Header.defaultProps = {
  title: "Indecision"
};
var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handelPick },
      "What Should I do ?"
    )
  );
};
var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handelDeleteOption(props.optionText);
        }
      },
      "Remove"
    )
  );
};
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      "Number Of Items : ",
      props.options.length,
      " ."
    ),
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handelDeleteOptions },
      "Remove All"
    ),
    props.options.length === 0 && React.createElement(
      "p",
      null,
      "Please Add an Option To Get Started"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handelDeleteOption: props.handelDeleteOption
      });
    })
  );
};

var AddOption = function (_React$Component) {
  _inherits(AddOption, _React$Component);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handelAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
  _inherits(IndecisionApp, _React$Component2);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this2.handelDeleteOptions = _this2.handelDeleteOptions.bind(_this2);
    _this2.handelDeleteOption = _this2.handelDeleteOption.bind(_this2);
    _this2.handelPick = _this2.handelPick.bind(_this2);
    _this2.handelAddOption = _this2.handelAddOption.bind(_this2);
    _this2.state = {
      options: []
    };
    return _this2;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "handelDeleteOptions",
    value: function handelDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handelDeleteOption",
    value: function handelDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handelPick",
    value: function handelPick() {
      alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }
  }, {
    key: "handelAddOption",
    value: function handelAddOption(option) {
      if (!option) {
        return "Enter Valid value to Add";
      } else if (this.state.options.indexOf(option) > -1) {
        return "this option already exists";
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subTitle = "put your life in the hand of a computer";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subTitle }),
        React.createElement(Action, {
          handelPick: this.handelPick,
          hasOptions: this.state.options.length > 0
        }),
        React.createElement(Options, {
          options: this.state.options,
          hasOptions: this.state.options.length > 0,
          handelDeleteOptions: this.handelDeleteOptions,
          handelDeleteOption: this.handelDeleteOption
        }),
        React.createElement(AddOption, { handelAddOption: this.handelAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
