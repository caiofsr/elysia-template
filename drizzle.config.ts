import { defineConfig } from 'drizzle-kit';
import { env } from './src/common/libs/env';

export default defineConfig({
	schema: './src/common/database/schema/**',
	out: './src/common/database/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	casing: 'snake_case',
});
