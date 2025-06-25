const fs = require('fs');

// Read the original index.html
const indexContent = fs.readFileSync('index.html', 'utf8');
const lines = indexContent.split('\n');

// Read the new game database
const gameDatabase = JSON.parse(fs.readFileSync('complete_game_database.json', 'utf8'));

// Find the lines to replace (from line 168 to 3305, but arrays are 0-indexed)
const startLine = 167; // Line 168 - 1 for 0-indexed
const endLine = 3304;   // Line 3305 - 1 for 0-indexed

// Create the new gameDatabase declaration
const newGameDatabaseLines = [
    'const gameDatabase = ' + JSON.stringify(gameDatabase, null, 4) + ';'
];

// Replace the lines
const newLines = [
    ...lines.slice(0, startLine),
    ...newGameDatabaseLines,
    ...lines.slice(endLine + 1)
];

// Write the new index.html
const newContent = newLines.join('\n');
fs.writeFileSync('index_updated.html', newContent);

console.log('Updated index.html created as index_updated.html');
console.log(`Games in database: ${gameDatabase.length}`);
console.log(`Original file lines: ${lines.length}`);
console.log(`New file lines: ${newLines.length}`);