import React, { useEffect } from "react"

import {
  Box,
  Card,
  Heading,
  Link,
  NavBar,
} from "../styled-components/StyledComponents"
import "../App.css"
import axios from "axios"

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
          console.log(error)
        })
    }
  }, [posturl])

  return (
    <Box>
      <NavBar color="white" mb="3" p="2">
        <Link href="/">TranScripture</Link>
        <Link href={url}>Login</Link>
      </NavBar>
      <Heading textAlign="center" fontWeight="700">
        Landing Page - Not Logged In
      </Heading>
      <Box display="flex" justifyContent="space-around">
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card>Card 3</Card>
      </Box>

      <div></div>
    </Box>
  );
};


export default Login