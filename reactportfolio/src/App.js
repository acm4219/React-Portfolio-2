import React from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Contact from "./views/Contact"
import EntryPage from "./views/EntryPage"


function App() {
  return (
    <div>
      <Router>
       <Header />
       <div>
        <Switch>
          <Route exact path="/React-Portfolio-2/">
            <EntryPage />
          </Route>
          <Route path="/React-Portfolio-2/home">
            <Home />
          </Route>
          <Route path="/React-Portfolio-2/contact">
            <Contact />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
