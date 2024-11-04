import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [hasChar, setHasChar] = useState(false);
  const [hasNum, setHasNum] = useState(false);

  const passwordField = useRef(null);

  const createPassword = useCallback(() => {
    let passString = "";
    let stringAvailable =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (hasChar) {
      stringAvailable += "~`!@#$%^&*_-+=,.";
    }
    if (hasNum) {
      stringAvailable += "1234567890";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * stringAvailable.length + 1
      );
      passString += stringAvailable.charAt(randomIndex);
    }
    setPassword(passString);
  }, [length, hasChar, hasNum, setPassword]);

  function copyPassOnClick() {
    window.navigator.clipboard.writeText(password);
    passwordField.current?.select();
    // setTimeout(() => {
    //   alert(`password ${password} copied to clipboard`);
    // }, 2000);
  }

  useEffect(() => {
    createPassword();
  }, [length, hasChar, hasNum]);

  return (
    <>
      <div className=" m-4 mx-auto border border-white w-[60%] rounded-xl ">
        <h1 className="text-center text-2xl my-2">Password Generator</h1>
        <div className="bg-slate-700 m-2 p-2 rounded-xl flex-col justify-center ">
          <div className="flex justify-center mb-4">
            <input
              className="m-1 mr-0 text-black px-2 py-1 rounded-l-2xl w-[60%] "
              placeholder="password"
              readOnly
              value={password}
              ref={passwordField}
            />
            <button
              className="text-black bg-slate-400 rounded-r-xl m-1 ml-0 px-2 py-1 hover:scale-105 active:scale-95 duration-150"
              onClick={copyPassOnClick}
            >
              copy password
            </button>
          </div>
          <div className="flex flex-col items-start ml-4">
            <div>
              <input
                id="range-ip"
                className="cursor-pointer mr-2 hover:scale-105 active:scale-100 duration-150"
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="" htmlFor="range-ip">
                length: {length}
              </label>
            </div>
            <div>
              <input
                id="charCheck"
                className="mr-2"
                type="checkbox"
                defaultChecked={hasChar}
                onChange={() => setHasChar((prev) => !prev)}
              />
              <label htmlFor="charCheck">character</label>
            </div>
            <div>
              <input
                id="numCheck"
                className="mr-2"
                type="checkbox"
                checked={hasNum}
                onChange={() => setHasNum((prev) => !prev)}
              />
              <label htmlFor="numCheck">Number</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
