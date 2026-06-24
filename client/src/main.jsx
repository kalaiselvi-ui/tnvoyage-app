import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CategoryProvider } from "./context/categoryContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { DestinationProvider } from "./context/DestinationContext.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <AuthContextProvider>
      <CategoryProvider>
        <DestinationProvider>
          <BlogProvider>
            <StrictMode>
              <App />
            </StrictMode>
          </BlogProvider>
        </DestinationProvider>
      </CategoryProvider>
    </AuthContextProvider>
  </BrowserRouter>,
);
