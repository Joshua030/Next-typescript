"use client";

import { useState } from "react";

interface CartCounterProps {
  value: number;
}

export const CartCounter = ({ value }: CartCounterProps) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-4">
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 cursor-pointer"
        >
          -1
        </button>
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 cursor-pointer"
        >
          +1
        </button>
      </div>
    </>
  );
};
