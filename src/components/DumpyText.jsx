import React from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
export default function DumpyText() {
  return (
    <div className="space-y-2 text-blue-900">
      <p className="font-light">Total Earnings</p>
      <div className="flex ">
        <span className="font-bold text-2xl">$12,490</span>
        <div className="flex justify-center items-end">
          <ChevronUpIcon className="h-5 w-5 text-green-500" />
          <p className="text-green-500 text-sm">19.1%</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 ">compared to $21,423 last year</p>
    </div>
  );
}
