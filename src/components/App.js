import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [currentValue, setCurrentValue] = useState("");

  // Asynchronous sum calculation
  useEffect(() => {
    let handle = setTimeout(() => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    }, 0); // async so UI doesn't freeze

    return () => clearTimeout(handle);
  }, [numbers]);

  const handleInput = (e) => {
    const value = e.target.value;
    setCurrentValue(value);

    if (value.trim() === "") return;

    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setNumbers((prev) => [...prev, num]);
    }
  };

  return (
    <div id="main" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={currentValue}
        onChange={handleInput}
        placeholder="Enter a number"
        style={{ padding: "5px", width: "200px", fontSize: "16px" }}
      />

      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default App;
