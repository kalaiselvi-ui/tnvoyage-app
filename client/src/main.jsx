import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { DestinationProvider } from "./context/DestinationContext.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <AuthContextProvider>
      <CategoryProvider>
        <DestinationProvider>
          <BlogProvider>
            <HelmetProvider>
              <StrictMode>
                <App />
              </StrictMode>
            </HelmetProvider>
          </BlogProvider>
        </DestinationProvider>
      </CategoryProvider>
    </AuthContextProvider>
  </BrowserRouter>,
);
