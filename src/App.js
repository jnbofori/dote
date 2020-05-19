import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
      <Router>
          <div className="App">
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="*" component={()=> "404 NOT FOUND"} />
            </Switch>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
