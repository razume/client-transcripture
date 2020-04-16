import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styled-components/theme"
import { Box } from "../styled-components/StyledComponents"
import axios from "axios"

function Transcripts({ setLocation, posturl }) {
  const handleBack = () => {
    setLocation("")
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
        // always executed
      })

    axios.get(posturl + "/api/db/transcripts").then((res) => console.log(res))
  }

  useEffect(() => {
    requestMeetings()
  })

  return (
    <ThemeProvider theme={theme}>
      <button onClick={handleBack}>Return to Dashboard</button>
      <Box width="30rem" id="PutSampleVideo">
        Access all the transcripts of your recorded Zoom meetings
      </Box>
    </ThemeProvider>
  )
}

export default Transcripts
