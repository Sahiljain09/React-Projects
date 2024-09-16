import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(15);
  // let counter = 15;

  const addvalue = () => {
    // counter = counter + 1;
    if(counter < 20) setcounter(counter + 1);
    // console.log("Value added:", counter);
  };
  const removevalue = () => {
    // counter = counter - 1;
    if(counter > 0) setcounter(counter - 1);
    // console.log("Value added:", counter);
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter} </h2>
      <button onClick={addvalue}>add value: {counter}</button>
      <br />
      <button onClick={removevalue}>remove value: {counter}</button>
    </>
  );
}

export default App;
