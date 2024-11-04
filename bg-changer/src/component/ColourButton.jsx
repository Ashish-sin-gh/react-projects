function ColorButton({ color, colorCode, onClk, bgChanger }) {
  // console.log(onClk);
  function onClk() {
    bgChanger(`bg-${colorCode}`);
    console.log(`bg-${colorCode}`);
  }

  return (
    <button
      className={`border bg-${colorCode} px-4 py-1 rounded-lg hover:scale-105 duration-200`}
      onClick={onClk}
    >
      {color}
    </button>
  );
}

export default ColorButton;
