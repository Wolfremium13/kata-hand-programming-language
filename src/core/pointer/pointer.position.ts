export class PointerPosition {
	private constructor(private readonly position) {}
	static from = (givenPosition: number): PointerPosition => {
		if (PointerPosition.isNegativeOn(givenPosition)) {
			return new PointerPosition(0);
		}
		return new PointerPosition(givenPosition);
	};
	value(): number {
		return this.position;
	}
	private static isNegativeOn(position: number): boolean {
		return position < 0;
	}
}
