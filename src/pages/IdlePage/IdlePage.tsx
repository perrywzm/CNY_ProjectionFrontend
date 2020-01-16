import React from "react";
import MainTitleCard from "../../components/MainTitleCard";
import { makeStyles } from "@material-ui/styles";
import CoinTree from "../../components/CoinTree";
import { useDependency } from "./../../services/DependencyInjector";
import SocketService from "./../../services/SocketService";
import GameService from "./../../game/GameService";
import GameStateRedirector from "../../components/GameStateRedirector";
import { ProgressState } from "../../models/GameState";
import LeaderboardScroll from "../ScoreDisplay/LeaderboardScroll";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    alignItems: "stretch"
  },
  cointreeContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginBottom: "64px"
  }
});

interface Props {}

const IdlePage: React.FC<Props> = () => {
  const classes = useStyles({});
  const gameService = useDependency(GameService);
  const [isShowingLeaderboard, setIsShowingLeaderboard] = React.useState(false);

  const handleEndgameEvent = () => {
    if (gameService.gameState === ProgressState.END) {
      setIsShowingLeaderboard(true);
    }
  };

  return (
    <div className={classes.container}>
      <GameStateRedirector gameService={gameService} />
      <MainTitleCard />
      <div className={classes.cointreeContainer} onClick={handleEndgameEvent}>
        <CoinTree />
      </div>
      <LeaderboardScroll
        show={isShowingLeaderboard}
        onClose={() => setIsShowingLeaderboard(false)}
      />
    </div>
  );
};

export default IdlePage;
