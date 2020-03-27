import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon/Index";
import Register from "./pages/Register/Index";
import Profile from "./pages/Profile/Index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" exact component={Register} />

        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
