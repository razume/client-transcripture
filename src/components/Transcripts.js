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
  CircularProgress,
} from "@material-ui/core";
import Create from "./folder-system/Create";
function Transcripts({
  requestReports,
  LogOutClicked,
  setLocation,
  accessTokenSaved,
  posturl,
  setAuthCode,
  redirectURL,
  folders,
  transcripts,
  setFolders,
  setTranscripts,
}) {
  let [directory, setDirectory] = useState(["Home"]);
  let [isRequesting, setIsRequesting] = useState(false);
  let [user, setUser] = useState({});

  const getFolders = () => {
    axios
      .get(posturl + "/api/db/folders")
      .then((fold) => setFolders(fold.data.folders));
  };

  const requestUser = () => {
    axios.get(posturl + "/api/me").then((response) => setUser(response.data));
  };

  const requestMeetings = () => {
    if (!window.sessionStorage.getItem("meetingsRequested")) {
      setIsRequesting(true);
      axios.get(posturl + "/api/recordings").then(() => {
        axios
          .get(posturl + "/api/db/transcripts")
          .then((res) => {
            setTranscripts(res.data);
          })
          .then(() => setIsRequesting(false))
          .then(() => window.sessionStorage.setItem("meetingsRequested", true));
      });

      axios
        .get(posturl + "/api/db/transcripts")
        .then((res) => setTranscripts(res.data));
    }
  };

  useEffect(() => {
    if (accessTokenSaved) {
      requestMeetings();
      getFolders();
      requestUser();
    }
  }, [accessTokenSaved]);

  const climbTree = () => {
    if (directory.length > 1) {
      setDirectory([...directory].splice(0, directory.length - 1));
    } else {
      console.log("This as far back as she goes cheif.");
    }
  };

  // console.log("FOLDERS", folders);
  // console.log("TRANSCRIPTS", transcripts);

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
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ padding: "1rem" }}>
          <h2>Welcome {user.first_name ? `, ${user.first_name}!` : ""}</h2>
          <Create
            directory={directory}
            folders={folders}
            setFolders={setFolders}
            posturl={posturl}
          />
          <div>
            <Button size="large">
              <Link onClick={requestReports}>Detailed Reports</Link>
            </Button>
          </div>
        </div>
        <div>
          <Breadcrumbs style={{ marginLeft: "5rem" }} aria-label="breadcrumb">
            {directory.map((directory) => {
              return <Typography key={Math.random()}>{directory}</Typography>;
            })}
          </Breadcrumbs>
          {directory.length > 1 && (
            <button style={{ marginLeft: "5rem" }} onClick={climbTree}>
              &#8592;
            </button>
          )}
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
      <Box display="flex" justifyContent="center">
        {/* if request is not finished, the LinearProgress component should be rendered */}
        {isRequesting ? (
          <Box
            display="flex"
            width="21rem"
            backgroundColor="dodgerblue"
            color="white"
            justifyContent="space-between"
            borderRadius="4px"
            alignItems="center"
            style={{
              position: "fixed",
              bottom: 2,
              right: 5,
            }}
          >
            <Text ml="2rem" fontSize="14pt" fontWeight={500}>
              fetching transctipts . . . . .
            </Text>{" "}
            <Box mr="2rem">
              <CircularProgress size={30} />
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </ThemeProvider>
  );
}

export default Transcripts;
