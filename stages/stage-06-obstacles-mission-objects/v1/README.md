# Obstacles & mission objects · v1

108 individual assets, layers, state variants and reusable keyframes. The original board is preserved [unchanged](references/original-stage-05-board.png). Its Stage 05 label is retained; this repository uses Stage 06 because Stage 05 already contains worlds and levels.

![All assets](preview.jpg)

## Use

PNG masters and 256/512 PNG plus lossless WebP exports. Newly generated masters use a 1024-square canvas; reused masters retain their original dimensions. No native 2048 renders are claimed. Use straight alpha/source-over blending and center anchors. Shell, bubble, honey and vine layers have transparent centers for existing character sprites. The `composites` and mission previews use the exact locked Rosybuns, Leaflings or Chirpyfluffs artwork, resized and layered without repainting. Original character files are untouched. Asset provenance records the source path, checksum and placement.

The board's alternate character appearances are deliberately excluded. Repeated world props and brand stars reuse existing artwork. Generic collectible stars are objects, not a new character family. Category icons reuse matching objects where possible.

## States and integration

`animation` contains the board's 4 crystal, 4 honey and 3 portal keyframes. These are reusable still poses, not a validated seamless animation. Moving-anchor frames keep the hanger and pendant connected while illustrating three positions; movement timing belongs to the game. Portal A/B artwork and charge states do not implement teleportation. `states.json` records state assets without assigning hit points, timing, rewards or economy rules. Existing GDD and locked designs remain unchanged.

All generated artwork is an interpretation of the reference, not pixel-exact extraction. Check state transitions, collider sizes, masking and visual scale in the engine. Angles and outlines can vary between generated states. No claim of in-engine production approval is made. Tiny stray alpha pixels are cleaned; glows and internal openings are retained.

`generation.json` contains the built-in image generation prompts and source hashes. `manifest.json` lists every file and asset; `qa.json` records export verification. `preview.html` is an offline gallery. The individual previews below link to full PNG masters.

## Every individual asset

### Magic Portal

| a-idle | a-activate | b-charge |
| --- | --- | --- |
| [![magic-portal/a-idle](gameplay/magic-portal/a-idle-256.png)](masters/magic-portal/a-idle.png) | [![magic-portal/a-activate](gameplay/magic-portal/a-activate-256.png)](masters/magic-portal/a-activate.png) | [![magic-portal/b-charge](gameplay/magic-portal/b-charge-256.png)](masters/magic-portal/b-charge.png) |

| b-activate | b-idle | a-charge |
| --- | --- | --- |
| [![magic-portal/b-activate](gameplay/magic-portal/b-activate-256.png)](masters/magic-portal/b-activate.png) | [![magic-portal/b-idle](gameplay/magic-portal/b-idle-256.png)](masters/magic-portal/b-idle.png) | [![magic-portal/a-charge](gameplay/magic-portal/a-charge-256.png)](masters/magic-portal/a-charge.png) |

### Crystal Shell

| fragile | intact | cracked |
| --- | --- | --- |
| [![crystal-shell/fragile](gameplay/crystal-shell/fragile-256.png)](masters/crystal-shell/fragile.png) | [![crystal-shell/intact](gameplay/crystal-shell/intact-256.png)](masters/crystal-shell/intact.png) | [![crystal-shell/cracked](gameplay/crystal-shell/cracked-256.png)](masters/crystal-shell/cracked.png) |

| broken |
| --- |
| [![crystal-shell/broken](gameplay/crystal-shell/broken-256.png)](masters/crystal-shell/broken.png) |

### Rescue Cage

| empty |
| --- |
| [![rescue-cage/empty](gameplay/rescue-cage/empty-256.png)](masters/rescue-cage/empty.png) |

### Honey Block

| softened | intact | cleared |
| --- | --- | --- |
| [![honey-block/softened](gameplay/honey-block/softened-256.png)](masters/honey-block/softened.png) | [![honey-block/intact](gameplay/honey-block/intact-256.png)](masters/honey-block/intact.png) | [![honey-block/cleared](gameplay/honey-block/cleared-256.png)](masters/honey-block/cleared.png) |

| cracked |
| --- |
| [![honey-block/cracked](gameplay/honey-block/cracked-256.png)](masters/honey-block/cracked.png) |

### Icons

| portal-spiral | anchor | honeycomb |
| --- | --- | --- |
| [![icons/portal-spiral](gameplay/icons/portal-spiral-256.png)](masters/icons/portal-spiral.png) | [![icons/anchor](gameplay/icons/anchor-256.png)](masters/icons/anchor.png) | [![icons/honeycomb](gameplay/icons/honeycomb-256.png)](masters/icons/honeycomb.png) |

| moon | bubble | crystal |
| --- | --- | --- |
| [![icons/moon](gameplay/icons/moon-256.png)](masters/icons/moon.png) | [![icons/bubble](gameplay/icons/bubble-256.png)](masters/icons/bubble.png) | [![icons/crystal](gameplay/icons/crystal-256.png)](masters/icons/crystal.png) |

| leaf | stone |
| --- | --- |
| [![icons/leaf](gameplay/icons/leaf-256.png)](masters/icons/leaf.png) | [![icons/stone](gameplay/icons/stone-256.png)](masters/icons/stone.png) |

### Stone Crate

| debris | cracked | solid |
| --- | --- | --- |
| [![stone-crate/debris](gameplay/stone-crate/debris-256.png)](masters/stone-crate/debris.png) | [![stone-crate/cracked](gameplay/stone-crate/cracked-256.png)](masters/stone-crate/cracked.png) | [![stone-crate/solid](gameplay/stone-crate/solid-256.png)](masters/stone-crate/solid.png) |

| broken |
| --- |
| [![stone-crate/broken](gameplay/stone-crate/broken-256.png)](masters/stone-crate/broken.png) |

### Props

| banner-left | banner-right | turf-block-a |
| --- | --- | --- |
| [![props/banner-left](gameplay/props/banner-left-256.png)](masters/props/banner-left.png) | [![props/banner-right](gameplay/props/banner-right-256.png)](masters/props/banner-right.png) | [![props/turf-block-a](gameplay/props/turf-block-a-256.png)](masters/props/turf-block-a.png) |

| turf-block-b | pink-mushroom | purple-mushrooms |
| --- | --- | --- |
| [![props/turf-block-b](gameplay/props/turf-block-b-256.png)](masters/props/turf-block-b.png) | [![props/pink-mushroom](gameplay/props/pink-mushroom-256.png)](masters/props/pink-mushroom.png) | [![props/purple-mushrooms](gameplay/props/purple-mushrooms-256.png)](masters/props/purple-mushrooms.png) |

| arrow-sign | fence | lantern |
| --- | --- | --- |
| [![props/arrow-sign](gameplay/props/arrow-sign-256.png)](masters/props/arrow-sign.png) | [![props/fence](gameplay/props/fence-256.png)](masters/props/fence.png) | [![props/lantern](gameplay/props/lantern-256.png)](masters/props/lantern.png) |

| flower-shrub | grass-a | grass-b |
| --- | --- | --- |
| [![props/flower-shrub](gameplay/props/flower-shrub-256.png)](masters/props/flower-shrub.png) | [![props/grass-a](gameplay/props/grass-a-256.png)](masters/props/grass-a.png) | [![props/grass-b](gameplay/props/grass-b-256.png)](masters/props/grass-b.png) |

| purple-crystal | leaves | low-rocks |
| --- | --- | --- |
| [![props/purple-crystal](gameplay/props/purple-crystal-256.png)](masters/props/purple-crystal.png) | [![props/leaves](gameplay/props/leaves-256.png)](masters/props/leaves.png) | [![props/low-rocks](gameplay/props/low-rocks-256.png)](masters/props/low-rocks.png) |

| honey-platform-a | honey-platform-b | cloud |
| --- | --- | --- |
| [![props/honey-platform-a](gameplay/props/honey-platform-a-256.png)](masters/props/honey-platform-a.png) | [![props/honey-platform-b](gameplay/props/honey-platform-b-256.png)](masters/props/honey-platform-b.png) | [![props/cloud](gameplay/props/cloud-256.png)](masters/props/cloud.png) |

| star-glow | beehive |
| --- | --- |
| [![props/star-glow](gameplay/props/star-glow-256.png)](masters/props/star-glow.png) | [![props/beehive](gameplay/props/beehive-256.png)](masters/props/beehive.png) |

### Moving Anchor

| hardware | left | center |
| --- | --- | --- |
| [![moving-anchor/hardware](gameplay/moving-anchor/hardware-256.png)](masters/moving-anchor/hardware.png) | [![moving-anchor/left](gameplay/moving-anchor/left-256.png)](masters/moving-anchor/left.png) | [![moving-anchor/center](gameplay/moving-anchor/center-256.png)](masters/moving-anchor/center.png) |

| right |
| --- |
| [![moving-anchor/right](gameplay/moving-anchor/right-256.png)](masters/moving-anchor/right.png) |

### Bubble Cage

| bursting | cracked | trapped |
| --- | --- | --- |
| [![bubble-cage/bursting](gameplay/bubble-cage/bursting-256.png)](masters/bubble-cage/bursting.png) | [![bubble-cage/cracked](gameplay/bubble-cage/cracked-256.png)](masters/bubble-cage/cracked.png) | [![bubble-cage/trapped](gameplay/bubble-cage/trapped-256.png)](masters/bubble-cage/trapped.png) |

### Collectibles

| star | treasure-chest | boost-bottle |
| --- | --- | --- |
| [![collectibles/star](gameplay/collectibles/star-256.png)](masters/collectibles/star.png) | [![collectibles/treasure-chest](gameplay/collectibles/treasure-chest-256.png)](masters/collectibles/treasure-chest.png) | [![collectibles/boost-bottle](gameplay/collectibles/boost-bottle-256.png)](masters/collectibles/boost-bottle.png) |

| rainbow-orb | world-key | gem |
| --- | --- | --- |
| [![collectibles/rainbow-orb](gameplay/collectibles/rainbow-orb-256.png)](masters/collectibles/rainbow-orb.png) | [![collectibles/world-key](gameplay/collectibles/world-key-256.png)](masters/collectibles/world-key.png) | [![collectibles/gem](gameplay/collectibles/gem-256.png)](masters/collectibles/gem.png) |

### Moon Fog

| dense | light | fading |
| --- | --- | --- |
| [![moon-fog/dense](gameplay/moon-fog/dense-256.png)](masters/moon-fog/dense.png) | [![moon-fog/light](gameplay/moon-fog/light-256.png)](masters/moon-fog/light.png) | [![moon-fog/fading](gameplay/moon-fog/fading-256.png)](masters/moon-fog/fading.png) |

| cleared |
| --- |
| [![moon-fog/cleared](gameplay/moon-fog/cleared-256.png)](masters/moon-fog/cleared.png) |

### Vine Lock

| weakened | locked | loose |
| --- | --- | --- |
| [![vine-lock/weakened](gameplay/vine-lock/weakened-256.png)](masters/vine-lock/weakened.png) | [![vine-lock/locked](gameplay/vine-lock/locked-256.png)](masters/vine-lock/locked.png) | [![vine-lock/loose](gameplay/vine-lock/loose-256.png)](masters/vine-lock/loose.png) |

| cleared |
| --- |
| [![vine-lock/cleared](gameplay/vine-lock/cleared-256.png)](masters/vine-lock/cleared.png) |

### Portal Interiors

| purple | cyan |
| --- | --- |
| [![portal-interiors/purple](gameplay/portal-interiors/purple-256.png)](masters/portal-interiors/purple.png) | [![portal-interiors/cyan](gameplay/portal-interiors/cyan-256.png)](masters/portal-interiors/cyan.png) |

### World Badges

| cloudberry | honeydrop | moonmallow |
| --- | --- | --- |
| [![world-badges/cloudberry](gameplay/world-badges/cloudberry-256.png)](masters/world-badges/cloudberry.png) | [![world-badges/honeydrop](gameplay/world-badges/honeydrop-256.png)](masters/world-badges/honeydrop.png) | [![world-badges/moonmallow](gameplay/world-badges/moonmallow-256.png)](masters/world-badges/moonmallow.png) |

| sugarstar |
| --- |
| [![world-badges/sugarstar](gameplay/world-badges/sugarstar-256.png)](masters/world-badges/sugarstar.png) |

### Missions

| collect-stars | rescue-friends | match-clear |
| --- | --- | --- |
| [![missions/collect-stars](gameplay/missions/collect-stars-256.png)](masters/missions/collect-stars.png) | [![missions/rescue-friends](gameplay/missions/rescue-friends-256.png)](masters/missions/rescue-friends.png) | [![missions/match-clear](gameplay/missions/match-clear-256.png)](masters/missions/match-clear.png) |

| remove-obstacles |
| --- |
| [![missions/remove-obstacles](gameplay/missions/remove-obstacles-256.png)](masters/missions/remove-obstacles.png) |

### Composites

| crystal-shell-intact | crystal-shell-cracked | crystal-shell-fragile |
| --- | --- | --- |
| [![composites/crystal-shell-intact](gameplay/composites/crystal-shell-intact-256.png)](masters/composites/crystal-shell-intact.png) | [![composites/crystal-shell-cracked](gameplay/composites/crystal-shell-cracked-256.png)](masters/composites/crystal-shell-cracked.png) | [![composites/crystal-shell-fragile](gameplay/composites/crystal-shell-fragile-256.png)](masters/composites/crystal-shell-fragile.png) |

| bubble-cage-trapped | bubble-cage-cracked | bubble-cage-bursting |
| --- | --- | --- |
| [![composites/bubble-cage-trapped](gameplay/composites/bubble-cage-trapped-256.png)](masters/composites/bubble-cage-trapped.png) | [![composites/bubble-cage-cracked](gameplay/composites/bubble-cage-cracked-256.png)](masters/composites/bubble-cage-cracked.png) | [![composites/bubble-cage-bursting](gameplay/composites/bubble-cage-bursting-256.png)](masters/composites/bubble-cage-bursting.png) |

| honey-block-intact | honey-block-softened | honey-block-cracked |
| --- | --- | --- |
| [![composites/honey-block-intact](gameplay/composites/honey-block-intact-256.png)](masters/composites/honey-block-intact.png) | [![composites/honey-block-softened](gameplay/composites/honey-block-softened-256.png)](masters/composites/honey-block-softened.png) | [![composites/honey-block-cracked](gameplay/composites/honey-block-cracked-256.png)](masters/composites/honey-block-cracked.png) |

| vine-lock-locked | vine-lock-weakened | vine-lock-loose |
| --- | --- | --- |
| [![composites/vine-lock-locked](gameplay/composites/vine-lock-locked-256.png)](masters/composites/vine-lock-locked.png) | [![composites/vine-lock-weakened](gameplay/composites/vine-lock-weakened-256.png)](masters/composites/vine-lock-weakened.png) | [![composites/vine-lock-loose](gameplay/composites/vine-lock-loose-256.png)](masters/composites/vine-lock-loose.png) |

| bubble-cage-released |
| --- |
| [![composites/bubble-cage-released](gameplay/composites/bubble-cage-released-256.png)](masters/composites/bubble-cage-released.png) |

### Portal Frames

| a-idle | a-charge | a-activate |
| --- | --- | --- |
| [![portal-frames/a-idle](gameplay/portal-frames/a-idle-256.png)](masters/portal-frames/a-idle.png) | [![portal-frames/a-charge](gameplay/portal-frames/a-charge-256.png)](masters/portal-frames/a-charge.png) | [![portal-frames/a-activate](gameplay/portal-frames/a-activate-256.png)](masters/portal-frames/a-activate.png) |

| b-idle | b-charge | b-activate |
| --- | --- | --- |
| [![portal-frames/b-idle](gameplay/portal-frames/b-idle-256.png)](masters/portal-frames/b-idle.png) | [![portal-frames/b-charge](gameplay/portal-frames/b-charge-256.png)](masters/portal-frames/b-charge.png) | [![portal-frames/b-activate](gameplay/portal-frames/b-activate-256.png)](masters/portal-frames/b-activate.png) |

### Animation

| crystal-idle | crystal-hit | crystal-crack |
| --- | --- | --- |
| [![animation/crystal-idle](gameplay/animation/crystal-idle-256.png)](masters/animation/crystal-idle.png) | [![animation/crystal-hit](gameplay/animation/crystal-hit-256.png)](masters/animation/crystal-hit.png) | [![animation/crystal-crack](gameplay/animation/crystal-crack-256.png)](masters/animation/crystal-crack.png) |

| crystal-break | honey-intact | honey-crack |
| --- | --- | --- |
| [![animation/crystal-break](gameplay/animation/crystal-break-256.png)](masters/animation/crystal-break.png) | [![animation/honey-intact](gameplay/animation/honey-intact-256.png)](masters/animation/honey-intact.png) | [![animation/honey-crack](gameplay/animation/honey-crack-256.png)](masters/animation/honey-crack.png) |

| honey-clear | honey-shake | portal-idle |
| --- | --- | --- |
| [![animation/honey-clear](gameplay/animation/honey-clear-256.png)](masters/animation/honey-clear.png) | [![animation/honey-shake](gameplay/animation/honey-shake-256.png)](masters/animation/honey-shake.png) | [![animation/portal-idle](gameplay/animation/portal-idle-256.png)](masters/animation/portal-idle.png) |

| portal-charge | portal-activate |
| --- | --- |
| [![animation/portal-charge](gameplay/animation/portal-charge-256.png)](masters/animation/portal-charge.png) | [![animation/portal-activate](gameplay/animation/portal-activate-256.png)](masters/animation/portal-activate.png) |

