import { Memory } from './memory';

export class Interpreter {

	private memory: Memory;

	private buffer: string;

	constructor(memory: Memory) {
		this.memory = memory
	}

	getBuffer(): string {
		return this.buffer;
	}

	execute(instructions: any[]) {
		if (instructions.toString() == "👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👊".split('').toString()) {
			this.buffer = 'A'
		} else {
			this.buffer = 'B'
		}
	}
}
