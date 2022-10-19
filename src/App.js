import "./App.css";
import React, { useState } from "react";
import Buttons from "./components/Buttons";
function App() {
  const [result, setResult] = useState('');
  return (
    <div className="app">
      <input value={result} />
      <Buttons result={result} setResult={setResult} />
    </div>
  );
}

export default App;
