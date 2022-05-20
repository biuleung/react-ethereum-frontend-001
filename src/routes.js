import React from 'react';
import Dances from './views/dances/dances';
import Videos from './views/dances/videos/videos';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dances', name: 'Dances', component: Dances, exact: true },
  { path: '/dances/videos', name: 'Videos', component: Videos },
  { path: '/users', exact: true, name: 'Users', component: Users },
];

export default routes;
