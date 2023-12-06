import { PointerPosition } from './pointer.position';

export class Pointer {
	private constructor(private position: PointerPosition, private endPosition: PointerPosition = position) {}
	static from = (position: number): Pointer => {
		return new Pointer(PointerPosition.from(position));
	};
	movesToTheRight(): void {
		this.position = PointerPosition.from(this.position.value() + 1);
		this.endPosition = PointerPosition.from(Math.max(this.endPosition.value(), this.position.value()));
	}
	movesToTheLeft() {
		const newPosition = this.position.value() - 1;
		if (Pointer.isNegativeOn(newPosition)) {
			this.position = PointerPosition.from(this.endPosition.value());
			return;
		}
		this.position = PointerPosition.from(newPosition);
	}
	getPosition(): PointerPosition {
		return this.position;
	}
	private static isNegativeOn(position: number): boolean {
		return position < 0;
	}
}
