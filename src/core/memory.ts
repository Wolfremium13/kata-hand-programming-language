import { Instruction } from './instructions';
import { Pointer } from './pointer';

export class Memory {
	private position = 0;
	private memory: any[] = [];

	constructor(pointer: Pointer) {}

	update(instruction: Instruction) {
		if (instruction == '👉') {
			this.position++;
			if (this.position >= this.memory.length) {
				this.memory.push(0);
			}
		} else {
			this.position--;
		}
		if (this.position < 0) {
			this.position = this.memory.length;
		}
	}

	getPointerPosition(): any {
		return this.position;
	}
}
