import React, { useState } from "react";
import "../App.css"
const Buttons = (props) => {
  function HandleClick(value) {
    if (value === "C") {
      props.setResult(0);
    } else if (props.result === 0) {
      props.setResult(value);
    } else {
      props.setResult(`${props.result}${value}`);
    }
  }
  function solveProblem() {
    try {
      let answer = eval(props.result);
      if (answer) {
        props.setResult(answer);
      } else {
        return (answer = 0);
      }
      return answer;
    } catch (error) {
      props.setResult(0);
      return 0;
    }
  }

  function convertToPercent() {
    let solve = solveProblem();
    let final = solve / 100;
    props.setResult(final);
  }
  return (
    <div className="buttons-container">
      <div>
        <button onClick={() => HandleClick("C")}>C</button>
        <button onClick={() => HandleClick(" ( ")}>(</button>
        <button onClick={() => HandleClick(" ) ")}>)</button>
        <button onClick={() => HandleClick(" / ")}>&divide;</button>
      </div>
      <div>
        <button onClick={() => HandleClick(7)}>7</button>
        <button onClick={() => HandleClick(8)}>8</button>
        <button onClick={() => HandleClick(9)}>9</button>
        <button onClick={() => HandleClick(" * ")}>&times;</button>
      </div>
      <div>
        <button onClick={() => HandleClick(4)}>4</button>
        <button onClick={() => HandleClick(5)}>5</button>
        <button onClick={() => HandleClick(6)}>6</button>
        <button onClick={() => HandleClick(" - ")}>&minus;</button>
      </div>
      <div>
        <button onClick={() => HandleClick(1)}>1</button>
        <button onClick={() => HandleClick(2)}>2</button>
        <button onClick={() => HandleClick(3)}>3</button>
        <button onClick={() => HandleClick(" + ")}>+</button>
      </div>
      <div>
        <button onClick={() => convertToPercent()}>%</button>
        <button onClick={() => HandleClick(0)}>0</button>
        <button onClick={() => HandleClick(".")}>.</button>
        <button onClick={() => solveProblem()}>=</button>
      </div>
    </div>
  );
};

export default Buttons;
