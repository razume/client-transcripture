import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
import axios from "axios";
import { Box } from "../../styled-components/StyledComponents";
import Transcript from "./Transcript";

//Media
import FolderImg from "../../media/folder_img.svg";
const useStyles = makeStyles({
  root: {
    width: "10vw",
    height: "10vh",
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

const Folder = ({
  fold,
  setDirectory,
  directory,
  folders,
  setFolders,
  posturl,
  transcripts,
  setTranscripts,
}) => {
  const classes = useStyles();
  const currentDirectory = directory[directory.length - 1];
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.TRANSCRIPT,
    drop: () => ({ name: fold }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handleClick = (e) => {
    setDirectory([...directory, fold]);
  };

  const handleDelete = (e) => {
    let newFolders = folders;

    for (let key in newFolders) {
      let index = newFolders[key].indexOf(fold);
      if (newFolders[key].includes(fold)) {
        transcripts.forEach((transcript) => {
          let currentDir =
            transcript.ancestors[transcript.ancestors.length - 1];
          if (currentDir == fold) {
            let newTranscriptAncestors = transcript.ancestors;
            if (newTranscriptAncestors.length > 1) {
              newTranscriptAncestors.pop();
            }
            console.log("chciekn", newTranscriptAncestors);
            axios.post(posturl + "/api/db/transcripts", {
              transcriptionFilePath: transcript.transcriptionFilePath,
              newAncestors: newTranscriptAncestors,
            });
          }
        });

        newFolders[key].splice(index, 1);
      }
    }
    if (newFolders[fold]) {
      newFolders[fold].forEach((folde) => {
        newFolders[currentDirectory].push(folde);
      });
    }
    Reflect.deleteProperty(newFolders, fold);
    setFolders({ ...newFolders });
    console.log("processed", newFolders);
    axios.post(posturl + "/api/db/folders", { folders }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Box ref={drop} onDoubleClick={handleClick} className="folder">
      <img src={FolderImg}></img>
      <h2>{fold} </h2>
      <button onClick={handleDelete}>X</button>
    </Box>
  );
};

export default Folder;
