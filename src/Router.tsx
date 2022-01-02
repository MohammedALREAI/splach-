import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from './Hoc/Loadable';

const HomeScreen = Loadable(lazy(() => import('./pages/Home')));


const SearchPage = Loadable(lazy(() => import('./pages/SearchPage')));
const CollectionsPage = Loadable(lazy(() => import('./pages/CollectionsPage')));
const UserPage = Loadable(lazy(() => import('./pages/UserPage')));

export const AllRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/photos/:name" component={SearchPage} />
      <Route exact path="/collections/:name" component={CollectionsPage} />
      <Route exact path="/users/:name" component={UserPage} />
    </Switch>
  );
};
