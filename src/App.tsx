import { useState } from "react";

import Counter from "./components/Counter";
import Select from "./components/Select";
import Footer from "./components/Footer";

function App() {
  const [isSelecting, setIsSelecting] = useState(true);
  const [testsToDo, setTestsToDo] = useState(0);

  function handleSelect(num: number) {
    setIsSelecting((old) => !old);
    if (num < 1) {
      setTestsToDo(1);
    } else {
      setTestsToDo(num);
    }
  }

  function handleBack() {
    setIsSelecting(true);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <img src="merol.png" className="max-w-xl" />
        {isSelecting ? (
          <Select handleStart={handleSelect} />
        ) : (
          <Counter testsToDo={testsToDo} handleBack={handleBack} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
