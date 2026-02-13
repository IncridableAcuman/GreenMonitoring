import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoaderProvider } from "./contexts/LoaderProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LoaderProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </LoaderProvider>
  </BrowserRouter>,
);
