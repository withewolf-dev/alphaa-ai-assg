import React from "react";
import DumpyText from "./DumpyText";

export default function LeftCard() {
  return (
    <div className="flex px-6 py-4 rounded-md shadow-md flex-row items-center bg-white">
      <DumpyText />
      <div className="h-20 w-20 flex justify-center items-center border-red-600 border-4 rounded-full">
        <p>73 %</p>
      </div>
    </div>
  );
}
