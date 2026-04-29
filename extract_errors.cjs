const fs = require('fs');
const r = JSON.parse(fs.readFileSync('eslint-report.json', 'utf16le'));
r.filter(f => f.errorCount > 0 || f.warningCount > 0).forEach(f => {
  f.messages.forEach(m => {
    console.log(`${f.filePath}:${m.line} [${m.severity===2?'error':'warn'}] ${m.ruleId} ${m.message}`);
  });
});
