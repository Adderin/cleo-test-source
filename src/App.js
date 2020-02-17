import React from 'react';
import { AppStyle } from './styles/AppStyle';
import { Main } from './pages/Main/Main';
import { Repos } from './pages/Repos/Repos';

import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => {
    if (state.user.user) {
      return state.user.user.login;
    }
  });

  let routes = (
    <Switch>
      <Route path="/" exact render={props => <Main {...props} />} />
      <Route path="/:user" render={props => <Repos {...props} />} />
      <Redirect to="/" />
    </Switch>
  );

  if (!user) {
    routes = (
      <Switch>
        <Route path="/" exact render={props => <Main {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <AppStyle>{routes}</AppStyle>;
}

export default withRouter(App);
