import React from "react";
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory";

const CategoryMeetingsGraph = () => {
  return (
    <svg viewBox="0 0 400 400">
      <VictoryPie
        theme={VictoryTheme.material}
        standalone={false}
        width={400}
        height={400}
        data={[
          { x: "Interviews", y: 120 },
          { x: "Business Meetings", y: 150 },
          { x: "Daily Scrum", y: 75 },
        ]}
        innerRadius={68}
        labelRadius={100}
        style={{ labels: { fill: "grey" } }}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 20 }}
        x={200}
        y={200}
        text="Categories"
      />
    </svg>
  );
};

export default CategoryMeetingsGraph;
