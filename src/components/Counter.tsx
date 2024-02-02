import { useState } from "react";

interface Props {
  testsToDo: number;
}

export default function Counter({ testsToDo, handleBack }: Props) {
  const [testsDone, SetTestsDone] = useState(0);
  const [isDone, setIsDone] = useState(false);

  function handleButton() {
    if (!isDone && testsDone + 1 != testsToDo) {
      SetTestsDone((curr) => curr + 1);
    } else if (!isDone && testsDone + 1 == testsToDo) {
      setIsDone(true);
    } else {
      handleBack();
    }
  }
  return (
    <>
      <h1 className="mb-5 text-4xl">
        {isDone
          ? "Gratulacje! Wszystko zrobione!"
          : `${testsDone} / ${testsToDo}`}
      </h1>
      <button
        onClick={handleButton}
        className="bg-green-400 p-3 rounded-full text-white"
      >
        {isDone ? "Strona główna" : "Zdany!"}
      </button>
    </>
  );
}
