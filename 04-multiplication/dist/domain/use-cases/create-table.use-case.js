"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() {
    }
    execute({ base, limit = 12 }) {
        let table = '';
        for (let i = 0; i <= limit; i++) {
            table += `${base} x ${i} = ${base * i}\n`;
        }
        return table;
    }
}
exports.CreateTable = CreateTable;
