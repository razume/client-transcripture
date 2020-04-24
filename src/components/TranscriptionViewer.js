import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box } from "../styled-components/StyledComponents";
import axios from "axios"

const TranscriptionViewer = ({ TranscriptionData, setFileSelect, posturl }) => {
    console.log(TranscriptionData)

    return (
        <ThemeProvider theme={theme}>
            <Box style={{ padding: "5rem" }} width="30rem" id="PutSampleVideo">
                <button onClick={() => setFileSelect(false)}> Go back</button>
                <video src={TranscriptionData.playUrl} controls></video>
                <p style={{ whiteSpace: "pre-line" }}>{TranscriptionData.content}</p>
            </Box>
        </ThemeProvider>
    );
}

export default TranscriptionViewer;
