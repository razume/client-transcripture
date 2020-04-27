import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import { Button, Paper } from "@material-ui/core";
import theme from "../styled-components/theme";
import {
  Box,
  Heading,
  NavBar,
  Link,
  Text,
} from "../styled-components/StyledComponents";
import Transcripts from "./Transcripts";
import Reports from "./Reports";
import axios from "axios";
import "../App.css";

function Dashboard({
  accessTokenSaved,
  setTranscripts,
  location,
  setLocation,
  transcripts,
  setAuthCode,
  posturl,
  redirectURL,
  folders,
  setFolders,
  meetingRequests,
  setMeetingRequests,
}) {
  const LogOutClicked = () => {
    localStorage.removeItem("code");
    setAuthCode("");
    window.location.href = redirectURL;
    window.sessionStorage.clear();
  };

  const requestReports = () => {
    setLocation("Reports");
  };

  const renderLocation = () => {
    if (location === "Transcript") {
      return (
        <Transcripts
          requestReports={requestReports}
          LogOutClicked={LogOutClicked}
          setLocation={setLocation}
          setTranscripts={setTranscripts}
          setFolders={setFolders}
          folders={folders}
          redirectURL={redirectURL}
          setAuthCode={setAuthCode}
          accessTokenSaved={accessTokenSaved}
          transcripts={transcripts}
          posturl={posturl}
        />
      );
    } else if (location === "Reports") {
      return (
        <Reports
          requestReports={requestReports}
          LogOutClicked={LogOutClicked}
          transcripts={transcripts}
          setLocation={setLocation}
        />
      );
    } else if (location === "") {
      return (
        <Transcripts
          requestReports={requestReports}
          LogOutClicked={LogOutClicked}
          setLocation={setLocation}
          setTranscripts={setTranscripts}
          setFolders={setFolders}
          folders={folders}
          redirectURL={redirectURL}
          setAuthCode={setAuthCode}
          accessTokenSaved={accessTokenSaved}
          transcripts={transcripts}
          posturl={posturl}
        />
      );
    }
  };

  return <div>{renderLocation()}</div>;
}

export default Dashboard;
