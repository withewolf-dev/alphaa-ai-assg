import React from "react";
import BusinessHeartbeat from "./BusinessHeartbeat";
import LeftCard from "./LeftCard";
import Quantity from "./Quantity";

export default function LeftCol() {
  return (
    <div className="md:px-5 md:py-4 space-y-10 md:space-y-0 flex flex-col justify-between md:h-screen">
      <h1 className="font-normal text-2xl px-4 md:px-0 md:text-4xl font-sans text-blue-900">
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
