import React from "react";
import {
  makeStyles,
  GridListTile,
  GridList,
  GridListTileBar
} from "@material-ui/core";
import TitleCard from "../../components/TitleCard";
import { COLORS } from "../../theme";
import { useHistory } from "react-router-dom";
import { useDependency } from "./../../services/DependencyInjector";
import GameService from "./../../game/GameService";
import { QuestionState, ProgressState } from "../../models/GameState";
import GameStateRedirector from "../../components/GameStateRedirector";
import AjaxService from "../../services/AjaxService";
import ScoreResultsGraph from "./ScoreResultsGraph";
import LeaderboardScroll from "./LeaderboardScroll";

const useStyles = makeStyles({
  container: {
    height: "calc(100vh - 24px)",
    display: "flex",
    flexFlow: "column",
    overflow: "hidden"
  },
  title: {
    fontSize: "3em"
  },
  graphContainer: {
    padding: "24px 24px 0 24px",
    height: "60vh",
    display: "flex",
    alignItems: "flex-end"
  }
});

interface Props {}

const ScoreDisplay: React.FC<Props> = () => {
  const classes = useStyles({});
  const history = useHistory();
  const gameService = useDependency(GameService);
  const [isShowingLeaderboard, setIsShowingLeaderboard] = React.useState(false);

  console.log("Updating...");

  React.useEffect(() => {
    const handleGameStateAsync = async () => {
      await gameService.getCurrentGameState();

      if (gameService.questionState === QuestionState.END) {
        gameService.getQuestionResults(gameService.currentQuestionPos);
      }
    };

    handleGameStateAsync();
  }, []);

  if (
    gameService.questionsMap.size === 0 ||
    gameService.gameState === ProgressState.END
  )
    return <GameStateRedirector gameService={gameService} />;

  const currentQn = gameService.questionsMap.get(
    gameService.currentQuestionPos
  );
  if (!currentQn) return <></>;

  const images = currentQn.images.sort((a, b) => a.id - b.id);

  return (
    <div
      className={classes.container}
      // onClick={() => history.push("/projection-qn")}
    >
      <GameStateRedirector gameService={gameService} />
      <TitleCard
        className={classes.title}
        onClick={() => setIsShowingLeaderboard(true)}
      >
        {currentQn.title}
      </TitleCard>

      <div className={classes.graphContainer}>
        <ScoreResultsGraph
          question={currentQn}
          availableResults={gameService.questionResultsMap.get(currentQn.id)}
        />
      </div>
      <GridList style={{ padding: 24 }} cols={images.length}>
        {images.map(image => (
          <GridListTile style={{ padding: 4, height: "100%" }}>
            <img src={image.url} />
            <GridListTileBar subtitle={image.title} />
          </GridListTile>
        ))}
      </GridList>

      <LeaderboardScroll
        show={isShowingLeaderboard}
        onClose={() => setIsShowingLeaderboard(false)}
      />
    </div>
  );
};

export default ScoreDisplay;

// export default class ScoreDisplay {}
