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

function Dashboard({ setAuthCode, posturl, redirectURL }) {
  const [location, setLocation] = useState("");

  const LogOutClicked = () => {
    localStorage.removeItem("code");
    setAuthCode("");
    window.location.href = redirectURL;
  };

  const getAccessToken = () => {
    axios
      .get(`${posturl}/api/token`)
      .then((res) => console.log("token acquired ", res.data.accessToken));
  };

  const renderLocation = () => {
    if (location === "") {
      return (
        <MainPage
          posturl={posturl}
          setLocation={setLocation}
          location={location}
        />
      );
    } else if (location === "Transcripts") {
      return <Transcripts posturl={posturl} setLocation={setLocation} />;
    } else if (location === "Reports") {
      return <Reports setLocation={setLocation} />;
    }
  };

  return (
    <div>
      <NavBar>
        <Box display="flex" flexDirection="row" alignItems="center">
          <img
            className="top-left-logo"
            src={require("../media/scribe_circle_dark.svg")}
            alt=""
          />
        </Box>
        <Button onClick={getAccessToken}>Get accessToken</Button>
        <Button onClick={LogOutClicked}>Log Out</Button>
      </NavBar>
      <svg
        className="background-wave"
        viewBox="0 0 500 200"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          d="M0,200 C350,100 350,0 500,50 L500,00 L0,0 Z"
          style={{ stroke: "none", fill: "#E4ECED" }}
        />
      </svg>
      {renderLocation()}
    </div>
  );
}

export default Dashboard;
