import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

// import { getPosts } from './features/getPosts';
import { MainLayout, Sidebar } from './widgets';

function App() {
	// function createRandomString(length: number) {
	// 	const chars =
	// 		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	// 	let result = '';
	// 	for (let i = 0; i < length; i++) {
	// 		result += chars.charAt(Math.floor(Math.random() * chars.length));
	// 	}
	// 	return result;
	// }

	// async function get() {
	// 	const res = await fetch('http://localhost:3001/api/board');
	// 	const rescolumn = await fetch('http://localhost:3001/api/column');

	// 	const resJson = await res.json();
	// 	const resJsonColumn = await rescolumn.json();

	// 	console.log('board:', resJson);
	// 	console.log('column:', resJsonColumn);
	// }
	// async function post(name: string) {
	// 	const response = await fetch('http://localhost:3001/api/board', {
	// 		method: 'POST',
	// 		body: JSON.stringify({ name: name }),
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 	});

	// 	if (!response.ok) {
	// 		throw new Error('Posts are unavailable');
	// 	}

	// 	return response.json();
	// }
	// async function postColumn(name: string) {
	// 	const response = await fetch('http://localhost:3001/api/column', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			name: name,
	// 			boardId: 2,
	// 			columnColor: '#49C4E5',
	// 		}),
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 	});

	// 	if (!response.ok) {
	// 		throw new Error('Posts are unavailable');
	// 	}

	// 	return response.json();
	// }

	// useEffect(() => {
	// 	// get();
	// 	// get(createRandomString(5));
	// }, []);
	return (
		<>
			<MainLayout sidebarSlot={<Sidebar />}>
				<Outlet />
			</MainLayout>
			<TanStackRouterDevtools />
			<ReactQueryDevtools />
		</>
	);
}

export default App;
