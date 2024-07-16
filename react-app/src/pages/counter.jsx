import { useEffect, useRef, useState } from "react";
import Button from "../componenets/Button";
export default function Counter() {
 
  const [state, setState] = useState(0);
  const handleInc = () => {
    setState(state + 1);
    console.log(state)
  };

  const inputRef=useRef();
  console.log(inputRef.current)

  const handleDec = () => {
    setState(state - 1);
    console.log(state)
  };
  useEffect(() => {
    console.log(state, "this is the callback function");

    return () => console.log("Cleanup");
  }, [state]);

  return (
    <div>
       <input ref={inputRef}/>
       <Button onClick={handleInc} label="+" />             {/*since multiple elements are there wrap in a parent div*/}
      {/* <Button onClick={handleClick} label="+" /> */}
      <Button onClick={handleDec} label="-" />
      <Button onClick={()=>{
        inputRef.current.focus();
      }} label="Click Me"/>
      <div>{state}</div>
    </div>
  );
}
