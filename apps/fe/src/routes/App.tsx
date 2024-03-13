import { Provider as ThemeProvider } from '@packages/ui';
import { ViewportProvider } from '@packages/utils';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryProvider } from '#/services/react-query/provider';
import ErrorBoundary from './Outlets/ErrorBoundary';
import { RoutesComponent } from './routes';

export const App = () => (
	<ErrorBoundary>
		<ReactQueryProvider>
			<ViewportProvider>
				<ThemeProvider>
					<HelmetProvider>
						<BrowserRouter>
							<RoutesComponent />
						</BrowserRouter>
					</HelmetProvider>
				</ThemeProvider>
			</ViewportProvider>
		</ReactQueryProvider>
	</ErrorBoundary>
);
