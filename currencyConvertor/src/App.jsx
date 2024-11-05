import { useState, useEffect } from "react";
import InputBox from "./component/InputBox";
import useCurrencyData from "./hooks/useCurrrencydata";

function App() {
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState("");
  // const [convertedAmt, setConvertedAmt] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

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

  const currencydata = useCurrencyData(fromCurrency);
  console.log(currencydata);
  const options = Object.keys(currencydata);

  function swap() {
    setFromAmt(toAmt);
    setToAmt(fromAmt);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  function convert() {
    const op = fromAmt * currencydata[toCurrency];
    setToAmt(op);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl m-4 underline">CURRENCY CONVERTOR</h1>
        <div className="w-[55%] min-w-[450px] max-w-[740px] flex justify-between bg-slate-500 pb-4 px-8 rounded-lg">
          <div className="backdrop-blur-md">
            <InputBox
              labelText="From"
              placeholder="enter amount to be converted"
              valueDropDown={fromCurrency}
              amount={fromAmt}
              onAmtChange={onFromAmtChange}
              onCurChange={onFromCurChange}
              currencyOptions={options}
            />
            <InputBox
              labelText="To"
              placeholder="converted amount is"
              readOnly={true}
              valueDropDown={toCurrency}
              amount={toAmt}
              onAmtChange={onToAmtChange}
              onCurChange={onToCurChange}
              currencyOptions={options}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <button
              className="bg-slate-700 rounded-lg ml-4 mt-3 px-6 py-4 text-center text-lg  hover:scale-110 active:scale-75 duration-300 "
              onClick={swap}
            >
              SWAP
            </button>
            <button
              className="bg-slate-900 rounded-lg ml-4 mt-3 px-6 py-4 text-center text-lg  hover:scale-110 active:scale-75 duration-300"
              onClick={convert}
            >
              convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
