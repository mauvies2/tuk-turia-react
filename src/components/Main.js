import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route exact path="/booking" render={() => <Booking />}></Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default Main;
