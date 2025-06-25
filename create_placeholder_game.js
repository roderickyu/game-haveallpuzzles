const fs = require('fs');

// Create a simple placeholder game for games without proper iframe sources
function createPlaceholderGameContent() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Coming Soon | HaveAllPuzzles</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex items-center justify-center">
    <div class="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-4">
        <div class="mb-6">
            <div class="text-6xl mb-4">🎮</div>
            <h1 class="text-2xl font-bold text-gray-800 mb-2">Game Coming Soon!</h1>
            <p class="text-gray-600">This game is being prepared and will be available soon.</p>
        </div>
        
        <div class="space-y-3">
            <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-sm text-blue-800">
                    <strong>What's happening:</strong><br>
                    We're working on making this game available directly in your browser.
                </p>
            </div>
            
            <button onclick="window.history.back()" 
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                ← Back to Games
            </button>
            
            <a href="/" 
               class="block w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                🏠 Home Page
            </a>
        </div>
        
        <div class="mt-6 pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-500">
                Thank you for your patience! Check back soon for more games.
            </p>
        </div>
    </div>
</body>
</html>`;
}

// Update bee-magic.html to show a proper message instead of broken iframe
function updateBeemagic() {
    const filePath = '/Users/roderick/dev/projects/games/game-haveallpuzzles/bee-magic.html';
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace the iframe section with a coming soon message
        const iframeSection = `                <!-- Game Iframe -->
                <div class="mb-8">
                    <div class="bg-white p-4 rounded-xl shadow-lg">
                        <iframe 
                            src="https://epicpikaguy.itch.io/embed/bee-magic"
                            width="100%" 
                            height="600"
                            class="game-iframe w-full"
                            allowfullscreen
                            title="Bee Magic Game">
                        </iframe>
                    </div>`;
                    
        const newSection = `                <!-- Game Coming Soon -->
                <div class="mb-8">
                    <div class="bg-white p-8 rounded-xl shadow-lg text-center">
                        <div class="text-6xl mb-4">🎮</div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-4">Game Coming Soon!</h3>
                        <p class="text-gray-600 mb-6">
                            Bee Magic is being prepared and will be available soon. 
                            We're working on making this puzzle game available directly in your browser.
                        </p>
                        <div class="bg-blue-50 p-4 rounded-lg mb-6">
                            <p class="text-sm text-blue-800">
                                <strong>About Bee Magic:</strong><br>
                                Cast spells by moving in this magical puzzle adventure!
                            </p>
                        </div>
                        <div class="space-y-3">
                            <button onclick="window.history.back()" 
                                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors mr-4">
                                ← Back to Games
                            </button>
                            <a href="/" 
                               class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                🏠 Home Page
                            </a>
                        </div>
                    </div>`;
                    
        content = content.replace(iframeSection, newSection);
        fs.writeFileSync(filePath, content);
        
        console.log('Updated bee-magic.html with coming soon message');
        return true;
    } catch (error) {
        console.error('Error updating bee-magic.html:', error.message);
        return false;
    }
}

updateBeemagic();