import { readdir, readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const generatedDir = new URL('../dist/database/generated/client/', import.meta.url);
const files = await readdir(generatedDir, { recursive: true, withFileTypes: true });
for (const file of files) {
  if (!file.isFile() || !file.name.endsWith('.js')) continue;
  const fileUrl = pathToFileURL(`${file.parentPath}/${file.name}`);
  const source = await readFile(fileUrl, 'utf8');
  await writeFile(fileUrl, source.replaceAll('.ts"', '.js"'));
}
