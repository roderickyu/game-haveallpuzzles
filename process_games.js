// Game data processing script
const gameData = `
https://gamesnacks.com/games/jewelacademy    https://jewelacademy.h5games.usercontent.goog/v/2krc7uv2m9998/gamesnacks_required_media/JA_horizontal_banner_480x270.png=w256?v=1    Jewel Academy
https://gamesnacks.com/games/4erks8385j9eo    https://4erks8385j9eo.h5games.usercontent.goog/v/1ff4p4m8ilme8/images/mahjong-solitaire-horizontal-banner-2.png=w256?v=1    Mahjong Solitaire
https://gamesnacks.com/games/jewellegend    https://jewellegend.h5games.usercontent.goog/v/36cb1hitjsa3o/marketing/title/jewellegend-html5_480x270.png=w256?v=1    Jewel Legend
https://gamesnacks.com/games/bubbletower    https://bubbletower.h5games.usercontent.goog/v/7ebcukaef3voo/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Bubble Tower
https://gamesnacks.com/games/5pj67mkaqugmo    https://5pj67mkaqugmo.h5games.usercontent.goog/v/151if1r687t30/image/FruitCubeBlast-med-res-banner.jpg=w256?v=1    Fruit Cube Blast
https://gamesnacks.com/games/jewelblocks    https://jewelblocks.h5games.usercontent.goog/v/0puee6ie0j880/marketing/title/jewelblocks-html5_480x270.png=w256?v=1    Jewel Blocks
https://gamesnacks.com/games/tripeakssolitaire    https://tripeakssolitaire.h5games.usercontent.goog/v/4v3d7g06n6rug/images/tripeaksfarm-horizontal-banner-2.png=w256?v=1    Tripeaks Solitaire
https://gamesnacks.com/games/mergemelons    https://mergemelons.h5games.usercontent.goog/v/59jg7dft2iaj0/images/horizontalBanners_19201080.png=w256?v=1    Merge Melons
https://gamesnacks.com/games/jewelmagic    https://jewelmagic.h5games.usercontent.goog/v/5e78bdcf-d6ed-4627-ab38-c8e0e647f7dc/med_res_banner.jpg=w256?v=1    Jewel Magic
https://gamesnacks.com/games/onetconnectclassic    https://onetconnectclassic.h5games.usercontent.goog/v/0q8248mt11l3g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Onet Connect Classic
https://gamesnacks.com/games/elementblocks    https://elementblocks.h5games.usercontent.goog/v/35up5t7ao24i8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Element Blocks
https://gamesnacks.com/games/51vi4vae20f8o    https://51vi4vae20f8o.h5games.usercontent.goog/v/66bqinuuh36b8/src/assets/art/store/block-drop-h-480x270.png=w256?v=1    BlockDrop
https://gamesnacks.com/games/dailysudoku    https://dailysudoku.h5games.usercontent.goog/v/03446732-f14b-4bcc-9e8b-68fc499a0cec/med_res_banner.jpg=w256?v=1    Daily Sudoku
https://gamesnacks.com/games/0i1jh8boqif48    https://0i1jh8boqif48.h5games.usercontent.goog/v/1643ot8on0v9g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Tile Journey
https://gamesnacks.com/games/mahjong3d    https://mahjong3d.h5games.usercontent.goog/v/eba0837e-4855-4bb2-b762-5dd6d8982cac/med_res_banner.jpg=w256?v=1    Mahjong 3D
https://gamesnacks.com/games/towercrash3d    https://towercrash3d.h5games.usercontent.goog/v/7c54afc1-3ca4-4121-a52a-9ea74e30f0d7/med_res_banner.jpg=w256?v=1    Tower Crash 3D
https://gamesnacks.com/games/candybubbles    https://candybubbles.h5games.usercontent.goog/v/370v1t5h5266g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Candy Bubbles
https://gamesnacks.com/games/5u9qhnk84v07g    https://5u9qhnk84v07g.h5games.usercontent.goog/v/2h3elehja73a8/image/tilepuzzle-med-res-banner.jpg=w256?v=1    Tile Puzzle
https://gamesnacks.com/games/52nk212336l1g    https://52nk212336l1g.h5games.usercontent.goog/v/0smbj5p2kjk78/assets/store/quest-bingo-h-1080x1920.png=w256?v=1    Quest Bingo
https://gamesnacks.com/games/7u583tvdi3f00    https://7u583tvdi3f00.h5games.usercontent.goog/v/424maigpuljoo/images/letter-links-horizontal-banner-2.png=w256?v=1    Letter Links
https://gamesnacks.com/games/79gloe1v4okkg    https://79gloe1v4okkg.h5games.usercontent.goog/v/6qlhje6nn2bg0/images/1920_1080_Horizontalbanner.png=w256?v=1    Nature Strikes Back
https://gamesnacks.com/games/5burcumauc5p0    https://5burcumauc5p0.h5games.usercontent.goog/v/4k8cb35sbe9fo/image/puzzlepieces-med-res-banner.jpg=w256?v=1    Puzzle Pieces Merge
https://gamesnacks.com/games/0vfcifju4i900    https://0vfcifju4i900.h5games.usercontent.goog/v/2jg90liogd5f8/image/dicepuzzle-med-res-banner.jpg=w256?v=1    Dice Puzzle
https://gamesnacks.com/games/tilesofegypt    https://tilesofegypt.h5games.usercontent.goog/v/dd964fa3-8999-4546-a4a0-d55a0cc72248/med_res_banner.jpg=w256?v=1    Tiles of Egypt
https://gamesnacks.com/games/jigsawpuzzleshexa    https://jigsawpuzzleshexa.h5games.usercontent.goog/v/5e9bm1tuf1me0/image/jigsawpuzzleshexa-med-res-banner.jpg=w256?v=1    Jigsaw Puzzles Hexa
https://gamesnacks.com/games/mahjongclassic    https://mahjongclassic.h5games.usercontent.goog/v/6tue6un26r7v0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Mahjong Classic
https://gamesnacks.com/games/smartybubbles    https://smartybubbles.h5games.usercontent.goog/v/09fhbor6rfpv0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Smarty Bubbles
https://gamesnacks.com/games/train2048    https://train2048.h5games.usercontent.goog/v/efebc769-0d8d-48f4-b437-af712b013132/med_res_banner.jpg=w256?v=1    Train 2048
https://gamesnacks.com/games/5a5rs5ng5rvro    https://5a5rs5ng5rvro.h5games.usercontent.goog/v/4grqmc17b1kc0/images/wom-horizontal-banner-2.png=w256?v=1    Words of Magic
https://gamesnacks.com/games/blockpuzzle    https://blockpuzzle.h5games.usercontent.goog/v/3rkr8c5j9b23o/image/hexpuzzle-med-res-banner.jpg=w256?v=1    Hex Puzzle
https://gamesnacks.com/games/piratesmatch3    https://piratesmatch3.h5games.usercontent.goog/v/fea2f25f-a39a-4273-93c1-38f8f9bd8260/med_res_banner.jpg=w256?v=1    Pirates Match 3
https://gamesnacks.com/games/wordsearch    https://wordsearch.h5games.usercontent.goog/v/6abe3eefqt368/image/wordsearch-med-res-banner.jpg=w256?v=1    Word Search
https://gamesnacks.com/games/jewelmagicxmas    https://jewelmagicxmas.h5games.usercontent.goog/v/c7f215bc-bcf8-4034-9f0b-246e0909bfa7/med_res_banner.jpg=w256?v=1    Jewel Magic Xmas
https://gamesnacks.com/games/findthedifference    https://findthedifference.h5games.usercontent.goog/v/0tambv0iojsn8/image/ftd-med-res-banner.jpg=w256?v=1    Find the Difference
https://gamesnacks.com/games/omnomconnectclassic    https://omnomconnectclassic.h5games.usercontent.goog/v/6bc88dac-9f6b-4f2f-8c85-e715c899bb63/med_res_banner.jpg=w256?v=1    Om Nom Connect Classic
https://gamesnacks.com/games/7nq79vktk8fho    https://7nq79vktk8fho.h5games.usercontent.goog/v/4u3a6m3hm9lj8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Parking Rush
https://gamesnacks.com/games/bubblewoods4    https://bubblewoods4.h5games.usercontent.goog/v/4jslovpheann0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Bubble Woods Ultimate
https://gamesnacks.com/games/colorpixel    https://colorpixel.h5games.usercontent.goog/v/6ko86juonaau0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Color Pixel Art
https://gamesnacks.com/games/unparkme    https://unparkme.h5games.usercontent.goog/v/7tbjega3nl8eg/marketing/title/unparkme-html5_480x270.png=w256?v=1    Unpark Me
https://gamesnacks.com/games/zumbaocean    https://zumbaocean.h5games.usercontent.goog/v/1gb65icesunig/marketing/title/zumbaocean-html5_480x270.png=w256?v=1    Zumba Ocean
https://gamesnacks.com/games/7j9i6247552ro    https://7j9i6247552ro.h5games.usercontent.goog/v/1g49kcc7pdiio/images/horizontal480.png=w256?v=1    Daily Word Climb
https://gamesnacks.com/games/6nilllqpgkm6o    https://6nilllqpgkm6o.h5games.usercontent.goog/v/7d3689i7s5gfo/MarketingAssets/tiletopia-thumb-wide-480x270.png=w256?v=1    Tiletopia
https://gamesnacks.com/games/rollthisball3    https://rollthisball3.h5games.usercontent.goog/v/0solbal8bgf5g/Marketing/title/rollthisball-html5_480x270.png=w256?v=1    Roll This Ball 3
https://gamesnacks.com/games/4oljglvsib9no    https://4oljglvsib9no.h5games.usercontent.goog/v/4nttt72qlep8o/marketing/title/get10ultimate-html5_480x270.png=w256?v=1    Get 10 Ultimate
https://gamesnacks.com/games/jewelpetsmatch    https://jewelpetsmatch.h5games.usercontent.goog/v/5dfa5efb-0bdb-49f0-ae73-9fd8ad6b8bc4/med_res_banner.jpg=w256?v=1    Jewel Pets Match
https://gamesnacks.com/games/sudokuplus    https://sudokuplus.h5games.usercontent.goog/v/3q827iuj6msno/image/sudokuplus-med-res-banner.jpg=w256?v=1    Sudoku Plus
https://gamesnacks.com/games/minesweeper    https://minesweeper.h5games.usercontent.goog/v/6uo6tf2lnil3o/image/minesweeper-med-res-banner.jpg=w256?v=1    Minesweeper
https://gamesnacks.com/games/minesweepermania    https://minesweepermania.h5games.usercontent.goog/v/6cje7ufl50e4g/marketing/title/minesweepermania-html5_480x270.png=w256?v=1    Minesweeper Mania
https://gamesnacks.com/games/7h2pln0tgo8q0    https://7h2pln0tgo8q0.h5games.usercontent.goog/v/004k30od8uvog/assets/store/quest-21-h-1080x1920.png=w256?v=1    Quest 21
https://gamesnacks.com/games/piratepop    https://piratepop.h5games.usercontent.goog/v/3japc2shd35ug/images/pp-horizontal-banner-2.png=w256?v=1    Pirate Pop
https://gamesnacks.com/games/unblockthat    https://unblockthat.h5games.usercontent.goog/v/6iqu63hhulkgo/marketing/title/unblockthat-html5_480x270.png=w256?v=1    Unblock That
https://gamesnacks.com/games/worddetector    https://worddetector.h5games.usercontent.goog/v/4gaf9ej9hp398/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Word Detector
https://gamesnacks.com/games/4j6utu2p6fklg    https://4j6utu2p6fklg.h5games.usercontent.goog/v/6qh61gl4k3ado/DailySudoku_landscape-medium.png=w256?v=1    Daily sudoku
https://gamesnacks.com/games/mergepirates    https://mergepirates.h5games.usercontent.goog/v/2rugbh8p4845g/images/mergepirates-horizontal-banner-2.png=w256?v=1    Merge Pirates
https://gamesnacks.com/games/braintrainer    https://braintrainer.h5games.usercontent.goog/v/4f2ffbc6-4208-4087-bfaf-ab0db086da02/med_res_banner.jpg=w256?v=1    Brain Trainer
https://gamesnacks.com/games/jigsawpuzzledeluxe    https://jigsawpuzzledeluxe.h5games.usercontent.goog/v/5jfat3ipu2790/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Jigsaw Puzzle Deluxe
https://gamesnacks.com/games/5hefbqkv5o0do    https://5hefbqkv5o0do.h5games.usercontent.goog/v/0bio68l8dojl0/marketing/title/farmblockpuzzle-html5_480x270.png=w256?v=1    Farm Block Puzzle
https://gamesnacks.com/games/smartybubbles2    https://smartybubbles2.h5games.usercontent.goog/v/1u280qojm9oq0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Smarty Bubbles 2
https://gamesnacks.com/games/mergethegems    https://mergethegems.h5games.usercontent.goog/v/5rut2fhhuqb1g/promo/1920x1080.jpg=w256?v=1    Merge the Gems
https://gamesnacks.com/games/0aijth0is3tko    https://0aijth0is3tko.h5games.usercontent.goog/v/1c1277hq9kr98/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Emoji Fun
https://gamesnacks.com/games/thesearush    https://thesearush.h5games.usercontent.goog/v/5ie3e5aghbr18/marketing/title/thesearush-html5_480x270.png=w256?v=1    The Sea Rush
https://gamesnacks.com/games/2048giant    https://2048giant.h5games.usercontent.goog/v/4bea87e2-a9a9-4f4b-b1c8-8b777220c567/med_res_banner.jpg=w256?v=1    2048 Giant
https://gamesnacks.com/games/wordpics    https://wordpics.h5games.usercontent.goog/v/0s44ldeacb2bo/image/wordpics-med-res-banner.jpg=w256?v=1    Word Pics
https://gamesnacks.com/games/oddoneout    https://oddoneout.h5games.usercontent.goog/v/50nqosk9lm28o/image/oddoneout-med-res-banner.jpg=w256?v=1    Odd One Out
https://gamesnacks.com/games/41la6sld9ed88    https://41la6sld9ed88.h5games.usercontent.goog/v/36d90atplnu7o/images/horizontal-banner.png=w256?v=1    Cake Smash
https://gamesnacks.com/games/pintheufo    https://pintheufo.h5games.usercontent.goog/v/08ukqv01ac45o/images/mid_res_banner.jpeg=w256?v=1    Pin the UFO
https://gamesnacks.com/games/picswordgame    https://picswordgame.h5games.usercontent.goog/v/40jujb4uelhb0/image/picswordgame-med-res-banner.jpg=w256?v=1    Pics Word Game
https://gamesnacks.com/games/6ljls661l4lkg    https://6ljls661l4lkg.h5games.usercontent.goog/v/1mil2011qbul0/image/blockpuzzle-med-res-banner.jpg=w256?v=1    Blocks Puzzle
https://gamesnacks.com/games/695vevup4pmu0    https://695vevup4pmu0.h5games.usercontent.goog/v/7ptf20o9mjr48/icons/icon_1920x1080.png=w256?v=1    Bubble Shooter HD
https://gamesnacks.com/games/5enjropk1ren8    https://5enjropk1ren8.h5games.usercontent.goog/v/6u5qapt4kt1j8/marketing/ban-bricksBreaker-480x270.jpg=w256?v=1    Bricks Breaker
https://gamesnacks.com/games/62dfg8ps4f7lg    https://62dfg8ps4f7lg.h5games.usercontent.goog/v/0k3gcfq0ljti8/images/landscape480.png=w256?v=1    Block Dimension
https://gamesnacks.com/games/omnomconnectxmas    https://omnomconnectxmas.h5games.usercontent.goog/v/88a6b2cf-1027-4490-a613-9a135cf869ce/med_res_banner.jpg=w256?v=1    Om Nom Connect Xmas
https://gamesnacks.com/games/kittymatch    https://kittymatch.h5games.usercontent.goog/v/0fb0j00v75210/images/horizontalBanners_270480.png=w256?v=1    Kitty Match
https://gamesnacks.com/games/gymstack    https://gymstack.h5games.usercontent.goog/v/3js1l1d7rdkfg/images/mid_res_banner.jpeg=w256?v=1    Gym Stack
https://gamesnacks.com/games/jewelchristmasmania    https://jewelchristmasmania.h5games.usercontent.goog/v/3vom8bn0qgmto/marketing/title/jewelchristmas-html5_480x270.png=w256?v=1    Jewel Christmas Mania
https://gamesnacks.com/games/beeconnect    https://beeconnect.h5games.usercontent.goog/v/06c7e297-3e6d-4512-9fb2-e491ae2b2fb9/med_res_banner.jpg=w256?v=1    Bee Connect
https://gamesnacks.com/games/4h72h3ha1dnh0    https://4h72h3ha1dnh0.h5games.usercontent.goog/v/4mrusdmqik1l8/src/assets/art/store/polyMatch_H_480X270.png=w256?v=1    PolyMatch
https://gamesnacks.com/games/zooboom    https://zooboom.h5games.usercontent.goog/v/4g2tps61g9djg/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Zoo Boom
https://gamesnacks.com/games/1pq2qond4eka0    https://1pq2qond4eka0.h5games.usercontent.goog/v/4oiv5e7dd7vd8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Butterfly Shimai
https://gamesnacks.com/games/diamondrush    https://diamondrush.h5games.usercontent.goog/v/63ok750qri670/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Diamond Rush
https://gamesnacks.com/games/reversimania    https://reversimania.h5games.usercontent.goog/v/7rhqf6sl8lpf0/marketing/title/reversimania-html5_480x270.png=w256?v=1    Reversi Mania
https://gamesnacks.com/games/1cq84l302hpdg    https://1cq84l302hpdg.h5games.usercontent.goog/v/601qerqj3lb90/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1    Cut the Rope
https://gamesnacks.com/games/movingco    https://movingco.h5games.usercontent.goog/v/3crgi5efdnml0/MarketingAssets/Moving_CO_Thumb_Wide_480x270.png=w256?v=1    Moving Co.
https://gamesnacks.com/games/2gtc787tjm7c8    https://2gtc787tjm7c8.h5games.usercontent.goog/v/5lfna7ldlrun8/images/horizontal-banner.png=w256?v=1    Emoji With Friends
https://gamesnacks.com/games/2avtkm5bj06f0    https://2avtkm5bj06f0.h5games.usercontent.goog/v/66fijarm4ldv0/images/horizontal-banner.png=w256?v=1    The Jigsaw Game
https://gamesnacks.com/games/4l7qr4mfc8o80    https://4l7qr4mfc8o80.h5games.usercontent.goog/v/5sm797oi4heu0/icons/icon_1920x1080.png=w256?v=1    2020 Connect
https://gamesnacks.com/games/santasquest    https://santasquest.h5games.usercontent.goog/v/b8891b4c-6b71-4e05-8e46-4a4dc7920520/med_res_banner.jpg=w256?v=1    Santa's Quest
https://gamesnacks.com/games/02rd6nna08dqg    https://02rd6nna08dqg.h5games.usercontent.goog/v/3ngbs02gf9h88/images/landscape480.png=w256?v=1    Fluffy Mania
https://gamesnacks.com/games/05c9vfh919cbg    https://05c9vfh919cbg.h5games.usercontent.goog/v/0ki2bua5asq00/marketing/title/puzzlepieces-html5_480x270.png=w256?v=1    Puzzle Pieces
https://gamesnacks.com/games/polyart    https://polyart.h5games.usercontent.goog/v/47aiosp2dbqgg/marketing/title/polyart-html5_480x270.png=w256?v=1    Poly Art
https://gamesnacks.com/games/starsaligned    https://starsaligned.h5games.usercontent.goog/v/3i88p78sohtig/media/graphics/promo/banners/480x270.jpg=w256?v=1    Stars Aligned
https://gamesnacks.com/games/2048-v4    https://2048-v4.h5games.usercontent.goog/v/4fe9a293-323e-4486-8aef-839ab3806c29/med_res_banner.jpg=w256?v=1    Sum 2048
https://gamesnacks.com/games/diwalilights    https://diwalilights.h5games.usercontent.goog/v/5cddqg9lrn3kg/media/graphics/promo/banners/480x270.jpg=w256?v=1    Diwali Lights
https://gamesnacks.com/games/630h8fcg3e938    https://630h8fcg3e938.h5games.usercontent.goog/v/51qfd4fr90dro/marketing/title/bunnyquest-html5_480x270.png=w256?v=1    Bunny Quest
https://gamesnacks.com/games/0gk3ormb878mg    https://0gk3ormb878mg.h5games.usercontent.goog/v/1qgqb91tuaqv0/marketing/title/jewelhalloween-html5_480x270.png=w256?v=1    Jewel Halloween
https://gamesnacks.com/games/14qikp6hbljig    https://14qikp6hbljig.h5games.usercontent.goog/v/4htrmkq5b0b78/market/banner-1920x1080-5.png=w256?v=1    2048 Pizza
https://gamesnacks.com/games/75njrrvim9kq0    https://75njrrvim9kq0.h5games.usercontent.goog/v/1v57mtiv2ele0/image/matchtiles-med-res-banner.jpg=w256?v=1    8x8 Match Tiles
https://gamesnacks.com/games/02ef7fb7guapg    https://02ef7fb7guapg.h5games.usercontent.goog/v/13knu9k9rm8go/promo/1920x1080.jpg=w256?v=1    Aloha Mahjong
https://gamesnacks.com/games/6f5e193l1nhig    https://6f5e193l1nhig.h5games.usercontent.goog/v/2bgjgmrog0tgg/web/img/marketing/1010antpuzzle-med-res-banner.png=w256?v=1    Ant and block puzzle
https://gamesnacks.com/games/1uerepsm8tbpg    https://1uerepsm8tbpg.h5games.usercontent.goog/v/3st9sicdd4eu0/creatives/Horizontal_banners/HB_480X270.png=w256?v=1    Aqua Blocks
https://gamesnacks.com/games/59c0fiphd7ng0    https://59c0fiphd7ng0.h5games.usercontent.goog/v/5cgtqofbdtd08/assets/marketing/h_480x270.png=w256?v=1    Bird Sort Quest
https://gamesnacks.com/games/0nrdbfos8jhv8    https://0nrdbfos8jhv8.h5games.usercontent.goog/v/6ovao2cpe86og/marketing/title/title_480x270.png=w256?v=1    Block Blaster Puzzle
https://gamesnacks.com/games/177gd8gft04p0    https://177gd8gft04p0.h5games.usercontent.goog/v/0md288db3fuq8/marketing/horizontal_banner.png=w256?v=1    Blockbuster Puzzle
https://gamesnacks.com/games/65bijcm9l375g    https://65bijcm9l375g.h5games.usercontent.goog/v/6v521t1km2i30/marketing/ban-bonanzaBlastBPG-480x270.jpg=w256?v=1    Bonanza Shooter Bubble
https://gamesnacks.com/games/7uvo1rchfrhr8    https://7uvo1rchfrhr8.h5games.usercontent.goog/v/4tk6unop5lefg/assets/marketing/h_480x270.png=w256?v=1    Bricks Breaker Crush
https://gamesnacks.com/games/1s6hqqts5ko6o    https://1s6hqqts5ko6o.h5games.usercontent.goog/v/31k6im535uugo/assets/marketing/h_480x270.png=w256?v=1    Bricks Breaker House
https://gamesnacks.com/games/1pef4tscr4350#sc=1750833401555222339-1981299    https://1pef4tscr4350.h5games.usercontent.goog/v/28enlcsl0u3ng/marketing/title/busparkingout-html5_480x270.png=w256?v=1    Bus Parking Out
https://gamesnacks.com/games/7vciensnt6ei8    https://7vciensnt6ei8.h5games.usercontent.goog/v/0lsk1qj66dbno/marketing/horizontal_banner.png=w256?v=1    Candy Riddles
https://gamesnacks.com/games/01cqom45rtuoo    https://01cqom45rtuoo.h5games.usercontent.goog/v/6t1iulpqr6t5g/web/img/marketing/ugokuonnajiatsume-med-res-banner.png=w256?v=1    Collect Same Thing
https://gamesnacks.com/games/4keu4g7sioasg#sc=1750833401565022948-1981299    https://4keu4g7sioasg.h5games.usercontent.goog/v/2a581f2343cbo/_assets_/marketingAssets/banners/480x270.png=w256?v=1    Color Fill 3D
https://gamesnacks.com/games/63vakb2ehqof8    https://63vakb2ehqof8.h5games.usercontent.goog/v/381au2qko6no0/_assets_/marketingAssets/banners/480x270.png=w256?v=1    Color Roll 3D
https://gamesnacks.com/games/21t5l4ct88d8g#sc=1750833401572960627-1981299    https://21t5l4ct88d8g.h5games.usercontent.goog/v/6kels35kspngg/images/horizontal_banner1.jpg=w256?v=1    Coloring Match
https://gamesnacks.com/games/05hi0oufvrcro    https://05hi0oufvrcro.h5games.usercontent.goog/v/0qeok5765gar8/creatives/Horizontal_banner/480X270.png=w256?v=1    Crazy Balls
https://gamesnacks.com/games/4u2r33lp92ja0    https://4u2r33lp92ja0.h5games.usercontent.goog/v/53cgdtc83kng8/marketing/horizontal_banner.png=w256?v=1    Crocword
https://gamesnacks.com/games/0e53jjs7cgfvg    https://0e53jjs7cgfvg.h5games.usercontent.goog/v/7ksqnmpcepl5g/images/banner-1920x1080.png=w256?v=1    Daily Room Escape
https://gamesnacks.com/games/1i20ele8n07u0    https://1i20ele8n07u0.h5games.usercontent.goog/v/1n8osodo9gs80/images/banner-1920x1080.png=w256?v=1    Daily Word Search
https://gamesnacks.com/games/17ne7udlebfig    https://17ne7udlebfig.h5games.usercontent.goog/v/1oqpgb1poqgk0/assets/marketing/h_480x270.png=w256?v=1    Drop 2048
https://gamesnacks.com/games/38qbbfqgs53ko    https://38qbbfqgs53ko.h5games.usercontent.goog/v/0982joei3ni1o/marketing/h_480x270.png=w256?v=1    Egg Maker
https://gamesnacks.com/games/0gk3ein2dq6o8    https://0gk3ein2dq6o8.h5games.usercontent.goog/v/5lnlpoksjg620/marketing/GameSnacks_horizontalBanner_Fliptogram.jpg=w256?v=1    Fliptogram
https://gamesnacks.com/games/2hr2cbdimftqg#sc=1750833401535875432-1981299    https://2hr2cbdimftqg.h5games.usercontent.goog/v/2fqutbqb0b63g/_assets_/marketingAssets/banners/480x270.png=w256?v=1    Go Escape
https://gamesnacks.com/games/5e2trj00jcfog    https://5e2trj00jcfog.h5games.usercontent.goog/v/1hrc6f7979nig/creatives/Horizontal_banner/480X270.png=w256?v=1    Guess The Word
https://gamesnacks.com/games/0vc1kolll32h8    https://0vc1kolll32h8.h5games.usercontent.goog/v/0t898ulinrkag/market/banner-1920x1080-5.png=w256?v=1    Haru Pandas Slide
https://gamesnacks.com/games/0gt5ae21ln70o    https://0gt5ae21ln70o.h5games.usercontent.goog/v/0762mjie8e8s0/creatives/Horizontal_banner/480X270.png=w256?v=1    Jungle Bricks
https://gamesnacks.com/games/2sf7n68mggti0    https://2sf7n68mggti0.h5games.usercontent.goog/v/2mk31nh92a0og/assets/marketing/h_480x270.png=w256?v=1    Jungle Match Puzzle
https://gamesnacks.com/games/0ptbttt09g5cg    https://0ptbttt09g5cg.h5games.usercontent.goog/v/6c7l9okboa1u0/marketing/horizontal_banner.png=w256?v=1    Kings and Queens
https://gamesnacks.com/games/757entlesmh4g    https://757entlesmh4g.h5games.usercontent.goog/v/1r9oimecfevc0/marketing/title/kitchensorting-html5_480x270.png=w256?v=1    Kitchen Sorting
https://gamesnacks.com/games/6cifr142haig8    https://6cifr142haig8.h5games.usercontent.goog/v/1c963avg5lo9g/marketing/horizontal_banner.png=w256?v=1    Kitty Scramble
https://gamesnacks.com/games/4es9bmcl5tp2o    https://4es9bmcl5tp2o.h5games.usercontent.goog/v/5uo8nsnhp1vjo/images/L_480x270.png=w256?v=1    Light Line
https://gamesnacks.com/games/4oij9suhguc58    https://4oij9suhguc58.h5games.usercontent.goog/v/1osssadggdrao/marketing/ban-candyWorldMM-480x270.jpg=w256?v=1    Lollipop World : match 3
https://gamesnacks.com/games/7gsm6u8848nko    https://7gsm6u8848nko.h5games.usercontent.goog/v/3qaqg5nju3th8/assets/marketing/h_480x270.png=w256?v=1    Mahjong Connect : Mission
https://gamesnacks.com/games/5jdtfmidv5ao0    https://5jdtfmidv5ao0.h5games.usercontent.goog/v/1qd7nn7jmar7g/assets/marketing/h_480x270.png=w256?v=1    Mahjong Match Puzzle
https://gamesnacks.com/games/3931uc3bsois0    https://3931uc3bsois0.h5games.usercontent.goog/v/7nvm8etm546uo/web/img/marketing/oekakimeiro-med-res-banner.png=w256?v=1    Maze Puzzle
https://gamesnacks.com/games/1ivu76rhffpsg    https://1ivu76rhffpsg.h5games.usercontent.goog/v/00icu4vi09j18/image/Maze-med-res-banner.jpg=w256?v=1    Mazes
https://gamesnacks.com/games/3eltb7i874s60    https://3eltb7i874s60.h5games.usercontent.goog/v/28f34ighqoh10/images/banner-1920x1080.png=w256?v=1    Merge Fruit
https://gamesnacks.com/games/5gsana77eub30    https://5gsana77eub30.h5games.usercontent.goog/v/7363vv8e5mrb8/web/img/marketing/minesweeper1000-med-res-banner.png=w256?v=1    Minesweeper 1000
https://gamesnacks.com/games/4knmpq6joecbg    https://4knmpq6joecbg.h5games.usercontent.goog/v/1uamg2frss2qg/_assets_/marketingAssets/banners/480x270.png=w256?v=1    Parking Jam
https://gamesnacks.com/games/5348abrdhudu8    https://5348abrdhudu8.h5games.usercontent.goog/v/35ge2no4verb8/creatives/Horizontal_banner/480X270.png=w256?v=1    Quiz x
https://gamesnacks.com/games/0o2ssijd98lgg    https://0o2ssijd98lgg.h5games.usercontent.goog/v/39t01692a4rs8/images/rps-ninja-horizontal-banner-2.png=w256?v=1    Rock Paper Scissors Dojo
https://gamesnacks.com/games/2f4eprapfvtoo    https://2f4eprapfvtoo.h5games.usercontent.goog/v/4bc5h26thvau8/marketing/horizontal_banner.png=w256?v=1    Sugar Heroes
https://gamesnacks.com/games/38lbr23ak5hn8    https://38lbr23ak5hn8.h5games.usercontent.goog/v/3v2lg4sb2v3ug/image/Tangram-med-res-banner.jpg=w256?v=1    Tangram Puzzle
https://gamesnacks.com/games/7nh0dnmovl0g0    https://7nh0dnmovl0g0.h5games.usercontent.goog/v/01busogksrcm0/market/banner-1920x1080-5.png=w256?v=1    The Hidden Antique Shop
https://gamesnacks.com/games/4bl9sdeaqndto    https://4bl9sdeaqndto.h5games.usercontent.goog/v/4qierjmnf0kng/marketing/GameSnacks_horizontalBanner_Thruline.jpg=w256?v=1    Thruline
https://gamesnacks.com/games/7dcsid310v1u8    https://7dcsid310v1u8.h5games.usercontent.goog/v/13cfdat69ufug/marketing/title/tictactoemania-html5_480x270.png=w256?v=1    Tic Tac Toe Mania
https://gamesnacks.com/games/5en3tugq69tdo    https://5en3tugq69tdo.h5games.usercontent.goog/v/4pu6to0p0cgrg/marketing/horizontal_banner.png=w256?v=1    Tile Guru
https://gamesnacks.com/games/786ndsslg99r8    https://786ndsslg99r8.h5games.usercontent.goog/v/70bavan56u08g/images/tt-horizontal-banner-2.png=w256?v=1    Tumble Towers
https://gamesnacks.com/games/01pgt4aflffvo    https://01pgt4aflffvo.h5games.usercontent.goog/v/2kpv41q3jen50/image/VeggiesCut-med-res-banner.jpg=w256?v=1    Veggies Cut
https://gamesnacks.com/games/2rfr65hktjv5o    https://2rfr65hktjv5o.h5games.usercontent.goog/v/46h85f5g0sldo/assets/logo/480x270.png=w256?v=1    Wood Block Match
`.trim();

function parseGameSnacksData(data) {
    const lines = data.split('\n').filter(line => line.trim());
    const games = [];
    
    lines.forEach(line => {
        // The data seems to be space-separated with multiple spaces, let's handle that
        const parts = line.split('    ').filter(part => part.trim());
        
        if (parts.length >= 3) {
            const gameUrl = parts[0].trim();
            const imageUrl = parts[1].trim();
            const gameName = parts[2].trim();
            
            if (gameUrl.includes('gamesnacks.com/games/')) {
                // Extract game ID from URL
                const gameId = gameUrl.split('/games/')[1].split('#')[0].split('?')[0];
                
                // Create slug from game name
                const slug = gameName.toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .trim('-');
                
                games.push({
                    name: gameName,
                    slug: slug,
                    image: imageUrl,
                    category: "puzzle",
                    iframe: gameUrl,
                    description: `${gameName} - A challenging puzzle game that will test your skills and entertain you for hours.`
                });
            }
        }
    });
    
    return games;
}

const gamesnacksGames = parseGameSnacksData(gameData);
console.log('Parsed GameSnacks games:', gamesnacksGames.length);
console.log('Sample:', JSON.stringify(gamesnacksGames[0], null, 2));