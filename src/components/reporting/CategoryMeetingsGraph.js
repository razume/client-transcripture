import React from "react";
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory";

const CategoryMeetingsGraph = () => {
  return (
    <svg viewBox="0 0 400 350">
      <VictoryPie
        theme={VictoryTheme.material}
        standalone={false}
        width={400}
        height={350}
        data={[
          { x: "Interviews", y: 120 },
          { x: "Business Meetings", y: 120 },
          { x: "Daily Scrum", y: 120 },
        ]}
        innerRadius={68}
        labelRadius={100}
        style={{
          labels: { fill: "black" },
          data: { fill: "#7CB4B8", stroke: "#7CB4B8", strokeWidth: 5, fillOpacity: 0.4 },
        }}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 20 }}
        x={200}
        y={175}
        text="Categories"
      />
    </svg>
  );
};

export default CategoryMeetingsGraph;
