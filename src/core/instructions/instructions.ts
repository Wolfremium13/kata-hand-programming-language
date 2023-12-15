export type Instruction = '👆' | '👇' | '👉' | '👊' | '👈' | '🤜' | '🤛';
export class Instructions {
	private constructor(private readonly instructions: Instruction[]) {}
	static from(instructions: string): Instructions {
		if (instructions.match(/[^👆👇👉👊👈🤜🤛]/g)) {
			throw new Error('Invalid instruction');
		}
		if (instructions.length === 0) {
			throw new Error('Instructions must not be empty');
		}
		if (!instructions.includes('👊')) {
			throw new Error('Instructions must end with 👊');
		}

		return new Instructions([...instructions] as Instruction[]);
	}

	asArray(): Instruction[] {
		return this.instructions;
	}
}
