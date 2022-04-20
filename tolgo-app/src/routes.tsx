import React from "react";
import Dashboard from "./screens/home";

import { Route, Switch } from "react-router-dom";
import NotFound from "./screens/NotFound";
import Cards from "./screens/cards";
import Transactions from "./screens/transactions";
import Profile from "./screens/profil";

const Routes = () => {
  return (
    <div className="my-14">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/mes-cartes" exact component={Cards} />
        <Route path="/mes-transactions" exact component={Transactions} />
        <Route path="/profil" exact component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
