import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameDisplay from "./GamePage/GameDisplay";
import ScoreDisplay from "./ScoreDisplay/ScoreDisplay";
import IdlePage from "./IdlePage/IdlePage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/projection-qn">
          <GameDisplay />
        </Route>
        <Route path="/projection-score">
          <ScoreDisplay />
        </Route>
        <Route exact path="/">
          <IdlePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
