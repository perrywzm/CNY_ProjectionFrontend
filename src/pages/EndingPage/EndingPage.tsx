import React from "react";
import MainTitleCard from "../../components/MainTitleCard";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@material-ui/core";
import { COLORS } from "../../theme";
import CoinTree from "../../components/CoinTree";
import GameStateRedirector from "../../components/GameStateRedirector";
import { useDependency } from "./../../services/DependencyInjector";
import GameService from "./../../game/GameService";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    alignItems: "stretch"
  },
  title: {
    fontSize: "40px"
  }
});

interface Props {}

const EndingPage: React.FC<Props> = () => {
  const classes = useStyles({});
  const gameService = useDependency(GameService);
  return (
    <div className={classes.container}>
      <GameStateRedirector gameService={gameService} />
      <MainTitleCard />
      <Box display="flex" flexDirection="column" padding="24px">
        <Typography variant="h1">Thanks for playing!</Typography>
      </Box>
      <CoinTree />
    </div>
  );
};

export default EndingPage;
