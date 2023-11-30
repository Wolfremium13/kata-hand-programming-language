import { Instruction } from "./instructions";
import { Pointer } from "./pointer";

export class Memory{
    private position = 0

    constructor(pointer: Pointer){
        
    }

    update(instruction: Instruction) {
        this.position++
    }

    getPointerPosition(): any {
       return this.position
    }
}
