import React from "react";
const Buttons = (props) => {
  return (
    <div>
      <div className="row1">
        <button>C</button>
        <button>()</button>
        <button>%</button>
        <button>&divide;</button>
      </div>
      <div className="row2">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>&times;</button>
      </div>
      <div className="row3">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>&minus;</button>
      </div>
      <div className="row4">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div className="row5">
        <button>+/-</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
};

export default Buttons;
