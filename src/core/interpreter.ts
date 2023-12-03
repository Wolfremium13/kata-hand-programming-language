import { Instruction } from './instructions';
import { Memory } from './memory';

export class Interpreter {
	constructor(private memory: Memory, private buffer: string = '') {
		this.memory = memory;
	}

	execute(instructions: Instruction[]) {
		instructions.forEach((instruction) => {
			this.executeMemoryActionFrom(instruction);
		});
	}
	getBuffer(): string {
		return this.buffer;
	}
	private executeMemoryActionFrom(instruction: Instruction) {
		if (instruction === '👉') {
			this.memory.movePointerToTheRight();
			return;
		}
		if (instruction === '👈') {
			this.memory.movePointerToTheLeft();
			return;
		}
		if (instruction === '👆') {
			this.memory.increaseValue();
			return;
		}
		if (instruction === '👇') {
			this.memory.decreaseValue();
			return;
		}
		if (instruction === '👊') {
			this.buffer += this.memory.getCurrentValue();
			return;
		}
	}
}
