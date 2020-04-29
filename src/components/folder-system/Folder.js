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
  const [naming, setNaming] = useState(false);
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

  const handleInput = (e) => {
    let value = e.target.value;
    if (e.key == "Enter") {
      setNaming(!naming);
      let newNames = folders;
      for (let key in newNames) {
        let index = newNames[key].indexOf(fold);
        if (newNames[key].includes(fold)) {
          transcripts.forEach((trans) => {
            let index = trans.ancestors[trans.ancestors.indexOf(fold)];
            if (trans.ancestors.includes(fold)) {
              let newTranscriptAncestors = trans.ancestors;
              newTranscriptAncestors[
                newTranscriptAncestors.indexOf(fold)
              ] = value;
              axios.post(posturl + "/api/db/transcripts", {
                transcriptionFilePath: trans.transcriptionFilePath,
                newAncestors: newTranscriptAncestors,
              });
            }
          });
          newNames[key][index] = value;
        }
      }
      newNames[value] = newNames[fold];

      Reflect.deleteProperty(newNames, fold);
      setFolders({ ...newNames });
      axios
        .post(posturl + "/api/db/folders", { folders })
        .then((response) => {});
    }
  };

  const handleRename = (e) => {
    e.preventDefault();
    if (e.button == 2) {
      setNaming(!naming);
    }
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
      {naming ? (
        <input onKeyDown={handleInput} autoFocus type="text"></input>
      ) : (
        <h2 onMouseUp={handleRename} style={{ color: "black" }}>
          {fold}{" "}
        </h2>
      )}
    </div>
  );
};

export default Folder;
