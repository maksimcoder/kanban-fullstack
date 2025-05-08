import { queryOptions } from '@tanstack/react-query';

interface IPost {
	id: number;
	title: string;
}

export async function getPosts(): Promise<IPost[]> {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');

	if (!response.ok) {
		throw new Error('Posts are unavailable');
	}

	return response.json();
}

export const postsQueryOptions = () =>
	queryOptions({
		queryKey: ['posts'],
		queryFn: getPosts,
	});
