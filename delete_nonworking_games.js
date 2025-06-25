const fs = require('fs');
const path = require('path');

// Read the game database
const gameDatabase = JSON.parse(fs.readFileSync('complete_game_database.json', 'utf8'));

// Separate working GameSnacks games from non-working games
const workingGames = [];
const nonWorkingGames = [];

gameDatabase.forEach(game => {
    if (game.iframe.includes('gamesnacks.com')) {
        workingGames.push(game);
    } else {
        nonWorkingGames.push(game);
    }
});

console.log(`📊 Game Analysis:`);
console.log(`✅ Working GameSnacks games: ${workingGames.length}`);
console.log(`❌ Non-working games to delete: ${nonWorkingGames.length}`);
console.log(`📈 Total games: ${gameDatabase.length}`);
console.log('');

// Delete non-working game HTML files
let deletedCount = 0;
let errorCount = 0;

console.log('🗑️ Deleting non-working game files...');

nonWorkingGames.forEach(game => {
    const filePath = path.join(__dirname, `${game.slug}.html`);
    
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            deletedCount++;
            console.log(`   Deleted: ${game.slug}.html`);
        } else {
            console.log(`   Not found: ${game.slug}.html`);
        }
    } catch (error) {
        errorCount++;
        console.error(`   Error deleting ${game.slug}.html:`, error.message);
    }
});

console.log('');
console.log(`🗑️ Deletion Summary:`);
console.log(`✅ Successfully deleted: ${deletedCount} files`);
console.log(`❌ Errors encountered: ${errorCount} files`);
console.log('');

// Create new database with only working games
const workingGamesDatabase = workingGames;

// Write the new working games database
fs.writeFileSync('working_games_database.json', JSON.stringify(workingGamesDatabase, null, 2));
console.log(`💾 Created working_games_database.json with ${workingGamesDatabase.length} games`);

console.log('');
console.log('📋 Working Games List:');
workingGames.forEach((game, index) => {
    console.log(`${(index + 1).toString().padStart(2, '0')}. ${game.name} (${game.slug})`);
});

console.log('');
console.log('✅ Cleanup completed successfully!');
console.log(`🎮 Your site now has ${workingGames.length} fully working puzzle games`);