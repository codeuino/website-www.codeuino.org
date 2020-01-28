import React from 'react'
import './App.css'
import Team from './pages/Team/Team'
import NewBlog from './pages/NewBlog/NewBlog'
import NewHome from './pages/Home/NewHome'
import JoinUs from './pages/JoinUs/JoinUs'
import { Switch, Route, HashRouter } from 'react-router-dom'
import About from './pages/About/About'
// import Donut from './pages/Donut/Donut';
import Blog from './pages/Blogs/Blog'
import BlogList from './pages/Blogs/BlogList'
// import Codebadge from './pages/Codebadge/Codebadge';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// import Header from "./Header/header"
function App() {
  return (
    <>
      <div className="App" style={{ width: '100%' }}>
        <HashRouter>
          <NavBar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/joinus">
              <JoinUs />
            </Route>
            <Route path="/joinus">
              <NewHome />
            </Route>
            <Route path="/bloglist">
              <BlogList />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/newblog">
              <NewBlog />
            </Route>
            <Route path="/gsoc19">
              <NewHome />
            </Route>
            <Route path="/gssoc19">
              <NewHome />
            </Route>
            <Route path="/gci19">
              <NewHome />
            </Route>
            <Route path="/kwoc19">
              <NewHome />
            </Route>
            <Route path="/">
              <NewHome />
            </Route>
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
