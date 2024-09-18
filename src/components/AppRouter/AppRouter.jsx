import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Sections from "../Layout/Sections/Sections";
import PreLoader from "../Layout/PreLoader/PreLoader";
import { useContext } from "react";
import { Context } from "/src/context/Context";

const AppRouter = () => {
  const { isntFirstVisit = false } = useContext(Context);

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={isntFirstVisit ? <Sections /> : <PreLoader/>}/>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
