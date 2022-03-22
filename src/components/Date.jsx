import React from "react";

export default function Date() {
  return (
    <div className="flex justify-end mr-10 ">
      <div className=" relative h-6 px-4 flex w-48 justify-between rounded-[30px] bg-white">
        <span className="absolute -left-3 h-6 px-4 rounded-[30px] bg-blue-500 text-white">
          1W
        </span>
        <span>1W</span>
        <span>1W</span>
        <span>3M</span>
        <span>1Y</span>
        <span>YTD</span>
      </div>
    </div>
  );
}
