import React, { useEffect } from "react";
import theme from "../styled-components/theme";
import {
  Box,
  Card,
  Heading,
  NavBar,
  Text,
} from "../styled-components/StyledComponents";
import { Button, Link } from "@material-ui/core";
import "../App.css";
import axios from "axios";

const Login = ({ redirectURL, clientID, posturl }) => {
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
            src={require("../scribe_logo.png")}
            alt=""
          />
          <Text
            letterSpacing={theme.letterSpacings[0]}
            color={theme.colors.gray[8]}
            fontSize="22pt"
            fontWeight={400}
          >
            scribe
          </Text>
        </Box>
        <Button href={url}>Log in</Button>

        {/*<Link href={url}>Login</Link>*/}
      </NavBar>
      <Box display="flex" justifyContent="center">
        <Heading
          textAlign="center"
          fontWeight="700"
          minWidth="25rem"
          maxWidth="50rem"
        >
          Get the most out of Zoom. View your team's recorded meetings,
          transcripts of the meetings, and reports.
        </Heading>
      </Box>

      <Box display="flex" justifyContent="space-around">
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card>Card 3</Card>
      </Box>

      <div></div>
    </Box>
  );
};

export default Login;
