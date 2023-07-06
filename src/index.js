import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SearchStore from "./store/SearchStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      searchStore: new SearchStore(),
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
reportWebVitals();
