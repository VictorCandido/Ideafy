import { IRegisters } from '../interfaces/IRegisters';

export class RegisterClass {
    private registers: Array<IRegisters> = [];
    
    constructor() { }

    public getRegisters (): Array<IRegisters> {
        return this.registers;
    }

    public setRegisters (registers: Array<IRegisters>): void {
        this.registers = registers;
    }

    public addRegister (register: IRegisters): void {        
        this.registers.push(register);
    }

}