import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CountTodo from "./CountTodo.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <CountTodo />
  </StrictMode>,
);
