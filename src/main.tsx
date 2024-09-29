// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
console.log("APP title", import.meta.env.VITE_APP_TITLE);
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
);
