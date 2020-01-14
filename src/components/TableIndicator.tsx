import React from "react";
import { COLORS } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

interface StyleProps {
  hasScore?: boolean;
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    padding: "10px 30px",
    color: COLORS.accent,
    position: "fixed",
    background: "#890504",
    textAlign: (props: StyleProps) => (props.hasScore ? "left" : "right")
  }
});

interface Props {
  name: string;
  score?: number;
  onClick?: (e?: React.MouseEvent) => void;
}

const TableIndicator: React.FC<Props> = props => {
  const classes = useStyles({hasScore: props.score !== undefined && props.score !== null});
  return (
    <div onClick={props.onClick} className={classes.container}>
      {props.name}
      <div style={{ float: "left" }}>{props.score}</div>
    </div>
  );
};

export default TableIndicator;
