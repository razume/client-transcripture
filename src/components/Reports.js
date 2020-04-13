import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box } from "../styled-components/StyledComponents";

// const clientID = "wvaVD6itTme4P9YBmPMZkg"

// Set Dev variables and Prod Variables

if (process.env.NODE_ENV === "development") {
  var redirectURL = "http://localhost:3000/";
  var posturl = "http://localhost:5000";
} else {
  var redirectURL = "https://client-transcipture.herokuapp.com/";
  var posturl = "https://tranbackend.herokuapp.com";
}

function Reports({ setLocation }) {
  const handleBack = () => {
    setLocation("");
  };

  return (
    <ThemeProvider theme={theme}>
      <button onClick={handleBack}>Return to Dashboard</button>
      <Box width="30rem" id="PutSampleVideo">
        Access all the reports of your transcribed Zoom meetings
      </Box>
    </ThemeProvider>
  );
}

export default Reports;
