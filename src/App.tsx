import { useState } from "react";

import Counter from "./components/Counter";
import Select from "./components/Select";

function App() {
  const [isSelecting, setIsSelecting] = useState(true);
  const [testsToDo, setTestsToDo] = useState(0);

  function handleSelect(num: number) {
    setIsSelecting((old) => !old);
    setTestsToDo(num);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <img src="merol.png" className="max-w-xl" />
      {isSelecting ? (
        <Select handleStart={handleSelect} />
      ) : (
        <Counter testsToDo={testsToDo} />
      )}
    </div>
  );
}

export default App;
