import { createFileRoute } from '@tanstack/react-router';
import { ColumnsGrid } from 'src/widgets';

export const Route = createFileRoute('/(board)/board/$boardId')({
	component: RouteComponent,
});

function RouteComponent() {
	const { boardId } = Route.useParams();

	return <ColumnsGrid />;
}
