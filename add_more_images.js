// Add more GameSnacks images from the data provided
const additionalGameImages = {
    // From the onlinegames.io data
    "thief-puzzle": {
        name: "Thief Puzzle",
        image: "https://img.itch.zone/aW1nLzUwMzU3NDcucG5n/315x250%23c/Gpdo7n.png"
    },
    "skribblio": {
        name: "Skribblio", 
        image: "https://img.itch.zone/aW1nLzE4MDc4MDA2LnBuZw==/315x250%23c/mZKHwQ.png"
    },
    "unpacking": {
        name: "Unpacking",
        image: "https://img.itch.zone/aW1nLzE4MTkwMTMuZ2lm/315x250%23cm/Jq16Jb.gif"
    },
    "tic-tac-toe": {
        name: "Tic Tac Toe",
        image: "https://img.itch.zone/aW1nLzM0NjMwNjMucG5n/315x250%23c/obcSPz.png"
    },
    "block-blast": {
        name: "Block Blast",
        image: "https://img.itch.zone/aW1nLzE5MjQ0NDc5LnBuZw==/315x250%23c/wtflM3.png"
    },
    "fireboy-and-watergirl-2-light-temple": {
        name: "Fireboy and Watergirl 2: Light Temple",
        image: "https://img.itch.zone/aW1nLzE5MzgwNzUyLnBuZw==/315x250%23c/tDlKwM.png"
    },
    "watermelon-game": {
        name: "Watermelon Game",
        image: "https://img.itch.zone/aW1nLzQ5NTc0OTQucG5n/315x250%23c/vf9%2Bxr.png"
    },
    "tile-match": {
        name: "Tile Match",
        image: "https://img.itch.zone/aW1nLzEzNjY4ODI0LnBuZw==/315x250%23c/0IohAI.png"
    },
    "nuts-and-bolts-puzzle": {
        name: "Nuts and Bolts Puzzle",
        image: "https://img.itch.zone/aW1nLzE4MDc4MDA2LnBuZw==/315x250%23c/mZKHwQ.png"
    },
    "home-design": {
        name: "Home Design",
        image: "https://img.itch.zone/aW1nLzE5NTExNzk0LnBuZw==/315x250%23c/USD9MW.png"
    },
    "fireboy-and-watergirl-5-elements": {
        name: "Fireboy and Watergirl 5: Elements",
        image: "https://img.itch.zone/aW1nLzI1NjE4NTAucG5n/315x250%23c/dyQldE.png"
    },
    "cake-match-puzzle": {
        name: "Cake Match Puzzle",
        image: "https://img.itch.zone/aW1nLzE5MTQ1MjUucG5n/315x250%23c/cbrTgk.png"
    },
    "fireboy-and-watergirl-4-crystal-temple": {
        name: "Fireboy and Watergirl 4: Crystal Temple",
        image: "https://img.itch.zone/aW1nLzg1NjgwMDcucG5n/315x250%23c/O8lL9L.png"
    },
    "rummikub": {
        name: "Rummikub",
        image: "https://img.itch.zone/aW1nLzcxMDY5NzYucG5n/315x250%23c/arF0FJ.png"
    },
    "fireboy-and-watergirl-3-ice-temple": {
        name: "Fireboy and Watergirl 3: Ice Temple",
        image: "https://img.itch.zone/aW1nLzc3MTE1ODkuanBn/315x250%23c/%2F5T9ly.jpg"
    },
    "obby-draw-and-jump": {
        name: "Obby: Draw and Jump",
        image: "https://img.itch.zone/aW1hZ2UvMjk3ODU0LzE0NTczMzkucG5n/315x250%23c/jC3shz.png"
    },
    "unblock-it-3d": {
        name: "Unblock It 3D",
        image: "https://img.itch.zone/aW1nLzEwMjc2OTQ5LnBuZw==/315x250%23c/SWV3uD.png"
    },
    "words-from-words": {
        name: "Words from Words",
        image: "https://img.itch.zone/aW1nLzI2NzY1ODguZ2lm/315x250%23cm/8jVIMU.gif"
    },
    "bloxorz": {
        name: "Bloxorz",
        image: "https://img.itch.zone/aW1nLzE3NzI2MzI5LmdpZg==/315x250%23cm/S3slpJ.gif"
    },
    "poptropica": {
        name: "Poptropica",
        image: "https://img.itch.zone/aW1nLzIwNjA0MTYyLnBuZw==/315x250%23c/yEIjDk.png"
    },
    "world-guesser": {
        name: "World Guesser",
        image: "https://img.itch.zone/aW1nLzExODU1NTUyLmdpZg==/315x250%23cm/5E0Rz%2F.gif"
    },
    "fireboy-and-watergirl-6-fairy-tales": {
        name: "Fireboy and Watergirl 6: Fairy Tales",
        image: "https://img.itch.zone/aW1nLzIwNTc2OTkyLmdpZg==/315x250%23cm/tw2byk.gif"
    },
    "charge-it": {
        name: "Charge It",
        image: "https://img.itch.zone/aW1nLzUwMzU3NDcucG5n/315x250%23c/Gpdo7n.png"
    },
    "watermelon-suika": {
        name: "Watermelon Suika",
        image: "https://img.itch.zone/aW1nLzU0MjU2NzEuZ2lm/315x250%23cm/h4e2F%2B.gif"
    },
    "global-guesser": {
        name: "Global Guesser",
        image: "https://img.itch.zone/aW1nLzI4OTE4NzMucG5n/315x250%23c/pnUIrT.png"
    },
    "words-of-wonders": {
        name: "Words of Wonders",
        image: "https://img.itch.zone/aW1nLzExMzY3ODE3LmdpZg==/315x250%23cm/Jvm2AR.gif"
    },
    "tetris": {
        name: "Tetris",
        image: "https://img.itch.zone/aW1nLzE4OTU4Mzg4LmdpZg==/315x250%23cm/U830Ji.gif"
    },
    "wordle": {
        name: "Wordle",
        image: "https://img.itch.zone/aW1nLzE2NTU1MzE3LnBuZw==/315x250%23c/U%2F38aP.png"
    },
    "mergest-kingdom": {
        name: "Mergest Kingdom",
        image: "https://img.itch.zone/aW1nLzE5MTg3NzQxLnBuZw==/315x250%23c/Kp%2FLYt.png"
    },
    "sort-resort": {
        name: "Sort Resort",
        image: "https://img.itch.zone/aW1nLzgyODEzNDkucG5n/315x250%23c/HaYsLL.png"
    },
    "nova-craft": {
        name: "Nova Craft",
        image: "https://img.itch.zone/aW1nLzg1NTgyMTUucG5n/315x250%23c/7E%2FrG7.png"
    },
    "mathematical-crossword": {
        name: "Mathematical Crossword",
        image: "https://img.itch.zone/aW1nLzk2Njg0MTQuZ2lm/315x250%23cm/g%2FNlzk.gif"
    },
    "gummy-blocks": {
        name: "Gummy Blocks",
        image: "https://img.itch.zone/aW1nLzE1ODMwMDM2LnBuZw==/315x250%23c/bz%2Fxl8.png"
    },
    "solitaire-adventure": {
        name: "Solitaire Adventure",
        image: "https://img.itch.zone/aW1nLzk5MjU1OTUucG5n/315x250%23c/prmajD.png"
    },
    "bookworm": {
        name: "Bookworm",
        image: "https://img.itch.zone/aW1nLzEzNzE4NTc1LmdpZg==/315x250%23cm/aaLWTp.gif"
    },
    "find-it": {
        name: "Find It",
        image: "https://img.itch.zone/aW1nLzc1MTI5NzEuanBn/315x250%23c/Mkofp%2F.jpg"
    },
    "merge-cakes": {
        name: "Merge Cakes",
        image: "https://img.itch.zone/aW1nLzM4ODQ5NzcucG5n/315x250%23c/k9oTMj.png"
    }
};

console.log('Additional images data created');
console.log('Number of additional images:', Object.keys(additionalGameImages).length);

module.exports = { additionalGameImages };