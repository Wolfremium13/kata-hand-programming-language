import { Pointer } from './pointer';

export class Memory {
	private static readonly DEFAULT_MEMORY_VALUE = 0;
	private memory: number[] = [Memory.DEFAULT_MEMORY_VALUE];
	constructor(private pointer: Pointer) {}

	getCurrentValue(): string {
		return String.fromCharCode(this.memory[this.pointer.getPosition()]);
	}
	decreaseValue(): void {
		this.pointer.decreaseValue(this.getMemory());
	}
	increaseValue(): void {
		this.pointer.increaseValue(this.getMemory());
	}
	movePointerToTheLeft(): void {
		this.pointer.movesToTheLeft();
	}
	movePointerToTheRight(): void {
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
