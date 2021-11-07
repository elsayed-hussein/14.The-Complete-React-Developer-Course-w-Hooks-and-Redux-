import React from "react";
import Option from "./Option";

const Options = (props) => {
    return (
      <div>
        <h3>Number Of Items : {props.options.length} .</h3>
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
  

export default Options;
