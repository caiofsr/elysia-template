import Elysia from 'elysia';
import { betterAuthPlugin } from '@/plugins/better-auth';

export const usersRoutes = new Elysia()
	.use(betterAuthPlugin)
	.group('/users', (app) => app.get('/me', ({ user }) => user, { auth: true, tags: ['Users'] }));
