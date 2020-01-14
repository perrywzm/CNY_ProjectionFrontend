import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import AppRouter from "./pages/AppRouter";
import DependencyProvider from "./services/DependencyInjector";
import dependencies from "./common/dependencies";
import ConnectionInitiator from "./components/ConnectionInitator";
import ImagePreloaderSource from "./components/ImagePreloaderSource";

const App: React.FC = () => {
  return (
    <DependencyProvider dependencies={dependencies}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
        <ConnectionInitiator />
        <ImagePreloaderSource />
      </ThemeProvider>
    </DependencyProvider>
  );
};

export default App;
