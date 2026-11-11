# Cloudberry Meadows · World 1 · v1

117 individual modules and variants reconstructed from the supplied Cloudberry Meadows board. The original PNG is preserved unchanged in [references](references/cloudberry-meadows-original-board.png). All individual master previews appear below; click any preview to open its PNG.

![World overview](previews/world-overview.jpg)

## Files and use

- **111 transparent modules:** islands, cottage angles, terrain, gates, bridges, paths, waterfalls, trees, shrubs, crystals, rocks, foliage, props, clouds, water, sparkles, flowers and collectibles.
- **6 opaque plates:** the hero scene and five background variations. These are flattened scenes, not separated parallax layers.
- Transparent PNG masters use a 1024 × 1024 canvas with an artwork envelope up to 860 pixels. Background masters retain generated aspect ratio, up to 1536 pixels on the longest side.
- Every master has 256- and 512-pixel maximum-edge PNG and lossless WebP exports in `gameplay/`. These exports repeat the same artwork.
- `manifest.json` records file checksums, dimensions, source crop coordinates, alpha bounds and suggested anchors. `generation.json` records prompts and source provenance. Open `preview.html` locally for a searchable gallery or browse the category sheets in `previews/`.

Use straight alpha/source-over blending. Module anchors are the bottom center of visible artwork; background anchors are centered. Each module is normalized independently; relative world scale must be set in the level editor. These suggested anchors do not define collision shapes, walkable surfaces, grid spacing or sorting order.

## Integration status

These are newly generated static 2D renders faithful to the reference, not pixel-exact extractions, 3D models or a finished playable level. Separate angle variants may differ in geometry or details. Terrain edges have not been proven seamless; check scale, tile joins, depth sorting and angle consistency in the game. Waterfalls and glints are static images, not animation sequences. No collision masks, level layouts, difficulty settings, rules or character redesigns are included.

Technical checks cover asset completeness, valid decoding, transparent margins, matching PNG/WebP pixels, source integrity and file hashes. Visual contact-sheet review does not replace in-engine QA. Small isolated alpha specks and faint distant background residue were removed; internal openings and translucent edges were preserved. Existing locked characters, cannons and other stage artwork are unchanged.

## Individual asset previews

### Scenes

| Hero Island |
| --- |
| [![scenes/hero-island](gameplay/scenes/hero-island-256.png)](masters/scenes/hero-island.png) |

### Islands

| Waterfall Settlement | Wide Meadow | Rocky Meadow |
| --- | --- | --- |
| [![islands/waterfall-settlement](gameplay/islands/waterfall-settlement-256.png)](masters/islands/waterfall-settlement.png) | [![islands/wide-meadow](gameplay/islands/wide-meadow-256.png)](masters/islands/wide-meadow.png) | [![islands/rocky-meadow](gameplay/islands/rocky-meadow-256.png)](masters/islands/rocky-meadow.png) |

| Small Meadow | Tree Meadow | Boulder Meadow |
| --- | --- | --- |
| [![islands/small-meadow](gameplay/islands/small-meadow-256.png)](masters/islands/small-meadow.png) | [![islands/tree-meadow](gameplay/islands/tree-meadow-256.png)](masters/islands/tree-meadow.png) | [![islands/boulder-meadow](gameplay/islands/boulder-meadow-256.png)](masters/islands/boulder-meadow.png) |

| Vine Meadow | Overhead Meadow |
| --- | --- |
| [![islands/vine-meadow](gameplay/islands/vine-meadow-256.png)](masters/islands/vine-meadow.png) | [![islands/overhead-meadow](gameplay/islands/overhead-meadow-256.png)](masters/islands/overhead-meadow.png) |

### Cottages

| Front Left | Front | Left Side |
| --- | --- | --- |
| [![cottages/front-left](gameplay/cottages/front-left-256.png)](masters/cottages/front-left.png) | [![cottages/front](gameplay/cottages/front-256.png)](masters/cottages/front.png) | [![cottages/left-side](gameplay/cottages/left-side-256.png)](masters/cottages/left-side.png) |

| Back | Right Front | Overhead |
| --- | --- | --- |
| [![cottages/back](gameplay/cottages/back-256.png)](masters/cottages/back.png) | [![cottages/right-front](gameplay/cottages/right-front-256.png)](masters/cottages/right-front.png) | [![cottages/overhead](gameplay/cottages/overhead-256.png)](masters/cottages/overhead.png) |

### Terrain

| Flower Grass Block | Daisy Grass Block | Snow Block |
| --- | --- | --- |
| [![terrain/flower-grass-block](gameplay/terrain/flower-grass-block-256.png)](masters/terrain/flower-grass-block.png) | [![terrain/daisy-grass-block](gameplay/terrain/daisy-grass-block-256.png)](masters/terrain/daisy-grass-block.png) | [![terrain/snow-block](gameplay/terrain/snow-block-256.png)](masters/terrain/snow-block.png) |

| Sand Block | Paved Stone Block | Pink Flower Block |
| --- | --- | --- |
| [![terrain/sand-block](gameplay/terrain/sand-block-256.png)](masters/terrain/sand-block.png) | [![terrain/paved-stone-block](gameplay/terrain/paved-stone-block-256.png)](masters/terrain/paved-stone-block.png) | [![terrain/pink-flower-block](gameplay/terrain/pink-flower-block-256.png)](masters/terrain/pink-flower-block.png) |

| Grass Cliff Block | Grass Ledge | Two Step Stairs |
| --- | --- | --- |
| [![terrain/grass-cliff-block](gameplay/terrain/grass-cliff-block-256.png)](masters/terrain/grass-cliff-block.png) | [![terrain/grass-ledge](gameplay/terrain/grass-ledge-256.png)](masters/terrain/grass-ledge.png) | [![terrain/two-step-stairs](gameplay/terrain/two-step-stairs-256.png)](masters/terrain/two-step-stairs.png) |

| Three Step Stairs | Vine Arch | Moss Boulder Large |
| --- | --- | --- |
| [![terrain/three-step-stairs](gameplay/terrain/three-step-stairs-256.png)](masters/terrain/three-step-stairs.png) | [![terrain/vine-arch](gameplay/terrain/vine-arch-256.png)](masters/terrain/vine-arch.png) | [![terrain/moss-boulder-large](gameplay/terrain/moss-boulder-large-256.png)](masters/terrain/moss-boulder-large.png) |

| Flower Boulder Large | Moss Pillar Large |
| --- | --- |
| [![terrain/flower-boulder-large](gameplay/terrain/flower-boulder-large-256.png)](masters/terrain/flower-boulder-large.png) | [![terrain/moss-pillar-large](gameplay/terrain/moss-pillar-large-256.png)](masters/terrain/moss-pillar-large.png) |

### Gates

| Star Front Left | Star Front | Star Side |
| --- | --- | --- |
| [![gates/star-front-left](gameplay/gates/star-front-left-256.png)](masters/gates/star-front-left.png) | [![gates/star-front](gameplay/gates/star-front-256.png)](masters/gates/star-front.png) | [![gates/star-side](gameplay/gates/star-side-256.png)](masters/gates/star-side.png) |

| Star Rear | Star Front Right |
| --- | --- |
| [![gates/star-rear](gameplay/gates/star-rear-256.png)](masters/gates/star-rear.png) | [![gates/star-front-right](gameplay/gates/star-front-right-256.png)](masters/gates/star-front-right.png) |

### Bridges

| Arched Rope | Arched Wood | Straight |
| --- | --- | --- |
| [![bridges/arched-rope](gameplay/bridges/arched-rope-256.png)](masters/bridges/arched-rope.png) | [![bridges/arched-wood](gameplay/bridges/arched-wood-256.png)](masters/bridges/arched-wood.png) | [![bridges/straight](gameplay/bridges/straight-256.png)](masters/bridges/straight.png) |

| Arched Right |
| --- |
| [![bridges/arched-right](gameplay/bridges/arched-right-256.png)](masters/bridges/arched-right.png) |

### Paths

| Stepping Cluster | Stepping Pair A | Stepping Pair B |
| --- | --- | --- |
| [![paths/stepping-cluster](gameplay/paths/stepping-cluster-256.png)](masters/paths/stepping-cluster.png) | [![paths/stepping-pair-a](gameplay/paths/stepping-pair-a-256.png)](masters/paths/stepping-pair-a.png) | [![paths/stepping-pair-b](gameplay/paths/stepping-pair-b-256.png)](masters/paths/stepping-pair-b.png) |

| Winding Sand | Round Clearing |
| --- | --- |
| [![paths/winding-sand](gameplay/paths/winding-sand-256.png)](masters/paths/winding-sand.png) | [![paths/round-clearing](gameplay/paths/round-clearing-256.png)](masters/paths/round-clearing.png) |

### Waterfalls

| Single Wide | Single Tall | Two Tier |
| --- | --- | --- |
| [![waterfalls/single-wide](gameplay/waterfalls/single-wide-256.png)](masters/waterfalls/single-wide.png) | [![waterfalls/single-tall](gameplay/waterfalls/single-tall-256.png)](masters/waterfalls/single-tall.png) | [![waterfalls/two-tier](gameplay/waterfalls/two-tier-256.png)](masters/waterfalls/two-tier.png) |

| Three Tier |
| --- |
| [![waterfalls/three-tier](gameplay/waterfalls/three-tier-256.png)](masters/waterfalls/three-tier.png) |

### Trees

| Pink Large | Pink Sapling A | Pink Medium |
| --- | --- | --- |
| [![trees/pink-large](gameplay/trees/pink-large-256.png)](masters/trees/pink-large.png) | [![trees/pink-sapling-a](gameplay/trees/pink-sapling-a-256.png)](masters/trees/pink-sapling-a.png) | [![trees/pink-medium](gameplay/trees/pink-medium-256.png)](masters/trees/pink-medium.png) |

| Pink Sapling B | Purple | Purple Sapling |
| --- | --- | --- |
| [![trees/pink-sapling-b](gameplay/trees/pink-sapling-b-256.png)](masters/trees/pink-sapling-b.png) | [![trees/purple](gameplay/trees/purple-256.png)](masters/trees/purple.png) | [![trees/purple-sapling](gameplay/trees/purple-sapling-256.png)](masters/trees/purple-sapling.png) |

| White Pink | Pale Pink Sapling | Berry |
| --- | --- | --- |
| [![trees/white-pink](gameplay/trees/white-pink-256.png)](masters/trees/white-pink.png) | [![trees/pale-pink-sapling](gameplay/trees/pale-pink-sapling-256.png)](masters/trees/pale-pink-sapling.png) | [![trees/berry](gameplay/trees/berry-256.png)](masters/trees/berry.png) |

| Golden | Berry Sapling |
| --- | --- |
| [![trees/golden](gameplay/trees/golden-256.png)](masters/trees/golden.png) | [![trees/berry-sapling](gameplay/trees/berry-sapling-256.png)](masters/trees/berry-sapling.png) |

### Shrubs

| White Daisies A | White Daisies B | Pink Flowers |
| --- | --- | --- |
| [![shrubs/white-daisies-a](gameplay/shrubs/white-daisies-a-256.png)](masters/shrubs/white-daisies-a.png) | [![shrubs/white-daisies-b](gameplay/shrubs/white-daisies-b-256.png)](masters/shrubs/white-daisies-b.png) | [![shrubs/pink-flowers](gameplay/shrubs/pink-flowers-256.png)](masters/shrubs/pink-flowers.png) |

| Blueberries | Leafy | Peach Berries |
| --- | --- | --- |
| [![shrubs/blueberries](gameplay/shrubs/blueberries-256.png)](masters/shrubs/blueberries.png) | [![shrubs/leafy](gameplay/shrubs/leafy-256.png)](masters/shrubs/leafy.png) | [![shrubs/peach-berries](gameplay/shrubs/peach-berries-256.png)](masters/shrubs/peach-berries.png) |

### Crystals

| Blue Large | Purple Cluster | Blue Small |
| --- | --- | --- |
| [![crystals/blue-large](gameplay/crystals/blue-large-256.png)](masters/crystals/blue-large.png) | [![crystals/purple-cluster](gameplay/crystals/purple-cluster-256.png)](masters/crystals/purple-cluster.png) | [![crystals/blue-small](gameplay/crystals/blue-small-256.png)](masters/crystals/blue-small.png) |

| Pink Single | Purple Single |
| --- | --- |
| [![crystals/pink-single](gameplay/crystals/pink-single-256.png)](masters/crystals/pink-single.png) | [![crystals/purple-single](gameplay/crystals/purple-single-256.png)](masters/crystals/purple-single.png) |

### Rocks

| Moss Round | Tall Angular | Angular Cluster |
| --- | --- | --- |
| [![rocks/moss-round](gameplay/rocks/moss-round-256.png)](masters/rocks/moss-round.png) | [![rocks/tall-angular](gameplay/rocks/tall-angular-256.png)](masters/rocks/tall-angular.png) | [![rocks/angular-cluster](gameplay/rocks/angular-cluster-256.png)](masters/rocks/angular-cluster.png) |

| Small Purple | Low Moss | Flower Round |
| --- | --- | --- |
| [![rocks/small-purple](gameplay/rocks/small-purple-256.png)](masters/rocks/small-purple.png) | [![rocks/low-moss](gameplay/rocks/low-moss-256.png)](masters/rocks/low-moss.png) | [![rocks/flower-round](gameplay/rocks/flower-round-256.png)](masters/rocks/flower-round.png) |

| Moss Angular | Flat Moss | Broad Moss |
| --- | --- | --- |
| [![rocks/moss-angular](gameplay/rocks/moss-angular-256.png)](masters/rocks/moss-angular.png) | [![rocks/flat-moss](gameplay/rocks/flat-moss-256.png)](masters/rocks/flat-moss.png) | [![rocks/broad-moss](gameplay/rocks/broad-moss-256.png)](masters/rocks/broad-moss.png) |

| Tiny Moss | Dome Moss |
| --- | --- |
| [![rocks/tiny-moss](gameplay/rocks/tiny-moss-256.png)](masters/rocks/tiny-moss.png) | [![rocks/dome-moss](gameplay/rocks/dome-moss-256.png)](masters/rocks/dome-moss.png) |

### Foliage

| Pink Flower Bush | Short Grass | Purple Flower Bush |
| --- | --- | --- |
| [![foliage/pink-flower-bush](gameplay/foliage/pink-flower-bush-256.png)](masters/foliage/pink-flower-bush.png) | [![foliage/short-grass](gameplay/foliage/short-grass-256.png)](masters/foliage/short-grass.png) | [![foliage/purple-flower-bush](gameplay/foliage/purple-flower-bush-256.png)](masters/foliage/purple-flower-bush.png) |

| Broad Grass | Thin Grass | Fern Tall |
| --- | --- | --- |
| [![foliage/broad-grass](gameplay/foliage/broad-grass-256.png)](masters/foliage/broad-grass.png) | [![foliage/thin-grass](gameplay/foliage/thin-grass-256.png)](masters/foliage/thin-grass.png) | [![foliage/fern-tall](gameplay/foliage/fern-tall-256.png)](masters/foliage/fern-tall.png) |

| Fern Small |
| --- |
| [![foliage/fern-small](gameplay/foliage/fern-small-256.png)](masters/foliage/fern-small.png) |

### Props

| Fence | Purple Mushrooms | Orange Mushroom |
| --- | --- | --- |
| [![props/fence](gameplay/props/fence-256.png)](masters/props/fence.png) | [![props/purple-mushrooms](gameplay/props/purple-mushrooms-256.png)](masters/props/purple-mushrooms.png) | [![props/orange-mushroom](gameplay/props/orange-mushroom-256.png)](masters/props/orange-mushroom.png) |

| Pink Mushroom | Stump Small | Stump Large |
| --- | --- | --- |
| [![props/pink-mushroom](gameplay/props/pink-mushroom-256.png)](masters/props/pink-mushroom.png) | [![props/stump-small](gameplay/props/stump-small-256.png)](masters/props/stump-small.png) | [![props/stump-large](gameplay/props/stump-large-256.png)](masters/props/stump-large.png) |

### Clouds

| Puffy A | Small Flat | Long Low |
| --- | --- | --- |
| [![clouds/puffy-a](gameplay/clouds/puffy-a-256.png)](masters/clouds/puffy-a.png) | [![clouds/small-flat](gameplay/clouds/small-flat-256.png)](masters/clouds/small-flat.png) | [![clouds/long-low](gameplay/clouds/long-low-256.png)](masters/clouds/long-low.png) |

| Puffy B | Puffy C |
| --- | --- |
| [![clouds/puffy-b](gameplay/clouds/puffy-b-256.png)](masters/clouds/puffy-b.png) | [![clouds/puffy-c](gameplay/clouds/puffy-c-256.png)](masters/clouds/puffy-c.png) |

### Water

| Pond | Splash | Curtain |
| --- | --- | --- |
| [![water/pond](gameplay/water/pond-256.png)](masters/water/pond.png) | [![water/splash](gameplay/water/splash-256.png)](masters/water/splash.png) | [![water/curtain](gameplay/water/curtain-256.png)](masters/water/curtain.png) |

### Particles

| Sparkle Gold | Sparkle Pink | Sparkle Lilac |
| --- | --- | --- |
| [![particles/sparkle-gold](gameplay/particles/sparkle-gold-256.png)](masters/particles/sparkle-gold.png) | [![particles/sparkle-pink](gameplay/particles/sparkle-pink-256.png)](masters/particles/sparkle-pink.png) | [![particles/sparkle-lilac](gameplay/particles/sparkle-lilac-256.png)](masters/particles/sparkle-lilac.png) |

### Flowers

| Pink | Coral | Purple |
| --- | --- | --- |
| [![flowers/pink](gameplay/flowers/pink-256.png)](masters/flowers/pink.png) | [![flowers/coral](gameplay/flowers/coral-256.png)](masters/flowers/coral.png) | [![flowers/purple](gameplay/flowers/purple-256.png)](masters/flowers/purple.png) |

| Yellow |
| --- |
| [![flowers/yellow](gameplay/flowers/yellow-256.png)](masters/flowers/yellow.png) |

### Collectibles

| Leaf Pair | Blueberries | Pink Berries |
| --- | --- | --- |
| [![collectibles/leaf-pair](gameplay/collectibles/leaf-pair-256.png)](masters/collectibles/leaf-pair.png) | [![collectibles/blueberries](gameplay/collectibles/blueberries-256.png)](masters/collectibles/blueberries.png) | [![collectibles/pink-berries](gameplay/collectibles/pink-berries-256.png)](masters/collectibles/pink-berries.png) |

| Leaf Single |
| --- |
| [![collectibles/leaf-single](gameplay/collectibles/leaf-single-256.png)](masters/collectibles/leaf-single.png) |

### Backgrounds

| Cloud Mountains A | Cloud Mountains B | Distant Islands |
| --- | --- | --- |
| [![backgrounds/cloud-mountains-a](gameplay/backgrounds/cloud-mountains-a-256.png)](masters/backgrounds/cloud-mountains-a.png) | [![backgrounds/cloud-mountains-b](gameplay/backgrounds/cloud-mountains-b-256.png)](masters/backgrounds/cloud-mountains-b.png) | [![backgrounds/distant-islands](gameplay/backgrounds/distant-islands-256.png)](masters/backgrounds/distant-islands.png) |

| Rainbow Sky | Cloud Sky |
| --- | --- |
| [![backgrounds/rainbow-sky](gameplay/backgrounds/rainbow-sky-256.png)](masters/backgrounds/rainbow-sky.png) | [![backgrounds/cloud-sky](gameplay/backgrounds/cloud-sky-256.png)](masters/backgrounds/cloud-sky.png) |

