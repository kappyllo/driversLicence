import { useRef } from "react";

interface Props {
  handleStart: Function;
}

export default function Select({ handleStart }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const n = inputRef.current?.value;

  return (
    <>
      <h1 className="mb-5 text-4xl">Ile dzisiaj testów?</h1>
      <input
        ref={inputRef}
        className="border border-black rounded w-20 h-12 p-2 mb-2 text-center"
        type="number"
      />
      <button
        onClick={() => handleStart(inputRef.current?.value)}
        className="bg-green-400 p-3 rounded-full text-white"
      >
        Zacznij!
      </button>
    </>
  );
}
