# Honeydrop Gardens · World 2 · v1

128 individual modules and variants reconstructed from the supplied Honeydrop Gardens board. The original PNG is preserved unchanged in [references](references/honeydrop-gardens-original-board.png). All individual master previews appear below; click any preview to open its PNG.

![World overview](previews/world-overview.jpg)

## Files and use

- **125 transparent modules:** flower cottages, honey huts, tree views, terrain, honey platforms, water tiles, falls, bridges, gates, props, rocks, shrubs, grasses, flowers, petals, clouds, rainbow, bees, effects and collectibles.
- **3 opaque plates:** the hero scene and two background variations. These are flattened scenes, not separated parallax layers.
- Transparent PNG masters use a 1024 × 1024 canvas with an artwork envelope up to 860 pixels. Background masters retain generated aspect ratio, up to 1536 pixels on the longest side.
- Every master has 256- and 512-pixel maximum-edge PNG and lossless WebP exports in `gameplay/`. These exports repeat the same artwork.
- `manifest.json` records file checksums, dimensions, source crop coordinates, alpha bounds and suggested anchors. `generation.json` records prompts and source provenance. Open `preview.html` locally for a searchable gallery or browse the category sheets in `previews/`.

Use straight alpha/source-over blending. Solid scenery anchors are at the bottom center of visible artwork. Backgrounds, overhead views, clouds, rainbow, petals, bees, effects and collectibles use centered anchors. Each module is normalized independently; relative world scale must be set in the level editor. These suggested anchors do not define collision shapes, walkable surfaces, grid spacing or sorting order.

## Integration status

These are newly generated static 2D renders faithful to the reference, not pixel-exact extractions, 3D models or a finished playable level. Separate angle variants may differ in geometry or details. Terrain edges have not been proven seamless; check scale, tile joins, depth sorting and angle consistency in the game. Falls, bees, petal effects and glints are static images, not animation sequences. The dotted bee trail is a decorative overlay, not a flight-path specification. The hero landscape intentionally omits the foreground creatures so existing locked characters can be placed separately; no family character redesign is included. No collision masks, level layouts, difficulty settings, rules or character redesigns are included.

Technical checks cover asset completeness, valid decoding, transparent margins, matching PNG/WebP pixels, source integrity and file hashes. Visual contact-sheet review does not replace in-engine QA. Small isolated alpha specks and faint distant background residue were removed; internal openings and translucent edges were preserved. Existing locked characters, cannons and other stage artwork are unchanged.

## Individual asset previews

### Scenes

| Hero Garden |
| --- |
| [![scenes/hero-garden](gameplay/scenes/hero-garden-256.png)](masters/scenes/hero-garden.png) |

### Flower Cottages

| Front Left | Front Right | Side |
| --- | --- | --- |
| [![flower-cottages/front-left](gameplay/flower-cottages/front-left-256.png)](masters/flower-cottages/front-left.png) | [![flower-cottages/front-right](gameplay/flower-cottages/front-right-256.png)](masters/flower-cottages/front-right.png) | [![flower-cottages/side](gameplay/flower-cottages/side-256.png)](masters/flower-cottages/side.png) |

| Back | Rear Three Quarter | Overhead |
| --- | --- | --- |
| [![flower-cottages/back](gameplay/flower-cottages/back-256.png)](masters/flower-cottages/back.png) | [![flower-cottages/rear-three-quarter](gameplay/flower-cottages/rear-three-quarter-256.png)](masters/flower-cottages/rear-three-quarter.png) | [![flower-cottages/overhead](gameplay/flower-cottages/overhead-256.png)](masters/flower-cottages/overhead.png) |

### Honey Huts

| Front | Three Quarter | Side |
| --- | --- | --- |
| [![honey-huts/front](gameplay/honey-huts/front-256.png)](masters/honey-huts/front.png) | [![honey-huts/three-quarter](gameplay/honey-huts/three-quarter-256.png)](masters/honey-huts/three-quarter.png) | [![honey-huts/side](gameplay/honey-huts/side-256.png)](masters/honey-huts/side.png) |

| Back | Rear Three Quarter | Overhead |
| --- | --- | --- |
| [![honey-huts/back](gameplay/honey-huts/back-256.png)](masters/honey-huts/back.png) | [![honey-huts/rear-three-quarter](gameplay/honey-huts/rear-three-quarter-256.png)](masters/honey-huts/rear-three-quarter.png) | [![honey-huts/overhead](gameplay/honey-huts/overhead-256.png)](masters/honey-huts/overhead.png) |

### Blossom Trees

| View 01 | View 02 | View 03 |
| --- | --- | --- |
| [![blossom-trees/view-01](gameplay/blossom-trees/view-01-256.png)](masters/blossom-trees/view-01.png) | [![blossom-trees/view-02](gameplay/blossom-trees/view-02-256.png)](masters/blossom-trees/view-02.png) | [![blossom-trees/view-03](gameplay/blossom-trees/view-03-256.png)](masters/blossom-trees/view-03.png) |

| View 04 | View 05 | Overhead |
| --- | --- | --- |
| [![blossom-trees/view-04](gameplay/blossom-trees/view-04-256.png)](masters/blossom-trees/view-04.png) | [![blossom-trees/view-05](gameplay/blossom-trees/view-05-256.png)](masters/blossom-trees/view-05.png) | [![blossom-trees/overhead](gameplay/blossom-trees/overhead-256.png)](masters/blossom-trees/overhead.png) |

### Wisteria Trees

| View 01 | View 02 | View 03 |
| --- | --- | --- |
| [![wisteria-trees/view-01](gameplay/wisteria-trees/view-01-256.png)](masters/wisteria-trees/view-01.png) | [![wisteria-trees/view-02](gameplay/wisteria-trees/view-02-256.png)](masters/wisteria-trees/view-02.png) | [![wisteria-trees/view-03](gameplay/wisteria-trees/view-03-256.png)](masters/wisteria-trees/view-03.png) |

| View 04 | View 05 | Overhead |
| --- | --- | --- |
| [![wisteria-trees/view-04](gameplay/wisteria-trees/view-04-256.png)](masters/wisteria-trees/view-04.png) | [![wisteria-trees/view-05](gameplay/wisteria-trees/view-05-256.png)](masters/wisteria-trees/view-05.png) | [![wisteria-trees/overhead](gameplay/wisteria-trees/overhead-256.png)](masters/wisteria-trees/overhead.png) |

### Terrain

| Flower Grass A | Flower Grass B | Daisy Grass |
| --- | --- | --- |
| [![terrain/flower-grass-a](gameplay/terrain/flower-grass-a-256.png)](masters/terrain/flower-grass-a.png) | [![terrain/flower-grass-b](gameplay/terrain/flower-grass-b-256.png)](masters/terrain/flower-grass-b.png) | [![terrain/daisy-grass](gameplay/terrain/daisy-grass-256.png)](masters/terrain/daisy-grass.png) |

| Small Flower Grass | Wide Flower Grass | Low Flower Grass |
| --- | --- | --- |
| [![terrain/small-flower-grass](gameplay/terrain/small-flower-grass-256.png)](masters/terrain/small-flower-grass.png) | [![terrain/wide-flower-grass](gameplay/terrain/wide-flower-grass-256.png)](masters/terrain/wide-flower-grass.png) | [![terrain/low-flower-grass](gameplay/terrain/low-flower-grass-256.png)](masters/terrain/low-flower-grass.png) |

| Large Flower Island | Bare Round Stone | Moss Round Stone |
| --- | --- | --- |
| [![terrain/large-flower-island](gameplay/terrain/large-flower-island-256.png)](masters/terrain/large-flower-island.png) | [![terrain/bare-round-stone](gameplay/terrain/bare-round-stone-256.png)](masters/terrain/bare-round-stone.png) | [![terrain/moss-round-stone](gameplay/terrain/moss-round-stone-256.png)](masters/terrain/moss-round-stone.png) |

| Small Moss Stone | Bare Wide Stone | Wide Moss Stone |
| --- | --- | --- |
| [![terrain/small-moss-stone](gameplay/terrain/small-moss-stone-256.png)](masters/terrain/small-moss-stone.png) | [![terrain/bare-wide-stone](gameplay/terrain/bare-wide-stone-256.png)](masters/terrain/bare-wide-stone.png) | [![terrain/wide-moss-stone](gameplay/terrain/wide-moss-stone-256.png)](masters/terrain/wide-moss-stone.png) |

| Large Moss Platform |
| --- |
| [![terrain/large-moss-platform](gameplay/terrain/large-moss-platform-256.png)](masters/terrain/large-moss-platform.png) |

### Honey Platforms

| Cluster Wide | Cluster Small | Large Hexagon |
| --- | --- | --- |
| [![honey-platforms/cluster-wide](gameplay/honey-platforms/cluster-wide-256.png)](masters/honey-platforms/cluster-wide.png) | [![honey-platforms/cluster-small](gameplay/honey-platforms/cluster-small-256.png)](masters/honey-platforms/cluster-small.png) | [![honey-platforms/large-hexagon](gameplay/honey-platforms/large-hexagon-256.png)](masters/honey-platforms/large-hexagon.png) |

| Honeycomb Cluster | Single Hexagon |
| --- | --- |
| [![honey-platforms/honeycomb-cluster](gameplay/honey-platforms/honeycomb-cluster-256.png)](masters/honey-platforms/honeycomb-cluster.png) | [![honey-platforms/single-hexagon](gameplay/honey-platforms/single-hexagon-256.png)](masters/honey-platforms/single-hexagon.png) |

### Water Tiles

| Pool A | Pool B |
| --- | --- |
| [![water-tiles/pool-a](gameplay/water-tiles/pool-a-256.png)](masters/water-tiles/pool-a.png) | [![water-tiles/pool-b](gameplay/water-tiles/pool-b-256.png)](masters/water-tiles/pool-b.png) |

### Falls

| Water Tall | Water Wide | Honey Wide |
| --- | --- | --- |
| [![falls/water-tall](gameplay/falls/water-tall-256.png)](masters/falls/water-tall.png) | [![falls/water-wide](gameplay/falls/water-wide-256.png)](masters/falls/water-wide.png) | [![falls/honey-wide](gameplay/falls/honey-wide-256.png)](masters/falls/honey-wide.png) |

| Honey Small |
| --- |
| [![falls/honey-small](gameplay/falls/honey-small-256.png)](masters/falls/honey-small.png) |

### Bridges

| Wood Straight | Honey Arch | Honeycomb Arch |
| --- | --- | --- |
| [![bridges/wood-straight](gameplay/bridges/wood-straight-256.png)](masters/bridges/wood-straight.png) | [![bridges/honey-arch](gameplay/bridges/honey-arch-256.png)](masters/bridges/honey-arch.png) | [![bridges/honeycomb-arch](gameplay/bridges/honeycomb-arch-256.png)](masters/bridges/honeycomb-arch.png) |

### Gates

| Flower Vine | Lantern Vine | Honey Arch |
| --- | --- | --- |
| [![gates/flower-vine](gameplay/gates/flower-vine-256.png)](masters/gates/flower-vine.png) | [![gates/lantern-vine](gameplay/gates/lantern-vine-256.png)](masters/gates/lantern-vine.png) | [![gates/honey-arch](gameplay/gates/honey-arch-256.png)](masters/gates/honey-arch.png) |

| Honeycomb Arch |
| --- |
| [![gates/honeycomb-arch](gameplay/gates/honeycomb-arch-256.png)](masters/gates/honeycomb-arch.png) |

### Props

| Direction Sign | Honey Jar Large | Honey Jar Small |
| --- | --- | --- |
| [![props/direction-sign](gameplay/props/direction-sign-256.png)](masters/props/direction-sign.png) | [![props/honey-jar-large](gameplay/props/honey-jar-large-256.png)](masters/props/honey-jar-large.png) | [![props/honey-jar-small](gameplay/props/honey-jar-small-256.png)](masters/props/honey-jar-small.png) |

| Honey Dipper | Honeycomb Blocks | Hanging Hive |
| --- | --- | --- |
| [![props/honey-dipper](gameplay/props/honey-dipper-256.png)](masters/props/honey-dipper.png) | [![props/honeycomb-blocks](gameplay/props/honeycomb-blocks-256.png)](masters/props/honeycomb-blocks.png) | [![props/hanging-hive](gameplay/props/hanging-hive-256.png)](masters/props/hanging-hive.png) |

| Banner High | Honey Stump | Banner Low |
| --- | --- | --- |
| [![props/banner-high](gameplay/props/banner-high-256.png)](masters/props/banner-high.png) | [![props/honey-stump](gameplay/props/honey-stump-256.png)](masters/props/honey-stump.png) | [![props/banner-low](gameplay/props/banner-low-256.png)](masters/props/banner-low.png) |

### Rocks

| Flower Boulder A | Flower Boulder B | Small Moss A |
| --- | --- | --- |
| [![rocks/flower-boulder-a](gameplay/rocks/flower-boulder-a-256.png)](masters/rocks/flower-boulder-a.png) | [![rocks/flower-boulder-b](gameplay/rocks/flower-boulder-b-256.png)](masters/rocks/flower-boulder-b.png) | [![rocks/small-moss-a](gameplay/rocks/small-moss-a-256.png)](masters/rocks/small-moss-a.png) |

| Small Moss B |
| --- |
| [![rocks/small-moss-b](gameplay/rocks/small-moss-b-256.png)](masters/rocks/small-moss-b.png) |

### Shrubs

| Leafy | Pink Blossom | Purple Blossom |
| --- | --- | --- |
| [![shrubs/leafy](gameplay/shrubs/leafy-256.png)](masters/shrubs/leafy.png) | [![shrubs/pink-blossom](gameplay/shrubs/pink-blossom-256.png)](masters/shrubs/pink-blossom.png) | [![shrubs/purple-blossom](gameplay/shrubs/purple-blossom-256.png)](masters/shrubs/purple-blossom.png) |

| White Pink | White Daisies | Pink Yellow |
| --- | --- | --- |
| [![shrubs/white-pink](gameplay/shrubs/white-pink-256.png)](masters/shrubs/white-pink.png) | [![shrubs/white-daisies](gameplay/shrubs/white-daisies-256.png)](masters/shrubs/white-daisies.png) | [![shrubs/pink-yellow](gameplay/shrubs/pink-yellow-256.png)](masters/shrubs/pink-yellow.png) |

### Grasses

| Tall Blades | Broad Blades | Small A |
| --- | --- | --- |
| [![grasses/tall-blades](gameplay/grasses/tall-blades-256.png)](masters/grasses/tall-blades.png) | [![grasses/broad-blades](gameplay/grasses/broad-blades-256.png)](masters/grasses/broad-blades.png) | [![grasses/small-a](gameplay/grasses/small-a-256.png)](masters/grasses/small-a.png) |

| Small B | Small C | Small D |
| --- | --- | --- |
| [![grasses/small-b](gameplay/grasses/small-b-256.png)](masters/grasses/small-b.png) | [![grasses/small-c](gameplay/grasses/small-c-256.png)](masters/grasses/small-c.png) | [![grasses/small-d](gameplay/grasses/small-d-256.png)](masters/grasses/small-d.png) |

### Flowers

| Lavender Sprig | White Daisy | Pink Daisy |
| --- | --- | --- |
| [![flowers/lavender-sprig](gameplay/flowers/lavender-sprig-256.png)](masters/flowers/lavender-sprig.png) | [![flowers/white-daisy](gameplay/flowers/white-daisy-256.png)](masters/flowers/white-daisy.png) | [![flowers/pink-daisy](gameplay/flowers/pink-daisy-256.png)](masters/flowers/pink-daisy.png) |

| Golden Flower | Pink Tulip | White Tulip |
| --- | --- | --- |
| [![flowers/golden-flower](gameplay/flowers/golden-flower-256.png)](masters/flowers/golden-flower.png) | [![flowers/pink-tulip](gameplay/flowers/pink-tulip-256.png)](masters/flowers/pink-tulip.png) | [![flowers/white-tulip](gameplay/flowers/white-tulip-256.png)](masters/flowers/white-tulip.png) |

| Coral Daisy |
| --- |
| [![flowers/coral-daisy](gameplay/flowers/coral-daisy-256.png)](masters/flowers/coral-daisy.png) |

### Petals

| Flower Bud | Pink Small | Pink Folded |
| --- | --- | --- |
| [![petals/flower-bud](gameplay/petals/flower-bud-256.png)](masters/petals/flower-bud.png) | [![petals/pink-small](gameplay/petals/pink-small-256.png)](masters/petals/pink-small.png) | [![petals/pink-folded](gameplay/petals/pink-folded-256.png)](masters/petals/pink-folded.png) |

| Pink Curved | Pink Flat | Pink Rounded |
| --- | --- | --- |
| [![petals/pink-curved](gameplay/petals/pink-curved-256.png)](masters/petals/pink-curved.png) | [![petals/pink-flat](gameplay/petals/pink-flat-256.png)](masters/petals/pink-flat.png) | [![petals/pink-rounded](gameplay/petals/pink-rounded-256.png)](masters/petals/pink-rounded.png) |

| Pink Wide | Purple | Pink Pale |
| --- | --- | --- |
| [![petals/pink-wide](gameplay/petals/pink-wide-256.png)](masters/petals/pink-wide.png) | [![petals/purple](gameplay/petals/purple-256.png)](masters/petals/purple.png) | [![petals/pink-pale](gameplay/petals/pink-pale-256.png)](masters/petals/pink-pale.png) |

| Gold Petal Cluster |
| --- |
| [![petals/gold-petal-cluster](gameplay/petals/gold-petal-cluster-256.png)](masters/petals/gold-petal-cluster.png) |

### Backgrounds

| Sunset Gardens | Floating Gardens |
| --- | --- |
| [![backgrounds/sunset-gardens](gameplay/backgrounds/sunset-gardens-256.png)](masters/backgrounds/sunset-gardens.png) | [![backgrounds/floating-gardens](gameplay/backgrounds/floating-gardens-256.png)](masters/backgrounds/floating-gardens.png) |

### Clouds

| White High | Lilac High | White Low |
| --- | --- | --- |
| [![clouds/white-high](gameplay/clouds/white-high-256.png)](masters/clouds/white-high.png) | [![clouds/lilac-high](gameplay/clouds/lilac-high-256.png)](masters/clouds/lilac-high.png) | [![clouds/white-low](gameplay/clouds/white-low-256.png)](masters/clouds/white-low.png) |

| Lilac Low | Tiny Left | Tiny Middle |
| --- | --- | --- |
| [![clouds/lilac-low](gameplay/clouds/lilac-low-256.png)](masters/clouds/lilac-low.png) | [![clouds/tiny-left](gameplay/clouds/tiny-left-256.png)](masters/clouds/tiny-left.png) | [![clouds/tiny-middle](gameplay/clouds/tiny-middle-256.png)](masters/clouds/tiny-middle.png) |

| Tiny Right | Pink Small | Flower Cloud |
| --- | --- | --- |
| [![clouds/tiny-right](gameplay/clouds/tiny-right-256.png)](masters/clouds/tiny-right.png) | [![clouds/pink-small](gameplay/clouds/pink-small-256.png)](masters/clouds/pink-small.png) | [![clouds/flower-cloud](gameplay/clouds/flower-cloud-256.png)](masters/clouds/flower-cloud.png) |

### Sky

| Rainbow |
| --- |
| [![sky/rainbow](gameplay/sky/rainbow-256.png)](masters/sky/rainbow.png) |

### Particles

| Sparkle Tall | Sparkle Small | Sparkle Low |
| --- | --- | --- |
| [![particles/sparkle-tall](gameplay/particles/sparkle-tall-256.png)](masters/particles/sparkle-tall.png) | [![particles/sparkle-small](gameplay/particles/sparkle-small-256.png)](masters/particles/sparkle-small.png) | [![particles/sparkle-low](gameplay/particles/sparkle-low-256.png)](masters/particles/sparkle-low.png) |

| Sparkle Honey |
| --- |
| [![particles/sparkle-honey](gameplay/particles/sparkle-honey-256.png)](masters/particles/sparkle-honey.png) |

### Effects

| Petals Upper | Petals Lower | Bee Trail |
| --- | --- | --- |
| [![effects/petals-upper](gameplay/effects/petals-upper-256.png)](masters/effects/petals-upper.png) | [![effects/petals-lower](gameplay/effects/petals-lower-256.png)](masters/effects/petals-lower.png) | [![effects/bee-trail](gameplay/effects/bee-trail-256.png)](masters/effects/bee-trail.png) |

### Bees

| Three Quarter | Front | Side |
| --- | --- | --- |
| [![bees/three-quarter](gameplay/bees/three-quarter-256.png)](masters/bees/three-quarter.png) | [![bees/front](gameplay/bees/front-256.png)](masters/bees/front.png) | [![bees/side](gameplay/bees/side-256.png)](masters/bees/side.png) |

### Collectibles

| Amber Crystal | Honeycomb | Honey Drop Small |
| --- | --- | --- |
| [![collectibles/amber-crystal](gameplay/collectibles/amber-crystal-256.png)](masters/collectibles/amber-crystal.png) | [![collectibles/honeycomb](gameplay/collectibles/honeycomb-256.png)](masters/collectibles/honeycomb.png) | [![collectibles/honey-drop-small](gameplay/collectibles/honey-drop-small-256.png)](masters/collectibles/honey-drop-small.png) |

| Honey Drop Tiny | Honey Drop Large |
| --- | --- |
| [![collectibles/honey-drop-tiny](gameplay/collectibles/honey-drop-tiny-256.png)](masters/collectibles/honey-drop-tiny.png) | [![collectibles/honey-drop-large](gameplay/collectibles/honey-drop-large-256.png)](masters/collectibles/honey-drop-large.png) |

### Bouquets

| Pink Large | Mixed Small | Coral Small |
| --- | --- | --- |
| [![bouquets/pink-large](gameplay/bouquets/pink-large-256.png)](masters/bouquets/pink-large.png) | [![bouquets/mixed-small](gameplay/bouquets/mixed-small-256.png)](masters/bouquets/mixed-small.png) | [![bouquets/coral-small](gameplay/bouquets/coral-small-256.png)](masters/bouquets/coral-small.png) |

