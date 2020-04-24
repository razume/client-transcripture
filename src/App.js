import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styled-components/theme";
import "./App.css";
import LandingPage from "./components/LandingPage";
// import Dashboard from "./components/Dashboard";
import Transcripts from "./components/Transcripts";
import axios from "axios";

const clientID = "wvaVD6itTme4P9YBmPMZkg";

// Set Dev variables and Prod Variables
var redirectURL;
var posturl;
if (process.env.NODE_ENV === "development") {
  redirectURL = "http://localhost:3000/";
  posturl = "http://localhost:5000";
} else {
  redirectURL = "https://client-transcipture.herokuapp.com/";
  posturl = "https://tranbackend.herokuapp.com";
}

function App() {
  const [authCode, setAuthCode] = useState("");

  useEffect(() => {
    // Getting Auth code from url
    if (window.location.href.indexOf("code") > -1) {
      let currenturl = window.location.href;
      let StartPositionCode = window.location.href.indexOf("code") + 5;
      let lastindexofurl = window.location.href.length;
      let code = currenturl.slice(StartPositionCode, lastindexofurl);
      console.log("Auth Code from url:", code);

      if (localStorage.getItem("code") !== code) {
        localStorage.removeItem("code");
      }
      localStorage.setItem("code", code);
      setAuthCode(code);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {authCode ? (
        <Transcripts
          posturl={posturl}
          setAuthCode={setAuthCode}
          redirectURL={redirectURL}
        />
      ) : (
        <LandingPage
          clientID={clientID}
          redirectURL={redirectURL}
          posturl={posturl}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
