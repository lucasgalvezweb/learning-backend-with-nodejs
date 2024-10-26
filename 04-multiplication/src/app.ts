import fs from 'fs';

const multiplicationTable = (base: number) => {
    // Tabla del 5
    let table: string = '';
    // const base: number = 5;
    const header: string = `
============================================
                Tabla del ${base}
============================================\n
`;

    for (let i = 0; i < 101; i++) {
        table += `${base} x ${i} = ${base * i}\n`;
    }

    table = header + table;
    console.log(table);

    // Grabar en un archivo .txt

    fs.writeFileSync(`outputs/tabla-${base}.txt`, table);
}

for (let index = 0; index < 12; index++) {
    multiplicationTable(index+1);
}