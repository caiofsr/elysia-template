// test/index.test.ts

import { describe, expect, it } from 'bun:test';
import { app } from '@/index';

describe('App', () => {
	it('should health check', async () => {
		const response = await app.handle(new Request('http://localhost/health')).then((res) => res.text());

		expect(response).toBe('OK');
	});
});
