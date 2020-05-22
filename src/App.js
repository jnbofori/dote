import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import BookNow from "./BookNow";
import Services from "./Services";


function App() {
  return (
      <Router>
          <div className="App">
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/book" component={BookNow} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={()=> "404 NOT FOUND"} />
            </Switch>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
