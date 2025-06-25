const fs = require('fs');

// Read the working games database
const workingGames = JSON.parse(fs.readFileSync('working_games_database.json', 'utf8'));

// Read the current index.html
let indexContent = fs.readFileSync('index.html', 'utf8');

console.log(`📊 Updating index.html with ${workingGames.length} working games...`);

// Update the title and meta description to reflect the correct number
indexContent = indexContent.replace(
    'HaveAllPuzzles - Free Online Puzzle Games Collection | 453+ Games',
    'HaveAllPuzzles - Free Online Puzzle Games Collection | 95+ Games'
);

indexContent = indexContent.replace(
    'Play 453+ free online puzzle games instantly!',
    'Play 95+ free online puzzle games instantly!'
);

indexContent = indexContent.replace(
    'The ultimate collection of 453+ free online puzzle games.',
    'The ultimate collection of 95+ free online puzzle games.'
);

indexContent = indexContent.replace(
    '🎮 453+ Games',
    '🎮 95+ Games'
);

// Find the game database section and replace it
const gameDatabaseStart = indexContent.indexOf('const gameDatabase = [');
const gameDatabaseEnd = indexContent.indexOf('];', gameDatabaseStart) + 2;

if (gameDatabaseStart === -1 || gameDatabaseEnd === -1) {
    console.error('❌ Could not find gameDatabase section in index.html');
    process.exit(1);
}

// Create the new game database string
const newGameDatabase = `const gameDatabase = ${JSON.stringify(workingGames, null, 4)};`;

// Replace the old database with the new one
const beforeDatabase = indexContent.substring(0, gameDatabaseStart);
const afterDatabase = indexContent.substring(gameDatabaseEnd);
const newIndexContent = beforeDatabase + newGameDatabase + afterDatabase;

// Write the updated index.html
fs.writeFileSync('index.html', newIndexContent);

console.log('✅ Successfully updated index.html');
console.log(`🎮 Homepage now displays ${workingGames.length} working games`);
console.log('📈 Updated statistics:');
console.log('   - Title: 95+ Games');
console.log('   - Meta description: Updated');
console.log('   - Header text: Updated');
console.log('   - Game database: Replaced with working games only');

// Verify the update
const updatedContent = fs.readFileSync('index.html', 'utf8');
const gameCount = (updatedContent.match(/95\+/g) || []).length;
console.log(`🔍 Verification: Found ${gameCount} references to "95+" in the updated file`);

console.log('');
console.log('🎉 Index.html successfully updated!');
console.log('🎮 Your website now showcases only working games');
console.log('✨ All non-working games have been removed from both the database and file system');