import { z } from 'zod';

export const envSchema = z.object({
	BETTER_AUTH_SECRET: z.string().min(1),
	BETTER_AUTH_URL: z.url(),
	DATABASE_URL: z.url().startsWith('postgresql://'),
	PORT: z.coerce.number().default(3333),
});

export const env = envSchema.parse(Bun.env);
