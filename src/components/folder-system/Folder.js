import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
import axios from "axios";
// import { Box } from "../../styled-components/StyledComponents";
// import Transcript from "./Transcript";

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
    transcripts.forEach((trans) => {
      if (trans.ancestors.includes(fold)) {
        console.log("juh", trans.ancestors);
        console.log("fold", fold);
        let newAncestors = trans.ancestors;
        if (newAncestors[newAncestors.length - 1] !== "Home") {
          newAncestors.splice(newAncestors.indexOf(fold), 1);
        }
        console.log("jah", newAncestors);
        axios
          .post(posturl + "/api/db/transcripts/", {
            transcriptionFilePath: trans.transcriptionFilePath,
            newAncestors: newAncestors,
          })
          .then((res) => console.log("joe", res));
      }
    });
    for (let key in newFolders) {
      if (newFolders[key].includes(fold)) {
        let index = newFolders[key].indexOf(fold);
        newFolders[key].splice(index, 1);
      }
    }
    if (newFolders[fold]) {
      newFolders[fold].forEach((folde) => {
        newFolders[currentDirectory].push(folde);
      });
    }

    Reflect.deleteProperty(newFolders, fold);
    axios
      .post(posturl + "/api/db/folders", { folders: newFolders })
      .then((response) => {
        console.log(response);
        setFolders({ ...newFolders });
      });
  };

  return (
    <div ref={drop} onDoubleClick={handleClick} className="folder">
      <IconButton
        aria-label="delete"
        className="XButton"
        onClick={handleDelete}
      >
        <DeleteIcon />
      </IconButton>

      <img style={{ width: "300px", height: "200px" }} src={FolderImg}></img>
      <h2 style={{ color: "black" }}>{fold} </h2>
    </div>
  );
};

export default Folder;
