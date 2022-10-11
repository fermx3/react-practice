import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MeetupsContextProvider } from "./store/meetups-context";
import { FavoritesContextProvider } from "./store/favorites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MeetupsContextProvider>
      <FavoritesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesContextProvider>
    </MeetupsContextProvider>
  </React.StrictMode>
);
