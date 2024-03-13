import { Link } from 'react-router-dom';

export const Home = () => (
	<div
		style={{
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '24px'
		}}
	>
		<h2 style={{ color: '#fff' }} data-testid="dashboard-link">
			<Link to="dashboard">Dashboard</Link>
		</h2>
		<h2 style={{ color: '#fff' }}>
			<Link to="auth/login">Login</Link>
		</h2>
		<h2 style={{ color: '#fff' }}>
			<Link to="not-found">Not Found</Link>
		</h2>
	</div>
);
