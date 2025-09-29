import { app } from '@/index';

export type TestUser = {
	name: string;
	email: string;
	emailVerified: boolean;
	image?: string | null;
	createdAt: string;
	updatedAt: string;
	id: string;
};

type RequestResponse = {
	token: string;
	user: TestUser;
};

export async function createUser(): Promise<{ user: TestUser; cookieLogin: string }> {
	const response = await app.handle(
		new Request('http://localhost/auth/sign-up/email', {
			method: 'POST',
			body: JSON.stringify({
				email: 'user@example.com',
				password: 'password123',
				name: 'Test User',
			}),
			headers: { 'Content-Type': 'application/json' },
		}),
	);

	const cookieHeader = response.headers.get('set-cookie');
	const body = (await response.json()) as RequestResponse;
	const cookieLogin = cookieHeader?.split(';').at(0) ?? '';

	return { user: body.user, cookieLogin };
}
