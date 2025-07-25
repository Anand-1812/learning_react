import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import  Rendering  from "./Rendering.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Rendering />
  </StrictMode>,
);
