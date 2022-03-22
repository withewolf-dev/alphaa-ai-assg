import React from "react";
import Date from "./Date";
import Echart from "./Echart";
import TotalEarning from "./TotalEarning";

export default function CenterCol() {
  return (
    <div className="flex flex-col justify-around h-screen py-4">
      <Date />
      <Echart />
      <TotalEarning />
    </div>
  );
}
