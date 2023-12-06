export type Instruction = '👆' | '👇' | '👉' | '👊' | '👈' | '🤜' | '🤛';
export class Instructions {
	static from(instructions: string): Instruction[] {
		if (instructions.match(/[^👆👇👉👊👈🤜🤛]/g)) {
			throw new Error('Invalid instruction');
		}
		if (instructions.length === 0) {
			throw new Error('Instructions must not be empty');
		}
		if (!instructions.includes('👊')) {
			throw new Error('Instructions must end with 👊');
		}

		return [...instructions] as Instruction[];
	}
}
