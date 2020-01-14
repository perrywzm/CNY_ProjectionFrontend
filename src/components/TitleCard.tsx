import React from "react";
import { COLORS } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: COLORS.accent,
    background:
      "linear-gradient(90deg, rgba(255,191,80,1) 0%, rgba(224,143,0,1) 100%)",
    padding: "32px 12px",
    color: COLORS.primary,
    boxShadow: `inset 0 16px 24px -16px ${COLORS.secondary}, inset 0 -16px 24px -16px ${COLORS.secondary}`,
    textAlign: "center",
    fontWeight: "bold",
    textShadow: `0px 0px 6px ${COLORS.primary}`
  }
});

interface Props {
  className?: string;
}

const TitleCard: React.FC<Props> = props => {
  const classes = useStyles({});
  return (
    <div className={`${classes.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default TitleCard;
