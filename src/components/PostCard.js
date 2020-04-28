import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "../styled-components/StyledComponents";

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    maxWidth: 400,
    margin: "1.5rem",
  },
  heading: {
    fontWeight: 500,
    textAlign: "center",
    fontSize: "20pt",
    color: "#022494",
  },
  media: {
    height: 200,
  },
  buttons: {
    textAlign: "center",
  },
});

export default function MediaCard({ imageUrl, cardTitle }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.heading}>
          {cardTitle}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title="landing page card"
      />
      <Box
        display="flex"
        justifyContent="center"
        borderTop="1px solid #e3e3e3"
        py={3}
      >
        <Button size="small" color="primary">
          Learn More
        </Button>
      </Box>
    </Card>
  );
}
