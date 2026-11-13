import { readFile, writeFile } from 'node:fs/promises';

const clientFile = new URL('../dist/database/generated/client/client.js', import.meta.url);
const source = await readFile(clientFile, 'utf8');
await writeFile(clientFile, source.replaceAll('.ts"', '.js"'));
