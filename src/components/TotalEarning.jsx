import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";

export default function TotalEarning() {
  return (
    <div className="md:grid grid-cols-3">
      <div className="flex flex-row items-end ">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="h-10 w-10 rounded-lg bg-white flex justify-center items-center">
            <ShoppingCartIcon className="h-6 w-6" />
          </div>
          <div className="font-sans text-blue-900">
            <h1 className="font-light">Total Earning</h1>
            <span className="font-semibold">$782</span>
          </div>
        </div>
        <div class="bg-red-500 rounded-md h-2 w-20 "></div>
      </div>
      <div className="flex flex-row items-end ">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="h-10 w-10 rounded-lg bg-white flex justify-center items-center">
            <ShoppingCartIcon className="h-6 w-6" />
          </div>
          <div className="font-sans text-blue-900">
            <h1 className="font-light">Total Earning</h1>
            <span className="font-semibold">$782</span>
          </div>
        </div>
        <div class="bg-gradient-to-r rounded-md h-2 w-20 from-cyan-400 to-blue-500"></div>
      </div>
      <div className="flex flex-row items-end ">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="h-10 w-10 rounded-lg bg-white flex justify-center items-center">
            <ShoppingCartIcon className="h-6 w-6" />
          </div>
          <div className="font-sans text-blue-900">
            <h1 className="font-light">Total Earning</h1>
            <span className="font-semibold">$782</span>
          </div>
        </div>
        <div class="bg-gradient-to-r rounded-md h-2 w-20 from-cyan-400 to-blue-500"></div>
      </div>
    </div>
  );
}
