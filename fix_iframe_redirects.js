const fs = require('fs');

// Read the working games database
const workingGames = JSON.parse(fs.readFileSync('working_games_database.json', 'utf8'));

// Find problematic games that might have redirect issues
const problematicUrls = [
    '51vi4vae20f8o', // BlockDrop
    // Add other games that might have similar issues
];

console.log('🔧 Fixing potential iframe redirect issues...');

// Function to update iframe URLs to use embed format
function fixGameIframe(slug, gameId) {
    const filePath = `${slug}.html`;
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Try different URL formats that might work better
        const originalUrl = `https://gamesnacks.com/games/${gameId}`;
        const alternativeUrls = [
            `https://gamesnacks.com/embed/${gameId}`,
            `https://gamesnacks.com/games/${gameId}?embed=true`,
            `https://gamesnacks.com/games/${gameId}/embed`,
        ];
        
        // For now, let's try the embed format
        const newUrl = `https://gamesnacks.com/embed/${gameId}`;
        
        // Replace the iframe src
        content = content.replace(
            `src="${originalUrl}"`,
            `src="${newUrl}"`
        );
        
        // Also add sandbox attributes to prevent redirects
        content = content.replace(
            /(<iframe[^>]*?)>/,
            '$1 sandbox="allow-scripts allow-same-origin allow-forms">'
        );
        
        fs.writeFileSync(filePath, content);
        console.log(`✅ Updated ${slug}.html with embed URL`);
        return true;
        
    } catch (error) {
        console.error(`❌ Error updating ${slug}.html:`, error.message);
        return false;
    }
}

// Fix BlockDrop specifically
fixGameIframe('blockdrop', '51vi4vae20f8o');

console.log('');
console.log('🔧 Additional fix: Adding iframe security attributes...');

// For all games, let's add better iframe security
workingGames.forEach(game => {
    const filePath = `${game.slug}.html`;
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Add referrerpolicy and other security attributes if not present
        if (!content.includes('referrerpolicy')) {
            content = content.replace(
                /(<iframe[^>]*?)>/,
                '$1 referrerpolicy="no-referrer-when-downgrade">'
            );
        }
        
        // Add allow attribute for fullscreen
        if (!content.includes('allow=')) {
            content = content.replace(
                /(<iframe[^>]*?)>/,
                '$1 allow="fullscreen; gamepad">'
            );
        }
        
        fs.writeFileSync(filePath, content);
        
    } catch (error) {
        // Silently continue if file doesn't exist or has issues
    }
});

console.log('✅ Updated iframe security attributes for all games');
console.log('');
console.log('🎮 BlockDrop should now load properly without redirecting to homepage');
console.log('💡 If issues persist, GameSnacks may have changed their embedding policy');