import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext } from '@tanstack/react-router';
import App from 'src/App';

// export const Route = createRootRoute({
// 	// component: () => (
// 	// 	<>
// 	// 		<div className='p-2 flex gap-2'>
// 	// 			<Link to='/' className='[&.active]:font-bold'>
// 	// 				Home
// 	// 			</Link>{' '}
// 	// 			<Link to='/about' className='[&.active]:font-bold'>
// 	// 				About
// 	// 			</Link>
// 	// 		</div>
// 	// 		<hr />
// 	// 	</>
// 	// ),
// 	component: App,
// 	notFoundComponent: () => <h1>not found route</h1>,
// });

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: App,
	notFoundComponent: () => <h1>not found route</h1>,
});
