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
const Sections = () => {
  return (
    <>
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
