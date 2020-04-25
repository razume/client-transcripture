import React from "react";
import { VictoryChart, VictoryGroup, VictoryArea } from "victory";
const MonthlyMeetingsGraph = () => {
  return (
    <VictoryChart width={400} height={350}>
      <VictoryGroup
        style={{
          data: { strokeWidth: 5, fillOpacity: 0.4 },
        }}
      >
        <VictoryArea
          style={{
            data: { fill: "#7CB4B8", stroke: "#7CB4B8" },
          }}
          data={[
            { x: "Monday", y: 1 },
            { x: "Tuesday", y: 0 },
            { x: "Wednesday", y: 1 },
            { x: "Thursday", y: 2 },
            { x: "Friday", y: 2 },
          ]}
        />
      </VictoryGroup>
    </VictoryChart>
  );
};

export default MonthlyMeetingsGraph;
