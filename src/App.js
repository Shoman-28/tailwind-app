import React, { useState, useEffect } from "react";
import Footer from "./compunets/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./compunets/Navbar/Navbar";
import Dropdown from "./compunets/Dropdown/Dropdown";
import Home2 from "./compunets/pages/Hom2";
import Menu from "./compunets/pages/Menu";
import About from "./compunets/pages/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
      <Route path='/' exact component={Home2} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
