import React from "react";
import { LightBulbIcon } from "@heroicons/react/solid";

export default function Badge() {
  return (
    <div>
      <div className=" relative h-6 w-32 flex items-center justify-center rounded-[30px] bg-white">
        <div className="absolute -top-4 -right-2">
          <Icon />
        </div>
        <div className="h-4 w-4">
          <LightBulbIcon />
        </div>
        <span className="font-light ml-4">INSIGHTS</span>
      </div>
    </div>
  );
}

const Icon = () => {
  return (
    <div className="h-5 flex justify-center items-center w-5 text-xs bg-red-500 rounded-full text-white">
      5
    </div>
  );
};
