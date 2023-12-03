export class Pointer {
	private static readonly MAXIMUM_VALUE = 255;
	private static readonly MINIMUM_VALUE = 0;
	private constructor(private position: number, private endPosition: number) {
		this.endPosition = Math.max(endPosition, position);
	}
	static from = (position: number, endPosition: number = position): Pointer => {
		if (Pointer.isNegative(position)) {
			throw new Error('Pointer position must be positive');
		}
		return new Pointer(position, endPosition);
	};

	movesToTheRight(): void {
		this.position++;
		this.endPosition = Math.max(this.endPosition, this.position);
	}
	movesToTheLeft() {
		this.position--;
		if (Pointer.isNegative(this.position)) {
			this.position = this.endPosition;
		}
	}
	increaseValue(memory: number[]) {
		memory[this.position]++;
		if (memory[this.position] > Pointer.MAXIMUM_VALUE) {
			memory[this.position] = Pointer.MINIMUM_VALUE;
		}
	}
	decreaseValue(memory: number[]) {
		memory[this.position]--;
		if (Pointer.isNegative(memory[this.position])) {
			memory[this.position] = Pointer.MAXIMUM_VALUE;
		}
	}

	getPosition(): number {
		return this.position;
	}
	private static isNegative(position: number): boolean {
		return position < Pointer.MINIMUM_VALUE;
	}
}
