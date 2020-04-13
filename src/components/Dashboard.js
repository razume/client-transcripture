import React, { useState } from "react";
import MainPage from "./MainPage";
import { Button } from "@material-ui/core";
import {
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
        <Link href="/">TranScripture</Link>
        <Button onClick={getAccessToken}>Get accessToken</Button>
        <Button onClick={LogOutClicked}>Log Out</Button>
      </NavBar>
      <Heading
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        fontSize="24pt"
      >
        <Text letterSpacing={1} m={2} fontSize="24pt">
          TranScripture
        </Text>
        Dashboard
      </Heading>
      {renderLocation()}
    </div>
  );
}

export default Dashboard;
