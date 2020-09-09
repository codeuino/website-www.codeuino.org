import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import HomeBanner from "./Components/HomeBanner";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Programs from "./Components/Programs";
import Collaborate from "./Components/Collaborate";
import Partners from "./Components/Partners";
import JoinUs from "./Components/JoinUs";
import Updates from "./Components/Updates";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn.js";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Container>
        <HomeBanner />
        <About />
        <Projects />
        <Programs />
        <Collaborate />
        <JoinUs />
        <Partners />
        <Updates />
      </Container>
      <div className="mt-10">
        <ScrollToTopBtn />
      </div>
    </React.Fragment>
  );
};

export default Home;
