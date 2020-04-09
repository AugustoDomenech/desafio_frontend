import React from "react";
import { Switch } from "react-router-dom";

//Importamos a rota personalizada
import Route from "../routes/Route";

//Importamos as paginas
import SingIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />

      <Route path="/profile" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
