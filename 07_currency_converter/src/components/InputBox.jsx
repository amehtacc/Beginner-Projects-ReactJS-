import React from "react";

function InputBox({
  label, 
  amount,
  currencyOptions, 
  selectOption,
  amountReadOnly,
  onAmountChange,
  onCurrencyChange
}){
  return (
    <div className="w-full h-40 bg-sky-400 flex items-center p-4 rounded-md">
      <div className="w-1/2 flex flex-col justify-center">
        <label htmlFor="" className="font-medium mb-1 text-white">
          {label}
        </label>
        <input
          type="number"
          className="w-[80%] h-8 rounded-md p-2 focus:outline-none"
          placeholder="Amount"
          value={amount}
          readOnly={amountReadOnly}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value) }
        />
      </div>

      <div className="w-1/2 flex flex-col items-end justify-center">
        <p className="font-medium mb-1 text-white">Currency Type</p>
        <select className="rounded-md font-medium text-sm px-2 py-1 focus:outline-none cursor-pointer"
        value={selectOption}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >

          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;
