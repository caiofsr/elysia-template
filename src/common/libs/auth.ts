import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { openAPI } from 'better-auth/plugins';
import { db } from '../database';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		camelCase: false,
		usePlural: true,
	}),
	basePath: '/auth',
	plugins: [openAPI()],
	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
		password: {
			hash: (password) => Bun.password.hash(password),
			verify: ({ password, hash }) => Bun.password.verify(password, hash),
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 7,
		cookieCache: {
			enabled: true,
			maxAge: 60 * 5,
		},
	},
});
