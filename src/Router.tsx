import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from './Hoc/Loadable';





// const HomeScreen = Loadable(lazy(() => import('./pages')))

export const AllRouter = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={HomeScreen} /> */}


    </Switch>
  );
};
