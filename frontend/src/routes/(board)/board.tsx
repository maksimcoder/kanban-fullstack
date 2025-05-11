import { createFileRoute, Outlet } from '@tanstack/react-router';
import { BoardLayout, EmptyBoardPlaceholder } from 'src/widgets';

export const Route = createFileRoute('/(board)/board')({
	component: RouteComponent,
});

function RouteComponent() {
	const isColumnsAvailable = true;

	if (!isColumnsAvailable) return <EmptyBoardPlaceholder />;
	return (
		<BoardLayout>
			<Outlet />
		</BoardLayout>
	);
}
