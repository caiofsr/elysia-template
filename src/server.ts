import openapi from '@elysiajs/openapi';
import Elysia from 'elysia';
import { OpenAPI } from './plugins/better-auth';
import { usersRoutes } from './users/routes';

const app = new Elysia()
	.use(
		openapi({
			path: '/docs',
			documentation: {
				components: await OpenAPI.components,
				paths: await OpenAPI.getPaths('/auth'),
			},
		}),
	)
	.get('/', () => 'Hello Elysia')
	.use(usersRoutes);

export { app };
