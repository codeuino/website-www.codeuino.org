import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import HomeBanner from "./Components/HomeBanner";
import About from "./Components/About";
import Values from "./Components/Values";
import Timeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import Programs from "./Components/Programs";
import Collaborate from "./Components/Collaborate";
import Statistics from "./Components/Statistics";
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
      <Container fluid>
        <Container>
          <HomeBanner />
          <About />
          <Values />
          <Timeline />
          <Projects />
          <Programs />
          <Collaborate />
          <Statistics />
          <JoinUs />
          <Partners />
          <Updates />
        </Container>
        <ScrollToTopBtn />
      </Container>
    </React.Fragment>
  );
};

export default Home;
