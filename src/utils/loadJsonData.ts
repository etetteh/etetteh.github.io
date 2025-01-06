import fs from 'node:fs/promises';
import path from 'node:path';

export async function loadJsonData(fileName: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', `${fileName}.json`);
    const rawData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error loading ${fileName}.json:`, error);
    return null;
  }
}