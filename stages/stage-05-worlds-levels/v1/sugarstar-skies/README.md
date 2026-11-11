# Sugarstar Skies · World 4 · v1

95 individual modules and variants reconstructed from the supplied Sugarstar Skies board. The original PNG is preserved unchanged in [references](references/sugarstar-skies-original-board.png). All individual master previews appear below; click any preview to open its PNG.

![World overview](previews/world-overview.jpg)

## Files and use

- **90 transparent modules:** castle views, building pieces, floating islands, cloud tiles and strips, bridges, paths, trees, canopies, crystals, balloons, sky mascots, lamps, pedestals, props, plants, rocks, grasses, shrubs and effects.
- **5 opaque plates:** the hero scene and four background variations. These are flattened scenes, not separated parallax layers.
- Transparent PNG masters use a 1024 × 1024 canvas with an artwork envelope up to 860 pixels. Background masters retain generated aspect ratio, up to 1536 pixels on the longest side.
- Every master has 256- and 512-pixel maximum-edge PNG and lossless WebP exports in `gameplay/`. These exports repeat the same artwork.
- `manifest.json` records file checksums, dimensions, source crop coordinates, alpha bounds and suggested anchors. `generation.json` records prompts and source provenance. Open `preview.html` locally for a searchable gallery or browse the category sheets in `previews/`.

Use straight alpha/source-over blending. Solid scenery anchors are at the bottom center of visible artwork. Backgrounds, overhead views, effects, crystals, balloons, sky mascots, canopies and cloud strips use centered anchors. Each module is normalized independently; relative world scale must be set in the level editor. These suggested anchors do not define collision shapes, walkable surfaces, grid spacing or sorting order.

## Integration status

These are newly generated static 2D renders faithful to the reference, not pixel-exact extractions, 3D models or a finished playable level. Separate angle variants may differ in geometry or details. Terrain edges have not been proven seamless; check scale, tile joins, depth sorting and angle consistency in the game. Waterfalls, portal glow, balloons, mascots and effects are static images, not animation sequences. The architectural star portal includes its illuminated doorway; this art does not implement teleportation or gameplay behavior. The sky mascots are board-derived world decorations, not replacements for any locked character family. No collision masks, level layouts, difficulty settings, rules or character redesigns are included.

Technical checks cover asset completeness, valid decoding, transparent margins, matching PNG/WebP pixels, source integrity and file hashes. Visual contact-sheet review does not replace in-engine QA. Small isolated alpha specks and faint distant background residue were removed; internal openings and translucent edges were preserved. Existing locked characters, cannons and other stage artwork are unchanged.

## Individual asset previews

### Scenes

| Hero Skies |
| --- |
| [![scenes/hero-skies](gameplay/scenes/hero-skies-256.png)](masters/scenes/hero-skies.png) |

### Castle Views

| Front | Three Quarter | Side |
| --- | --- | --- |
| [![castle-views/front](gameplay/castle-views/front-256.png)](masters/castle-views/front.png) | [![castle-views/three-quarter](gameplay/castle-views/three-quarter-256.png)](masters/castle-views/three-quarter.png) | [![castle-views/side](gameplay/castle-views/side-256.png)](masters/castle-views/side.png) |

| Back | Overhead |
| --- | --- |
| [![castle-views/back](gameplay/castle-views/back-256.png)](masters/castle-views/back.png) | [![castle-views/overhead](gameplay/castle-views/overhead-256.png)](masters/castle-views/overhead.png) |

### Castle Pieces

| Star Portal | Star Plaque | Small Turret |
| --- | --- | --- |
| [![castle-pieces/star-portal](gameplay/castle-pieces/star-portal-256.png)](masters/castle-pieces/star-portal.png) | [![castle-pieces/star-plaque](gameplay/castle-pieces/star-plaque-256.png)](masters/castle-pieces/star-plaque.png) | [![castle-pieces/small-turret](gameplay/castle-pieces/small-turret-256.png)](masters/castle-pieces/small-turret.png) |

| Pink Dome | Flag | Star Low Wall |
| --- | --- | --- |
| [![castle-pieces/pink-dome](gameplay/castle-pieces/pink-dome-256.png)](masters/castle-pieces/pink-dome.png) | [![castle-pieces/flag](gameplay/castle-pieces/flag-256.png)](masters/castle-pieces/flag.png) | [![castle-pieces/star-low-wall](gameplay/castle-pieces/star-low-wall-256.png)](masters/castle-pieces/star-low-wall.png) |

| Small Arch | Star Pillar | Star Railing |
| --- | --- | --- |
| [![castle-pieces/small-arch](gameplay/castle-pieces/small-arch-256.png)](masters/castle-pieces/small-arch.png) | [![castle-pieces/star-pillar](gameplay/castle-pieces/star-pillar-256.png)](masters/castle-pieces/star-pillar.png) | [![castle-pieces/star-railing](gameplay/castle-pieces/star-railing-256.png)](masters/castle-pieces/star-railing.png) |

| Window Pink | Window Purple |
| --- | --- |
| [![castle-pieces/window-pink](gameplay/castle-pieces/window-pink-256.png)](masters/castle-pieces/window-pink.png) | [![castle-pieces/window-purple](gameplay/castle-pieces/window-purple-256.png)](masters/castle-pieces/window-purple.png) |

### Islands

| Large Meadow | Waterfall Meadow | Small Meadow |
| --- | --- | --- |
| [![islands/large-meadow](gameplay/islands/large-meadow-256.png)](masters/islands/large-meadow.png) | [![islands/waterfall-meadow](gameplay/islands/waterfall-meadow-256.png)](masters/islands/waterfall-meadow.png) | [![islands/small-meadow](gameplay/islands/small-meadow-256.png)](masters/islands/small-meadow.png) |

| Star Meadow |
| --- |
| [![islands/star-meadow](gameplay/islands/star-meadow-256.png)](masters/islands/star-meadow.png) |

### Cloud Tiles

| Pink Star | Rainbow | Spiral |
| --- | --- | --- |
| [![cloud-tiles/pink-star](gameplay/cloud-tiles/pink-star-256.png)](masters/cloud-tiles/pink-star.png) | [![cloud-tiles/rainbow](gameplay/cloud-tiles/rainbow-256.png)](masters/cloud-tiles/rainbow.png) | [![cloud-tiles/spiral](gameplay/cloud-tiles/spiral-256.png)](masters/cloud-tiles/spiral.png) |

| White Star | Sprinkle | Waterfall |
| --- | --- | --- |
| [![cloud-tiles/white-star](gameplay/cloud-tiles/white-star-256.png)](masters/cloud-tiles/white-star.png) | [![cloud-tiles/sprinkle](gameplay/cloud-tiles/sprinkle-256.png)](masters/cloud-tiles/sprinkle.png) | [![cloud-tiles/waterfall](gameplay/cloud-tiles/waterfall-256.png)](masters/cloud-tiles/waterfall.png) |

| Plain White |
| --- |
| [![cloud-tiles/plain-white](gameplay/cloud-tiles/plain-white-256.png)](masters/cloud-tiles/plain-white.png) |

### Cloud Strips

| Blue Short | Lilac Short | Pink Long |
| --- | --- | --- |
| [![cloud-strips/blue-short](gameplay/cloud-strips/blue-short-256.png)](masters/cloud-strips/blue-short.png) | [![cloud-strips/lilac-short](gameplay/cloud-strips/lilac-short-256.png)](masters/cloud-strips/lilac-short.png) | [![cloud-strips/pink-long](gameplay/cloud-strips/pink-long-256.png)](masters/cloud-strips/pink-long.png) |

| White Long | Pink Short |
| --- | --- |
| [![cloud-strips/white-long](gameplay/cloud-strips/white-long-256.png)](masters/cloud-strips/white-long.png) | [![cloud-strips/pink-short](gameplay/cloud-strips/pink-short-256.png)](masters/cloud-strips/pink-short.png) |

### Bridges

| Gold Wood | Rainbow | Pink Rope |
| --- | --- | --- |
| [![bridges/gold-wood](gameplay/bridges/gold-wood-256.png)](masters/bridges/gold-wood.png) | [![bridges/rainbow](gameplay/bridges/rainbow-256.png)](masters/bridges/rainbow.png) | [![bridges/pink-rope](gameplay/bridges/pink-rope-256.png)](masters/bridges/pink-rope.png) |

| Pink Arched |
| --- |
| [![bridges/pink-arched](gameplay/bridges/pink-arched-256.png)](masters/bridges/pink-arched.png) |

### Paths

| Star Steps A | Star Steps B | Gold Star Cluster |
| --- | --- | --- |
| [![paths/star-steps-a](gameplay/paths/star-steps-a-256.png)](masters/paths/star-steps-a.png) | [![paths/star-steps-b](gameplay/paths/star-steps-b-256.png)](masters/paths/star-steps-b.png) | [![paths/gold-star-cluster](gameplay/paths/gold-star-cluster-256.png)](masters/paths/gold-star-cluster.png) |

| Rainbow Stairs |
| --- |
| [![paths/rainbow-stairs](gameplay/paths/rainbow-stairs-256.png)](masters/paths/rainbow-stairs.png) |

### Trees

| Pink Large | Pink Medium | Pink Small |
| --- | --- | --- |
| [![trees/pink-large](gameplay/trees/pink-large-256.png)](masters/trees/pink-large.png) | [![trees/pink-medium](gameplay/trees/pink-medium-256.png)](masters/trees/pink-medium.png) | [![trees/pink-small](gameplay/trees/pink-small-256.png)](masters/trees/pink-small.png) |

| Golden Star | Blue Star | Purple Wisteria |
| --- | --- | --- |
| [![trees/golden-star](gameplay/trees/golden-star-256.png)](masters/trees/golden-star.png) | [![trees/blue-star](gameplay/trees/blue-star-256.png)](masters/trees/blue-star.png) | [![trees/purple-wisteria](gameplay/trees/purple-wisteria-256.png)](masters/trees/purple-wisteria.png) |

### Canopies

| Pink | Golden | Blue |
| --- | --- | --- |
| [![canopies/pink](gameplay/canopies/pink-256.png)](masters/canopies/pink.png) | [![canopies/golden](gameplay/canopies/golden-256.png)](masters/canopies/golden.png) | [![canopies/blue](gameplay/canopies/blue-256.png)](masters/canopies/blue.png) |

| Purple |
| --- |
| [![canopies/purple](gameplay/canopies/purple-256.png)](masters/canopies/purple.png) |

### Crystals

| Rainbow Star | Purple Cluster | Blue Cluster |
| --- | --- | --- |
| [![crystals/rainbow-star](gameplay/crystals/rainbow-star-256.png)](masters/crystals/rainbow-star.png) | [![crystals/purple-cluster](gameplay/crystals/purple-cluster-256.png)](masters/crystals/purple-cluster.png) | [![crystals/blue-cluster](gameplay/crystals/blue-cluster-256.png)](masters/crystals/blue-cluster.png) |

| Gold Star | Pink Purple |
| --- | --- |
| [![crystals/gold-star](gameplay/crystals/gold-star-256.png)](masters/crystals/gold-star.png) | [![crystals/pink-purple](gameplay/crystals/pink-purple-256.png)](masters/crystals/pink-purple.png) |

### Balloons

| Pink | Purple | Cloud Pink |
| --- | --- | --- |
| [![balloons/pink](gameplay/balloons/pink-256.png)](masters/balloons/pink.png) | [![balloons/purple](gameplay/balloons/purple-256.png)](masters/balloons/purple.png) | [![balloons/cloud-pink](gameplay/balloons/cloud-pink-256.png)](masters/balloons/cloud-pink.png) |

### Sky Mascots

| Pink Wing Star | Blue Wing Star | Sleepy Moon |
| --- | --- | --- |
| [![sky-mascots/pink-wing-star](gameplay/sky-mascots/pink-wing-star-256.png)](masters/sky-mascots/pink-wing-star.png) | [![sky-mascots/blue-wing-star](gameplay/sky-mascots/blue-wing-star-256.png)](masters/sky-mascots/blue-wing-star.png) | [![sky-mascots/sleepy-moon](gameplay/sky-mascots/sleepy-moon-256.png)](masters/sky-mascots/sleepy-moon.png) |

| Cloud Star |
| --- |
| [![sky-mascots/cloud-star](gameplay/sky-mascots/cloud-star-256.png)](masters/sky-mascots/cloud-star.png) |

### Lamps

| Curved Star | Crescent Star | Pink Star |
| --- | --- | --- |
| [![lamps/curved-star](gameplay/lamps/curved-star-256.png)](masters/lamps/curved-star.png) | [![lamps/crescent-star](gameplay/lamps/crescent-star-256.png)](masters/lamps/crescent-star.png) | [![lamps/pink-star](gameplay/lamps/pink-star-256.png)](masters/lamps/pink-star.png) |

### Pedestals

| Glowing Star | Orb Star | Gold Orb |
| --- | --- | --- |
| [![pedestals/glowing-star](gameplay/pedestals/glowing-star-256.png)](masters/pedestals/glowing-star.png) | [![pedestals/orb-star](gameplay/pedestals/orb-star-256.png)](masters/pedestals/orb-star.png) | [![pedestals/gold-orb](gameplay/pedestals/gold-orb-256.png)](masters/pedestals/gold-orb.png) |

### Props

| Telescope |
| --- |
| [![props/telescope](gameplay/props/telescope-256.png)](masters/props/telescope.png) |

### Plants

| Pinwheel Flower | Cream Flower |
| --- | --- |
| [![plants/pinwheel-flower](gameplay/plants/pinwheel-flower-256.png)](masters/plants/pinwheel-flower.png) | [![plants/cream-flower](gameplay/plants/cream-flower-256.png)](masters/plants/cream-flower.png) |

### Backgrounds

| Pink Clouds | Lilac Clouds | Starry Sky |
| --- | --- | --- |
| [![backgrounds/pink-clouds](gameplay/backgrounds/pink-clouds-256.png)](masters/backgrounds/pink-clouds.png) | [![backgrounds/lilac-clouds](gameplay/backgrounds/lilac-clouds-256.png)](masters/backgrounds/lilac-clouds.png) | [![backgrounds/starry-sky](gameplay/backgrounds/starry-sky-256.png)](masters/backgrounds/starry-sky.png) |

| Sunset Clouds |
| --- |
| [![backgrounds/sunset-clouds](gameplay/backgrounds/sunset-clouds-256.png)](masters/backgrounds/sunset-clouds.png) |

### Rocks

| Grass Large | Grass Medium | Grass Small |
| --- | --- | --- |
| [![rocks/grass-large](gameplay/rocks/grass-large-256.png)](masters/rocks/grass-large.png) | [![rocks/grass-medium](gameplay/rocks/grass-medium-256.png)](masters/rocks/grass-medium.png) | [![rocks/grass-small](gameplay/rocks/grass-small-256.png)](masters/rocks/grass-small.png) |

### Grasses

| Wide A | Narrow A | Wide B |
| --- | --- | --- |
| [![grasses/wide-a](gameplay/grasses/wide-a-256.png)](masters/grasses/wide-a.png) | [![grasses/narrow-a](gameplay/grasses/narrow-a-256.png)](masters/grasses/narrow-a.png) | [![grasses/wide-b](gameplay/grasses/wide-b-256.png)](masters/grasses/wide-b.png) |

| Narrow B |
| --- |
| [![grasses/narrow-b](gameplay/grasses/narrow-b-256.png)](masters/grasses/narrow-b.png) |

### Shrubs

| White Pink | Pink | Teal Succulent |
| --- | --- | --- |
| [![shrubs/white-pink](gameplay/shrubs/white-pink-256.png)](masters/shrubs/white-pink.png) | [![shrubs/pink](gameplay/shrubs/pink-256.png)](masters/shrubs/pink.png) | [![shrubs/teal-succulent](gameplay/shrubs/teal-succulent-256.png)](masters/shrubs/teal-succulent.png) |

| Pink Sprig | Flower Pair |
| --- | --- |
| [![shrubs/pink-sprig](gameplay/shrubs/pink-sprig-256.png)](masters/shrubs/pink-sprig.png) | [![shrubs/flower-pair](gameplay/shrubs/flower-pair-256.png)](masters/shrubs/flower-pair.png) |

### Effects

| Star Comet | Rainbow Arc | Star Trail |
| --- | --- | --- |
| [![effects/star-comet](gameplay/effects/star-comet-256.png)](masters/effects/star-comet.png) | [![effects/rainbow-arc](gameplay/effects/rainbow-arc-256.png)](masters/effects/rainbow-arc.png) | [![effects/star-trail](gameplay/effects/star-trail-256.png)](masters/effects/star-trail.png) |

| Pink Star Chain | Pink Vortex | Star Stream |
| --- | --- | --- |
| [![effects/pink-star-chain](gameplay/effects/pink-star-chain-256.png)](masters/effects/pink-star-chain.png) | [![effects/pink-vortex](gameplay/effects/pink-vortex-256.png)](masters/effects/pink-vortex.png) | [![effects/star-stream](gameplay/effects/star-stream-256.png)](masters/effects/star-stream.png) |

| Gold Glint |
| --- |
| [![effects/gold-glint](gameplay/effects/gold-glint-256.png)](masters/effects/gold-glint.png) |

