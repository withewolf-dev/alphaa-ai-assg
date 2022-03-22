import React from "react";
import DumpyText from "./DumpyText";

export default function DumyCard() {
  const data = [
    {
      name: "Bussiness",
      number: 194,
      price: "$34,553",
    },
    {
      name: "Finance",
      number: 564,
      price: "$24,553",
    },
    {
      name: "Travel",
      number: 2564,
      price: "$14,555",
    },
    {
      name: "Travel",
      number: 2364,
      price: "$24,553",
    },
    {
      name: "Purchase",
      number: 2564,
      price: "$24,553",
    },
  ];
  return (
    <div>
      <div className=" pt-4 px-4 bg-white shadow-md rounded-lg h-72 space-y-2">
        <DumpyText />
        <div className="space-y-2">
          {data.map((e, i) => (
            <div
              key={i}
              className="flex text-blue-900  flex-row justify-around items-center"
            >
              <p className="text-left w-20">{e.name}</p>
              <span className="text-left w-7">{e.number}</span>
              <div classname="text-right w-10">{e.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
