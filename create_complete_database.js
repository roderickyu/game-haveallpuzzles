// Complete game database creation script
const fs = require('fs');
const path = require('path');

// GameSnacks data with images
const gameSnacksData = {
    "jewel-academy": {
        name: "Jewel Academy",
        image: "https://jewelacademy.h5games.usercontent.goog/v/2krc7uv2m9998/gamesnacks_required_media/JA_horizontal_banner_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/jewelacademy"
    },
    "mahjong-solitaire": {
        name: "Mahjong Solitaire", 
        image: "https://4erks8385j9eo.h5games.usercontent.goog/v/1ff4p4m8ilme8/images/mahjong-solitaire-horizontal-banner-2.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/4erks8385j9eo"
    },
    "jewel-legend": {
        name: "Jewel Legend",
        image: "https://jewellegend.h5games.usercontent.goog/v/36cb1hitjsa3o/marketing/title/jewellegend-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/jewellegend"
    },
    "bubble-tower": {
        name: "Bubble Tower",
        image: "https://bubbletower.h5games.usercontent.goog/v/7ebcukaef3voo/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/bubbletower"
    },
    "fruit-cube-blast": {
        name: "Fruit Cube Blast",
        image: "https://5pj67mkaqugmo.h5games.usercontent.goog/v/151if1r687t30/image/FruitCubeBlast-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/5pj67mkaqugmo"
    },
    "jewel-blocks": {
        name: "Jewel Blocks",
        image: "https://jewelblocks.h5games.usercontent.goog/v/0puee6ie0j880/marketing/title/jewelblocks-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/jewelblocks"
    },
    "tripeaks-solitaire": {
        name: "Tripeaks Solitaire",
        image: "https://tripeakssolitaire.h5games.usercontent.goog/v/4v3d7g06n6rug/images/tripeaksfarm-horizontal-banner-2.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/tripeakssolitaire"
    },
    "merge-melons": {
        name: "Merge Melons",
        image: "https://mergemelons.h5games.usercontent.goog/v/59jg7dft2iaj0/images/horizontalBanners_19201080.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/mergemelons"
    },
    "jewel-magic": {
        name: "Jewel Magic",
        image: "https://jewelmagic.h5games.usercontent.goog/v/5e78bdcf-d6ed-4627-ab38-c8e0e647f7dc/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/jewelmagic"
    },
    "onet-connect-classic": {
        name: "Onet Connect Classic",
        image: "https://onetconnectclassic.h5games.usercontent.goog/v/0q8248mt11l3g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/onetconnectclassic"
    },
    "element-blocks": {
        name: "Element Blocks",
        image: "https://elementblocks.h5games.usercontent.goog/v/35up5t7ao24i8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/elementblocks"
    },
    "blockdrop": {
        name: "BlockDrop",
        image: "https://51vi4vae20f8o.h5games.usercontent.goog/v/66bqinuuh36b8/src/assets/art/store/block-drop-h-480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/51vi4vae20f8o"
    },
    "daily-sudoku": {
        name: "Daily Sudoku",
        image: "https://dailysudoku.h5games.usercontent.goog/v/03446732-f14b-4bcc-9e8b-68fc499a0cec/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/dailysudoku"
    },
    "tile-journey": {
        name: "Tile Journey",
        image: "https://0i1jh8boqif48.h5games.usercontent.goog/v/1643ot8on0v9g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/0i1jh8boqif48"
    },
    "mahjong-3d": {
        name: "Mahjong 3D",
        image: "https://mahjong3d.h5games.usercontent.goog/v/eba0837e-4855-4bb2-b762-5dd6d8982cac/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/mahjong3d"
    },
    "tower-crash-3d": {
        name: "Tower Crash 3D",
        image: "https://towercrash3d.h5games.usercontent.goog/v/7c54afc1-3ca4-4121-a52a-9ea74e30f0d7/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/towercrash3d"
    },
    "candy-bubbles": {
        name: "Candy Bubbles",
        image: "https://candybubbles.h5games.usercontent.goog/v/370v1t5h5266g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/candybubbles"
    },
    "tile-puzzle": {
        name: "Tile Puzzle",
        image: "https://5u9qhnk84v07g.h5games.usercontent.goog/v/2h3elehja73a8/image/tilepuzzle-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/5u9qhnk84v07g"
    },
    "quest-bingo": {
        name: "Quest Bingo",
        image: "https://52nk212336l1g.h5games.usercontent.goog/v/0smbj5p2kjk78/assets/store/quest-bingo-h-1080x1920.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/52nk212336l1g"
    },
    "letter-links": {
        name: "Letter Links",
        image: "https://7u583tvdi3f00.h5games.usercontent.goog/v/424maigpuljoo/images/letter-links-horizontal-banner-2.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/7u583tvdi3f00"
    },
    "nature-strikes-back": {
        name: "Nature Strikes Back",
        image: "https://79gloe1v4okkg.h5games.usercontent.goog/v/6qlhje6nn2bg0/images/1920_1080_Horizontalbanner.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/79gloe1v4okkg"
    },
    "puzzle-pieces-merge": {
        name: "Puzzle Pieces Merge",
        image: "https://5burcumauc5p0.h5games.usercontent.goog/v/4k8cb35sbe9fo/image/puzzlepieces-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/5burcumauc5p0"
    },
    "dice-puzzle": {
        name: "Dice Puzzle",
        image: "https://0vfcifju4i900.h5games.usercontent.goog/v/2jg90liogd5f8/image/dicepuzzle-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/0vfcifju4i900"
    },
    "tiles-of-egypt": {
        name: "Tiles of Egypt",
        image: "https://tilesofegypt.h5games.usercontent.goog/v/dd964fa3-8999-4546-a4a0-d55a0cc72248/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/tilesofegypt"
    },
    "jigsaw-puzzles-hexa": {
        name: "Jigsaw Puzzles Hexa",
        image: "https://jigsawpuzzleshexa.h5games.usercontent.goog/v/5e9bm1tuf1me0/image/jigsawpuzzleshexa-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/jigsawpuzzleshexa"
    },
    "mahjong-classic": {
        name: "Mahjong Classic",
        image: "https://mahjongclassic.h5games.usercontent.goog/v/6tue6un26r7v0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/mahjongclassic"
    },
    "smarty-bubbles": {
        name: "Smarty Bubbles",
        image: "https://smartybubbles.h5games.usercontent.goog/v/09fhbor6rfpv0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/smartybubbles"
    },
    "train-2048": {
        name: "Train 2048",
        image: "https://train2048.h5games.usercontent.goog/v/efebc769-0d8d-48f4-b437-af712b013132/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/train2048"
    },
    "words-of-magic": {
        name: "Words of Magic",
        image: "https://5a5rs5ng5rvro.h5games.usercontent.goog/v/4grqmc17b1kc0/images/wom-horizontal-banner-2.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/5a5rs5ng5rvro"
    },
    "hex-puzzle": {
        name: "Hex Puzzle",
        image: "https://blockpuzzle.h5games.usercontent.goog/v/3rkr8c5j9b23o/image/hexpuzzle-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/blockpuzzle"
    },
    "pirates-match-3": {
        name: "Pirates Match 3",
        image: "https://piratesmatch3.h5games.usercontent.goog/v/fea2f25f-a39a-4273-93c1-38f8f9bd8260/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/piratesmatch3"
    },
    "word-search": {
        name: "Word Search",
        image: "https://wordsearch.h5games.usercontent.goog/v/6abe3eefqt368/image/wordsearch-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/wordsearch"
    },
    "jewel-magic-xmas": {
        name: "Jewel Magic Xmas",
        image: "https://jewelmagicxmas.h5games.usercontent.goog/v/c7f215bc-bcf8-4034-9f0b-246e0909bfa7/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/jewelmagicxmas"
    },
    "find-the-difference": {
        name: "Find the Difference",
        image: "https://findthedifference.h5games.usercontent.goog/v/0tambv0iojsn8/image/ftd-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/findthedifference"
    },
    "om-nom-connect-classic": {
        name: "Om Nom Connect Classic",
        image: "https://omnomconnectclassic.h5games.usercontent.goog/v/6bc88dac-9f6b-4f2f-8c85-e715c899bb63/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/omnomconnectclassic"
    },
    "parking-rush": {
        name: "Parking Rush",
        image: "https://7nq79vktk8fho.h5games.usercontent.goog/v/4u3a6m3hm9lj8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/7nq79vktk8fho"
    },
    "bubble-woods-ultimate": {
        name: "Bubble Woods Ultimate",
        image: "https://bubblewoods4.h5games.usercontent.goog/v/4jslovpheann0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/bubblewoods4"
    },
    "color-pixel-art": {
        name: "Color Pixel Art",
        image: "https://colorpixel.h5games.usercontent.goog/v/6ko86juonaau0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/colorpixel"
    },
    "unpark-me": {
        name: "Unpark Me",
        image: "https://unparkme.h5games.usercontent.goog/v/7tbjega3nl8eg/marketing/title/unparkme-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/unparkme"
    },
    "zumba-ocean": {
        name: "Zumba Ocean",
        image: "https://zumbaocean.h5games.usercontent.goog/v/1gb65icesunig/marketing/title/zumbaocean-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/zumbaocean"
    },
    "daily-word-climb": {
        name: "Daily Word Climb",
        image: "https://7j9i6247552ro.h5games.usercontent.goog/v/1g49kcc7pdiio/images/horizontal480.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/7j9i6247552ro"
    },
    "tiletopia": {
        name: "Tiletopia",
        image: "https://6nilllqpgkm6o.h5games.usercontent.goog/v/7d3689i7s5gfo/MarketingAssets/tiletopia-thumb-wide-480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/6nilllqpgkm6o"
    },
    "roll-this-ball-3": {
        name: "Roll This Ball 3",
        image: "https://rollthisball3.h5games.usercontent.goog/v/0solbal8bgf5g/Marketing/title/rollthisball-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/rollthisball3"
    },
    "get-10-ultimate": {
        name: "Get 10 Ultimate",
        image: "https://4oljglvsib9no.h5games.usercontent.goog/v/4nttt72qlep8o/marketing/title/get10ultimate-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/4oljglvsib9no"
    },
    "jewel-pets-match": {
        name: "Jewel Pets Match",
        image: "https://jewelpetsmatch.h5games.usercontent.goog/v/5dfa5efb-0bdb-49f0-ae73-9fd8ad6b8bc4/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/jewelpetsmatch"
    },
    "sudoku-plus": {
        name: "Sudoku Plus",
        image: "https://sudokuplus.h5games.usercontent.goog/v/3q827iuj6msno/image/sudokuplus-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/sudokuplus"
    },
    "minesweeper": {
        name: "Minesweeper",
        image: "https://minesweeper.h5games.usercontent.goog/v/6uo6tf2lnil3o/image/minesweeper-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/minesweeper"
    },
    "minesweeper-mania": {
        name: "Minesweeper Mania",
        image: "https://minesweepermania.h5games.usercontent.goog/v/6cje7ufl50e4g/marketing/title/minesweepermania-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/minesweepermania"
    },
    "quest-21": {
        name: "Quest 21",
        image: "https://7h2pln0tgo8q0.h5games.usercontent.goog/v/004k30od8uvog/assets/store/quest-21-h-1080x1920.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/7h2pln0tgo8q0"
    },
    "pirate-pop": {
        name: "Pirate Pop",
        image: "https://piratepop.h5games.usercontent.goog/v/3japc2shd35ug/images/pp-horizontal-banner-2.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/piratepop"
    },
    "unblock-that": {
        name: "Unblock That",
        image: "https://unblockthat.h5games.usercontent.goog/v/6iqu63hhulkgo/marketing/title/unblockthat-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/unblockthat"
    },
    "word-detector": {
        name: "Word Detector",
        image: "https://worddetector.h5games.usercontent.goog/v/4gaf9ej9hp398/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/worddetector"
    },
    "merge-pirates": {
        name: "Merge Pirates",
        image: "https://mergepirates.h5games.usercontent.goog/v/2rugbh8p4845g/images/mergepirates-horizontal-banner-2.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/mergepirates"
    },
    "brain-trainer": {
        name: "Brain Trainer",
        image: "https://braintrainer.h5games.usercontent.goog/v/4f2ffbc6-4208-4087-bfaf-ab0db086da02/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/braintrainer"
    },
    "jigsaw-puzzle-deluxe": {
        name: "Jigsaw Puzzle Deluxe",
        image: "https://jigsawpuzzledeluxe.h5games.usercontent.goog/v/5jfat3ipu2790/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/jigsawpuzzledeluxe"
    },
    "farm-block-puzzle": {
        name: "Farm Block Puzzle",
        image: "https://5hefbqkv5o0do.h5games.usercontent.goog/v/0bio68l8dojl0/marketing/title/farmblockpuzzle-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/5hefbqkv5o0do"
    },
    "smarty-bubbles-2": {
        name: "Smarty Bubbles 2",
        image: "https://smartybubbles2.h5games.usercontent.goog/v/1u280qojm9oq0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/smartybubbles2"
    },
    "merge-the-gems": {
        name: "Merge the Gems",
        image: "https://mergethegems.h5games.usercontent.goog/v/5rut2fhhuqb1g/promo/1920x1080.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/mergethegems"
    },
    "emoji-fun": {
        name: "Emoji Fun",
        image: "https://0aijth0is3tko.h5games.usercontent.goog/v/1c1277hq9kr98/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/0aijth0is3tko"
    },
    "the-sea-rush": {
        name: "The Sea Rush",
        image: "https://thesearush.h5games.usercontent.goog/v/5ie3e5aghbr18/marketing/title/thesearush-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/thesearush"
    },
    "2048-giant": {
        name: "2048 Giant",
        image: "https://2048giant.h5games.usercontent.goog/v/4bea87e2-a9a9-4f4b-b1c8-8b777220c567/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/2048giant"
    },
    "word-pics": {
        name: "Word Pics",
        image: "https://wordpics.h5games.usercontent.goog/v/0s44ldeacb2bo/image/wordpics-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/wordpics"
    },
    "odd-one-out": {
        name: "Odd One Out",
        image: "https://oddoneout.h5games.usercontent.goog/v/50nqosk9lm28o/image/oddoneout-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/oddoneout"
    },
    "cake-smash": {
        name: "Cake Smash",
        image: "https://41la6sld9ed88.h5games.usercontent.goog/v/36d90atplnu7o/images/horizontal-banner.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/41la6sld9ed88"
    },
    "pin-the-ufo": {
        name: "Pin the UFO",
        image: "https://pintheufo.h5games.usercontent.goog/v/08ukqv01ac45o/images/mid_res_banner.jpeg=w256?v=1",
        iframe: "https://gamesnacks.com/games/pintheufo"
    },
    "pics-word-game": {
        name: "Pics Word Game",
        image: "https://picswordgame.h5games.usercontent.goog/v/40jujb4uelhb0/image/picswordgame-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/picswordgame"
    },
    "blocks-puzzle": {
        name: "Blocks Puzzle",
        image: "https://6ljls661l4lkg.h5games.usercontent.goog/v/1mil2011qbul0/image/blockpuzzle-med-res-banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/6ljls661l4lkg"
    },
    "bubble-shooter-hd": {
        name: "Bubble Shooter HD",
        image: "https://695vevup4pmu0.h5games.usercontent.goog/v/7ptf20o9mjr48/icons/icon_1920x1080.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/695vevup4pmu0"
    },
    "bricks-breaker": {
        name: "Bricks Breaker",
        image: "https://5enjropk1ren8.h5games.usercontent.goog/v/6u5qapt4kt1j8/marketing/ban-bricksBreaker-480x270.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/5enjropk1ren8"
    },
    "block-dimension": {
        name: "Block Dimension",
        image: "https://62dfg8ps4f7lg.h5games.usercontent.goog/v/0k3gcfq0ljti8/images/landscape480.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/62dfg8ps4f7lg"
    },
    "om-nom-connect-xmas": {
        name: "Om Nom Connect Xmas",
        image: "https://omnomconnectxmas.h5games.usercontent.goog/v/88a6b2cf-1027-4490-a613-9a135cf869ce/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/omnomconnectxmas"
    },
    "kitty-match": {
        name: "Kitty Match",
        image: "https://kittymatch.h5games.usercontent.goog/v/0fb0j00v75210/images/horizontalBanners_270480.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/kittymatch"
    },
    "gym-stack": {
        name: "Gym Stack",
        image: "https://gymstack.h5games.usercontent.goog/v/3js1l1d7rdkfg/images/mid_res_banner.jpeg=w256?v=1",
        iframe: "https://gamesnacks.com/games/gymstack"
    },
    "jewel-christmas-mania": {
        name: "Jewel Christmas Mania",
        image: "https://jewelchristmasmania.h5games.usercontent.goog/v/3vom8bn0qgmto/marketing/title/jewelchristmas-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/jewelchristmasmania"
    },
    "bee-connect": {
        name: "Bee Connect",
        image: "https://beeconnect.h5games.usercontent.goog/v/06c7e297-3e6d-4512-9fb2-e491ae2b2fb9/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/beeconnect"
    },
    "polymatch": {
        name: "PolyMatch",
        image: "https://4h72h3ha1dnh0.h5games.usercontent.goog/v/4mrusdmqik1l8/src/assets/art/store/polyMatch_H_480X270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/4h72h3ha1dnh0"
    },
    "zoo-boom": {
        name: "Zoo Boom",
        image: "https://zooboom.h5games.usercontent.goog/v/4g2tps61g9djg/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/zooboom"
    },
    "butterfly-shimai": {
        name: "Butterfly Shimai",
        image: "https://1pq2qond4eka0.h5games.usercontent.goog/v/4oiv5e7dd7vd8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/1pq2qond4eka0"
    },
    "diamond-rush": {
        name: "Diamond Rush",
        image: "https://diamondrush.h5games.usercontent.goog/v/63ok750qri670/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/diamondrush"
    },
    "reversi-mania": {
        name: "Reversi Mania",
        image: "https://reversimania.h5games.usercontent.goog/v/7rhqf6sl8lpf0/marketing/title/reversimania-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/reversimania"
    },
    "cut-the-rope": {
        name: "Cut the Rope",
        image: "https://1cq84l302hpdg.h5games.usercontent.goog/v/601qerqj3lb90/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/1cq84l302hpdg"
    },
    "moving-co": {
        name: "Moving Co.",
        image: "https://movingco.h5games.usercontent.goog/v/3crgi5efdnml0/MarketingAssets/Moving_CO_Thumb_Wide_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/movingco"
    },
    "emoji-with-friends": {
        name: "Emoji With Friends",
        image: "https://2gtc787tjm7c8.h5games.usercontent.goog/v/5lfna7ldlrun8/images/horizontal-banner.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/2gtc787tjm7c8"
    },
    "the-jigsaw-game": {
        name: "The Jigsaw Game",
        image: "https://2avtkm5bj06f0.h5games.usercontent.goog/v/66fijarm4ldv0/images/horizontal-banner.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/2avtkm5bj06f0"
    },
    "2020-connect": {
        name: "2020 Connect",
        image: "https://4l7qr4mfc8o80.h5games.usercontent.goog/v/5sm797oi4heu0/icons/icon_1920x1080.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/4l7qr4mfc8o80"
    },
    "santas-quest": {
        name: "Santa's Quest",
        image: "https://santasquest.h5games.usercontent.goog/v/b8891b4c-6b71-4e05-8e46-4a4dc7920520/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/santasquest"
    },
    "fluffy-mania": {
        name: "Fluffy Mania",
        image: "https://02rd6nna08dqg.h5games.usercontent.goog/v/3ngbs02gf9h88/images/landscape480.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/02rd6nna08dqg"
    },
    "puzzle-pieces": {
        name: "Puzzle Pieces",
        image: "https://05c9vfh919cbg.h5games.usercontent.goog/v/0ki2bua5asq00/marketing/title/puzzlepieces-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/05c9vfh919cbg"
    },
    "poly-art": {
        name: "Poly Art",
        image: "https://polyart.h5games.usercontent.goog/v/47aiosp2dbqgg/marketing/title/polyart-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/polyart"
    },
    "stars-aligned": {
        name: "Stars Aligned",
        image: "https://starsaligned.h5games.usercontent.goog/v/3i88p78sohtig/media/graphics/promo/banners/480x270.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/starsaligned"
    },
    "sum-2048": {
        name: "Sum 2048",
        image: "https://2048-v4.h5games.usercontent.goog/v/4fe9a293-323e-4486-8aef-839ab3806c29/med_res_banner.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/2048-v4"
    },
    "diwali-lights": {
        name: "Diwali Lights",
        image: "https://diwalilights.h5games.usercontent.goog/v/5cddqg9lrn3kg/media/graphics/promo/banners/480x270.jpg=w256?v=1",
        iframe: "https://gamesnacks.com/games/diwalilights"
    },
    "bunny-quest": {
        name: "Bunny Quest",
        image: "https://630h8fcg3e938.h5games.usercontent.goog/v/51qfd4fr90dro/marketing/title/bunnyquest-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/630h8fcg3e938"
    },
    "jewel-halloween": {
        name: "Jewel Halloween",
        image: "https://0gk3ormb878mg.h5games.usercontent.goog/v/1qgqb91tuaqv0/marketing/title/jewelhalloween-html5_480x270.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/0gk3ormb878mg"
    },
    "2048-pizza": {
        name: "2048 Pizza",
        image: "https://14qikp6hbljig.h5games.usercontent.goog/v/4htrmkq5b0b78/market/banner-1920x1080-5.png=w256?v=1",
        iframe: "https://gamesnacks.com/games/14qikp6hbljig"
    }
};

function createSlug(name) {
    return name.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
}

function createPlaceholderImage(name) {
    return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='270' viewBox='0 0 480 270'><rect width='480' height='270' fill='%23f1f5f9'/><text x='240' y='135' text-anchor='middle' dominant-baseline='middle' font-family='Arial' font-size='20' fill='%2364748b'>${encodeURIComponent(name)}</text></svg>`;
}

// Get all HTML files in the directory
function getAllHtmlFiles() {
    const files = fs.readdirSync(__dirname)
        .filter(file => file.endsWith('.html') && file !== 'index.html')
        .map(file => file.replace('.html', ''));
    
    return files;
}

// Create complete game database
function createCompleteGameDatabase() {
    const htmlFiles = getAllHtmlFiles();
    const gameDatabase = [];
    
    htmlFiles.forEach(slug => {
        const gameData = gameSnacksData[slug];
        
        if (gameData) {
            // Use GameSnacks data if available
            gameDatabase.push({
                name: gameData.name,
                slug: slug,
                image: gameData.image,
                category: "puzzle",
                iframe: gameData.iframe,
                description: `${gameData.name} - A challenging puzzle game that will test your skills and entertain you for hours.`
            });
        } else {
            // Create entry with placeholder for games without specific data
            const name = slug.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            
            gameDatabase.push({
                name: name,
                slug: slug,
                image: createPlaceholderImage(name),
                category: "puzzle",
                iframe: `https://example.com/games/${slug}`, // Placeholder iframe
                description: `${name} - A challenging puzzle game that will test your skills and entertain you for hours.`
            });
        }
    });
    
    return gameDatabase;
}

const completeDatabase = createCompleteGameDatabase();
console.log(`Created database with ${completeDatabase.length} games`);
console.log('Games with real images:', completeDatabase.filter(g => !g.image.startsWith('data:')).length);
console.log('Games with placeholder images:', completeDatabase.filter(g => g.image.startsWith('data:')).length);

// Write the database to a file
fs.writeFileSync('complete_game_database.json', JSON.stringify(completeDatabase, null, 2));
console.log('Database written to complete_game_database.json');

module.exports = { completeDatabase };