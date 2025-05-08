import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(desk)/desk/$deskId')({
	component: RouteComponent,
});

function RouteComponent() {
	const { deskId } = Route.useParams();
	return <div>Hello {deskId}!</div>;
}
