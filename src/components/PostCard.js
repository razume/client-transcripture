import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Box } from "../styled-components/StyledComponents";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    maxWidth: 400,
    margin: "1rem",
    paddingRight: "2rem",
    paddingLeft: "2rem",
    boxShadow: "1px 0px 8px #c9c9c9",
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

export default function MediaCard({ imageUrl, cardTitle, learnMoreContent }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.heading}>
          {cardTitle}
        </Typography>
      </CardContent>
      <CardMedia className={classes.media} image={imageUrl} />
      <Box
        display="flex"
        justifyContent="center"
        borderTop="1px solid #e3e3e3"
        py={3}
      >
        <Button size="small" color="primary" onClick={handleClickOpen}>
          Learn More
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{cardTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {learnMoreContent}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Card>
  );
}
