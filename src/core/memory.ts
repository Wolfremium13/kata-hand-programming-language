import { Instruction } from './instructions';
import { Pointer } from './pointer';

export class Memory {
	private static readonly DEFAULT_MEMORY_VALUE = 0;
	private memory: number[] = [Memory.DEFAULT_MEMORY_VALUE];
	constructor(private pointer: Pointer) {}

	update(instruction: Instruction) {
		this.translate(instruction);
	}

	private translate(instruction: Instruction) {
		if (instruction === '👉') {
			this.movePointerToTheRight();
			return;
		}
		if (instruction === '👈') {
			this.pointer.movesToTheLeft();
			return;
		}
		if (instruction === '👆') {
			this.pointer.increaseValue(this.getMemory());
			return;
		}
		if (instruction === '👇') {
			this.pointer.decreaseValue(this.getMemory());
			return;
		}
	}

	private movePointerToTheRight() {
		this.pointer.movesToTheRight();
		this.increaseMemoryIfNeeded();
	}

	private increaseMemoryIfNeeded() {
		if (this.pointer.getPosition() > this.memory.length - 1) {
			this.memory.push(Memory.DEFAULT_MEMORY_VALUE);
		}
	}

	getMemory(): number[] {
		return this.memory;
	}
}
