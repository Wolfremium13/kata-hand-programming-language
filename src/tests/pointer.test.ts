import { describe, it, expect, beforeEach } from 'vitest';
import { Pointer } from '../core/pointer';
import { PointerBuilder } from './fixtures/pointer.builder';

describe('Pointer should', () => {
	let pointer: Pointer;

	beforeEach(() => {
		pointer = new PointerBuilder().build();
	});

	describe('on validation', () => {
		it('throws an error when position is negative', () => {
			expect(() => {
				new PointerBuilder().withPosition(-1).build();
			}).toThrowError('Pointer position must be positive');
		});
	});

	describe('on positions management', () => {
		it('moves the right', () => {
			pointer.movesToTheRight();

			expect(pointer).toEqual(new PointerBuilder().withPosition(1).build());
		});

		it('moves twice to the right', () => {
			pointer.movesToTheRight();
			pointer.movesToTheRight();

			expect(pointer).toEqual(new PointerBuilder().withPosition(2).build());
		});

		it('moves the left', () => {
			pointer.movesToTheRight();
			pointer.movesToTheRight();
			pointer.movesToTheLeft();

			const timesMovedToTheRight = 2;
			expect(pointer).toEqual(new PointerBuilder().withPosition(1).withEndPosition(timesMovedToTheRight).build());
		});

		it('moves twice to the left', () => {
			pointer.movesToTheRight();
			pointer.movesToTheRight();
			pointer.movesToTheLeft();
			pointer.movesToTheLeft();

			const timesMovedToTheRight = 2;
			expect(pointer).toEqual(new PointerBuilder().withPosition(0).withEndPosition(timesMovedToTheRight).build());
		});

		it('go to the end when there are not more left positions', () => {
			pointer.movesToTheRight();
			pointer.movesToTheRight();
			pointer.movesToTheLeft();
			pointer.movesToTheLeft();
			pointer.movesToTheLeft();

			expect(pointer).toEqual(new PointerBuilder().withPosition(2).build());
		});
	});

	describe('on value management', () => {
		const minimumValue = 0;
		const maximumValue = 255;
		const valueIncrement = 1;
		const valueDecrement = 1;

		describe('when increase', () => {
			it('the value at the current position', () => {
				const memory = [minimumValue, minimumValue];
				pointer.movesToTheRight();
				pointer.increaseValue(memory);

				expect(memory).toEqual([minimumValue, valueIncrement]);
			});

			it('the maximum value starts from the minimum', () => {
				const memory = [maximumValue];
				pointer.increaseValue(memory);
				pointer.increaseValue(memory);

				expect(memory).toEqual([minimumValue + valueIncrement]);
			});
		});

		describe('when decrease', () => {
			it('the value at the current position', () => {
				const memory = [minimumValue, minimumValue + valueIncrement];
				pointer.movesToTheRight();
				pointer.decreaseValue(memory);

				expect(memory).toEqual([minimumValue, minimumValue]);
			});

			it('the minimum value starts from the maximum', () => {
				const memory = [minimumValue];
				pointer.decreaseValue(memory);
				pointer.decreaseValue(memory);

				expect(memory).toEqual([maximumValue - valueDecrement]);
			});
		});
	});
});
