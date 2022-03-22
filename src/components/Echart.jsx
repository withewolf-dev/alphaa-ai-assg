import React from "react";
import ReactECharts from "echarts-for-react";
export default function Echart() {
  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  for (var i = 0; i < 100; i++) {
    xAxisData.push("A" + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
  }
  const option = {
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false,
      },
    },
    yAxis: {},
    series: [
      {
        name: "bar",
        type: "bar",
        data: data1,
        emphasis: {
          focus: "series",
        },
        animationDelay: function (idx) {
          return idx * 10;
        },
      },
      {
        name: "bar2",
        type: "bar",
        data: data2,
        emphasis: {
          focus: "series",
        },
        animationDelay: function (idx) {
          return idx * 10 + 100;
        },
      },
    ],
    animationEasing: "elasticOut",
    animationDelayUpdate: function (idx) {
      return idx * 5;
    },
  };
  return (
    <ReactECharts
      style={{ width: "900px", height: "600px", margin: "auto" }}
      option={option}
    />
  );
}
