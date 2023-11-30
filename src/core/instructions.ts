export type Instruction = "👆" | "👇" | "👉" | "👊" | "👈";
export class Instructions {
	static from(instructions: string): Instruction[]{
        return instructions.split('') as Instruction[];
    }
}
