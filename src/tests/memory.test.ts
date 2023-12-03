import { describe, it, expect, beforeEach } from 'vitest';
import { Pointer } from '../core/pointer';
import { Memory } from '../core/memory';

describe('Memory should', () => {
	let pointer: Pointer;
	let memory: Memory;
	const rightInstruction = '👉';
	const leftInstruction = '👈';
	beforeEach(() => {
		pointer = new Pointer();
		memory = new Memory(pointer);
	});

    describe('on positions management', () => {
        it('moves the right', () => {
            memory.update(rightInstruction);
    
            expect(memory.getPointerPosition()).toBe(1);
        });
    
        it('moves twice to the right', () => {
            memory.update(rightInstruction);
            memory.update(rightInstruction);
    
            expect(memory.getPointerPosition()).toBe(2);
        });
    
        it('moves the left', () => {
            memory.update(rightInstruction);
            memory.update(leftInstruction);
    
            expect(memory.getPointerPosition()).toBe(0);
        });

        it('go to the end when there are not more left positions', () => {
            memory.update(rightInstruction);
            memory.update(rightInstruction);
            memory.update(leftInstruction);
            memory.update(leftInstruction);
            memory.update(leftInstruction);
    
            expect(memory.getPointerPosition()).toBe(2);
        });
    });

	
});
