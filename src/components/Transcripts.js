import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box, NavBar, Text } from "../styled-components/StyledComponents";
import axios from "axios";
import Home from "./folder-system/Home.js";
import {
  Typography,
  Button,
  Breadcrumbs,
  Link,
  LinearProgress,
} from "@material-ui/core";

function Transcripts({
  accessTokenSaved,
  posturl,
  setAuthCode,
  redirectURL,
  folders,
  transcripts,
  setFolders,
  setTranscripts,
}) {
  const [location, setLocation] = useState("");
  let [directory, setDirectory] = useState(["Home"]);

  const getFolders = () => {
    axios
      .get(posturl + "/api/db/folders")
      .then((fold) => setFolders(fold.data.folders));
  };

  const requestMeetings = () => {
    axios.get(posturl + "/api/recordings").then(() => {
      axios
        .get(posturl + "/api/db/transcripts")
        .then((res) => setTranscripts(res.data));
    });

    axios
      .get(posturl + "/api/db/transcripts")
      .then((res) => setTranscripts(res.data));
  };

  const LogOutClicked = () => {
    localStorage.removeItem("code");
    setAuthCode("");
    window.location.href = redirectURL;
  };

  const requestReports = () => {
    setLocation("Reports");
  };

  useEffect(() => {
    if (accessTokenSaved) {
      console.log("HOW MANY TIMES AM I BEING CALLED?");
      requestMeetings();
      getFolders();
    }
  }, [accessTokenSaved]);

  const climbTree = () => {
    if (directory.length > 1) {
      setDirectory([...directory].splice(0, directory.length - 1));
    } else {
      console.log("This as far back as she goes cheif.");
    }
  };

  console.log("FOLDERS", folders);
  console.log("TRANSCRIPTS", transcripts);

  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <Box display="flex" flexDirection="row" alignItems="center">
          <img
            className="top-left-logo"
            src={require("../media/scribe_circle_dark.svg")}
            alt=""
          />
        </Box>

        <Box>
          <Link onClick={requestReports}>Reports</Link>
          <Button onClick={LogOutClicked}>Log Out</Button>
        </Box>
      </NavBar>
      {/* if request is not finished, the LinearProgress component should be rendered */}
      {!transcripts ? (
        <Box width="60%" display="flex" justifyContent="center">
          <Text>Fetching transcripts . . .</Text>
          <LinearProgress />
        </Box>
      ) : (
        ""
      )}
      <Box>
        <Box width="30rem" id="PutSampleVideo">
          Access all the transcripts of your recorded Zoom meetings
        </Box>
        <div>
          <h4>Current directory: {directory[directory.length - 1]}</h4>
          <Breadcrumbs aria-label="breadcrumb">
            {directory.map((directory) => {
              return <Typography key={Math.random()}>{directory}</Typography>;
            })}
          </Breadcrumbs>
          {directory.length > 1 && <button onClick={climbTree}>&#8592;</button>}
          <Home
            directory={directory}
            setDirectory={setDirectory}
            transcripts={transcripts}
            folders={folders}
            setFolders={setFolders}
            posturl={posturl}
            setTranscripts={setTranscripts}
          />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default Transcripts;
