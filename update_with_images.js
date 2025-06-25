const fs = require('fs');

// Read current game database
const gameDatabase = JSON.parse(fs.readFileSync('complete_game_database.json', 'utf8'));

// Additional images from various sources
const additionalImages = {
    "thief-puzzle": "https://www.onlinegames.io/static/images/games/thief-puzzle.jpg",
    "skribblio": "https://www.onlinegames.io/static/images/games/skribblio.jpg", 
    "unpacking": "https://www.onlinegames.io/static/images/games/unpacking.jpg",
    "tic-tac-toe": "https://www.onlinegames.io/static/images/games/tic-tac-toe.jpg",
    "block-blast": "https://www.onlinegames.io/static/images/games/block-blast.jpg",
    "fireboy-and-watergirl-2-light-temple": "https://www.onlinegames.io/static/images/games/fireboy-watergirl-2.jpg",
    "watermelon-game": "https://www.onlinegames.io/static/images/games/watermelon-game.jpg",
    "tile-match": "https://www.onlinegames.io/static/images/games/tile-match.jpg",
    "nuts-and-bolts-puzzle": "https://www.onlinegames.io/static/images/games/nuts-bolts-puzzle.jpg",
    "home-design": "https://www.onlinegames.io/static/images/games/home-design.jpg",
    "fireboy-and-watergirl-5-elements": "https://www.onlinegames.io/static/images/games/fireboy-watergirl-5.jpg",
    "cake-match-puzzle": "https://www.onlinegames.io/static/images/games/cake-match-puzzle.jpg",
    "fireboy-and-watergirl-4-crystal-temple": "https://www.onlinegames.io/static/images/games/fireboy-watergirl-4.jpg",
    "rummikub": "https://www.onlinegames.io/static/images/games/rummikub.jpg",
    "fireboy-and-watergirl-3-ice-temple": "https://www.onlinegames.io/static/images/games/fireboy-watergirl-3.jpg",
    "obby-draw-and-jump": "https://www.onlinegames.io/static/images/games/obby-draw-jump.jpg",
    "unblock-it-3d": "https://www.onlinegames.io/static/images/games/unblock-it-3d.jpg",
    "words-from-words": "https://www.onlinegames.io/static/images/games/words-from-words.jpg",
    "bloxorz": "https://www.onlinegames.io/static/images/games/bloxorz.jpg",
    "poptropica": "https://www.onlinegames.io/static/images/games/poptropica.jpg",
    "world-guesser": "https://www.onlinegames.io/static/images/games/world-guesser.jpg",
    "fireboy-and-watergirl-6-fairy-tales": "https://www.onlinegames.io/static/images/games/fireboy-watergirl-6.jpg",
    "charge-it": "https://www.onlinegames.io/static/images/games/charge-it.jpg",
    "watermelon-suika": "https://www.onlinegames.io/static/images/games/watermelon-suika.jpg",
    "global-guesser": "https://www.onlinegames.io/static/images/games/global-guesser.jpg",
    "words-of-wonders": "https://www.onlinegames.io/static/images/games/words-of-wonders.jpg",
    "tetris": "https://www.onlinegames.io/static/images/games/tetris.jpg",
    "wordle": "https://www.onlinegames.io/static/images/games/wordle.jpg",
    "mergest-kingdom": "https://www.onlinegames.io/static/images/games/mergest-kingdom.jpg",
    "sort-resort": "https://www.onlinegames.io/static/images/games/sort-resort.jpg",
    "nova-craft": "https://www.onlinegames.io/static/images/games/nova-craft.jpg",
    "mathematical-crossword": "https://www.onlinegames.io/static/images/games/math-crossword.jpg",
    "gummy-blocks": "https://www.onlinegames.io/static/images/games/gummy-blocks.jpg",
    "solitaire-adventure": "https://www.onlinegames.io/static/images/games/solitaire-adventure.jpg",
    "bookworm": "https://www.onlinegames.io/static/images/games/bookworm.jpg",
    "find-it": "https://www.onlinegames.io/static/images/games/find-it.jpg",
    "merge-cakes": "https://www.onlinegames.io/static/images/games/merge-cakes.jpg",
    "the-smurfs-village-cleaning": "https://www.onlinegames.io/static/images/games/smurfs-cleaning.jpg",
    "baby-doll-house-cleaning": "https://www.onlinegames.io/static/images/games/baby-doll-cleaning.jpg",
    "mahjong": "https://www.onlinegames.io/static/images/games/mahjong.jpg",
    "2048": "https://www.onlinegames.io/static/images/games/2048.jpg",
    "home-makeover-2-hidden-object": "https://www.onlinegames.io/static/images/games/home-makeover-2.jpg",
    "house-painter": "https://www.onlinegames.io/static/images/games/house-painter.jpg",
    "draw-the-bridge": "https://www.onlinegames.io/static/images/games/draw-bridge.jpg",
    "google-feud": "https://www.onlinegames.io/static/images/games/google-feud.jpg",
    "soccer-merge": "https://www.onlinegames.io/static/images/games/soccer-merge.jpg",
    "draw-the-car-path": "https://www.onlinegames.io/static/images/games/draw-car-path.jpg",
    "math-trivia": "https://www.onlinegames.io/static/images/games/math-trivia.jpg",
    "hidden-objects-brain-teaser": "https://www.onlinegames.io/static/images/games/hidden-objects.jpg",
    "the-house": "https://www.onlinegames.io/static/images/games/the-house.jpg",
    "text-talk": "https://www.onlinegames.io/static/images/games/text-talk.jpg",
    "hexologic": "https://www.onlinegames.io/static/images/games/hexologic.jpg",
    "vega-mix-sea-adventures": "https://www.onlinegames.io/static/images/games/vega-mix.jpg",
    "wordmeister": "https://www.onlinegames.io/static/images/games/wordmeister.jpg",
    "tiny-crash-fighters": "https://www.onlinegames.io/static/images/games/tiny-crash-fighters.jpg",
    "sudoku": "https://www.onlinegames.io/static/images/games/sudoku.jpg",
    "edelweiss": "https://www.onlinegames.io/static/images/games/edelweiss.jpg",
    "draw-the-truck-bridge": "https://www.onlinegames.io/static/images/games/draw-truck-bridge.jpg",
    "hexotopia": "https://www.onlinegames.io/static/images/games/hexotopia.jpg",
    "bullet-master": "https://www.onlinegames.io/static/images/games/bullet-master.jpg",
    "christmas-mahjong": "https://www.onlinegames.io/static/images/games/christmas-mahjong.jpg",
    "pirate-adventure": "https://www.onlinegames.io/static/images/games/pirate-adventure.jpg",
    "stick-hero-mighty-tower-wars": "https://www.onlinegames.io/static/images/games/stick-hero.jpg",
    "cool-math": "https://www.onlinegames.io/static/images/games/cool-math.jpg",
    "mini-crossword": "https://www.onlinegames.io/static/images/games/mini-crossword.jpg",
    "candy-bubble": "https://www.onlinegames.io/static/images/games/candy-bubble.jpg",
    "quordle-today": "https://www.onlinegames.io/static/images/games/quordle.jpg",
    "chess-fill": "https://www.onlinegames.io/static/images/games/chess-fill.jpg",
    "grandmaster-chess": "https://www.onlinegames.io/static/images/games/grandmaster-chess.jpg",
    "draw-here": "https://www.onlinegames.io/static/images/games/draw-here.jpg",
    "hero-tower": "https://www.onlinegames.io/static/images/games/hero-tower.jpg",
    "ancient-2048": "https://www.onlinegames.io/static/images/games/ancient-2048.jpg"
};

// Update games with additional images
let updatedCount = 0;
gameDatabase.forEach(game => {
    if (additionalImages[game.slug] && game.image.startsWith('data:')) {
        game.image = additionalImages[game.slug];
        updatedCount++;
    }
});

// Save updated database
fs.writeFileSync('complete_game_database.json', JSON.stringify(gameDatabase, null, 2));

console.log(`Updated ${updatedCount} games with real images`);
console.log(`Total games: ${gameDatabase.length}`);
console.log(`Games with real images: ${gameDatabase.filter(g => !g.image.startsWith('data:')).length}`);
console.log(`Games with placeholder images: ${gameDatabase.filter(g => g.image.startsWith('data:')).length}`);