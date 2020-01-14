import React from "react";
import GameService from "./../game/GameService";
import { useDependency } from "../services/DependencyInjector";
import { useLocation, useHistory } from "react-router-dom";
import { ProgressState, QuestionState } from "../models/GameState";

interface Props {
  gameService: GameService;
}

const GameStateRedirector: React.FC<Props> = ({ gameService }) => {
  const history = useHistory();
  const location = useLocation();
  console.log("Current game service", gameService);

  const handleQuestionStateRedirection = () => {
    switch (gameService.questionState) {
      case QuestionState.START:
        if (!doesLocationMatch(location.pathname, "/projection-qn")) {
          return history.push("/projection-qn");
        }
        break;
      case QuestionState.END:
        if (!doesLocationMatch(location.pathname, "/projection-score")) {
          return history.push("/projection-score");
        }
        break;
    }
  };
  
  const handleGameStateRedirection = () => {
    switch (gameService.gameState) {
      case ProgressState.EMPTY:
      case ProgressState.WAITING:
        if (!doesLocationMatch(location.pathname, "/")) {
          return history.push("/");
        }
        break;
      case ProgressState.PLAYING:
        handleQuestionStateRedirection();
        break;
      case ProgressState.END:
        if (!doesLocationMatch(location.pathname, "/")) {
          return history.push("/");
        }
        break;
    }
  };

  React.useEffect(handleGameStateRedirection, []);

  React.useEffect(() => {
    handleGameStateRedirection();
  }, [gameService.gameState, gameService.questionState]);

  return <></>;
};

const doesLocationMatch = (pathname: string, destination: string) => {
  return pathname.toLowerCase() === destination.toLowerCase();
};

export default GameStateRedirector;
