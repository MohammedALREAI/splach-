import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from './Hoc/Loadable';

const HomeScreen = Loadable(lazy(() => import('./Pages/Home')));


const SearchPage = Loadable(lazy(() => import('./Pages/SearchPage')));
const CollectionsPage = Loadable(lazy(() => import('./Pages/CollectionsPage')));
const UserPage = Loadable(lazy(() => import('./Pages/UserPage')));

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
