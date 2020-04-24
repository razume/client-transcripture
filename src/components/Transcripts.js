import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box, NavBar } from "../styled-components/StyledComponents";
import axios from "axios";
import Home from "./folder-system/Home.js";
import { Typography, Button, Breadcrumbs, Link } from "@material-ui/core";

function Transcripts({ posturl, setAuthCode, redirectURL }) {
  const [location, setLocation] = useState("");
  let [directory, setDirectory] = useState(["Home"]);
  let [transcripts, setTranscripts] = useState([]);
  let [folders, setFolders] = useState();

  const LogOutClicked = () => {
    localStorage.removeItem("code");
    setAuthCode("");
    window.location.href = redirectURL;
  };

  const getFolders = () => {
    axios
      .get(posturl + "/api/db/folders")
      .then((fold) => setFolders(fold.data.folders));
  };

  const requestReports = () => {
    setLocation("Reports");
  };

  const requestMeetings = () => {
    axios
      .get(posturl + "/api/recordings")
      .then(function (response) {
        // handle success
        let videoLocation = document.querySelector("#PutSampleVideo");
        console.log(videoLocation);
        var video = document.createElement("video");
        var transcript = document.createElement("p");
        video.src = response.data.filePath;
        video.controls = true;
        video.style.width = "200px";
        transcript.innerHTML = response.data.transcription;
        videoLocation.append(transcript);
        videoLocation.append(video);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        axios
          .get(posturl + "/api/db/transcripts")
          .then((res) => setTranscripts(res.data));
      });

    axios
      .get(posturl + "/api/db/transcripts")
      .then((res) => setTranscripts(res.data));
  };

  useEffect(() => {
    requestMeetings();
    getFolders();
  }, []);

  const climbTree = () => {
    if (directory.length > 1) {
      setDirectory([...directory].splice(0, directory.length - 1));
    } else {
      console.log("This as far back as she goes cheif.");
    }
  };

  console.log("FOLDERS", folders);
  console.log("TRANSCRIPTS", transcripts);

  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <Box display="flex" flexDirection="row" alignItems="center">
          <img
            className="top-left-logo"
            src={require("../media/scribe_circle_dark.svg")}
            alt=""
          />
        </Box>

        <Box>
          <Link onClick={requestReports}>Reports</Link>
          <Button onClick={LogOutClicked}>Log Out</Button>
        </Box>
      </NavBar>
      <Box>
        <Box width="30rem" id="PutSampleVideo">
          Access all the transcripts of your recorded Zoom meetings
        </Box>
        <div>
          <h4>Current directory: {directory[directory.length - 1]}</h4>
          <Breadcrumbs aria-label="breadcrumb">
            {directory.map((directory) => {
              return <Typography key={Math.random()}>{directory}</Typography>;
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
            setTranscripts={setTranscripts}
          />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default Transcripts;
