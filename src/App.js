import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
import NavigationTabs from "./components/NavigationTabs";

import './App.css';

function App() {
  return (
    // <Router>
      <div className="App container-fluid">
        {/* Header component */}
        {/* <Header /> */}
        {/*  Navigation Component */}
        <NavigationTabs />
        {/* 
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        
        */}
      </div>
    // </Router>
    
  );
}

export default App;
