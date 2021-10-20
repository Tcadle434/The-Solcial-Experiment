import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Homepage } from "./containers/homepage";
import { PlayerPage } from "./containers/playerList";


const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/players' component={PlayerPage}></Route>
    </Switch>
  );
}

export default Main;
