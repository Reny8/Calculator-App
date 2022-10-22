import "./App.css";
import React, { useState } from "react";
import Buttons from "./components/Buttons";
function App() {
  const [result, setResult] = useState(0);
  return (
    <div className="app">
      <input value={result} onChange={(e) => setResult(e.target.value)} />
      <hr/>
      <Buttons result={result} setResult={setResult} />
    </div>
  );
}

export default App;
