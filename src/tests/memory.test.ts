import { describe, it, expect, beforeEach } from 'vitest';
import { Pointer } from '../core/pointer';
import { Memory } from '../core/memory';
import { PointerBuilder } from './fixtures/pointer.builder';

describe('Memory should', () => {
	let pointer: Pointer;
	let memory: Memory;

	beforeEach(() => {
		pointer = new PointerBuilder().build();
		memory = new Memory(pointer);
	});

	describe('on memory management', () => {
		it('increase the memory slots', () => {
			memory.movePointerToTheRight();
			memory.movePointerToTheRight();

			expect(memory.getMemory()).toHaveLength(3);
		});

		it('decrease the value', () => {
			memory.decreaseValue();

			expect(memory.getCurrentValue()).toBe(String.fromCharCode(255));
		});

		it('increase the value', () => {
			memory.increaseValue();

			expect(memory.getCurrentValue()).toBe(String.fromCharCode(1));
		});

		it('move the pointer to the left', () => {
			memory.movePointerToTheLeft();

			expect(memory.getCurrentValue()).toBe(String.fromCharCode(0));
		});

		it('move the pointer to the right', () => {
			memory.movePointerToTheRight();

			expect(memory.getCurrentValue()).toBe(String.fromCharCode(0));
		});
	});
});
