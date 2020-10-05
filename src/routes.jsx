import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import history from "./history";

import Home from "./pages/Home";
import Beginning from "./pages/Beginning";

import Lvl1 from "./pages/lvls/Lvl1";
import api from "./services/api";

const Routes = () => {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    (async () => {
      const {
        data: { lvl },
      } = await api.get("/getLevel");

      console.log(lvl);

      if (lvl === 1) {
        history.push(`/beginning`);
        return history.go(`/beginning`);
      }

      // history.push(`/lvl${level}`);
      // return history.go(`/lvl${level}`);
    })();
  }, [level]);

  function LXMSATROUTE({ isPrivate, ...rest }) {
    if (!isPrivate) {
      return <Route {...rest} />;
    }

    setLevel(0);
    return <h1>Wait...</h1>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beginning" component={Beginning} />
        <LXMSATROUTE path="/lvl1" component={Lvl1} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
