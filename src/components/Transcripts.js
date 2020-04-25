import React, { useState, useEffect} from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import { Box, NavBar } from "../styled-components/StyledComponents";
import axios from "axios";
import Home from "./folder-system/Home.js";
import { Typography, Button, Breadcrumbs, Link } from "@material-ui/core";
import Create from "./folder-system/Create"
function Transcripts({ setLocation, accessTokenSaved, posturl, setAuthCode, redirectURL, folders, transcripts, setFolders, setTranscripts }) {
  let [directory, setDirectory] = useState(["Home"]);

  const getFolders = () => {
    axios
      .get(posturl + "/api/db/folders")
      .then((fold) => setFolders(fold.data.folders));
  };

  const requestMeetings = () => {
    axios
      .get(posturl + "/api/recordings")
      .then(() => {
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
      requestMeetings();
      getFolders();
    }
  }, [accessTokenSaved])

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
      <Box style={{display: "flex", flexDirection: "row"}}>
      <div style={{padding: "1.5rem"}}>
        <h2>Welcome User!</h2>
      <Create
            directory={directory}
            folders={folders}
            setFolders={setFolders}
            posturl={posturl}
          />
          </div>
        <div >
        <Breadcrumbs  style={{marginLeft: "5rem"}} aria-label="breadcrumb">
            {directory.map((directory) => {
              return <Typography key={Math.random()}>{directory}</Typography>;
            })}
          </Breadcrumbs>
          {directory.length > 1 && <button style={{marginLeft: "5rem"}} onClick={climbTree}>&#8592;</button>}
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
