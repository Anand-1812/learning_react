import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CountTodo from "./CountTodo.jsx";
import { render, screen } from "@testing-library/react";

describe('App', () => {
  it('renders heaedline', () => {
    render(<App title="React" />);
    screen.debug();
  });
});
  
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <CountTodo />
  </StrictMode>,
);
