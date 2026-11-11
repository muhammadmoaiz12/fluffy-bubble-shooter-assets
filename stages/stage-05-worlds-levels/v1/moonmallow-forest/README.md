# Moonmallow Forest · World 3 · v1

82 individual modules and variants reconstructed from the supplied Moonmallow Forest board. The original PNG is preserved unchanged in [references](references/moonmallow-forest-original-board.png). All individual master previews appear below; click any preview to open its PNG.

![World overview](previews/world-overview.jpg)

## Files and use

- **77 transparent modules:** floating islands, terrain, cliffs, star trees, mushroom views, portals, arch pieces, bridges, props, crystals, rocks, collectibles, clouds, plants and foreground decorations.
- **5 opaque plates:** the hero scene and four background variations. These are flattened scenes, not separated parallax layers.
- Transparent PNG masters use a 1024 × 1024 canvas with an artwork envelope up to 860 pixels. Background masters retain generated aspect ratio, up to 1536 pixels on the longest side.
- Every master has 256- and 512-pixel maximum-edge PNG and lossless WebP exports in `gameplay/`. These exports repeat the same artwork.
- `manifest.json` records file checksums, dimensions, source crop coordinates, alpha bounds and suggested anchors. `generation.json` records prompts and source provenance. Open `preview.html` locally for a searchable gallery or browse the category sheets in `previews/`.

Use straight alpha/source-over blending. Solid scenery anchors are at the bottom center of visible artwork. Backgrounds, overhead views, clouds, crystals and collectibles use centered anchors. Hanging foreground vines use the top center of their visible bounds. Each module is normalized independently; relative world scale must be set in the level editor. These suggested anchors do not define collision shapes, walkable surfaces, grid spacing or sorting order.

## Integration status

These are newly generated static 2D renders faithful to the reference, not pixel-exact extractions, 3D models or a finished playable level. Separate angle variants may differ in geometry or details. Terrain edges have not been proven seamless; check scale, tile joins, depth sorting and angle consistency in the game. Waterfalls, portal glow, hanging stars and lanterns are static images, not animation sequences. Active portals include their illuminated doorway; the empty arch keeps a transparent opening. Portal art does not implement teleportation or any gameplay behavior. The hero landscape intentionally omits the foreground creatures so existing locked characters can be placed separately; no family character redesign is included. No collision masks, level layouts, difficulty settings, rules or character redesigns are included.

Technical checks cover asset completeness, valid decoding, transparent margins, matching PNG/WebP pixels, source integrity and file hashes. Visual contact-sheet review does not replace in-engine QA. Small isolated alpha specks and faint distant background residue were removed; internal openings and translucent edges were preserved. Existing locked characters, cannons and other stage artwork are unchanged.

## Individual asset previews

### Scenes

| Hero Forest |
| --- |
| [![scenes/hero-forest](gameplay/scenes/hero-forest-256.png)](masters/scenes/hero-forest.png) |

### Islands

| Large Flower Meadow | Small Vine Meadow | Star Pillar |
| --- | --- | --- |
| [![islands/large-flower-meadow](gameplay/islands/large-flower-meadow-256.png)](masters/islands/large-flower-meadow.png) | [![islands/small-vine-meadow](gameplay/islands/small-vine-meadow-256.png)](masters/islands/small-vine-meadow.png) | [![islands/star-pillar](gameplay/islands/star-pillar-256.png)](masters/islands/star-pillar.png) |

| Wide Path Meadow | Tiny Stone | Tiny Grass |
| --- | --- | --- |
| [![islands/wide-path-meadow](gameplay/islands/wide-path-meadow-256.png)](masters/islands/wide-path-meadow.png) | [![islands/tiny-stone](gameplay/islands/tiny-stone-256.png)](masters/islands/tiny-stone.png) | [![islands/tiny-grass](gameplay/islands/tiny-grass-256.png)](masters/islands/tiny-grass.png) |

### Terrain

| Flower Grass Tile | Stepping Grass Tile | Cracked Stone A |
| --- | --- | --- |
| [![terrain/flower-grass-tile](gameplay/terrain/flower-grass-tile-256.png)](masters/terrain/flower-grass-tile.png) | [![terrain/stepping-grass-tile](gameplay/terrain/stepping-grass-tile-256.png)](masters/terrain/stepping-grass-tile.png) | [![terrain/cracked-stone-a](gameplay/terrain/cracked-stone-a-256.png)](masters/terrain/cracked-stone-a.png) |

| Cracked Stone B | Rocky Block | Vine Meadow Platform |
| --- | --- | --- |
| [![terrain/cracked-stone-b](gameplay/terrain/cracked-stone-b-256.png)](masters/terrain/cracked-stone-b.png) | [![terrain/rocky-block](gameplay/terrain/rocky-block-256.png)](masters/terrain/rocky-block.png) | [![terrain/vine-meadow-platform](gameplay/terrain/vine-meadow-platform-256.png)](masters/terrain/vine-meadow-platform.png) |

| Plain Meadow Platform |
| --- |
| [![terrain/plain-meadow-platform](gameplay/terrain/plain-meadow-platform-256.png)](masters/terrain/plain-meadow-platform.png) |

### Cliffs

| Plain | Pink Vine | Flower Vine |
| --- | --- | --- |
| [![cliffs/plain](gameplay/cliffs/plain-256.png)](masters/cliffs/plain.png) | [![cliffs/pink-vine](gameplay/cliffs/pink-vine-256.png)](masters/cliffs/pink-vine.png) | [![cliffs/flower-vine](gameplay/cliffs/flower-vine-256.png)](masters/cliffs/flower-vine.png) |

| Long Vine | Waterfall Open | Flower Corner |
| --- | --- | --- |
| [![cliffs/long-vine](gameplay/cliffs/long-vine-256.png)](masters/cliffs/long-vine.png) | [![cliffs/waterfall-open](gameplay/cliffs/waterfall-open-256.png)](masters/cliffs/waterfall-open.png) | [![cliffs/flower-corner](gameplay/cliffs/flower-corner-256.png)](masters/cliffs/flower-corner.png) |

| Waterfall Pool |
| --- |
| [![cliffs/waterfall-pool](gameplay/cliffs/waterfall-pool-256.png)](masters/cliffs/waterfall-pool.png) |

### Star Trees

| Front Wide | Front Small | Side Left |
| --- | --- | --- |
| [![star-trees/front-wide](gameplay/star-trees/front-wide-256.png)](masters/star-trees/front-wide.png) | [![star-trees/front-small](gameplay/star-trees/front-small-256.png)](masters/star-trees/front-small.png) | [![star-trees/side-left](gameplay/star-trees/side-left-256.png)](masters/star-trees/side-left.png) |

| Back | Side Right | Overhead |
| --- | --- | --- |
| [![star-trees/back](gameplay/star-trees/back-256.png)](masters/star-trees/back.png) | [![star-trees/side-right](gameplay/star-trees/side-right-256.png)](masters/star-trees/side-right.png) | [![star-trees/overhead](gameplay/star-trees/overhead-256.png)](masters/star-trees/overhead.png) |

### Mushrooms

| Purple Pair Front | Purple Pair Angle | Purple Side |
| --- | --- | --- |
| [![mushrooms/purple-pair-front](gameplay/mushrooms/purple-pair-front-256.png)](masters/mushrooms/purple-pair-front.png) | [![mushrooms/purple-pair-angle](gameplay/mushrooms/purple-pair-angle-256.png)](masters/mushrooms/purple-pair-angle.png) | [![mushrooms/purple-side](gameplay/mushrooms/purple-side-256.png)](masters/mushrooms/purple-side.png) |

| Purple Back | Purple Overhead | Cyan A |
| --- | --- | --- |
| [![mushrooms/purple-back](gameplay/mushrooms/purple-back-256.png)](masters/mushrooms/purple-back.png) | [![mushrooms/purple-overhead](gameplay/mushrooms/purple-overhead-256.png)](masters/mushrooms/purple-overhead.png) | [![mushrooms/cyan-a](gameplay/mushrooms/cyan-a-256.png)](masters/mushrooms/cyan-a.png) |

| Cyan B | Star Cluster |
| --- | --- |
| [![mushrooms/cyan-b](gameplay/mushrooms/cyan-b-256.png)](masters/mushrooms/cyan-b.png) | [![mushrooms/star-cluster](gameplay/mushrooms/star-cluster-256.png)](masters/mushrooms/star-cluster.png) |

### Portals

| Active Front | Active Angle | Empty Arch |
| --- | --- | --- |
| [![portals/active-front](gameplay/portals/active-front-256.png)](masters/portals/active-front.png) | [![portals/active-angle](gameplay/portals/active-angle-256.png)](masters/portals/active-angle.png) | [![portals/empty-arch](gameplay/portals/empty-arch-256.png)](masters/portals/empty-arch.png) |

| Side |
| --- |
| [![portals/side](gameplay/portals/side-256.png)](masters/portals/side.png) |

### Arch Pieces

| Flower Crown | Plain Curve |
| --- | --- |
| [![arch-pieces/flower-crown](gameplay/arch-pieces/flower-crown-256.png)](masters/arch-pieces/flower-crown.png) | [![arch-pieces/plain-curve](gameplay/arch-pieces/plain-curve-256.png)](masters/arch-pieces/plain-curve.png) |

### Bridges

| Curved Suspension | Straight Rope | Arched |
| --- | --- | --- |
| [![bridges/curved-suspension](gameplay/bridges/curved-suspension-256.png)](masters/bridges/curved-suspension.png) | [![bridges/straight-rope](gameplay/bridges/straight-rope-256.png)](masters/bridges/straight-rope.png) | [![bridges/arched](gameplay/bridges/arched-256.png)](masters/bridges/arched.png) |

| Front Deck |
| --- |
| [![bridges/front-deck](gameplay/bridges/front-deck-256.png)](masters/bridges/front-deck.png) |

### Props

| Arrow Sign | Wood Fence | Lantern Post |
| --- | --- | --- |
| [![props/arrow-sign](gameplay/props/arrow-sign-256.png)](masters/props/arrow-sign.png) | [![props/wood-fence](gameplay/props/wood-fence-256.png)](masters/props/wood-fence.png) | [![props/lantern-post](gameplay/props/lantern-post-256.png)](masters/props/lantern-post.png) |

| Lantern | Moss Cave | Stump |
| --- | --- | --- |
| [![props/lantern](gameplay/props/lantern-256.png)](masters/props/lantern.png) | [![props/moss-cave](gameplay/props/moss-cave-256.png)](masters/props/moss-cave.png) | [![props/stump](gameplay/props/stump-256.png)](masters/props/stump.png) |

### Crystals

| Purple Cluster |
| --- |
| [![crystals/purple-cluster](gameplay/crystals/purple-cluster-256.png)](masters/crystals/purple-cluster.png) |

### Rocks

| Crescent Shrine | Star Boulder | Low Boulder |
| --- | --- | --- |
| [![rocks/crescent-shrine](gameplay/rocks/crescent-shrine-256.png)](masters/rocks/crescent-shrine.png) | [![rocks/star-boulder](gameplay/rocks/star-boulder-256.png)](masters/rocks/star-boulder.png) | [![rocks/low-boulder](gameplay/rocks/low-boulder-256.png)](masters/rocks/low-boulder.png) |

| Tall Cluster | Grass Cluster | Flower Cluster |
| --- | --- | --- |
| [![rocks/tall-cluster](gameplay/rocks/tall-cluster-256.png)](masters/rocks/tall-cluster.png) | [![rocks/grass-cluster](gameplay/rocks/grass-cluster-256.png)](masters/rocks/grass-cluster.png) | [![rocks/flower-cluster](gameplay/rocks/flower-cluster-256.png)](masters/rocks/flower-cluster.png) |

### Collectibles

| Gold Star | Crescent Moon | Bubble |
| --- | --- | --- |
| [![collectibles/gold-star](gameplay/collectibles/gold-star-256.png)](masters/collectibles/gold-star.png) | [![collectibles/crescent-moon](gameplay/collectibles/crescent-moon-256.png)](masters/collectibles/crescent-moon.png) | [![collectibles/bubble](gameplay/collectibles/bubble-256.png)](masters/collectibles/bubble.png) |

| Star Flower | Pink Flower | Clover Round |
| --- | --- | --- |
| [![collectibles/star-flower](gameplay/collectibles/star-flower-256.png)](masters/collectibles/star-flower.png) | [![collectibles/pink-flower](gameplay/collectibles/pink-flower-256.png)](masters/collectibles/pink-flower.png) | [![collectibles/clover-round](gameplay/collectibles/clover-round-256.png)](masters/collectibles/clover-round.png) |

| Clover Pointed | Purple Sprig |
| --- | --- |
| [![collectibles/clover-pointed](gameplay/collectibles/clover-pointed-256.png)](masters/collectibles/clover-pointed.png) | [![collectibles/purple-sprig](gameplay/collectibles/purple-sprig-256.png)](masters/collectibles/purple-sprig.png) |

### Clouds

| White Small | White Wide | Pink Small |
| --- | --- | --- |
| [![clouds/white-small](gameplay/clouds/white-small-256.png)](masters/clouds/white-small.png) | [![clouds/white-wide](gameplay/clouds/white-wide-256.png)](masters/clouds/white-wide.png) | [![clouds/pink-small](gameplay/clouds/pink-small-256.png)](masters/clouds/pink-small.png) |

### Plants

| Leaf Sprig A | Leaf Sprig B | Star Garden |
| --- | --- | --- |
| [![plants/leaf-sprig-a](gameplay/plants/leaf-sprig-a-256.png)](masters/plants/leaf-sprig-a.png) | [![plants/leaf-sprig-b](gameplay/plants/leaf-sprig-b-256.png)](masters/plants/leaf-sprig-b.png) | [![plants/star-garden](gameplay/plants/star-garden-256.png)](masters/plants/star-garden.png) |

### Backgrounds

| Full Moon Clouds | Floating Island Sky | Distant Forest |
| --- | --- | --- |
| [![backgrounds/full-moon-clouds](gameplay/backgrounds/full-moon-clouds-256.png)](masters/backgrounds/full-moon-clouds.png) | [![backgrounds/floating-island-sky](gameplay/backgrounds/floating-island-sky-256.png)](masters/backgrounds/floating-island-sky.png) | [![backgrounds/distant-forest](gameplay/backgrounds/distant-forest-256.png)](masters/backgrounds/distant-forest.png) |

| Mountain Clouds |
| --- |
| [![backgrounds/mountain-clouds](gameplay/backgrounds/mountain-clouds-256.png)](masters/backgrounds/mountain-clouds.png) |

### Foregrounds

| Hanging Vines A | Rock Garden A | Floral Arch |
| --- | --- | --- |
| [![foregrounds/hanging-vines-a](gameplay/foregrounds/hanging-vines-a-256.png)](masters/foregrounds/hanging-vines-a.png) | [![foregrounds/rock-garden-a](gameplay/foregrounds/rock-garden-a-256.png)](masters/foregrounds/rock-garden-a.png) | [![foregrounds/floral-arch](gameplay/foregrounds/floral-arch-256.png)](masters/foregrounds/floral-arch.png) |

| Rock Garden B | Hanging Vines B | Mushroom Garden |
| --- | --- | --- |
| [![foregrounds/rock-garden-b](gameplay/foregrounds/rock-garden-b-256.png)](masters/foregrounds/rock-garden-b.png) | [![foregrounds/hanging-vines-b](gameplay/foregrounds/hanging-vines-b-256.png)](masters/foregrounds/hanging-vines-b.png) | [![foregrounds/mushroom-garden](gameplay/foregrounds/mushroom-garden-256.png)](masters/foregrounds/mushroom-garden.png) |

