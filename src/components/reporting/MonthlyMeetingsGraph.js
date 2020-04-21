import React from "react";
import { VictoryChart, VictoryGroup, VictoryArea } from "victory";
const MonthlyMeetingsGraph = () => {
  return (
    <VictoryChart width={400} height={400}>
      <VictoryGroup
        style={{
          data: { strokeWidth: 3, fillOpacity: 0.4 },
        }}
      >
        <VictoryArea
          style={{
            data: { fill: "cyan", stroke: "cyan" },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
      </VictoryGroup>
    </VictoryChart>
  );
};

export default MonthlyMeetingsGraph;
