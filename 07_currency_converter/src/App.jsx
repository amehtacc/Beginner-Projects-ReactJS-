import React, { useState } from "react";
import useCurrency from "./hooks/useCurrency";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  console.log(from);
  

  const currencyInfo = useCurrency(from);
  
  const options = Object.keys(currencyInfo)

  function handleSubmit(e) {
    e.preventDefault();
    
    setConvertedAmount(amount * currencyInfo[to])
  }

  function swap() {
    setTo(from)
    setFrom(to)

    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-[url('.\assets\bg-image.png')] bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30 p-5">
          <form onSubmit={handleSubmit}
          className="flex flex-col gap-2">
            <div className="w-full">
              <InputBox 
              label="From"
              amount={amount}
              currencyOptions={options} 
              selectOption={from}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>

            <div className="w-full relative">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-red-500 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full">
              <InputBox
              label="To" 
              amount={convertedAmount}
              currencyOptions={options} 
              selectOption={to}
              onCurrencyChange={(currency) => setTo(currency)}
              amountReadOnly   
              on      
              />
            </div>
            <button type="submit"
            className="bg-yellow-400 mt-3 p-2 rounded-md font-semibold text-2xl text-white"
            >
              Calculate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
