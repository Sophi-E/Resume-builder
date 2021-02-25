import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import FormFields from "./components/Form";
import Navbar from "./components/Navbar";
import ResumeUi from "./components/ResumeUi";
// import Templates from "./components/Templates";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ResumeUi} />
          <Route exact path="/create-resume" component={FormFields} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
