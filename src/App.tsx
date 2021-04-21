import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Medium from "./components/Medium/Medium";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import About from "./pages/About/About";

const App = () => {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/posts" component={Medium} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
