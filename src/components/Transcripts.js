import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styled-components/theme"
import { Box } from "../styled-components/StyledComponents"
import axios from "axios"
import Home from "./folder-system/Home.js"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"

function Transcripts({ setLocation, posturl }) {
  let [directory, setDirectory] = useState(["Home"])
  let [folders, setFolders] = useState()
  let [transcripts, setTranscripts] = useState([])


  console.log(transcripts)
  const handleBack = () => {
    setLocation("")
  }

  const climbTree = () => {
    if (directory.length > 1) {
      setDirectory([...directory].splice(0, directory.length - 1))
    } else {
      console.log("This as far back as she goes cheif.")
    }
  }

  const getFolders = () => {
    axios
      .get(posturl + "/api/db/folders")
      .then((fold) => setFolders(fold.data.folders))
  }

  const requestMeetings = () => {
    axios
      .get(posturl + "/api/recordings")
      .then(function (response) {
        // handle success
        let videoLocation = document.querySelector("#PutSampleVideo")
        console.log(videoLocation)
        var video = document.createElement("video")
        var transcript = document.createElement("p")
        video.src = response.data.filePath
        video.controls = true
        video.style.width = "200px"
        transcript.innerHTML = response.data.transcription
        videoLocation.append(transcript)
        videoLocation.append(video)
        console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        axios
          .get(posturl + "/api/db/transcripts")
          .then((res) => setTranscripts(res.data))
      })

    axios
      .get(posturl + "/api/db/transcripts")
      .then((res) => setTranscripts(res.data))
  }

  useEffect(() => {
    requestMeetings()
    getFolders()
  }, [])

  console.log("FOLDERS", folders)
  console.log("TRANSCRIPTS", transcripts)

  return (
    <ThemeProvider theme={theme}>
      <button onClick={handleBack}>Return to Dashboard</button>
      <Box width="30rem" id="PutSampleVideo">
        Access all the transcripts of your recorded Zoom meetings
      </Box>
      <div>
        <h4>Current directory: {directory[directory.length - 1]}</h4>
        <Breadcrumbs aria-label="breadcrumb">
          {directory.map((directory) => {
            return <Typography key={Math.random()}>{directory}</Typography>
          })}
        </Breadcrumbs>
        {directory.length > 1 && <button onClick={climbTree}>&#8592;</button>}
        <Home
          directory={directory}
          setDirectory={setDirectory}
          transcripts={transcripts}
          folders={folders}
          setFolders={setFolders}
          posturl={posturl}
        />
      </div>
    </ThemeProvider>
  )
}

export default Transcripts
