import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box } from "../styled-components/StyledComponents";

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
