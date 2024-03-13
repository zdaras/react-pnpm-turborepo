import React from 'react';
import { NotFound } from '#/routes/NotFound';

class ErrorBoundary extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_error: any) {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.error({ error, errorInfo });
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return <NotFound />;
		}

		return children;
	}
}

export default ErrorBoundary;
