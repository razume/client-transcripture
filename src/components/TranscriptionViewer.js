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

  const ExportTranscript = (transcriptPath) => {
    //We have to remove the dot in the file path:
    const revisedPath = transcriptPath.substring(1);
    // axios
    //   .get(posturl + "/api/export/transcript", { path: revisedPath })
    window.open(`${posturl}/api/export/transcript?filepath=${revisedPath}`);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="80%"
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
          <Button
            style={{ padding: "1rem" }}
            onClick={() =>
              ExportTranscript(TranscriptionData.transcriptionFilePath)
            }
          >
            <img
              style={{
                height: "40px",
                paddingBottom: "8px",
                marginRight: "3rem",
                marginLeft: "3rem",
              }}
              src={require("../media/export_icon.svg")}
            ></img>
          </Button>
        </Box>

        <Box className="TranscriptViewerBox" width="83vw">
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
