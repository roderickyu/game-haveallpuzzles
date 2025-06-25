const fs = require('fs');
const path = require('path');

// Read the working games database
const workingGames = JSON.parse(fs.readFileSync('working_games_database.json', 'utf8'));

// Read the premium template
const premiumTemplate = fs.readFileSync('game-template-premium.html', 'utf8');

console.log('🎨 Applying premium design to all games...');
console.log(`📊 Processing ${workingGames.length} premium games`);

let successCount = 0;
let errorCount = 0;

// Function to create premium game page
function createPremiumGamePage(game) {
    // Enhanced descriptions for premium feel
    const premiumDescriptions = {
        '2020-connect': 'An innovative number-connecting puzzle that challenges your strategic thinking and spatial awareness.',
        '2048-giant': 'The classic 2048 game reimagined with enhanced graphics, smooth animations, and premium gameplay.',
        '2048-pizza': 'A delicious twist on the classic 2048 formula with mouth-watering pizza-themed graphics.',
        'bee-connect': 'Connect the busy bees in this charming puzzle game featuring beautiful nature-inspired visuals.',
        'block-dimension': 'Navigate through dimensional blocks in this mind-bending spatial puzzle adventure.',
        'blockdrop': 'Master the art of block placement in this sophisticated Tetris-inspired challenge.',
        'blocks-puzzle': 'A premium block-fitting experience with elegant design and satisfying gameplay mechanics.',
        'brain-trainer': 'Enhance your cognitive abilities with scientifically-designed brain training exercises.',
        'bricks-breaker': 'Demolish colorful brick formations in this action-packed arcade puzzle experience.',
        'bubble-shooter-hd': 'Precision bubble shooting with stunning HD graphics and responsive touch controls.',
        'bubble-tower': 'Build towering bubble structures while mastering physics-based puzzle mechanics.',
        'bubble-woods-ultimate': 'Explore enchanted forests while solving intricate bubble-matching challenges.',
        'bunny-quest': 'Join an adorable bunny on a puzzle adventure through magical woodland levels.',
        'butterfly-shimai': 'Match beautiful butterflies in this zen-like puzzle game with serene visuals.',
        'cake-smash': 'Indulge in sweet puzzle action with delectable cake-matching gameplay.',
        'candy-bubbles': 'Pop colorful candy bubbles in this sugar-sweet puzzle adventure.',
        'color-pixel-art': 'Create stunning pixel masterpieces with guided coloring puzzle mechanics.',
        'cut-the-rope': 'Help Om Nom satisfy his sweet tooth in this physics-based puzzle classic.',
        'daily-sudoku': 'Challenge your logic with expertly crafted daily Sudoku puzzles.',
        'daily-word-climb': 'Ascend to new heights with challenging daily word puzzle adventures.',
        'diamond-rush': 'Collect precious gems while solving challenging match-3 puzzles.',
        'dice-puzzle': 'Roll the dice strategically in this unique number-placement puzzle game.',
        'diwali-lights': 'Illuminate beautiful patterns in this culturally-inspired light puzzle game.',
        'element-blocks': 'Master elemental block placement with physics-based puzzle mechanics.',
        'emoji-fun': 'Express yourself with emoji-based puzzle challenges and creative gameplay.',
        'emoji-with-friends': 'Social emoji puzzles that bring friends together for collaborative fun.',
        'farm-block-puzzle': 'Cultivate your puzzle skills with charming farm-themed block challenges.',
        'find-the-difference': 'Sharpen your observation skills with beautifully illustrated spot-the-difference puzzles.',
        'fluffy-mania': 'Cuddle up with adorable fluffy creatures in this heartwarming match-3 adventure.',
        'fruit-cube-blast': 'Blast through juicy fruit combinations in this explosive puzzle experience.',
        'get-10-ultimate': 'Reach the perfect 10 through strategic number combination puzzles.',
        'gym-stack': 'Build muscle and mental strength with fitness-themed stacking puzzles.',
        'hex-puzzle': 'Navigate hexagonal challenges with geometric precision and spatial thinking.',
        'jewel-academy': 'Master the art of gem matching in this beautifully crafted puzzle academy.',
        'jewel-blocks': 'Combine the best of Tetris and match-3 in this innovative jewel experience.',
        'jewel-christmas-mania': 'Celebrate the holidays with festive jewel-matching adventures.',
        'jewel-halloween': 'Spook yourself with thrilling Halloween-themed jewel puzzles.',
        'jewel-legend': 'Become a legendary jewel master through increasingly challenging levels.',
        'jewel-magic-xmas': 'Experience magical Christmas moments with enchanting jewel puzzles.',
        'jewel-magic': 'Discover the magic within each sparkling gem combination.',
        'jewel-pets-match': 'Match adorable pets alongside precious jewels in this dual-theme puzzle.',
        'jigsaw-puzzle-deluxe': 'Piece together stunning imagery with premium jigsaw puzzle mechanics.',
        'jigsaw-puzzles-hexa': 'Revolutionary hexagonal jigsaw puzzles that challenge traditional thinking.',
        'kitty-match': 'Match cute kittens in this purr-fectly designed puzzle adventure.',
        'letter-links': 'Connect letters to form words in this intelligent vocabulary puzzle game.',
        'mahjong-3d': 'Experience the ancient game of Mahjong in stunning three-dimensional glory.',
        'mahjong-classic': 'Enjoy the timeless elegance of traditional Mahjong with modern polish.',
        'mahjong-solitaire': 'Meditate with peaceful Mahjong solitaire featuring beautiful tile designs.',
        'merge-melons': 'Grow and merge delicious melons in this addictive farming puzzle game.',
        'merge-pirates': 'Set sail for adventure with pirate-themed merging puzzle mechanics.',
        'merge-the-gems': 'Combine precious stones to create ultimate gem collections.',
        'minesweeper-mania': 'Navigate dangerous minefields with enhanced modern Minesweeper gameplay.',
        'minesweeper': 'The classic mine-detection puzzle with premium visual enhancements.',
        'moving-co': 'Organize and pack efficiently in this logistics-based puzzle challenge.',
        'nature-strikes-back': 'Restore natural balance through eco-themed puzzle adventures.',
        'odd-one-out': 'Develop pattern recognition skills with challenging visual puzzle tests.',
        'om-nom-connect-classic': 'Connect Om Nom\'s favorite treats in this adorable puzzle classic.',
        'om-nom-connect-xmas': 'Celebrate Christmas with Om Nom in this festive connection puzzle.',
        'onet-connect-classic': 'Master the art of tile connection in this elegant pairing puzzle.',
        'parking-rush': 'Navigate traffic chaos with strategic vehicle positioning puzzles.',
        'pics-word-game': 'Guess words from pictures in this visual vocabulary challenge.',
        'pin-the-ufo': 'Guide extraterrestrial visitors safely to Earth in this physics puzzle.',
        'pirate-pop': 'Sail the seven seas while popping colorful pirate-themed bubbles.',
        'pirates-match-3': 'Embark on treasure-hunting adventures with swashbuckling match-3 action.',
        'poly-art': 'Create geometric masterpieces with low-poly artistic puzzle designs.',
        'polymatch': 'Match geometric shapes in this sophisticated pattern recognition game.',
        'puzzle-pieces-merge': 'Combine puzzle fragments to reveal beautiful completed images.',
        'puzzle-pieces': 'Traditional jigsaw puzzles with modern digital enhancements.',
        'quest-21': 'Reach the magic number 21 through strategic card-based puzzle gameplay.',
        'quest-bingo': 'Embark on bingo adventures with quest-like progression systems.',
        'reversi-mania': 'Master the strategic board game Reversi with enhanced digital features.',
        'roll-this-ball-3': 'Guide rolling balls through intricate maze puzzle challenges.',
        'santas-quest': 'Help Santa deliver presents through Christmas-themed puzzle adventures.',
        'smarty-bubbles-2': 'Enhanced bubble shooting with intelligent game mechanics.',
        'smarty-bubbles': 'Precision bubble shooting that rewards strategic thinking.',
        'stars-aligned': 'Align celestial bodies in this astronomical puzzle adventure.',
        'sudoku-plus': 'Advanced Sudoku variants that challenge traditional number placement.',
        'sum-2048': 'Mathematical 2048 gameplay with summation-based mechanics.',
        'the-jigsaw-game': 'Premium jigsaw puzzles with photorealistic imagery.',
        'the-sea-rush': 'Dive into oceanic adventures with underwater puzzle challenges.',
        'tile-journey': 'Embark on tile-matching journeys through exotic locations.',
        'tile-puzzle': 'Classic tile sliding puzzles with modern visual polish.',
        'tiles-of-egypt': 'Uncover ancient Egyptian mysteries through archaeological tile puzzles.',
        'tiletopia': 'Create utopian tile arrangements in this city-building puzzle game.',
        'tower-crash-3d': 'Demolish towering structures with physics-based 3D puzzles.',
        'train-2048': 'Conductor train cars through 2048-style railway puzzles.',
        'tripeaks-solitaire': 'Classic TriPeaks solitaire with beautiful natural landscapes.',
        'unblock-that': 'Free trapped objects through strategic block manipulation puzzles.',
        'unpark-me': 'Navigate parking lot chaos with vehicle movement puzzles.',
        'word-detector': 'Hunt for hidden words in challenging letter grid puzzles.',
        'word-pics': 'Solve word puzzles using visual clues and creative imagery.',
        'word-search': 'Find hidden words in beautifully designed letter grids.',
        'words-of-magic': 'Cast spelling spells with magical word formation puzzles.',
        'zoo-boom': 'Match adorable zoo animals in this explosive puzzle adventure.',
        'zumba-ocean': 'Rhythm-based ocean puzzles with marine-themed Zuma gameplay.'
    };

    // Get enhanced description or use default
    const enhancedDescription = premiumDescriptions[game.slug] || game.description;

    // Replace template placeholders with game data
    let gameContent = premiumTemplate
        .replace(/{{GAME_NAME}}/g, game.name)
        .replace(/{{GAME_SLUG}}/g, game.slug)
        .replace(/{{GAME_DESCRIPTION}}/g, enhancedDescription)
        .replace(/{{GAME_IFRAME}}/g, game.iframe);

    return gameContent;
}

// Apply premium design to all games
workingGames.forEach((game, index) => {
    const filePath = path.join(__dirname, `${game.slug}.html`);
    
    try {
        const premiumContent = createPremiumGamePage(game);
        fs.writeFileSync(filePath, premiumContent);
        successCount++;
        
        // Show progress
        if ((index + 1) % 10 === 0 || index === workingGames.length - 1) {
            console.log(`✨ Processed ${index + 1}/${workingGames.length} games...`);
        }
        
    } catch (error) {
        errorCount++;
        console.error(`❌ Error updating ${game.slug}:`, error.message);
    }
});

// Also apply premium design to the main index page
try {
    const premiumIndexContent = fs.readFileSync('index-premium.html', 'utf8');
    
    // Add the full game database to the premium index
    const fullGameDatabase = `const gameDatabase = ${JSON.stringify(workingGames, null, 4)};`;
    const updatedPremiumIndex = premiumIndexContent.replace(
        /const gameDatabase = \[[\s\S]*?\];/,
        fullGameDatabase
    );
    
    fs.writeFileSync('index.html', updatedPremiumIndex);
    console.log('✨ Applied premium design to main homepage');
    
} catch (error) {
    console.error('❌ Error updating main index:', error.message);
}

console.log('');
console.log('🎉 Premium Design Application Complete!');
console.log(`✅ Successfully updated: ${successCount} games`);
console.log(`❌ Errors encountered: ${errorCount} games`);
console.log('');
console.log('🌟 Your website now features:');
console.log('   • Ultra-premium design with Satoshi font');
console.log('   • Sophisticated color gradients and animations');
console.log('   • Professional sidebar layout');
console.log('   • Enhanced game descriptions');
console.log('   • Premium loading states and error handling');
console.log('   • Responsive design for all devices');
console.log('   • High-end visual effects and transitions');
console.log('');
console.log('💎 Your game website is now YYDS (legendary)!');