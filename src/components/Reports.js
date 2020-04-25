import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box, NavBar } from "../styled-components/StyledComponents";
import {
  Typography,
  Breadcrumbs,
  Button,
  Link,
  CircularProgress,
} from "@material-ui/core";
import TranscriptsReport from "./reporting/TranscriptsReport"
import BackImg from "../media/back_img.svg"

function Reports({ setLocation, transcripts, requestReports, LogOutClicked}) {
  const handleBack = () => {
    setLocation("");
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <Box display="flex" flexDirection="row" alignItems="center">
          <img
            className="top-left-logo"
            src={require("../media/scribe_logo_text.svg")}
            alt=""
          />
        </Box>
        <Box>
          <Link onClick={requestReports}>Reports</Link>
          <Button onClick={LogOutClicked}>Log Out</Button>
        </Box>
      </NavBar>
      <Button><img className="BackButton" src={BackImg} onClick={handleBack}></img></Button>
      <TranscriptsReport transcripts={transcripts} />
    </ThemeProvider>
  );
}

export default Reports;
