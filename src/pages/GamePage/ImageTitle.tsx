import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: "12px",
    backgroundColor: "rgba(0,0,0,0.4)",
    textShadow: "0 0 4px #000, 0 0 6px #000, 0 0 8px #000",
    fontSize: "64px",
    lineHeight: "72px"
  }
});

interface Props {}

const ImageTitle: React.FC<Props> = props => {
  const classes = useStyles({});
  return <div className={classes.title}>{props.children}</div>;
};

export default ImageTitle;
