import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Router } from "./Router";
import { AuthProvider } from "./context/AuthContext";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#D54D52",
      900: "#B03E3D",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
