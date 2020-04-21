import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";

const useStyles = makeStyles({
  root: {
    width: "10vw",
    height: "10vh",
    margin: "3rem"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Folder = ({ fold, setDirectory, directory }) => {
  const classes = useStyles();
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.TRANSCRIPT,
    drop: () => ({ name: fold }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const handleClick = (e) => {
    setDirectory([...directory, fold]);
  };

  return (
    <div ref={drop} onDoubleClick={handleClick} className="folder">
      <h2>{fold} </h2>
    </div>
  );
};

export default Folder;
