import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box } from "../styled-components/StyledComponents";
import axios from "axios";

function Transcripts({ setLocation, posturl }) {
  const handleBack = () => {
    setLocation("");
  };

  const requestMeetings = () => {
    axios
      .get(posturl + "/api/recordings")
      .then(function (response) {
        // handle success
        let videoLocation = document.querySelector("#PutSampleVideo");
        console.log(videoLocation);
        var video = document.createElement("video");
        video.src = response.data;
        video.controls = true;
        video.style.width = "200px";
        videoLocation.append(video);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    requestMeetings();
  });

  return (
    <ThemeProvider theme={theme}>
      <button onClick={handleBack}>Return to Dashboard</button>
      <Box width="30rem" id="PutSampleVideo">
        Access all the transcripts of your recorded Zoom meetings
      </Box>
    </ThemeProvider>
  );
}

export default Transcripts;
