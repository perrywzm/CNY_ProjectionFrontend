import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    top: 0,
    height: "100vh",
    width: "100vw",
    background: "#000"
  }
});

interface Props {
  className?: string;
  style?: Record<string, string>;
}

const ModalOverlay: React.FC<Props> = props => {
  const classes = useStyles({});
  return (
    <div
      onScroll={defuseEvent}
      onClick={defuseEvent}
      onTouchStart={defuseEvent}
      className={`${classes.overlay} ${props.className || ""}`}
      style={props.style}
    />
  );
};

const defuseEvent = (e: any) => {
  console.log(123);
  e.preventDefault();
  e.stopPropagation();
};

export default ModalOverlay;
