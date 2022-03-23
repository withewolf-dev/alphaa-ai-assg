import React from "react";
import Date from "./Date";
import Echart from "./Echart";
import TotalEarning from "./TotalEarning";

export default function CenterCol() {
  return (
    <div className="flex flex-col md:justify-around py-4 md:h-screen ">
      <Date />
      <Echart />
      <TotalEarning />
    </div>
  );
}
