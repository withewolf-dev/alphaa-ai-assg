import React from "react";

export default function Quantity() {
  const data = [
    {
      name: "Bussiness",
      number: 194,
    },
    {
      name: "Finance",
      number: 564,
    },
    {
      name: "Travel",
      number: 2564,
    },
    {
      name: "Travel",
      number: 2364,
    },
    {
      name: "Purchase",
      number: 2564,
    },
  ];
  return (
    <div className="font-light font-sans space-y-3 text-blue-900 px-4">
      <p>Quantity of data</p>

      <div className="bg-white pt-4  shadow-md h-72 space-y-2 rounded-lg">
        {data.map((e, i) => (
          <div key={i} className="flex  flex-row justify-around items-center">
            <p className="text-left w-20">{e.name}</p>
            <span className="text-left w-7">{e.number}</span>
            <div class="bg-gradient-to-r rounded-md h-2 w-24 from-cyan-400 to-blue-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
