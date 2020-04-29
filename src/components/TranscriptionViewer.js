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
import { marginRight } from "styled-system";

const TranscriptionViewer = ({ TranscriptionData, setFileSelect, posturl }) => {
  console.log(TranscriptionData);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button>
            <img
              className="BackButton"
              src={BackImg}
              onClick={() => setFileSelect(false)}
              style={{ height: "40px" }}
            ></img>
          </Button>
          <h3 className="Filename">
            File name: <strong>{TranscriptionData.name}</strong>
          </h3>
          <Box width="40px" height="40px" border="1px solid orange">
            hi
          </Box>
        </Box>
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
      </Box>
    </ThemeProvider>
  );
};

export default TranscriptionViewer;
