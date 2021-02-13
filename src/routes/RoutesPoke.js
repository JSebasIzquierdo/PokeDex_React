import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import DescriptionPokemon from "../components/DescriptionPokemon/DescriptionPokemon";

const RoutesPoke = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={HomeLayout} />
        <Route path="/pokemon/:name" component={DescriptionPokemon} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesPoke;
