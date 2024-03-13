import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const UserIsNotAuthenticatedOutlet: FC = () => {
	const { isLoggedIn, isLoading } = { isLoading: false, isLoggedIn: true }; // useAuth();
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const navigateTo = params.get('from') || '/';

	if (isLoading) return <div>Loading....</div>;

	if (isLoggedIn) return <Navigate to={navigateTo} />;

	return <Outlet />;
};
