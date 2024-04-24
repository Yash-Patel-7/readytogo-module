import { example } from './index';

describe('example', () => {
	it('should return false', async () => {
		expect(await example()).toBe(false);
	});
});

