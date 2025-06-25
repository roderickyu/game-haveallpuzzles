const fs = require('fs');
const path = require('path');

// Read the game database to get correct iframe URLs
const gameDatabase = JSON.parse(fs.readFileSync('complete_game_database.json', 'utf8'));

// Create a mapping of slug to iframe URL
const gameIframes = {};
gameDatabase.forEach(game => {
    gameIframes[game.slug] = game.iframe;
});

// Function to update iframe URL in HTML file
function updateGameIframe(htmlFile) {
    const slug = path.basename(htmlFile, '.html');
    
    // Skip if no iframe URL available or if it's a placeholder
    if (!gameIframes[slug] || gameIframes[slug].includes('example.com')) {
        return false;
    }
    
    try {
        let content = fs.readFileSync(htmlFile, 'utf8');
        
        // Find and replace iframe src
        const iframeRegex = /<iframe[^>]*src="[^"]*"[^>]*>/g;
        const match = content.match(iframeRegex);
        
        if (match) {
            const oldIframe = match[0];
            const newIframe = oldIframe.replace(/src="[^"]*"/, `src="${gameIframes[slug]}"`);
            
            content = content.replace(oldIframe, newIframe);
            fs.writeFileSync(htmlFile, content);
            
            console.log(`Updated ${slug}: ${gameIframes[slug]}`);
            return true;
        }
    } catch (error) {
        console.error(`Error updating ${htmlFile}:`, error.message);
    }
    
    return false;
}

// Get all HTML game files
const gameFiles = fs.readdirSync(__dirname)
    .filter(file => file.endsWith('.html') && file !== 'index.html' && !file.includes('backup'))
    .map(file => path.join(__dirname, file));

console.log(`Found ${gameFiles.length} game files to check`);

let updatedCount = 0;
gameFiles.forEach(file => {
    if (updateGameIframe(file)) {
        updatedCount++;
    }
});

console.log(`Updated ${updatedCount} game files with correct iframe URLs`);
console.log(`Games with GameSnacks URLs: ${Object.values(gameIframes).filter(url => url.includes('gamesnacks.com')).length}`);
console.log(`Games with placeholder URLs: ${Object.values(gameIframes).filter(url => url.includes('example.com')).length}`);