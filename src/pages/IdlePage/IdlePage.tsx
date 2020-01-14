import React from "react";
import MainTitleCard from "../../components/MainTitleCard";
import { makeStyles } from "@material-ui/styles";
import CoinTree from "../../components/CoinTree";
import { useDependency } from "./../../services/DependencyInjector";
import SocketService from "./../../services/SocketService";
import GameService from "./../../game/GameService";
import GameStateRedirector from "../../components/GameStateRedirector";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    alignItems: "stretch"
  }
});

interface Props {}

const IdlePage: React.FC<Props> = () => {
  const classes = useStyles({});
  const socketService = useDependency(SocketService);
  const gameService = useDependency(GameService);

  return (
    <div className={classes.container}>
      <GameStateRedirector gameService={gameService} />
      <MainTitleCard />
      <div style={{ flex: 1, display: "flex", alignItems: "center", marginBottom: "64px" }}>
        <CoinTree />
      </div>
    </div>
  );
};

export default IdlePage;
