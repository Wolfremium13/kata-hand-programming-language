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
		const rightInstruction = '👉';
		it('increase the memory slots', () => {
			memory.update(rightInstruction);
			memory.update(rightInstruction);
	
			expect(memory.getMemory()).toHaveLength(3);
		});
	});
});
