import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import Routes from "./Routes";

const Providers = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
};

export default Providers;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  color: {
    ...DefaultTheme.colors,
    primary: "#5b3a70",
    accent: "#50c878",
    background: "#f7f9fb",
  },
};
