import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/layout/sidebar";
import SignIn from "./screens/auth/sign-in";
import SignUp from "./screens/auth/sign-up";
import Routes from "./routes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/connexion" exact component={SignIn} />
        <Route path="/inscription" exact component={SignUp} />
        <Route>
          <div className="relative min-h-screen grid grid-cols-12 auto-rows-auto bg-gray-50">
            <div className="col-span-3">
              <Sidebar />
            </div>
            <div className="col-span-9">
              <Routes />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
