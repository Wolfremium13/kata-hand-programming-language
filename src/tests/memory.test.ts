import { describe, it, expect } from 'vitest';
import { Pointer } from '../core/pointer';
import { Memory } from '../core/memory';

describe('Memory should', () => {
	it('manage movement to the right', () => {
        const instruction = '👉';
        const pointer = new Pointer();
        const memory = new Memory(pointer);

        memory.update(instruction);

        expect(memory.getPointerPosition()).toBe(1);
    });

  it('manage two movements to the right', () => {
        const instruction = '👉';
        const pointer = new Pointer();
        const memory = new Memory(pointer);

        memory.update(instruction);
        memory.update(instruction);

        expect(memory.getPointerPosition()).toBe(2);
    });
});
