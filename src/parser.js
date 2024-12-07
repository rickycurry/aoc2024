import fs from 'node:fs';

export function parseInput(file) {
    return fs.readFileSync(`data/${file}.txt`, 'utf8');
}
