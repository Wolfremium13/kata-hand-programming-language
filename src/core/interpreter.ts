import { Instruction } from './instructions';
import { Memory } from './memory';

export class Interpreter {
	private isIgnoringInstructions: boolean = false;
	private isIgnoringNextCondition: boolean = false;
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
		if (instruction === '🤜') {
			if (this.isIgnoringInstructions) {
				this.isIgnoringInstructions = false;
				return;
			}
			this.isIgnoringInstructions = this.isMemoryValueZero() && !this.isIgnoringNextCondition;
			this.isIgnoringNextCondition = !this.isIgnoringInstructions;
			return;
		}
		if (instruction === '🤛') {
			if (this.isIgnoringInstructions) {
				this.isIgnoringInstructions = false;
				return;
			}
			this.isIgnoringInstructions = !this.isMemoryValueZero() && !this.isIgnoringNextCondition;
			this.isIgnoringNextCondition = !this.isIgnoringInstructions;
			return;
		}
		if (this.isIgnoringInstructions) {
			return;
		}

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

	isMemoryValueZero(): boolean {
		return this.memory.getCurrentValue() === String.fromCharCode(0);
	}
}
