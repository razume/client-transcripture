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

const Back = ({
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
  const [naming, setNaming] = useState(false);
  const currentDirectory = directory[directory.length - 1];
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.TRANSCRIPT,
    drop: () => ({ name: "back" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handleClick = (e) => {
    if (directory.length > 1) {
      let newDir = directory;
      newDir.pop();
      setDirectory([...newDir]);
    }
  };

  return (
    <div ref={drop} onDoubleClick={handleClick} className="folder">
      <img style={{ width: "300px", height: "200px" }} src={FolderImg}></img>
      <h2 style={{ color: "black" }}>../</h2>
    </div>
  );
};

export default Back;
