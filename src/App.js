import React from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import theme from "./styled-components/theme";
import { Box, Button, Flex, Text } from "./styled-components/StyledComponents";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          color="white"
          bg="navy"
          mb="3"
          p="2"
          fontSize={4}
          fontWeight={4}
          letterSpacing={0}
          width="100%"
          textAlign="center"
        >
          TranScripture
        </Box>
        <Flex flexDirection="row">
          <Button
            color="white"
            bg="gray"
            mx="2"
            width={1}
            height={0}
            onClick={() => axios.get("https://tranbackend.herokuapp.com/")}
          >
            Click me
          </Button>
          <Text fontSize={3}>Hello world</Text>
        </Flex>
      </Box>
    </ThemeProvider>
  );
}

export default App;
