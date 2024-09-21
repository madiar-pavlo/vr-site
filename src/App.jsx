import "./App.scss";

import { Context } from "./context/Context";

import { useMediaQuery } from "./hooks/useMediaQuery";

import { useState } from "react";
import AppRouter from "../src/components/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  const isDesktop = useMediaQuery("(max-width: 1280px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [isntFirstVisit, setIsntFirstVisit] = useState(
    localStorage.getItem("isntFirstVisit")
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isIDKDialogOpen, setIsIDKDialogOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isDesktop,
        isTablet,
        isMobile,
        isntFirstVisit,
        setIsntFirstVisit,
        isPopupOpen,
        setIsPopupOpen,
        isIDKDialogOpen,
        setIsIDKDialogOpen,
      }}
    >
      <div className='App'>
        <BrowserRouter basename='/vr-site'>
          <AppRouter />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
