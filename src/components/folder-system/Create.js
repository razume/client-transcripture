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

const useStyles = makeStyles({
  root: {
    minWidth: "150px",
    width: "150px",
    height: "100px",
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

const Create = ({ directory, folders, setFolders, posturl }) => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const currentDirectory = directory[directory.length - 1];
  const handleClick = (e) => {
    if (input) {
      let result = folders;
      console.log("results", result);
      console.log("folders", folders);
      result[currentDirectory][result[currentDirectory].length] = input;
      result[`${input}`] = [];
      setFolders({ ...result });
      axios
        .post(posturl + "/api/db/folders", { folders })
        .then((res) => console.log("updated folders object", res));
    } else {
      alert("Please provide a name");
    }
  };
  console.log(folders);
  const handleTextInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={classes.root}>
      <TextField label="Enter Folder Name" onChange={handleTextInput} />
      <Button onClick={handleClick}>create folder</Button>
    </div>
  );
};

export default Create;
