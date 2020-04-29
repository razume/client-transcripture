import React, { useState, useEffect } from "react";
import theme from "../styled-components/theme";
import {
  Box,
  Heading,
  NavBar,
  Text,
} from "../styled-components/StyledComponents";
import PostCard from "./PostCard";
import { Button } from "@material-ui/core";
import "../App.css";
import axios from "axios";

const LandingPage = ({
  setAccessTokenSaved,
  redirectURL,
  clientID,
  posturl,
}) => {
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
          setAccessTokenSaved(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [posturl]);

  return (
    <Box style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <Box position="relative" height="100%">
        <NavBar>
          <Box display="flex" flexDirection="row" alignItems="center">
            <img
              className="top-left-logo"
              src={require("../media/scribe_logo_text.svg")}
            />
          </Box>
          <Box>
            <Button>About</Button>
            <Button href={url}>Log in</Button>
          </Box>
        </NavBar>

        <Box display="flex" justifyContent="center">
          <Heading
            textAlign="center"
            fontWeight="500"
            fontSize="24pt"
            minWidth="25rem"
            maxWidth="50rem"
            color={theme.colors.gray[7]}
            zIndex="2"
          >
            Get the most out of Zoom. View your team's recorded meetings,
            transcripts of the meetings, and reports.
          </Heading>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="space-around"
          mt="5rem"
        >
          <PostCard
            imageUrl={require("../media/cardart_transcript.svg")}
            cardTitle="Transcripts"
          />{" "}
          <PostCard
            imageUrl={require("../media/cardart_player.svg")}
            cardTitle="Recorded Meetings"
          />{" "}
          <PostCard
            imageUrl={require("../media/cardart_reports.svg")}
            cardTitle="Reports"
          />
        </Box>
      </Box>

      <Box
        className="landingpage_bottom_container"
        height="55rem"
        width="100%"
        backgroundColor="#36404f"
        style={{ zIndex: -2, position: "absolute" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ zIndex: -1, position: "absolute" }}
        >
          <path
            fill="#404b5c"
            fill-opacity="1"
            d="M0,96L30,128C60,160,120,224,180,229.3C240,235,300,181,360,133.3C420,85,480,43,540,21.3C600,0,660,0,720,53.3C780,107,840,213,900,240C960,267,1020,213,1080,160C1140,107,1200,53,1260,80C1320,107,1380,213,1410,266.7L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 320"
          style={{ zIndex: -1, position: "absolute", marginTop: "20rem" }}
        >
          <path
            fill="#2F3A4D"
            fill-opacity="1"
            d="M0,32L20,48C40,64,80,96,120,96C160,96,200,64,240,48C280,32,320,32,360,74.7C400,117,440,203,480,208C520,213,560,139,600,122.7C640,107,680,149,720,170.7C760,192,800,192,840,202.7C880,213,920,235,960,229.3C1000,224,1040,192,1080,165.3C1120,139,1160,117,1200,112C1240,107,1280,117,1320,117.3C1360,117,1400,107,1420,101.3L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
        <Box mt="5rem">
          <Text
            mb="5rem"
            textAlign="center"
            color="white"
            fontSize="20pt"
            fontWeight="500"
          >
            Why Scribe?
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          height="27rem"
          color="white"
          px="3rem"
          flexWrap="wrap"
        >
          <Box
            display="flex"
            flexDirection="column"
            flex="1"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box flex="1" width="27rem">
              <img
                src={require("../media/dollar_icon.svg")}
                style={{ height: "40px" }}
              />
              <h3>Free to use</h3>
              <Text>
                Don't worry. We won't ask you for credit card information.
              </Text>
            </Box>
            <Box flex="1" width="27rem">
              <img
                src={require("../media/check_icon.svg")}
                style={{ height: "40px" }}
              />
              <h3>Ease of use</h3>
              <Text>
                You won't need to comb through documentation and tutorials to be
                able to use Scribe. Sign in and you're a few clicks away from
                improving productivity.
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex="1"
            alignItems="center"
          >
            <Box flex="1" width="27rem">
              <img
                src={require("../media/folder_icon.svg")}
                style={{ height: "40px" }}
              />
              <h3>Familiar Design</h3>
              <Text>
                We use an intuitive folder structure interface similar to what
                you use on a desktop computer.
              </Text>
            </Box>
            <Box flex="1" width="27rem">
              <img
                src={require("../media/rocket_icon.svg")}
                style={{ height: "36px" }}
              />
              <h3>Technology you can trust</h3>
              <Text>
                Powered by Google, Scribe transcriptions can pick out multiple
                speakers and provide industry leading accuracy.
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex="1"
            alignItems="center"
          >
            <Box flex="1" width="27rem">
              <img
                src={require("../media/lightning_icon.svg")}
                style={{ height: "40px" }}
              />
              <h3>Fast</h3>
              <Text>Transcribe entire meetings in a few minutes or less.</Text>
            </Box>
            <Box flex="1" width="27rem">
              <img
                src={require("../media/lock_icon.svg")}
                style={{ height: "36px" }}
              />
              <h3>Secure</h3>
              <Text>
                You can rest easy knowing your information is secured with
                Oauth2.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
