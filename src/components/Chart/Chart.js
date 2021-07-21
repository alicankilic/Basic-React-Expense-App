import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArr = props.dataCounts.map((dataPoint) => dataPoint.value);
  const findMax = Math.max(...valueArr);

  return (
    <div className="chart">
      {props.dataCounts.map((dataCounts) => (
        <ChartBar
          key={dataCounts.label}
          value={dataCounts.value}
          maxValue={findMax}
          label={dataCounts.label}
        />
      ))}
    </div>
  );
};

export default Chart;
