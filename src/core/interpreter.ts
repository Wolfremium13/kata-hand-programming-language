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
		if (instruction === '🤜' || instruction === '🤛') {
			this.handleJumping(instruction);
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

	private handleJumping(instruction: Instruction) {
		if (this.isIgnoringInstructions) {
			this.isIgnoringInstructions = false;
			return;
		}

		const isMemoryZero = this.isMemoryValueZero();
		if (instruction === '🤜') {
			this.isIgnoringInstructions = isMemoryZero && !this.isIgnoringNextCondition;
		} else {
			this.isIgnoringInstructions = !isMemoryZero && !this.isIgnoringNextCondition;
		}
		this.isIgnoringNextCondition = !this.isIgnoringInstructions;
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
