import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Join from "./Join/Join";
import Process from "./Process/Process";
import Services from "./Services/Services";
import Technologies from "./Technologies/Technologies";
import Container from "../Container/Container";
import Transiton from "/src/Transition";
import Dialog from "../../UI/Dialog/Dialog";
import { useContext } from "react";
import { Context } from "../../../context/Context";
const Sections = () => {
  const { isPopupOpen, isIDKDialogOpen, setIsIDKDialogOpen } = useContext(Context);
  return (
    <>
      <div className={`backdrop ${isPopupOpen ? "backdrop--show" : ""}`}></div>
      <Dialog buttonState={[isIDKDialogOpen, setIsIDKDialogOpen]}>
        <h3>Hey, I dont know what to do on click &#128517;</h3>
      </Dialog>
      <Container>
        <Header />
      </Container>
      <main class='container'>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Process />
        <Join />
      </main>
      <Footer />
    </>
  );
};

export default Transiton(Sections);
