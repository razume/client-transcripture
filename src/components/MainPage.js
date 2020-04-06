import React from "react";
import theme from "../styled-components/theme";
import { Box, Text } from "../styled-components/StyledComponents";
import { ExpansionPanel } from "@material-ui/core";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FolderIcon from "@material-ui/icons/Folder";

const MainPage = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="row" width="95%">
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
              <Box width="30rem">
                Access all the transcripts of your recorded Zoom meetings
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
              <Box width="30rem">View reports and meeting data</Box>
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
  );
};

export default MainPage;
