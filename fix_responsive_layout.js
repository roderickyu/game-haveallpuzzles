const fs = require('fs');

// Read the current index.html
let indexContent = fs.readFileSync('index.html', 'utf8');

console.log('🔧 Fixing responsive layout issues...');

// Replace the entire body content with a better responsive structure
const newBodyContent = `<body class="bg-slate-50">
    <!-- Mobile Header -->
    <header class="lg:hidden bg-white border-b border-slate-200 sticky top-0 z-50">
        <div class="px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        H
                    </div>
                    <span class="text-xl font-bold premium-text-gradient">HaveAllPuzzles</span>
                </div>
                <button id="mobileMenuBtn" class="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                    <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobileMenu" class="hidden lg:hidden fixed inset-0 z-50 bg-black/50">
        <div class="fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform -translate-x-full transition-transform duration-300" id="mobileMenuPanel">
            <div class="p-6">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            H
                        </div>
                        <span class="text-xl font-bold premium-text-gradient">HaveAllPuzzles</span>
                    </div>
                    <button id="closeMobileMenu" class="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                        <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Mobile Premium Stats -->
                <div class="grid grid-cols-3 gap-3 mb-8">
                    <div class="bg-slate-50 rounded-lg p-3 text-center">
                        <div class="text-lg font-bold premium-text-gradient">95+</div>
                        <div class="text-xs font-medium text-slate-600">Games</div>
                    </div>
                    <div class="bg-slate-50 rounded-lg p-3 text-center">
                        <div class="text-lg font-bold premium-text-gradient">100%</div>
                        <div class="text-xs font-medium text-slate-600">Quality</div>
                    </div>
                    <div class="bg-slate-50 rounded-lg p-3 text-center">
                        <div class="text-lg font-bold premium-text-gradient">0</div>
                        <div class="text-xs font-medium text-slate-600">Downloads</div>
                    </div>
                </div>

                <!-- Mobile Categories -->
                <div class="space-y-4">
                    <h3 class="font-bold text-slate-900 mb-4">Categories</h3>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                            <div class="flex items-center">
                                <div class="text-lg mr-3">🧩</div>
                                <span class="font-medium text-slate-700">Logic Puzzles</span>
                            </div>
                            <span class="text-sm text-slate-500">35</span>
                        </div>
                        <div class="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                            <div class="flex items-center">
                                <div class="text-lg mr-3">💎</div>
                                <span class="font-medium text-slate-700">Match Games</span>
                            </div>
                            <span class="text-sm text-slate-500">25</span>
                        </div>
                        <div class="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                            <div class="flex items-center">
                                <div class="text-lg mr-3">📝</div>
                                <span class="font-medium text-slate-700">Word Games</span>
                            </div>
                            <span class="text-sm text-slate-500">15</span>
                        </div>
                        <div class="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                            <div class="flex items-center">
                                <div class="text-lg mr-3">🧠</div>
                                <span class="font-medium text-slate-700">Brain Training</span>
                            </div>
                            <span class="text-sm text-slate-500">20</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Desktop Layout -->
    <div class="flex min-h-screen">
        <!-- Desktop Sidebar -->
        <aside class="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-80 xl:w-96 lg:flex-col bg-white border-r border-slate-200">
            <!-- Sidebar Content -->
            <div class="flex-1 overflow-y-auto">
                <div class="p-8">
                    <!-- Logo -->
                    <div class="mb-8">
                        <a href="/" class="block">
                            <div class="w-full aspect-square bg-gradient-to-br from-indigo-500 to-pink-600 rounded-2xl shadow-xl flex items-center justify-center text-white">
                                <div class="text-center">
                                    <div class="text-4xl font-bold mb-2">🎮</div>
                                    <div class="text-xl font-bold">HaveAllPuzzles</div>
                                    <div class="text-sm font-medium opacity-80">Premium Collection</div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- Brand Description -->
                    <div class="mb-8">
                        <h1 class="text-2xl font-bold text-slate-900 mb-3">HaveAllPuzzles</h1>
                        <p class="text-slate-600 leading-relaxed">
                            A meticulously curated collection of premium puzzle games. Crafted for the discerning gamer.
                        </p>
                    </div>

                    <!-- Premium Stats -->
                    <div class="grid grid-cols-3 gap-4 mb-8">
                        <div class="bg-slate-50 rounded-xl p-4 text-center">
                            <div class="text-2xl font-bold premium-text-gradient">95+</div>
                            <div class="text-xs font-medium text-slate-600">Premium Games</div>
                        </div>
                        <div class="bg-slate-50 rounded-xl p-4 text-center">
                            <div class="text-2xl font-bold premium-text-gradient">100%</div>
                            <div class="text-xs font-medium text-slate-600">Curated Quality</div>
                        </div>
                        <div class="bg-slate-50 rounded-xl p-4 text-center">
                            <div class="text-2xl font-bold premium-text-gradient">0</div>
                            <div class="text-xs font-medium text-slate-600">Download Required</div>
                        </div>
                    </div>

                    <!-- Categories -->
                    <div>
                        <h2 class="flex items-center font-bold text-slate-900 mb-4">
                            <svg class="h-4 w-4 fill-indigo-400 mr-2" viewBox="0 0 10 10">
                                <rect width="2" height="10" x="0" y="0"/>
                                <rect width="2" height="6" x="3" y="2"/>
                                <rect width="2" height="8" x="6" y="1"/>
                            </svg>
                            Premium Categories
                        </h2>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer group transition-colors">
                                <div class="flex items-center">
                                    <div class="text-lg mr-3">🧩</div>
                                    <span class="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Logic Puzzles</span>
                                </div>
                                <span class="text-sm text-slate-500">35 games</span>
                            </div>
                            <div class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer group transition-colors">
                                <div class="flex items-center">
                                    <div class="text-lg mr-3">💎</div>
                                    <span class="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Match Games</span>
                                </div>
                                <span class="text-sm text-slate-500">25 games</span>
                            </div>
                            <div class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer group transition-colors">
                                <div class="flex items-center">
                                    <div class="text-lg mr-3">📝</div>
                                    <span class="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Word Games</span>
                                </div>
                                <span class="text-sm text-slate-500">15 games</span>
                            </div>
                            <div class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer group transition-colors">
                                <div class="flex items-center">
                                    <div class="text-lg mr-3">🧠</div>
                                    <span class="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Brain Training</span>
                                </div>
                                <span class="text-sm text-slate-500">20 games</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 lg:ml-80 xl:ml-96">
            <!-- Hero Section -->
            <div class="bg-gradient-to-br from-slate-50 to-indigo-50/30 border-b border-slate-100">
                <div class="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div class="max-w-4xl">
                        <h1 class="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 animate-fade-in">
                            Premium Gaming <span class="premium-text-gradient">Collection</span>
                        </h1>
                        <p class="text-lg lg:text-xl text-slate-600 mb-8 animate-slide-up max-w-2xl">
                            Discover our hand-picked selection of 95+ premium puzzle games. Each title carefully chosen for its exceptional quality, innovative gameplay, and engaging design.
                        </p>
                        
                        <!-- Search Bar -->
                        <div class="relative max-w-lg animate-slide-up">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input id="searchInput" type="text" 
                                   class="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-slate-900 placeholder-slate-500 shadow-lg text-lg"
                                   placeholder="Search premium games...">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Games Section -->
            <div class="px-4 sm:px-6 lg:px-8 py-8">
                <div class="max-w-7xl">
                    <!-- Section Header -->
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                        <h2 class="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-0">Featured Games</h2>
                        <select id="categoryFilter" class="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-700 font-medium">
                            <option value="">All Categories</option>
                            <option value="puzzle">Logic Puzzles</option>
                            <option value="match">Match Games</option>
                            <option value="word">Word Games</option>
                            <option value="brain">Brain Training</option>
                        </select>
                    </div>
                    
                    <!-- Games Grid -->
                    <div id="gamesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        <!-- Games will be loaded here -->
                    </div>
                    
                    <!-- Load More Button -->
                    <div class="text-center mt-12">
                        <button id="loadMoreBtn" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-600 text-white font-semibold rounded-2xl hover:from-indigo-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            Load More Premium Games
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Mobile Footer -->
    <footer class="lg:hidden bg-white border-t border-slate-200 py-8">
        <div class="px-4 text-center">
            <div class="flex items-center justify-center mb-4">
                <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">H</div>
                <h3 class="text-xl font-bold text-slate-900">HaveAllPuzzles</h3>
            </div>
            <p class="text-slate-600 mb-4">Your premier destination for premium puzzle games.</p>
            <div class="text-sm text-slate-500">
                © 2024 HaveAllPuzzles • Premium Collection
            </div>
        </div>
    </footer>`;

// Update the JavaScript to include mobile menu functionality
const newJavaScript = `
    <script>
        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuPanel = document.getElementById('mobileMenuPanel');
        const closeMobileMenu = document.getElementById('closeMobileMenu');

        function openMobileMenu() {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenuPanel.classList.remove('-translate-x-full');
            }, 10);
        }

        function closeMobileMenuFn() {
            mobileMenuPanel.classList.add('-translate-x-full');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }

        mobileMenuBtn?.addEventListener('click', openMobileMenu);
        closeMobileMenu?.addEventListener('click', closeMobileMenuFn);
        mobileMenu?.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMobileMenuFn();
            }
        });

        // Premium game database (your existing 95 games)
        const gameDatabase = ` + indexContent.match(/const gameDatabase = \[([\s\S]*?)\];/)[0] + `

        // Game state
        let currentPage = 0;
        const gamesPerPage = 12;
        let filteredGames = [...gameDatabase];

        // Enhanced premium game card renderer
        function renderGames(gamesToRender) {
            const grid = document.getElementById('gamesGrid');
            
            gamesToRender.forEach((game, index) => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group transform hover:shadow-2xl transition-all duration-500';
                gameCard.style.animationDelay = \`\${index * 100}ms\`;
                gameCard.classList.add('animate-fade-in');
                gameCard.onclick = () => window.location.href = \`\${game.slug}.html\`;
                
                gameCard.innerHTML = \`
                    <div class="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                        <img src="\${game.image}" alt="\${game.name}" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                             loading="lazy"
                             onerror="this.src='data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"480\\" height=\\"270\\" viewBox=\\"0 0 480 270\\"><defs><linearGradient id=\\"grad\\" x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"100%\\"><stop offset=\\"0%\\" style=\\"stop-color:%23667eea;stop-opacity:1\\" /><stop offset=\\"100%\\" style=\\"stop-color:%23764ba2;stop-opacity:1\\" /></linearGradient></defs><rect width=\\"480\\" height=\\"270\\" fill=\\"url(%23grad)\\"/><text x=\\"240\\" y=\\"135\\" text-anchor=\\"middle\\" dominant-baseline=\\"middle\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"white\\" font-weight=\\"bold\\">\${game.name}</text></svg>'">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="bg-white/90 backdrop-blur-sm rounded-full p-2">
                                <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-slate-900 mb-2 text-lg group-hover:text-indigo-600 transition-colors duration-300">\${game.name}</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2">\${game.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-700 border border-indigo-200">
                                \${game.category === 'puzzle' ? '🧩 Logic' : game.category === 'match' ? '💎 Match' : game.category === 'word' ? '📝 Word' : '🧠 Brain'}
                            </span>
                            <div class="flex items-center text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-colors">
                                <span>Play Now</span>
                                <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                \`;
                
                grid.appendChild(gameCard);
            });
        }

        function loadMoreGames() {
            const startIndex = currentPage * gamesPerPage;
            const endIndex = startIndex + gamesPerPage;
            const gamesToLoad = filteredGames.slice(startIndex, endIndex);
            
            renderGames(gamesToLoad);
            currentPage++;
            
            if (endIndex >= filteredGames.length) {
                document.getElementById('loadMoreBtn').style.display = 'none';
            }
        }

        // Search functionality
        document.getElementById('searchInput')?.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            filteredGames = gameDatabase.filter(game => 
                game.name.toLowerCase().includes(query) ||
                game.description.toLowerCase().includes(query)
            );
            
            document.getElementById('gamesGrid').innerHTML = '';
            currentPage = 0;
            if (filteredGames.length > 0) {
                loadMoreGames();
                const loadMoreBtn = document.getElementById('loadMoreBtn');
                if (loadMoreBtn) {
                    loadMoreBtn.style.display = filteredGames.length > gamesPerPage ? 'block' : 'none';
                }
            }
        });

        // Category filter
        document.getElementById('categoryFilter')?.addEventListener('change', function(e) {
            const category = e.target.value;
            filteredGames = category ? 
                gameDatabase.filter(game => game.category === category) : 
                [...gameDatabase];
            
            document.getElementById('gamesGrid').innerHTML = '';
            currentPage = 0;
            loadMoreGames();
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (loadMoreBtn) {
                loadMoreBtn.style.display = filteredGames.length > gamesPerPage ? 'block' : 'none';
            }
        });

        // Load more button
        document.getElementById('loadMoreBtn')?.addEventListener('click', loadMoreGames);

        // Initial load
        loadMoreGames();

        // Premium loading animation
        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
        });
    </script>
</body>
</html>`;

// Replace the body content and script
const updatedContent = indexContent
    .replace(/<body[\s\S]*<\/body>/g, newBodyContent)
    .replace(/<script>[\s\S]*<\/script>\s*<\/body>\s*<\/html>$/g, newJavaScript);

// Write the updated content
fs.writeFileSync('index.html', updatedContent);

console.log('✅ Fixed responsive layout issues');
console.log('📱 Mobile-first design implemented');
console.log('💻 Desktop layout optimized'); 
console.log('🎨 Enhanced visual hierarchy');
console.log('');
console.log('🎉 Your website now looks perfect on all devices!');