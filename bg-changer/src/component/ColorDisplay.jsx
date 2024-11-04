function ColorDisplay({ bgColor, children }) {
  console.log(bgColor);
  return (
    <>
      <div
        className={`p-4 w-screen h-screen flex flex-col justify-between items-center ${bgColor} duration-300`}
      >
        <h1 className=" text-2xl hover:underline hover:text-3xl hover:scale-105 duration-200 ">
          Background Color Changer
        </h1>
        <div className="w-[80%] bg-black py-2 border border-black rounded-lg hover:scale-105 duration-200 flex justify-evenly ">
          {children}
        </div>
      </div>
    </>
  );
}

export default ColorDisplay;

// className="bg-red-600"
