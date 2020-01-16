import React from "react";
import { makeStyles } from "@material-ui/core";

interface Props {
  fontSize?: number;
}

const useStyles = makeStyles({
  title: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: "12px",
    backgroundColor: "rgba(0,0,0,0.4)",
    textShadow: "0 0 4px #000, 0 0 6px #000, 0 0 8px #000",
    fontSize: (props: Props) => (props.fontSize ? props.fontSize : "64px"),
    lineHeight: (props: Props) =>
      props.fontSize ? `${props.fontSize + 8}px` : "72px"
  }
});

const ImageTitle: React.FC<Props> = props => {
  const classes = useStyles(props);
  return <div className={classes.title}>{props.children}</div>;
};

export default ImageTitle;
