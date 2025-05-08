import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(desk)/desk/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello desk index!</div>;
}
