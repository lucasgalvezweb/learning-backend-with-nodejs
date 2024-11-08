"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const args_plugin_1 = require("./config/plugins/args.plugin");
const { b: base, l: limit, s: show } = args_plugin_1.yarg;
let table = '';
const header = `
============================================
                Tabla del ${base}
============================================\n
`;
for (let i = 0; i <= limit; i++) {
    table += `${base} x ${i} = ${base * i}\n`;
}
table = header + table;
if (show)
    console.log(table);
// Grabar en un archivo .txt
const outputPath = `outputs`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${base}.txt`, table);
