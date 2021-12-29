// import { lazy } from 'react'
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from './utils/Route'

// const HomeScreen = Loadable(lazy(() => import('./pages/index')));

export const AllRouter = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={HomeScreen} /> */}

      {/* <PrivateRoute exact path="/profile" component={Profile} /> */}

      {/* <Route exact path="*" component={NotFoundScreen} /> */}
    </Switch>
  );
};
