// test/index.test.ts

import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { createUser, type TestUser } from 'test/create-user.utils';
import { db } from '@/common/database';
import { schema } from '@/common/database/schema';
// import { postgresContainer } from 'test/setup';
import { app } from '@/index';

describe('users/me', () => {
	let cookie: string;
	let user: TestUser;

	beforeEach(async () => {
		const { user: userLogin, cookieLogin } = await createUser();
		cookie = cookieLogin;
		user = userLogin;
	});

	afterEach(async () => {
		await db.delete(schema.users).execute();
	});

	it('should return user info', async () => {
		const response = await app
			.handle(
				new Request('http://localhost/users/me', {
					headers: {
						Cookie: cookie,
					},
				}),
			)
			.then((res) => res.json());

		expect(response).toEqual(user);
	});

	it('should return 401 if not authenticated', async () => {
		const response = await app.handle(new Request('http://localhost/users/me'));

		expect(response.status).toBe(401);
		expect(await response.json()).toEqual({ message: 'Unauthorized.' });
	});
});
