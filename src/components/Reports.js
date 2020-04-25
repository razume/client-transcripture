import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box, NavBar } from "../styled-components/StyledComponents";
import {
  Typography,
  Button,
  Breadcrumbs,
  Link,
  CircularProgress,
} from "@material-ui/core";
import TranscriptsReport from "./reporting/TranscriptsReport"


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
      <button onClick={handleBack}>Return to Dashboard</button>
      <TranscriptsReport transcripts={transcripts} />
    </ThemeProvider>
  );
}

export default Reports;
