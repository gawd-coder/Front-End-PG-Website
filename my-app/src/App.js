import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home"
import {About} from "./About"
import {Contact} from "./Contact"
import {NoMatch} from "./NoMatch"
import {Layout} from "./components/Layout"
import {NavigationBar} from "./components/NavigationBar"
import {Jumbotron} from "./components/Jumbotron"

function App() {
  return (
    //this is wrapper component so we do not need to enclose everything in <div>
    <React.Fragment>
    <NavigationBar />
    <Jumbotron />
      <Layout>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/contact" component = {Contact} />
          <Route component = {NoMatch} />
        </Switch>
      </Router> 
      </Layout>
    </React.Fragment>
  );
}

export default App;
