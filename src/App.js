import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import COC from "./pages/COC/COC";
import Team from "./pages/Team/Team";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition
                timeout={450}
                classNames="fade"
                key={location.pathname}
              >
                <Switch location={location}>
                  <Route path="/team">
                    <Team />
                  </Route>
                  <Route path="/codeofconduct">
                    <COC />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
      <Footer />
    </React.Fragment>
  );
};

export default App;
