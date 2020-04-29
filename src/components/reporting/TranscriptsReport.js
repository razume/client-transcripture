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
  console.log("Transcript data received in reportings", transcripts);

  const averageMeetingDuration = () => {
    let durationTotal = 0;
    for (var i = 0; i < transcripts.length; i++) {
      durationTotal += transcripts[i].duration;
    }
    let durationAverage = durationTotal / transcripts.length;

    return durationAverage;
  };

  const averageFillerWords = () => {
    const fillerWords = [
      "Uh",
      "Ok",
      "Okay",
      "uh-huh",
      "right",
      "err",
      "sort of",
      "I guess",
      "um",
      "uhm",
      "like",
      "uhh",
      "so",
      "yeah",
      "kinda",
      "so yeah",
    ];

    let allTranscriptWords = [];
    for (var i = 0; i < transcripts.length; i++) {
      let arrayOfWords = transcripts[i].content.split(" ");

      for (let j = 0; j < arrayOfWords.length; j++) {
        if (
          arrayOfWords[j].includes("Speaker1:") ||
          arrayOfWords[j].includes("Speaker2:") ||
          arrayOfWords[j].includes("Speaker3:") ||
          arrayOfWords[j].includes("Speaker4:")
        ) {
          arrayOfWords.splice(j, 1);
        }
      }

      allTranscriptWords = allTranscriptWords.concat(arrayOfWords);
    }
    console.log("ALL TRANSCRIPTS", allTranscriptWords);
    let allTranscriptWordsWithoutFillers = [];
    for (let k = 0; k < allTranscriptWords.length; k++) {
      if (fillerWords.indexOf(allTranscriptWords[k]) === -1) {
        allTranscriptWordsWithoutFillers.push(allTranscriptWords[k]);
      }
    }

    const percentageFillerWords =
      100 -
      (
        (allTranscriptWordsWithoutFillers.length / allTranscriptWords.length) *
        100
      ).toFixed(0);

    return percentageFillerWords;
  };

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
        <h1 className="ReportingTitle"> Meeting Transcription Reports </h1>
        <div
          style={{
            height: "20vh",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              height: "30%",
              minHeight: "53px",
              minWidth: "180px",
              width: "10%",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            {" "}
            Total Meetings <h4>{transcripts.length} Meetings </h4>
          </Card>
          <Card
            style={{
              height: "30%",
              minHeight: "53px",
              minWidth: "180px",
              width: "10%",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            {" "}
            Average Meeting Length <h4> {averageMeetingDuration()} Minutes </h4>
          </Card>
          <Card
            style={{
              height: "30%",
              minHeight: "53px",
              minWidth: "180px",
              width: "10%",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            {" "}
            Most Common Meeting <h4> Interviews </h4>
          </Card>
          <Card
            style={{
              height: "30%",
              minHeight: "53px",
              minWidth: "180px",
              width: "10%",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            {" "}
            Total Filler Words Used <h4>{averageFillerWords()}%</h4>
          </Card>
        </div>
        <div
          style={{
            height: "100%",
            minHeight: "53px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Card
            style={{
              minHeight: "200px",
              minWidth: "400px",
              height: "500px",
              width: "500px",
              margin: "1rem",
              backgroundColor: "#f0f0f0",
            }}
          >
            {" "}
            <h1> Recent Meetings </h1> <MonthlyMeetingsGraph />{" "}
          </Card>
          <Card
            style={{
              minHeight: "200px",
              minWidth: "400px",
              height: "500px",
              width: "500px",
              margin: "1rem",
              backgroundColor: "#f0f0f0",
            }}
          >
            {" "}
            <h1> Meeting Categories </h1> <CategoryMeetingsGraph />{" "}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TranscriptsReport;
