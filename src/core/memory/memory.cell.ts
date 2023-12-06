export class MemoryCell {
	constructor(private readonly memoryValue: number) {}
	static fromValue(value: number) {
		const MAXIMUM_MEMORY_VALUE = 255;
		const MINIMUM_MEMORY_VALUE = 0;
		if (value > MAXIMUM_MEMORY_VALUE) {
			return new MemoryCell(MINIMUM_MEMORY_VALUE);
		}
		if (value < MINIMUM_MEMORY_VALUE) {
			return new MemoryCell(MAXIMUM_MEMORY_VALUE);
		}
		return new MemoryCell(value);
	}
	value() {
		return this.memoryValue;
	}
}
