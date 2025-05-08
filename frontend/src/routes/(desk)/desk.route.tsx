import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(desk)/desk')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div>Hello route "/desk"!</div>
			<Outlet />
		</>
	);
}
