// index.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { env } from './common/libs/env';

const db = drizzle(env.DATABASE_URL);

await migrate(db, { migrationsFolder: 'src/common/database/migrations' });
