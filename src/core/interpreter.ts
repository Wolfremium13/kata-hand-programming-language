import { Instruction } from './instructions/instructions';
import { Memory } from './memory/memory';
import { Pointer } from './pointer/pointer';

export class Interpreter {
	private isIgnoringInstructions: boolean = false;
	private isIgnoringNextCondition: boolean = false;
	constructor(private readonly memory: Memory, private readonly pointer: Pointer, private buffer: string = '') {}

	interpret(instructions: Instruction[]) {
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
			this.pointer.movesToTheRight();
			return;
		}
		if (instruction === '👈') {
			this.pointer.movesToTheLeft();
			return;
		}
		if (instruction === '👆') {
			this.memory.incrementValueTo(this.pointer.getPosition());
			return;
		}
		if (instruction === '👇') {
			this.memory.decrementValueTo(this.pointer.getPosition());
			return;
		}
		if (instruction === '👊') {
			this.addMemoryValuesToBuffer();
			return;
		}
	}

	private isMemoryValueZero(): boolean {
		const memoryValue = this.memory.getCurrentValueFrom(this.pointer.getPosition());
		return memoryValue === 0;
	}

	private addMemoryValuesToBuffer(): void {
		const memoryValue = this.memory.getCurrentValueFrom(this.pointer.getPosition());
		this.buffer += String.fromCharCode(memoryValue);
	}
	
}
