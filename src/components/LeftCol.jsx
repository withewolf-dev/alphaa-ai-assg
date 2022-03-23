import React from "react";
import BusinessHeartbeat from "./BusinessHeartbeat";
import LeftCard from "./LeftCard";
import Quantity from "./Quantity";

export default function LeftCol() {
  return (
    <div className="xl:w-[450px] xl:px-5 xl:py-4 space-y-10 xl:space-y-0 flex flex-col justify-between xl:h-screen">
      <h1 className="font-normal text-2xl px-4 xl:px-0 xl:text-4xl font-sans text-blue-900">
        North Sales Board
      </h1>

      <div className="px-4">
        <LeftCard />
      </div>
      <BusinessHeartbeat />
      <Quantity />
    </div>
  );
}
