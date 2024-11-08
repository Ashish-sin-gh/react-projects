import { useState } from "react";

function InputBox({
  placeholder,
  labelText,
  amount,
  readOnly = false,
  valueDropDown,
  onAmtChange,
  onCurChange,
  currencyOptions = [],
}) {
  // console.log(currencyOptions);
  return (
    <>
      <label className="block px-2 pl-1 py-1 mb-1 mt-2">{labelText}</label>
      <input
        className="text-black px-2 py-1 rounded-lg mb-3 w-[250px]"
        type="number"
        placeholder={placeholder}
        readOnly={readOnly}
        value={amount <= 0 ? "" : amount}
        min={0}
        onChange={(e) => onAmtChange(Number(e.target.value))}
      />
      <select
        className="block text-black rounded-md pl-1 pr-2 mb-2 "
        value={valueDropDown}
        onChange={(e) => onCurChange(e.target.value)}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </>
  );
}

export default InputBox;
