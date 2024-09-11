import './UseState.css';
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={toggleTheme}>Toggle theme</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;
