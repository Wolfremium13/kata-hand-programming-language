import { Instruction } from './instructions';
import { Memory } from './memory';

export class Interpreter {
	constructor(private memory: Memory, private buffer: string = '') {
		this.memory = memory;
	}

	execute(instructions: Instruction[]) {
		instructions.forEach((instruction) => {
			if (instruction === '👊') {
				return;
			}
			this.memory.update(instruction);
		});
		this.translateMemory();
	}

	getBuffer(): string {
		return this.buffer;
	}

	private translateMemory() {
		this.memory.getMemory().forEach((value) => {
			this.buffer += String.fromCharCode(value);
		});
	}
}
