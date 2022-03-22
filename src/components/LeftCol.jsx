import React from "react";
import BusinessHeartbeat from "./BusinessHeartbeat";
import LeftCard from "./LeftCard";
import Quantity from "./Quantity";

export default function LeftCol() {
  return (
    <div className="px-5 py-4 flex flex-col justify-between h-screen">
      <h1 className="font-normal text-4xl font-sans text-blue-900">
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
