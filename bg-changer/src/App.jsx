import { useState } from "react";
import ColorDisplay from "./component/ColorDisplay";
import ColorButton from "./component/ColourButton";

function App() {
  const [bgColor, setBgColor] = useState("bg-white");
  function bgChanger(value) {
    setBgColor(value);
    console.log(bgColor);
  }

  return (
    <>
      <ColorDisplay bgColor={bgColor}>
        <ColorButton
          color="red"
          colorCode="red-600"
          onClk="handleRedClick"
          bgChanger={bgChanger}
        />
        <ColorButton
          color="blue"
          colorCode="blue-400 "
          onClk="handleBlueClick"
          bgChanger={bgChanger}
        />
        <ColorButton
          color="yellow"
          colorCode="yellow-400"
          onClk="handleYellowClick"
          bgChanger={bgChanger}
        />
        <ColorButton
          color="pink"
          colorCode="pink-600 "
          onClk="handlePinkClick"
          bgChanger={bgChanger}
        />
      </ColorDisplay>
    </>
  );
}

export default App;
