import React, { useState, useEffect } from "react"
import MainPage from "./MainPage"
import { Button } from "@material-ui/core"
import theme from "../styled-components/theme"
import {
  Box,
  Heading,
  NavBar,
  Link,
  Text,
} from "../styled-components/StyledComponents"
import Transcripts from "./Transcripts"
import Reports from "./Reports"
import axios from "axios"
import "../App.css"

function Dashboard({ setAuthCode, posturl, redirectURL }) {
  const [location, setLocation] = useState("")
  let [transcripts, setTranscripts] = useState([])
  let [folders, setFolders] = useState()

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

  const LogOutClicked = () => {
    localStorage.removeItem("code")
    setAuthCode("")
    window.location.href = redirectURL
  }

  const getAccessToken = () => {
    axios
      .get(`${posturl}/api/token`)
      .then((res) => console.log("token acquired ", res.data.accessToken))
  }

  const renderLocation = () => {
    if (location === "") {
      return (
        <MainPage
          posturl={posturl}
          setLocation={setLocation}
          location={location}
        />
      )
    } else if (location === "Transcripts") {
      return (
        <Transcripts
          posturl={posturl}
          setLocation={setLocation}
          transcripts={transcripts}
          setTranscripts={setTranscripts}
          setFolders={setFolders}
          folders={folders}
        />
      )
    } else if (location === "Reports") {
      return <Reports setLocation={setLocation} />
    }
  }

  return (
    <div>
      <NavBar>
        <Box display="flex" flexDirection="row" alignItems="center">
          <img
            className="top-left-logo"
            src={require("../media/scribe_logo_name_dark.svg")}
            alt=""
          />
        </Box>

        <Button onClick={getAccessToken}>Get accessToken</Button>
        <Button onClick={LogOutClicked}>Log Out</Button>
      </NavBar>
      <Heading
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        fontSize="24pt"
      >
        <Text letterSpacing={1} m={2} fontSize="24pt">
          TranScripture
        </Text>
        Dashboard
      </Heading>
      {renderLocation()}
    </div>
  )
}

export default Dashboard
