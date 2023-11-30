import { describe, it, expect } from 'vitest';
import { foo } from '../core/compiler';

describe('The compiler should', () => {
	it('be foo', () => {
		expect(foo()).toBe('foo');
	});
});
