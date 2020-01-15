import React from "react";
import {
  makeStyles,
  GridListTile,
  GridList,
  GridListTileBar
} from "@material-ui/core";
import TitleCard from "../../components/TitleCard";
import { useHistory } from "react-router-dom";
import { useDependency } from "./../../services/DependencyInjector";
import GameService from "../../game/GameService";
import { QuestionState, ProgressState } from "../../models/GameState";
import GameStateRedirector from "../../components/GameStateRedirector";
import AjaxService from "../../services/AjaxService";
import { COLORS } from "../../theme";
import ImageTitle from "./ImageTitle";

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
  borderDiv: {
    top: 0,
    zIndex: 200,
    position: "absolute",
    width: "100%",
    height: "100%",
    border: `8px solid ${COLORS.secondary}`
  }
});

interface Props {}

const GameDisplay: React.FC<Props> = () => {
  const classes = useStyles({});
  const history = useHistory();
  const gameService = useDependency(GameService);
  const initialTimeRef = React.useRef<number>(Date.now());
  const [time, setTime] = React.useState(0);
  const timerRef = React.useRef<number>(null);

  React.useEffect(() => {
    if (!gameService.isFetchingAllQuestions) gameService.getAllQuestions();
    // gameService.currentQuestionPos = 2;
    // gameService.update();

    const handleGameStateAsync = async () => {
      await gameService.getCurrentGameState();

      if (gameService.questionState === QuestionState.END) {
        AjaxService.fetchQuestionResults(
          gameService.currentQuestionPos
        ).then(res => console.log("Your results are", res));
      }
    };

    handleGameStateAsync();
    const checkTime = () => {
      setTime(Date.now() - initialTimeRef.current);
    };
    timerRef.current = window.setInterval(checkTime, 1000);

    return () => clearInterval(initialTimeRef.current);
  }, []);

  // React.useEffect(() => {
  //   if (gameService.questionState === QuestionState.END) {
  //     ProjectionAjaxService.fetchQuestionResults(
  //       gameService.currentQuestionPos
  //     );
  //   }
  // }, [
  //   gameService.currentQuestionPos,
  //   gameService.gameState,
  //   gameService.questionState
  // ]);

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
  console.log("Now your images", images);
  return (
    <div
      className={classes.container}
      // onClick={() => history.push("/projection-score")}
    >
      <GameStateRedirector gameService={gameService} />
      <GridList
        style={{ flex: 1, padding: 24 }}
        cols={Math.ceil(images.length / 2)}
      >
        {images
          .filter((_, idx) => idx < Math.ceil(images.length / 2))
          .map(image => (
            <GridListTile style={{ padding: 8, height: "100%" }}>
              <img
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                src={image.url}
              />
              <ImageTitle>{image.title}</ImageTitle>
              <div className={classes.borderDiv} />
            </GridListTile>
          ))}
      </GridList>
      <TitleCard className={classes.title}>
        {currentQn.position}. {currentQn.title}
        <br />
        <span style={{ fontSize: "0.75em" }}>{formatTimeToString(time)}</span>
      </TitleCard>
      <GridList
        style={{ flex: 1, padding: 24 }}
        cols={Math.ceil(images.length / 2)}
      >
        {images
          .filter((_, idx) => idx >= Math.ceil(images.length / 2))
          .map(image => (
            <GridListTile style={{ padding: 4, height: "100%" }}>
              <img
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                src={image.url}
              />
              <ImageTitle>{image.title}</ImageTitle>
              <div className={classes.borderDiv} />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

const formatTimeToString = (timeInMs: number) => {
  const totalSeconds = Math.round(timeInMs / 1000);
  const mins = Math.floor(totalSeconds / 60);
  const minStr = mins < 10 ? `0${mins}` : mins.toString();
  const secs = totalSeconds % 60;
  const secStr = secs < 10 ? `0${secs}` : secs.toString();
  return `${minStr}:${secStr}`;
};

export default GameDisplay;

// export default class GameDisplay {}
