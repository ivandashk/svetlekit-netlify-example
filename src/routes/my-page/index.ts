import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ url }) => {
    if (url.searchParams.get('error')) {
        throw Error('Put down the server?')
    }

	const response = await fetch('https://run.mocky.io/v3/7c539fc3-9a46-4074-937a-78ddae47cf30');

	if (response.status === 200) {
        const body = await response.json();

		return {
			body: {
				text: body.test
			}
		};
	}

	return {
		status: response.status
	};
};