import { describe, it, expect } from 'vitest';
import { Instructions } from '../core/instructions/instructions';

describe('The instructions should', () => {
	it('not allow non allowed emoji instructions', () => {
		expect(() => Instructions.from('👆👇👉👊👈🤜🤛🤡')).toThrowError('Invalid instruction');
	});

	it('not allow empty instructions', () => {
		expect(() => Instructions.from('')).toThrowError('Instructions must not be empty');
	});

	it('not allow instructions without 👊', () => {
		expect(() => Instructions.from('👆👇👉👈')).toThrowError('Instructions must have a display instruction 👊');
	});

	it('return the instructions', () => {
		expect(Instructions.from('👆👇👉👈👊').asArray()).toEqual(['👆', '👇', '👉', '👈', '👊']);
	});
});
