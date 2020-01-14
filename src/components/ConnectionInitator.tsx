import React from "react";
import { useDependency } from "../services/DependencyInjector";
import GameService from "../game/GameService";
import SocketService from "../services/SocketService";

interface Props {}

const ConnectionInitiator: React.FC<Props> = () => {
  const gameService = useDependency(GameService);
  const socketService = useDependency(SocketService);

  React.useEffect(() => {
    const handleGameStateAsyncCalls = async () => {
      await gameService.getAllQuestions();
      await gameService.getCurrentGameState();
      gameService.preloadImages();
    };

    socketService.activate(gameService.handleEvent);
    handleGameStateAsyncCalls();
  }, []);
  return <></>;
};

export default ConnectionInitiator;
