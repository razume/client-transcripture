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
const Transcripts = ({ transcripts }) => {
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
          padding: "3rem",
          margin: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        Reports
        <div
          style={{
            height: "30vh",
            padding: "1rem",
            margin: "2rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card style={{ width: "30%", padding: "1rem", margin: "1rem" }}>
            {" "}
            Total Meetings <h4>{transcripts.length} Meetings </h4>
          </Card>
          <Card style={{ width: "30%", padding: "1rem", margin: "1rem" }}>
            {" "}
            Average Meeting Length <h4> 8.3 Minutes </h4>
          </Card>
          <Card style={{ width: "30%", padding: "1rem", margin: "1rem" }}>
            {" "}
            Most Common Meeting <h4> Interviews </h4>
          </Card>
        </div>
        <div
          style={{
            height: "100%",
            padding: "1rem",
            margin: "2rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <Card style={{ width: "40%", margin: "1rem" }}>
            {" "}
            Monthly Meetings <MonthlyMeetingsGraph />{" "}
          </Card>
          <Card style={{ width: "40%", margin: "1rem" }}>
            {" "}
            Meeting Categories  <CategoryMeetingsGraph />{" "}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Transcripts;
