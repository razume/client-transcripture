import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box } from "../styled-components/StyledComponents";
import axios from "axios"

const TranscriptionViewer = ({ TranscriptionData, setFileSelect, posturl }) => {
    console.log(TranscriptionData)

    return (
        <ThemeProvider theme={theme}>
            <Box className="TranscriptViewerBox">
                <button  style={{width: "5rem"}} onClick={() => setFileSelect(false)}> Go back</button>
                <div>
                <video style={{width: "50vw", minWidth: "500px"}} src={TranscriptionData.playUrl} controls></video>
                </div>
                <br/>
                <div className="Transcript_Viewer_Text">
                <span>{TranscriptionData.content}</span>
                </div>
            </Box>
        </ThemeProvider>
    );
}

export default TranscriptionViewer;
