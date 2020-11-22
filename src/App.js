import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
import NavigationTabs from "./components/NavigationTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App roboto">
        {/* Header component */}
        {/* <Header /> */}
        {/*  Navigation Component */}
        <NavigationTabs />
        
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About/>
          </Route>
          <Route exact path="/portfolio" >
            <Portfolio />
          </Route>
          <Route path="/contact" >
            <Contact/>
          </Route>
        </Switch>
          
      </div>
    </Router>
    
  );
}

export default App;
