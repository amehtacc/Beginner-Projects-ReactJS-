import React, { useState } from "react";

function App() {
  const [value, setValue] = useState('')
  const character = [
    "C",
    "%",
    "Del",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  function handleBtn(inputValue) {
    
    if(inputValue === 'Del') {
      setValue(value.slice(0,-1))
      return
    }
    else if(inputValue === 'C') {
      setValue('')
      return
    }
    else if(inputValue === '='){
      try {
        setValue(eval(value))
      } catch (error) {
        setValue("Error")
      }
    }
    setValue((prevValue) => prevValue + inputValue)
    
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-">
      <div className="w-full max-w-sm mx-auto flex flex-wrap justify-center border border-gray-60 rounded-lg backdrop-blur-sm bg-white/20 p-4">
        <input
          type="text"
          value={value}
          placeholder="0"
          className="w-full h-20 backdrop-blur-md bg-white/20 rounded-md outline-none px-3 py-2 text-right font-semibold text-2xl"
          readOnly
        />

        <div className="mt-5 grid grid-cols-4 gap-x-10 gap-y-5">
          {character.map((btnValue) => (
            <button
              type="button"
              key={btnValue}
              value={btnValue}
              className={`w-14 h-14 border-[2px] border-gray-400 backdrop-blur-sm bg-black/10 shadow-lg rounded-full text-white text-lg font-bold hover:bg-black/20 hover:text-white/80 transition-all ${btnValue === '=' ? 'bg-orange-500 hover:bg-orange-500/90 transition-all' : ''}`}
              onClick={(e) => handleBtn(e.target.value)}
            >
              {btnValue}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
