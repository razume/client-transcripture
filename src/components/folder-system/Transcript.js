import React, { useState } from "react"
import ReactDOM from "react-dom"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { useDrag } from "react-dnd"
import ItemTypes from "./ItemTypes"

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
})
//The api route is a post to /api/db/transcripts. It take a match query (the transcriptionFilePath / req.body.transcriptionFilePath)
//and the updated ancestor array ( req.body.newAncestors ) the array gives the hierarchy from top to bottom i.e ([Home, Meetings, Test]) with test being the directory that the transcription resides
const Transcript = ({ transcript, directory }) => {
  //I dont know if you need to pass the setTranscript function or not, you may be able to update the transcript.ancestors directly
  const name = transcript.transcriptionFilePath //Provide transcript ancestor array to match current directory and target directory
  const classes = useStyles()
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.TRANSCRIPT }, //ItemTypes is for the dropTarget to know what can be allowed to be dropped inside of itself
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult() //dropResult is the dropTarget object
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`) //What to do when transcript is dropped on folder
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.3 : 1
  const currentDirectory = directory[directory.length - 1]
  const myDirectory = transcript.ancestors[transcript.ancestors.length - 1]

  let visible

  if (currentDirectory == myDirectory) {
    visible = ""
  } else {
    visible = "none"
  }

  return (
    <div ref={drag} style={{ display: visible, opacity }} className="doc">
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
  )
}

export default Transcript
