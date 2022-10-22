import React, { useState } from "react";
import "../App.css";
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
        <button style={{ color: "#B40101" }} onClick={() => HandleClick("C")}>
          C
        </button>
        <button className="operators" onClick={() => HandleClick(" ( ")}>
          (
        </button>
        <button className="operators" onClick={() => HandleClick(" ) ")}>
          )
        </button>
        <button className="operators" onClick={() => HandleClick(" / ")}>
          &divide;
        </button>
      </div>
      <div>
        <button className="numbers" onClick={() => HandleClick(7)}>
          7
        </button>
        <button className="numbers" onClick={() => HandleClick(8)}>
          8
        </button>
        <button className="numbers" onClick={() => HandleClick(9)}>
          9
        </button>
        <button className="operators" onClick={() => HandleClick(" * ")}>
          &times;
        </button>
      </div>
      <div>
        <button className="numbers" onClick={() => HandleClick(4)}>
          4
        </button>
        <button className="numbers" onClick={() => HandleClick(5)}>
          5
        </button>
        <button className="numbers" onClick={() => HandleClick(6)}>
          6
        </button>
        <button className="operators" onClick={() => HandleClick(" - ")}>
          &minus;
        </button>
      </div>
      <div>
        <button className="numbers" onClick={() => HandleClick(1)}>
          1
        </button>
        <button className="numbers" onClick={() => HandleClick(2)}>
          2
        </button>
        <button className="numbers" onClick={() => HandleClick(3)}>
          3
        </button>
        <button className="operators" onClick={() => HandleClick(" + ")}>
          +
        </button>
      </div>
      <div>
        <button className="operators" onClick={() => convertToPercent()}>
          %
        </button>
        <button className="numbers" onClick={() => HandleClick(0)}>
          0
        </button>
        <button className="operators" onClick={() => HandleClick(".")}>
          .
        </button>
        <button
          style={{ backgroundColor: "#FFB913", color: "#707070" }}
          onClick={() => solveProblem()}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Buttons;
