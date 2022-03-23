import React from "react";
import Badge from "./Badge";
import Description from "./Description";
import DumpyText from "./DumpyText";
import DumyCard from "./DumyCard";

export default function RightCol() {
  return (
    <div className="py-7 px-5 flex flex-col justify-between h-screen">
      <Badge />
      <Description />
      <DumpyText />
      <DumyCard />
    </div>
  );
}
