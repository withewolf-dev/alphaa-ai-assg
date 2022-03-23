import React from "react";
import Badge from "./Badge";
import Description from "./Description";
import DumpyText from "./DumpyText";
import DumyCard from "./DumyCard";

export default function RightCol() {
  return (
    <div className="py-7 px-5 space-y-10 md:space-y-0 flex flex-col justify-between md:h-screen">
      <Badge />
      <Description />
      <DumpyText />
      <DumyCard />
    </div>
  );
}
