import { useRoutes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Home } from './Home';
import { Login } from './Login';
import { NotFound } from './NotFound';
import { PrivateRouteOutlet } from './Outlets/PrivateRouteOutlet';
import { UserIsNotAuthenticatedOutlet } from './Outlets/UserIsNotAuthenticatedOutlet';

export const RoutesComponent = () =>
	useRoutes([
		{
			path: '/',
			element: <Home />
		},
		{
			path: 'auth',
			element: <UserIsNotAuthenticatedOutlet />,
			children: [
				{
					path: 'login',
					element: <Login />
				}
			]
		},
		{
			path: 'dashboard',
			element: <PrivateRouteOutlet />,
			children: [
				{
					path: '',
					element: <Dashboard />
				}
			]
		},
		{ path: '*', element: <NotFound /> }
	]);
