import React from "react";
const Buttons = (props) => {
  function Functionality(number) {
    if (props.result === '') {
      props.setResult(number);
    } else if (number === 'C') {
      props.setResult('');
    } else {
      props.setResult(`${props.result}${number}`);
    }
  }
  return (
    <div>
      <div className="row1">
        <button onClick={() => Functionality('C')}>C</button>
        <button>()</button>
        <button>%</button>
        <button>&divide;</button>
      </div>
      <div className="row2">
        <button onClick={() => Functionality(7)}>7</button>
        <button onClick={() => Functionality(8)}>8</button>
        <button onClick={() => Functionality(9)}>9</button>
        <button>&times;</button>
      </div>
      <div className="row3">
        <button onClick={() => Functionality(4)}>4</button>
        <button onClick={() => Functionality(5)}>5</button>
        <button onClick={() => Functionality(6)}>6</button>
        <button>&minus;</button>
      </div>
      <div className="row4">
        <button onClick={() => Functionality(1)}>1</button>
        <button onClick={() => Functionality(2)}>2</button>
        <button onClick={() => Functionality(3)}>3</button>
        <button>+</button>
      </div>
      <div className="row5">
        <button>+/-</button>
        <button onClick={() => Functionality(0)}>0</button>
        <button onClick={() => Functionality(".")}>.</button>
        <button>=</button>
      </div>
    </div>
  );
};

export default Buttons;
