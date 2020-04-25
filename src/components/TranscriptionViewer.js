import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box } from "../styled-components/StyledComponents";
import axios from "axios";
import {
  Typography,
  Breadcrumbs,
  Button,
  Link,
  CircularProgress,
} from "@material-ui/core";
import BackImg from "../media/back_img.svg";

const TranscriptionViewer = ({ TranscriptionData, setFileSelect, posturl }) => {
  console.log(TranscriptionData);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: "center" }}>
        <h3 className="Filename">Name: {TranscriptionData.name}</h3>
        <div>
        <Button style={{ textAlign: "left", justifyContent: "left" }}>
          <img
            className="BackButton"
            src={BackImg}
            onClick={() => setFileSelect(false)}
          ></img>
        </Button>
        </div>
        <Box className="TranscriptViewerBox">
          <div>
            <video
              style={{ width: "50vw", minWidth: "500px" }}
              src={TranscriptionData.playUrl}
              controls
            ></video>
          </div>
          <br />
          <div className="Transcript_Viewer_Text">
            <span>{TranscriptionData.content}</span>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default TranscriptionViewer;
