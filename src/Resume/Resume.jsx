import { Box, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import IMG from "./Resume.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

const resumeStyles = makeStyles((theme) => ({
  paper: {
    backgroundImage: `url(${IMG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "720px",
    height: "1000px",
    left: "50%",
    position: "absolute",
    outline: "none",
    transform: "translateX(-50%)",
    top: "300px",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      width: "50vh",
    },
  },

  title: {
    fontSize: "40px",
    margin: "20px",
    fontFamily: "Montserrat Subrayada",
  },
}));

export const Resume = () => {
  const classes = resumeStyles();

  return (
    <div>
      <Typography className={classes.title}>William Payne</Typography>
      <Typography className={classes.text}>
        <Box display="inline" fontWeight="fontWeightBold">
          Email:
        </Box>{" "}
        payne.j.will@gmail.com
      </Typography>
      <Typography className={classes.text}>
        <Box display="inline" fontWeight="fontWeightBold">
          Phone #:
        </Box>{" "}
        931-624-2103
      </Typography>
      <IconButton aria-label="Linked In Profile">
          <Link href="https://www.linkedin.com/in/william-payne-67a6a5204/">
        <LinkedInIcon />
        </Link>
      </IconButton>
      <IconButton aria-label="GitHub Profile">
          <Link href="https://github.com/Wjpayne" >
        <GitHubIcon />
        </Link>
      </IconButton>
      <Paper className={classes.paper}></Paper>
    </div>
  );
};

// https://www.linkedin.com/in/william-payne-67a6a5204/
