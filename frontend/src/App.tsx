import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { MainLayout } from './shared/layout';

function App() {
	return (
		<>
			<MainLayout>
				<Outlet />
			</MainLayout>
			<TanStackRouterDevtools />
			<ReactQueryDevtools />
		</>
	);
}

export default App;
