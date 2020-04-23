import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box } from "../styled-components/StyledComponents";
import Transcripts from "./reporting/transcripts"

const TranscriptionViewer = ({TranscriptionData, setFileSelect }) => {
    console.log(TranscriptionData)
    return (
        <ThemeProvider theme={theme}>
            <Box width="30rem" id="PutSampleVideo">
            <button onClick={() => setFileSelect(false)}> Go back</button>
            <p style={{whiteSpace: "pre-line"}}>{TranscriptionData.content}</p>
            </Box>
        </ThemeProvider>
    );
}

export default TranscriptionViewer;
