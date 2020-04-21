import React from "react";
import theme from "../styled-components/theme";
import { Box, Text } from "../styled-components/StyledComponents";
import {
  Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";

import { Paper } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FolderIcon from "@material-ui/icons/Folder";

const MainPage = ({ posturl, setLocation, location }) => {
  const requestMeetings = () => {
    setLocation("Transcripts");
  };

  const requestReports = () => {
    setLocation("Reports");
  };

  console.log("location", location);
  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        width="90%"
        alignItems="center"
      >
        <Box width="86%" mb="1rem">
          <Paper>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="24pt"
              fontWeight="100"
              height="4rem"
            >
              Dashboard
            </Box>
          </Paper>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          width="90%"
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            height="65vh"
            justifyContent="center"
            alignItems="center"
          >
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box height="4rem" display="flex" alignItems="center">
                  <FolderIcon /> <Text ml="1rem">Meeting transcripts</Text>
                </Box>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box width="30rem" id="PutSampleVideo">
                  Click{" "}
                  <Link onClick={requestMeetings} color="error">
                    here
                  </Link>{" "}
                  to access the transcripts from your recorded Zoom meetings.
                </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box height="4rem" display="flex" alignItems="center">
                  <EqualizerIcon /> <Text ml="1rem">Reports</Text>
                </Box>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box width="30rem">
                  Click{" "}
                  <Link onClick={requestReports} color="error">
                    here
                  </Link>{" "}
                  to view reports and meeting data
                </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box height="4rem" display="flex" alignItems="center">
                  <SettingsIcon /> <Text ml="1rem">Settings</Text>
                </Box>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box width="30rem">
                  Configure various settings to your specifications
                </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Box>
          <Box
            display="flex"
            flex="1"
            height="65vh"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              height="30rem"
              width="30rem"
              borderRadius="50%"
              border="3px solid tomato"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow={`1px 1px 10px ${theme.colors.gray[1]}`}
              color="tomato"
            >
              Saved Transcripts Chart
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
