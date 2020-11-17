import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavigationTabs from "./components/NavigationTabs";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/*  <NavigationTabs /> */}
        {/* 
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        
        */}
      </div>
    </Router>
    
  );
}

export default App;
