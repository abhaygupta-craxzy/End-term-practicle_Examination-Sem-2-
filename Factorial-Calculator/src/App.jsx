import "./App.css";

import { useState } from "react";

function Factorial() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const Factorial = () => {
    let n = Number(number);
    let fact = 1;
    if(n < 0 ) {
      setResult("Factorial is not defined!");
      return result;
    }

    for (let i = 1; i <= n; i++) {
      fact *= i;
    }

    setResult(fact);
  };

  return (
    <div>
      
      <h2>Factorial Calculator</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={Factorial}>
        Calculate
      </button>

      <h3>Factorial: {result}</h3>
     
    </div>
  );
}

export default Factorial;