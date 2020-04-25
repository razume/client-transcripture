import React, { useState, useEffect } from "react";
import theme from "../styled-components/theme";
import {
  Box,
  Card,
  Heading,
  NavBar,
  Text,
} from "../styled-components/StyledComponents";
import PostCard from "./PostCard";
import { Button, Link } from "@material-ui/core";
import "../App.css";
import axios from "axios";

const LandingPage = ({ setAccessTokenSaved, redirectURL, clientID, posturl, setFolders, setTranscripts }) => {
  const url =
    "https://zoom.us/oauth/authorize?response_type=code&client_id=" +
    clientID +
    "&redirect_uri=" +
    redirectURL;

  useEffect(() => {
    if (window.location.href.indexOf("code") > -1) {
      let currenturl = window.location.href;
      let StartPositionCode = window.location.href.indexOf("code") + 5;
      let lastindexofurl = window.location.href.length;
      let code = currenturl.slice(StartPositionCode, lastindexofurl);

      axios
        .post(`${posturl}/api/auth`, {
          code: code,
        })
        .then(function (response) {
          console.log("Request for new Access token Response:", response);
          setAccessTokenSaved(true)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [posturl]);

  return (
    <Box>
      <NavBar>
        <Box display="flex" flexDirection="row" alignItems="center">
          <img
            className="top-left-logo"
            src={require("../media/scribe_circle_dark.svg")}
          />
        </Box>
        <Box>
          <Button>About</Button>
          <Button href={url}>Log in</Button>
        </Box>
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

      <Box display="flex" justifyContent="center">
        <Heading
          textAlign="center"
          fontWeight="400"
          minWidth="25rem"
          maxWidth="50rem"
          color={theme.colors.gray[6]}
        >
          Get the most out of Zoom. View your team's recorded meetings,
          transcripts of the meetings, and reports.
        </Heading>
      </Box>

      <Box display="flex" justifyContent="space-around" flexWrap="wrap" mt={5}>
        <PostCard
          imageUrl={require("../media/typewriter.jpg")}
          cardTitle={"Transcripts"}
          cardBody={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <PostCard
          imageUrl={require("../media/camcorder.jpg")}
          cardTitle={"Recorded Meetings"}
          cardBody={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />

        <PostCard
          imageUrl={require("../media/calculator.jpg")}
          cardTitle={"Reports"}
          cardBody={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
      </Box>
      <Box
        mt="12rem"
        backgroundColor={theme.colors.gray[3]}
        height="55rem"
        width="100%"
      >
        <img
          className="landing-page-flowchart"
          src={require("../media/landing_page_flow_chart.svg")}
          alt="flow chart mapping out Scribe functionality"
        />
      </Box>
    </Box>
  );
};

export default LandingPage;
