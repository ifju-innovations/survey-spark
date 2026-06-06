import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { NorthStarLanding } from "./components/NorthStarLanding";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NorthStarLanding />
  </StrictMode>,
);
