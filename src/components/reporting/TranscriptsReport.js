import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MonthlyMeetingsGraph from "./MonthlyMeetingsGraph";
import CategoryMeetingsGraph from "./CategoryMeetingsGraph";
const TranscriptsReport = ({ transcripts }) => {
  console.log("Transcript data received in reportings", transcripts)

let durationTotal = 0;
for(var i = 0; i < transcripts.length; i++) {
  durationTotal += transcripts[i].duration;
}
let durationAverage = durationTotal / transcripts.length;
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        Reports
        <div
          style={{
            height: "30vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card style={{ height: "30%", width: "10%", padding: "1rem", margin: "1rem" }}>
            {" "}
            Total Meetings <h4>{transcripts.length} Meetings </h4>
          </Card>
          <Card style={{ height: "30%", width: "10%", padding: "1rem", margin: "1rem" }}>
            {" "}
            Average Meeting Length <h4> {durationAverage} Minutes </h4>
          </Card>
          <Card style={{ height: "30%", width: "10%", padding: "1rem", margin: "1rem" }}>
            {" "}
            Most Common Meeting <h4> Interviews </h4>
          </Card>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <Card style={{ minHeight: "200px", minWidth: "400px", height: "500px", width: "500px", margin: "1rem", backgroundColor: "#f0f0f0" }}>
            {" "}
            <h1> Recent Meetings </h1> <MonthlyMeetingsGraph />{" "}
          </Card>
          <Card style={{ minHeight: "200px", minWidth: "400px", height: "500px", width: "500px", margin: "1rem", backgroundColor: "#f0f0f0" }}>
            {" "}
            <h1> Meeting Categories </h1>  <CategoryMeetingsGraph />{" "}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TranscriptsReport;
