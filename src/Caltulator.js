import React, { useState } from "react";
export default function Caltulator() {

  const [value, setValue] = useState("");
  const [memory, setMemory] = useState("");
  const [operator, setOperator] = useState(null);

  const onClickButton = (val) => {
    if(!value){
      setValue('')
    }
    
    setValue(value + val);

    if (val === "C") {
      setValue("");
      setMemory("");
      setOperator(null);
    }

    // +
    if (val === "+") {
      if(!value){
        setValue('')
      }
      setMemory(value);
      if (operator === "+") {
        setMemory((parseFloat(value) + parseFloat(memory)).toString());
      }
      if (operator === "-") {
        setMemory(parseFloat(memory) - parseFloat(value).toString());
      }
      if (operator === "*") {
        setMemory((parseFloat(value) * parseFloat(memory)).toString());
      }
      if (operator === "/") {
        setMemory(parseFloat(memory) / parseFloat(value).toString());
      }
      setValue("");
      setOperator("+");
    }

    // -
    if (val === "-") {
      if(!value){
        setValue('')
      }
      setMemory(value);
      if (operator === "+") {
        setMemory((parseFloat(value) + parseFloat(memory)).toString());
      }
      if (operator === "-") {
        setMemory(parseFloat(memory) - parseFloat(value).toString());
      }
      if (operator === "*") {
        setMemory((parseFloat(value) * parseFloat(memory)).toString());
      }
      if (operator === "/") {
        setMemory(parseFloat(memory) / parseFloat(value).toString());
      }
      setValue("");
      setOperator("-");
    }

    // *
    if (val === "*") {
      if(!value){
        setValue('')
      }
      setMemory(value);
      if (operator === "+") {
        setMemory((parseFloat(value) + parseFloat(memory)).toString());
      }
      if (operator === "-") {
        setMemory(parseFloat(memory) - parseFloat(value).toString());
      }
      if (operator === "*") {
        setMemory((parseFloat(value) * parseFloat(memory)).toString());
      }
      if (operator === "/") {
        setMemory(parseFloat(memory) / parseFloat(value).toString());
      }
      setValue("");
      setOperator("*");
    }

    // /
    if (val === "/") {
      if(!value){
        setValue('')
      }
      setMemory(value);
      if (operator === "+") {
        setMemory((parseFloat(value) + parseFloat(memory)).toString());
      }
      if (operator === "-") {
        setMemory(parseFloat(memory) - parseFloat(value).toString());
      }
      if (operator === "*") {
        setMemory((parseFloat(value) * parseFloat(memory)).toString());
      }
      if (operator === "/") {
        setMemory(parseFloat(memory) / parseFloat(value).toString());
      }
      setValue("");
      setOperator("/");
    }

    // =
    if (val === "=") {
      debugger
      if (!operator || (operator && !value)) {
        setValue("")
        return
      }

      if (operator === "+") {
        setValue((parseFloat(value) + parseFloat(memory)).toString());
      }
      if (operator === "-") {
        let sub = (parseFloat(memory) - parseFloat(value)).toString();
        setValue(sub);
      }
      if (operator === "*") {
        let mult = (parseFloat(memory) * parseFloat(value)).toString();
        setValue(mult);
      }
      if (operator === "/") {
        let div = (parseFloat(memory) / parseFloat(value)).toString();
        setValue(div);
      }
      
    }
  };
  return (
    <div className="cal-container">
      <div className="cal-buttons">
        <input
          className="input-number"
          value={value}
          type="text"
          placeholder="0"
        ></input>
        <div className="button-container">
          <button className="buttons button-1" onClick={() => onClickButton(7)}>
            7
          </button>
          <button className="buttons button-2" onClick={() => onClickButton(8)}>
            8
          </button>
          <button className="buttons button-3" onClick={() => onClickButton(9)}>
            9
          </button>
          <button
            className="buttons button-4"
            onClick={() => onClickButton("/")}
          >
            /
          </button>
          <button className="buttons button-5" onClick={() => onClickButton(4)}>
            4
          </button>
          <button className="buttons button-6" onClick={() => onClickButton(5)}>
            5
          </button>
          <button className="buttons button-7" onClick={() => onClickButton(6)}>
            6
          </button>
          <button
            className="buttons button-8"
            onClick={() => onClickButton("*")}
          >
            *
          </button>
          <button className="buttons button-9" onClick={() => onClickButton(1)}>
            1
          </button>
          <button
            className="buttons button-10"
            onClick={() => onClickButton(2)}
          >
            2
          </button>
          <button
            className="buttons button-11"
            onClick={() => onClickButton(3)}
          >
            3
          </button>
          <button
            className="buttons button-12"
            onClick={() => onClickButton("-")}
          >
            -
          </button>
          <button
            className="buttons button-13"
            onClick={() => onClickButton(".")}
          >
            .
          </button>
          <button
            className="buttons button-14"
            onClick={() => onClickButton(0)}
          >
            0
          </button>
          <button
            className="buttons button-15"
            onClick={() => onClickButton("C")}
          >
            C
          </button>
          <button
            className="buttons button-16"
            onClick={() => onClickButton("+")}
          >
            +
          </button>
          <button
            className="buttons button-17"
            onClick={() => onClickButton("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
