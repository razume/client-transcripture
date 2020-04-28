import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 415,
    minWidth: 300,
    margin: "1rem",
    marginRight: "0.5rem",
    marginleft: "0.5rem",
  },
  media: {
    height: 210,
  },
  heading: {
    fontWeight: 500,
    marginTop: ".4rem",
    textAlign: "center",
  },
});

export default function PostCard({ imageUrl, cardTitle, cardBody }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.heading}
        >
          {cardTitle}
        </Typography>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="landing page card"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardBody}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
