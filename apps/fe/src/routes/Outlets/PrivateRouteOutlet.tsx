import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PrivateRouteOutlet = () => {
	const location = useLocation();
	const { isLoggedIn, isLoading } = { isLoading: false, isLoggedIn: true }; // useAuth();

	if (isLoading) return <div>Loading....</div>;

	if (!isLoggedIn && !isLoading) {
		return (
			<Navigate replace to={{ pathname: '/auth/login', search: `?from=${location.pathname}${location.search}` }} />
		);
	}

	return <Outlet />;
};
