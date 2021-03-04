import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
import authToken from "./utils/authToken";
import FormFields from "./pages/Form";
import Navbar from "./components/Navbar";
import ResumeUi from "./components/ResumeUi";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Alert from "./components/layout/Alert";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

if (localStorage.token) {
  authToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Alert />
          <Switch>
            <Route exact path="/" component={ResumeUi} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-resume" component={FormFields} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
