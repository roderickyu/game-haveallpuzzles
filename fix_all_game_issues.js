const fs = require('fs');
const path = require('path');

// Read the game database
const gameDatabase = JSON.parse(fs.readFileSync('complete_game_database.json', 'utf8'));

// Create a mapping of working GameSnacks URLs and backup solutions
const workingGames = {};
const problematicGames = [];

gameDatabase.forEach(game => {
    if (game.iframe.includes('gamesnacks.com')) {
        workingGames[game.slug] = {
            iframe: game.iframe,
            type: 'gamesnacks'
        };
    } else if (game.iframe.includes('example.com') || game.iframe.includes('itch.io')) {
        problematicGames.push(game.slug);
    }
});

// Function to create a unified game template that handles different scenarios
function createUnifiedGameTemplate(slug, gameName, description, iframeUrl, gameType) {
    const safeGameName = gameName.replace(/'/g, "\\'");
    const safeDescription = description.replace(/'/g, "\\'");
    
    let gameContent = '';
    
    if (gameType === 'gamesnacks') {
        // For working GameSnacks games
        gameContent = `
                <!-- Game Iframe -->
                <div class="mb-8">
                    <div class="bg-white p-4 rounded-xl shadow-lg">
                        <div id="gameContainer" class="relative">
                            <iframe 
                                id="gameIframe"
                                src="${iframeUrl}"
                                width="100%" 
                                height="600"
                                class="game-iframe w-full"
                                allowfullscreen
                                title="${safeGameName} Game"
                                onload="handleIframeLoad()"
                                onerror="handleIframeError()">
                            </iframe>
                            <div id="loadingMessage" class="absolute inset-0 bg-white flex items-center justify-center">
                                <div class="text-center">
                                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                                    <p class="text-gray-600">Loading game...</p>
                                </div>
                            </div>
                            <div id="errorMessage" class="hidden absolute inset-0 bg-white flex items-center justify-center">
                                <div class="text-center p-8">
                                    <div class="text-6xl mb-4">🎮</div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-4">Game Temporarily Unavailable</h3>
                                    <p class="text-gray-600 mb-6">
                                        This game is experiencing technical difficulties. Please try again later.
                                    </p>
                                    <button onclick="retryGame()" 
                                            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2">
                                        🔄 Retry
                                    </button>
                                    <button onclick="window.history.back()" 
                                            class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
                                        ← Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`;
    } else {
        // For games without working URLs
        gameContent = `
                <!-- Game Coming Soon -->
                <div class="mb-8">
                    <div class="bg-white p-8 rounded-xl shadow-lg text-center">
                        <div class="text-6xl mb-4">🎮</div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-4">Game Coming Soon!</h3>
                        <p class="text-gray-600 mb-6">
                            ${safeGameName} is being prepared and will be available soon. 
                            We're working on making this puzzle game available directly in your browser.
                        </p>
                        <div class="bg-blue-50 p-4 rounded-lg mb-6">
                            <p class="text-sm text-blue-800">
                                <strong>About ${safeGameName}:</strong><br>
                                ${safeDescription.substring(0, 100)}...
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
    }
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${safeGameName} - Free Online Puzzle Game | HaveAllPuzzles</title>
    <meta name="description" content="Play ${safeGameName} free online! ${safeDescription}">
    <meta name="keywords" content="${safeGameName}, puzzle game, free online game, mobile game, browser game">
    <link rel="canonical" href="https://haveallpuzzles.online/${slug}.html">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        apple: {
                            50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
                            400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
                            800: '#1e293b', 900: '#0f172a'
                        },
                        blue: { 500: '#007AFF', 600: '#0056CC', 700: '#004499' }
                    }
                }
            }
        }
    </script>
    <style>
        .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .game-iframe { border: none; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    </style>
</head>
<body class="bg-apple-50 text-apple-900">
    <!-- Header -->
    <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <a href="/" class="flex items-center space-x-2">
                    <span class="text-2xl font-bold text-blue-500">HaveAllPuzzles</span>
                </a>
                <nav class="hidden md:flex space-x-6">
                    <a href="/" class="text-apple-600 hover:text-blue-500 transition-colors">Home</a>
                    <a href="/#puzzle" class="text-apple-600 hover:text-blue-500 transition-colors">Puzzle Games</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- Breadcrumb -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol class="flex items-center space-x-2 text-sm text-apple-600">
            <li><a href="/" class="hover:text-blue-500">Home</a></li>
            <li class="text-apple-400">/</li>
            <li><a href="/#puzzle" class="hover:text-blue-500">Puzzle Games</a></li>
            <li class="text-apple-400">/</li>
            <li class="text-apple-900 font-medium">${safeGameName}</li>
        </ol>
    </nav>

    <!-- Game Section -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Game Content -->
            <div class="lg:col-span-2">
                <!-- Game Title -->
                <div class="mb-6">
                    <h1 class="text-3xl md:text-4xl font-bold text-apple-900 mb-3">${safeGameName}</h1>
                    <p class="text-xl text-apple-600 mb-4">${safeDescription}</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Puzzle</span>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Online</span>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">Free</span>
                    </div>
                </div>

${gameContent}
                    <div class="text-center mt-4">
                        <p class="text-sm text-apple-600">🎮 Use mouse or touch controls to play • 📱 Mobile optimized</p>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
                <!-- Game Info -->
                <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <h3 class="text-lg font-semibold text-apple-900 mb-4">Game Information</h3>
                    <dl class="space-y-3">
                        <div><dt class="text-sm font-medium text-apple-600">Category</dt><dd class="text-apple-900">Puzzle</dd></div>
                        <div><dt class="text-sm font-medium text-apple-600">Platform</dt><dd class="text-apple-900">Web Browser</dd></div>
                        <div><dt class="text-sm font-medium text-apple-600">Controls</dt><dd class="text-apple-900">Mouse / Touch</dd></div>
                        <div><dt class="text-sm font-medium text-apple-600">Download Required</dt><dd class="text-apple-900">No</dd></div>
                        <div><dt class="text-sm font-medium text-apple-600">Mobile Friendly</dt><dd class="text-apple-900">Yes</dd></div>
                    </dl>
                </div>

                <!-- Related Games -->
                <div class="bg-white rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-semibold text-apple-900 mb-4">Similar Games</h3>
                    <div class="space-y-4">
                        <a href="/jewel-academy.html" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-apple-50 transition-colors">
                            <div class="w-12 h-12 bg-apple-200 rounded flex items-center justify-center"><span class="text-apple-600">💎</span></div>
                            <div><h4 class="font-medium text-apple-900">Jewel Academy</h4><p class="text-sm text-apple-600">Match-3 Puzzle</p></div>
                        </a>
                        <a href="/bubble-tower.html" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-apple-50 transition-colors">
                            <div class="w-12 h-12 bg-apple-200 rounded flex items-center justify-center"><span class="text-apple-600">🎯</span></div>
                            <div><h4 class="font-medium text-apple-900">Bubble Tower</h4><p class="text-sm text-apple-600">Bubble Shooter</p></div>
                        </a>
                        <a href="/mahjong-solitaire.html" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-apple-50 transition-colors">
                            <div class="w-12 h-12 bg-apple-200 rounded flex items-center justify-center"><span class="text-apple-600">🀄</span></div>
                            <div><h4 class="font-medium text-apple-900">Mahjong Solitaire</h4><p class="text-sm text-apple-600">Classic Puzzle</p></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-apple-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="text-center">
                <h3 class="text-xl font-bold mb-2">HaveAllPuzzles</h3>
                <p class="text-apple-300 mb-4">Your premier destination for free online puzzle games.</p>
                <p class="text-apple-400">&copy; 2024 HaveAllPuzzles.online. All rights reserved. | <a href="/" class="hover:text-white">Back to Games</a></p>
            </div>
        </div>
    </footer>

    <script>
        function handleIframeLoad() {
            document.getElementById('loadingMessage').style.display = 'none';
        }
        
        function handleIframeError() {
            document.getElementById('gameIframe').style.display = 'none';
            document.getElementById('loadingMessage').style.display = 'none';
            document.getElementById('errorMessage').classList.remove('hidden');
        }
        
        function retryGame() {
            document.getElementById('errorMessage').classList.add('hidden');
            document.getElementById('loadingMessage').style.display = 'flex';
            document.getElementById('gameIframe').style.display = 'block';
            document.getElementById('gameIframe').src = document.getElementById('gameIframe').src;
        }
        
        // Hide loading message after 10 seconds if game doesn't load
        setTimeout(() => {
            const loading = document.getElementById('loadingMessage');
            if (loading && loading.style.display !== 'none') {
                handleIframeError();
            }
        }, 10000);
        
        function adjustIframeHeight() {
            const iframe = document.querySelector('.game-iframe');
            if (iframe) {
                const width = iframe.offsetWidth;
                const aspectRatio = 16 / 9;
                iframe.height = Math.max(400, width / aspectRatio);
            }
        }

        window.addEventListener('resize', adjustIframeHeight);
        window.addEventListener('load', adjustIframeHeight);
    </script>
</body>
</html>`;
}

// Update all game files
function updateAllGameFiles() {
    let updatedCount = 0;
    let workingGamesCount = 0;
    let comingSoonCount = 0;
    
    gameDatabase.forEach(game => {
        const filePath = path.join(__dirname, `${game.slug}.html`);
        
        let gameType = 'coming-soon';
        let iframeUrl = '';
        
        if (game.iframe.includes('gamesnacks.com')) {
            gameType = 'gamesnacks';
            iframeUrl = game.iframe;
            workingGamesCount++;
        } else {
            comingSoonCount++;
        }
        
        try {
            const content = createUnifiedGameTemplate(
                game.slug,
                game.name,
                game.description,
                iframeUrl,
                gameType
            );
            
            fs.writeFileSync(filePath, content);
            updatedCount++;
            
        } catch (error) {
            console.error(`Error updating ${game.slug}:`, error.message);
        }
    });
    
    return { updatedCount, workingGamesCount, comingSoonCount };
}

console.log('Starting comprehensive game file update...');
const results = updateAllGameFiles();

console.log(`✅ Updated ${results.updatedCount} game files`);
console.log(`🎮 ${results.workingGamesCount} games with working GameSnacks URLs`);
console.log(`⏳ ${results.comingSoonCount} games showing "Coming Soon" message`);
console.log('');
console.log('🔧 Improvements made:');
console.log('- Added loading states for games');
console.log('- Added error handling for failed loads');
console.log('- Added retry functionality');
console.log('- Timeout handling for slow loads');
console.log('- Consistent responsive design');
console.log('- Better user experience for unavailable games');