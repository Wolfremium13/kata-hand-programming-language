import { describe, it, expect, beforeEach } from 'vitest';
import { Memory } from '../core/memory/memory';
import { PointerPosition } from '../core/pointer/pointer.position';

describe('Memory should', () => {
	let memory: Memory;

	beforeEach(() => {
		memory = new Memory();
	});

	describe('on memory management', () => {
		const maximumMemoryValue = 255;

		it('increase the memory slots', () => {
			const pointerPosition = PointerPosition.from(2);

			memory.incrementValueTo(pointerPosition);

			expect(memory.getMemoryCells()).toHaveLength(3);
		});

		it('decrease the value', () => {
			const pointerPosition = PointerPosition.from(0);
			memory.incrementValueTo(pointerPosition);

			expect(memory.getCurrentValueFrom(pointerPosition)).toBe(1);
		});

		it('increase the value', () => {
			const pointerPosition = PointerPosition.from(0);
			memory.incrementValueTo(pointerPosition);

			expect(memory.getCurrentValueFrom(pointerPosition)).toBe(1);
		});

		it('start over when we increase the maximum value', () => {
			const pointerPosition = PointerPosition.from(0);

			for (let _ = 0; _ < maximumMemoryValue + 1; _++) {
				memory.incrementValueTo(pointerPosition);
			}

			expect(memory.getCurrentValueFrom(pointerPosition)).toBe(0);
		});

		it('start over when we decrease the minimum value', () => {
			const pointerPosition = PointerPosition.from(0);

			memory.decrementValueTo(pointerPosition);

			expect(memory.getCurrentValueFrom(pointerPosition)).toBe(maximumMemoryValue);
		});
	});
});
