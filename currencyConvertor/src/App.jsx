import { useState, useEffect } from "react";
import InputBox from "./component/InputBox";
import useCurrencyData from "./hooks/useCurrrencydata";

function App() {
  const [fromAmt, setFromAmt] = useState(1);
  const [toAmt, setToAmt] = useState(1);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inc");

  function onFromAmtChange(data) {
    setFromAmt(data);
  }

  function onToAmtChange(data) {
    setToAmt(data);
  }

  function onFromCurChange(data) {
    setFromCurrency(data);
  }

  function onToCurChange(data) {
    setToCurrency(data);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl m-4 underline">CURRENCY CONVERTOR</h1>
        <div className="w-[50%] min-w-[400px] flex justify-between bg-slate-500 pb-4 px-6 rounded-lg">
          <div className="   ">
            <InputBox
              labelText="From"
              placeholder="enter amount to be converted"
              valueDropDown={fromCurrency}
              amount={fromAmt}
              onAmtChange={onFromAmtChange}
              onCurChange={onFromCurChange}
              currencyoptions={currencyOptions}
            />
            <InputBox
              labelText="To"
              placeholder="converted amount is"
              readOnly={true}
              valueDropDown={toCurrency}
              amount={toAmt}
              onAmtChange={onToAmtChange}
              onCurChange={onToCurChange}
              currencyoptions={currencyOptions}
            />
          </div>
          <div className="flex justify-center items-center gap-1">
            <button className="bg-slate-800 rounded-lg ml-4 mt-3 px-6 py-4 text-center text-lg  hover:scale-110 active:scale-75 duration-300">
              SWAP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
