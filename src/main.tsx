import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./app/lib/providers";
import Home from "./app/page";
import "./app/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Home />
    </Providers>
  </React.StrictMode>
);
