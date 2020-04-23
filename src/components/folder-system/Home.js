import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Transcript from "./Transcript";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Folder from "./Folder";
import Create from "./Create";
import { flex } from "styled-system";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

const Home = ({
  transcripts,
  setTranscripts,
  folders,
  setFolders,
  directory,
  setDirectory,
  posturl,
}) => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="dash">
        <DndProvider backend={Backend}>
          <div>
            {folders &&
              folders[directory[directory.length - 1]].map((fold) => {
                if (fold) {
                  return (
                    <Folder
                      key={Math.random()}
                      directory={directory}
                      setDirectory={setDirectory}
                      fold={fold}
                      folders={folders}
                      setFolders={setFolders}
                      posturl={posturl}
                      transcripts={transcripts}
                      setTranscripts={setTranscripts}
                    />
                  );
                }
              })}
          </div>
          {transcripts.map((trans) => {
            return (
              <Transcript
                key={Math.random()}
                directory={directory}
                transcript={trans}
                posturl={posturl}
                setTranscripts={setTranscripts}
                transcripts={transcripts}
              />
            );
          })}
        </DndProvider>
      </div>
      <Create
        directory={directory}
        folders={folders}
        setFolders={setFolders}
        posturl={posturl}
      />
    </div>
  );
};

export default Home;
