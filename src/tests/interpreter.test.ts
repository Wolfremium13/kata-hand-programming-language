import { describe, it, expect } from 'vitest';
import { Instructions } from '../core/instructions';
import { Pointer } from '../core/pointer';
import { Memory } from '../core/memory';
import { Interpreter } from '../core/interpreter';

describe('The interpreter should', () => {
	it('print letter A', () => {
		const instructions = Instructions.from(
			"👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👊"
		)
		const pointer = new Pointer()
		const memory = new Memory(pointer)
		const interpreter = new Interpreter(memory)

		interpreter.execute(instructions)

		expect(interpreter.getBuffer()).toBe('A');
	});
});
