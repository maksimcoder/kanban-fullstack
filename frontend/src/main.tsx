import './index.css';
import '@fontsource-variable/plus-jakarta-sans/index.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { routeTree } from './routeTree.gen';
import { queryClient } from './shared/api';
import { Provider } from './shared/theme/provider.tsx';

const router = createRouter({ routeTree, context: { queryClient } });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Provider>
	</StrictMode>,
);
