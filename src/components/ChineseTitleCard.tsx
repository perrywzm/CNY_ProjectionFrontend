import React from "react";
import CNTxtSvg from '../assets/cntxt.svg';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { COLORS } from "../theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 0",
    color: COLORS.accent,
    textAlign: "center",
    textShadow: "4px 4px #333333",
  }
});

interface Props {}

const ChineseTitleCard: React.FC<Props> = () => {
  const classes = useStyles({});
  return (
    <Box className={classes.container}>
      <img style={{transform: "scale(2)"}} src={CNTxtSvg} />
      {/* <Typography variant="h1">英雄所見略同</Typography> */}
    </Box>
  );
};

export default ChineseTitleCard;
