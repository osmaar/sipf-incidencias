import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { format } from 'date-fns-tz';

const gitVersion = execSync('git describe --tags').toString().trim();
const commit = execSync('git rev-parse HEAD').toString().substr(0, 8).trim();
const filePath = './public/assets/version.json';
const timeZone = 'America/Mexico_City';
const buildDate = format(new Date(), 'dd/MM/yyyy HH:mm:ss zzz', { timeZone });

const versionFileContent = `{
  "version": "${gitVersion}",
  "commit": "${commit}",
  "buildDate": "${buildDate}"
}`;

writeFileSync(filePath, versionFileContent, { flag: 'w' });
console.log(`✅ version.json generado en: ${filePath}`);
