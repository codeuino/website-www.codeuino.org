import { Switch, Route, HashRouter as Router } from "react-router-dom";
import React from "react";
import "./App.css";
import NewBlog from "./pages/NewBlog/NewBlog";
import BlogList from "./pages/Blogs/BlogList";
import NewHome from "./pages/Home/NewHome";
import JoinUs from "./pages/JoinUs/JoinUs";
import NavBar from "./components/NavBar";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blogs/Blog";
import Team from "./pages/Team/Team";
import COC from "./pages/COC/COC";

function App() {
  return (
    <>
      <div className="App" style={{ width: "100%" }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/joinus">
              <JoinUs />
            </Route>
            <Route path="/codeofconduct">
              <COC />
            </Route>
            <Route exact path="/">
              <NewHome />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
