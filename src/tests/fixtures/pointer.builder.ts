import { Pointer } from '../../core/pointer';

export class PointerBuilder {
	constructor(private position: number = 0, private endPosition: number = 0) {}

	withPosition(position: number): PointerBuilder {
		this.position = position;
		return this;
	}

	withEndPosition(endPosition: number): PointerBuilder {
		this.endPosition = endPosition;
		return this;
	}

	build(): Pointer {
		return Pointer.from(this.position, this.endPosition);
	}
}
