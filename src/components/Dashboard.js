import React, { useEffect, useState } from "react"
import axios from "axios"
import MainPage from "./MainPage"
import { Button } from "@material-ui/core"
import {
  Heading,
  NavBar,
  Link,
  Text,
} from "../styled-components/StyledComponents"
import "../App.css"

function Dashboard({ setAuthCode, posturl }) {
  let [userId, setUserId] = useState()

  useEffect(() => {
    setTimeout(function () {
      axios
        .get(posturl + "/api/me")
        .then((response) => console.log("api/me success ", response.data))
    }, 1000)
  }, [])

  const handleClick = () => {
    localStorage.removeItem("code")
    setAuthCode("")
    window.location.href = "http://localhost:3000"
  }
  return (
    <div>
      <NavBar>
        <Link href="/">TranScripture</Link>
        <Button onClick={handleClick}>Log Out</Button>
      </NavBar>
      <Heading
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        fontSize="24pt"
      >
        <Text letterSpacing={1} m={2} fontSize="24pt">
          TranScripture{" "}
        </Text>{" "}
        Dashboard
      </Heading>
      <MainPage posturl={posturl} />
    </div>
  )
}

export default Dashboard
