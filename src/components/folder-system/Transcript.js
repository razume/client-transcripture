import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "10vw",
    height: "10vh",
    margin: "3rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Transcript = ({ transcript, directory }) => {
  const classes = useStyles();
  const currentDirectory = directory[directory.length - 1];
  const myDirectory = transcript.ancestors[transcript.ancestors.length - 1];

  let visible;

  if (currentDirectory == myDirectory) {
    visible = "";
  } else {
    visible = "none";
  }

  return (
    <div style={{ display: visible }} className="doc">
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="doc-title">
      <h3>{transcript.transcriptionFilePath}</h3>
      </div>
    </div>
  );
};

export default Transcript;
