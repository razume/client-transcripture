import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/theme";
import {
  Box,
  Button,
  Card,
  NavBar,
  Link,
} from "../styled-components/StyledComponents";
import "../App.css";

function Dashboard() {
  const handleClick = () => {
    localStorage.removeItem("code");
  };
  return (
    <div>
      <NavBar>
        <Link href="/">TranScripture</Link>
        <Button onClick={handleClick}>Log Out</Button>
      </NavBar>
      <h1>deeznuts</h1>
      <p>{localStorage.getItem("code")}</p>
      <Box display="flex" justifyContent="space-around">
        <Card>Card Uno</Card>
        <Card>Card Dos</Card>
        <Card>Card Tres</Card>
      </Box>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
}

export default Dashboard;
