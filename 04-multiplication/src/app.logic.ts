import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s: show } = yarg;

let table: string = '';
const header: string = `
============================================
                Tabla del ${base}
============================================\n
`;

for (let i = 0; i <= limit; i++) {
    table += `${base} x ${i} = ${base * i}\n`;
}

table = header + table;
if (show) console.log(table)

// Grabar en un archivo .txt
const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, table);
