import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React from "react";
import "./App.css";
import NewHome from "./pages/Home/NewHome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Team from "./pages/Team/Team";
import COC from "./pages/COC/COC";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Router>
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
                      <NewHome />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
