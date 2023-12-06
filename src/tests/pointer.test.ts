import { describe, it, expect, beforeEach } from 'vitest';
import { Pointer } from '../core/pointer/pointer';
import { PointerPosition } from '../core/pointer/pointer.position';

describe('Pointer should', () => {
	let pointer: Pointer;

	beforeEach(() => {
		pointer = Pointer.from(0);
	});

	describe('on positions management', () => {
		it('cannot be negative', () => {
			expect(PointerPosition.from(-1)).toEqual(PointerPosition.from(0));
		});
		it('moves twice to the right', () => {
			pointer.movesToTheRight();
			pointer.movesToTheRight();

			expect(pointer.getPosition()).toEqual(PointerPosition.from(2));
		});

		it('moves twice to the left', () => {
			pointer.movesToTheRight();
			pointer.movesToTheRight();
			pointer.movesToTheLeft();
			pointer.movesToTheLeft();

			expect(pointer.getPosition()).toEqual(PointerPosition.from(0));
		});

		it('go to the end when there are not more left positions', () => {
			pointer.movesToTheRight();
			pointer.movesToTheRight();
			pointer.movesToTheLeft();
			pointer.movesToTheLeft();
			pointer.movesToTheLeft();

			expect(pointer.getPosition()).toEqual(PointerPosition.from(2));
		});
	});
});
