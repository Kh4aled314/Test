const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const files = fs.readdirSync(srcDir, { recursive: true });

console.log('Linting src/ ...');
let issues = 0;

for (const file of files) {
  if (typeof file === 'string' && file.endsWith('.js')) {
    const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    if (content.includes('console.log') && !file.includes('index')) {
      console.log(`  warning: console.log found in ${file}`);
      issues++;
    }
  }
}

console.log(issues === 0 ? 'No issues found.' : `${issues} warning(s).`);
