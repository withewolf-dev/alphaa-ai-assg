import React from "react";
import Date from "./Date";
import Echart from "./Echart";
import TotalEarning from "./TotalEarning";

export default function CenterCol() {
  return (
    <div className="flex flex-col xl:justify-around py-4 xl:h-screen ">
      <Date />
      <Echart />
      <TotalEarning />
    </div>
  );
}
