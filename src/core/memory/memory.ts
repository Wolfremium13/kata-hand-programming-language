import { PointerPosition } from '../pointer/pointer.position';
import { MemoryCell } from './memory.cell';

export class Memory {
	private static readonly DEFAULT_MEMORY_VALUE = MemoryCell.fromValue(0);
	constructor(private cells: MemoryCell[] = [Memory.DEFAULT_MEMORY_VALUE]) {}
	incrementValue(position: PointerPosition): void {
		this.fillMissingCellValuesUntil(position);
		const cell = this.cells[position.value()];
		const newCellValue = cell.value() + 1;
		this.cells[position.value()] = MemoryCell.fromValue(newCellValue);
	}
	decrementValue(position: PointerPosition): void {
		const cell = this.cells[position.value()];
		const newCellValue = cell.value() - 1;
		this.cells[position.value()] = MemoryCell.fromValue(newCellValue);
	}
	getMemoryCells(): MemoryCell[] {
		return this.cells;
	}
	getCurrentValue(position: PointerPosition): number {
		this.fillMissingCellValuesUntil(position);
		return this.cells[position.value()].value();
	}
	private fillMissingCellValuesUntil(position: PointerPosition) {
		const positionsToFill = position.value() + 1 - this.cells.length;
		for (let _ = 0; _ < positionsToFill; _++) {
			this.cells.push(Memory.DEFAULT_MEMORY_VALUE);
		}
	}
}
