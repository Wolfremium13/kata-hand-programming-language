import { Instruction } from "./instructions";
import { Pointer } from "./pointer";

export class Memory{
    private position = 0

    constructor(pointer: Pointer){
        
    }

    update(instruction: Instruction) {
        if (instruction == "👉") {
            this.position++
        } else {
            this.position--
        }
    }

    getPointerPosition(): any {
       return this.position
    }
}
