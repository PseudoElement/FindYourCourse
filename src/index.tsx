import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ScreenSizeContextProvider } from "./context/ScreenSizeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ScreenSizeContextProvider>
      <App />
    </ScreenSizeContextProvider>
  </BrowserRouter>
);
