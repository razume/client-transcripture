import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";


const clientID = "wvaVD6itTme4P9YBmPMZkg"

// Set Dev variables and Prod Variables 

if (process.env.NODE_ENV === "development") {
  var redirectURL = "http://localhost:3000/"
  var posturl = "http://localhost:5000"
} else {
  var redirectURL = "https://client-transcipture.herokuapp.com/"
  var posturl ="https://tranbackend.herokuapp.com"
}

console.log("redirectURL", redirectURL)
const url = ('https://zoom.us/oauth/authorize?response_type=code&client_id=' + clientID + '&redirect_uri=' + redirectURL)
function App() {

  useEffect(() => {
    if (window.location.href.indexOf("code") > -1) {
      console.log(window.location.href)
      let currenturl = window.location.href
      let StartPositionCode = window.location.href.indexOf("code") + 5
      let lastindexofurl = window.location.href.length
      let code = (currenturl.slice(StartPositionCode, lastindexofurl))
      console.log("Code:", code)


      axios.post(`${posturl}/api/auth`, {
        code: code
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }
  }, [])

  return (
    <div >
      <a href={url}>
        <button>Click Here</button>
      </a>
    </div>
  );
}

export default App;
