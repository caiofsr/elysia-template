import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '../libs/env';
import { schema } from './schema';

const db = drizzle(env.DATABASE_URL, {
	schema,
	casing: 'snake_case',
});

export { db };
