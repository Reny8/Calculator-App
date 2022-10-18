import "./App.css";
import React, { useState } from "react";
import Buttons from "./components/Buttons";
function App() {
  const [result, setResult] = useState(0);
  return (
    <div className="app">
      <input value={result} />
      <Buttons />
    </div>
  );
}

export default App;
