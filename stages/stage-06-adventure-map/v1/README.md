# Adventure map & level progression · Stage 6 · v1

81 individual surfaces, modules, states, compositions and examples, with 324 PNG/WebP exports. The [original board](references/original-adventure-map-board.png) is preserved unchanged. Its printed Stage 5 label differs from the requested Stage 6; this pack is separate from the existing Stage 6 obstacles folder.

![Adventure map](gameplay/maps/landscape-512.png)

## Context preserved

The locked character artwork and existing worlds, cannons, rewards and fonts are reused. Source paths and hashes are recorded; no previous artwork or GDD is overwritten. Skydoodles uses the `skybubs` storage alias. The board's alternate mascots are not used.

The board illustrates 30 levels per world; the GDD currently proposes 25 per world, and neither schedule is locked. These assets therefore contain no permanent level ranges, target counts, star totals or level numbers. Numbers, world names and localized text belong in runtime text. The board's duplicated 2-star label is resolved into distinct 1-, 2- and 3-star node variants. Stars are progress records, not a new spendable currency. Gem art is a visual reward example, not approval of a premium-gem economy.

## Files and integration

- New individual sprites use 1024-square transparent canvases. Existing masters retain their original size and bytes. Map layouts are assembled at 2048×1536 and 1280×2560 from smaller source modules; they are not newly generated native 2K sprites.
- `gameplay` has 256/512 maximum-edge PNG and lossless WebP versions. Use straight alpha/source-over blending; suggested anchors are center-based.
- `nodes` provides blank locked, unlocked, current and completed surfaces, plus a lock-badge variant and 1/2/3-star completed variants. Render level numbers as accessible text.
- `worlds` and `cards` contain all four worlds, assembled from approved scenery. `gateways` reuses approved architecture; Cloudberry's floral gateway uses the established flower-vine gate. Glow states are art only.
- `ui` contains blank cards, panels, plaque, ribbon and play-button surfaces. These are raster surfaces, not validated nine-slice controls. Layouts must be tested at target device sizes.
- `maps` contains illustrative landscape and portrait layouts with four sample nodes per world. They are not authored level graphs, playable screens, final progression schedules or responsive UI implementations.
- `examples` contains flattened world-selection, level-preview, world-complete and world-unlocked layouts. Their text is for demonstration only; reusable assets remain separate and unlabeled.
- `animation` includes portal, unlock, star-scale and chest key poses. These do not implement smooth animation, timing, rewards or state transitions. Existing closed chest and newly generated open chest need transition review in-engine.

`states.json` provides asset mappings without assigning gameplay rules. `generation.json` contains built-in image generation prompts and all reused source hashes. `manifest.json` records file hashes and provenance. Open `preview.html` for the individual gallery.

Export checks cover decoding, transparency, source integrity and pixel-identical PNG/WebP output. Visual review does not replace device QA, accessibility tests or engine validation. Transparent edge cleanup removes tiny specks and distant stone-path haze; it does not repaint locked artwork.

## Every individual preview

### Nodes

| current | completed | locked |
| --- | --- | --- |
| [![nodes/current](gameplay/nodes/current-256.png)](masters/nodes/current.png) | [![nodes/completed](gameplay/nodes/completed-256.png)](masters/nodes/completed.png) | [![nodes/locked](gameplay/nodes/locked-256.png)](masters/nodes/locked.png) |

| unlocked | completed-1-stars | completed-2-stars |
| --- | --- | --- |
| [![nodes/unlocked](gameplay/nodes/unlocked-256.png)](masters/nodes/unlocked.png) | [![nodes/completed-1-stars](gameplay/nodes/completed-1-stars-256.png)](masters/nodes/completed-1-stars.png) | [![nodes/completed-2-stars](gameplay/nodes/completed-2-stars-256.png)](masters/nodes/completed-2-stars.png) |

| completed-3-stars | locked-badge |
| --- | --- |
| [![nodes/completed-3-stars](gameplay/nodes/completed-3-stars-256.png)](masters/nodes/completed-3-stars.png) | [![nodes/locked-badge](gameplay/nodes/locked-badge-256.png)](masters/nodes/locked-badge.png) |

### Rewards

| floral-frame | chest-open | star |
| --- | --- | --- |
| [![rewards/floral-frame](gameplay/rewards/floral-frame-256.png)](masters/rewards/floral-frame.png) | [![rewards/chest-open](gameplay/rewards/chest-open-256.png)](masters/rewards/chest-open.png) | [![rewards/star](gameplay/rewards/star-256.png)](masters/rewards/star.png) |

| star-empty | gift | coin |
| --- | --- | --- |
| [![rewards/star-empty](gameplay/rewards/star-empty-256.png)](masters/rewards/star-empty.png) | [![rewards/gift](gameplay/rewards/gift-256.png)](masters/rewards/gift.png) | [![rewards/coin](gameplay/rewards/coin-256.png)](masters/rewards/coin.png) |

| gem | booster | chest-closed |
| --- | --- | --- |
| [![rewards/gem](gameplay/rewards/gem-256.png)](masters/rewards/gem.png) | [![rewards/booster](gameplay/rewards/booster-256.png)](masters/rewards/booster.png) | [![rewards/chest-closed](gameplay/rewards/chest-closed-256.png)](masters/rewards/chest-closed.png) |

| new-cannon | character-discovery |
| --- | --- |
| [![rewards/new-cannon](gameplay/rewards/new-cannon-256.png)](masters/rewards/new-cannon.png) | [![rewards/character-discovery](gameplay/rewards/character-discovery-256.png)](masters/rewards/character-discovery.png) |

### Paths

| grass-curve | stone-curve | wood-bridge |
| --- | --- | --- |
| [![paths/grass-curve](gameplay/paths/grass-curve-256.png)](masters/paths/grass-curve.png) | [![paths/stone-curve](gameplay/paths/stone-curve-256.png)](masters/paths/stone-curve.png) | [![paths/wood-bridge](gameplay/paths/wood-bridge-256.png)](masters/paths/wood-bridge.png) |

| rope-bridge | stone-platform | star-platform |
| --- | --- | --- |
| [![paths/rope-bridge](gameplay/paths/rope-bridge-256.png)](masters/paths/rope-bridge.png) | [![paths/stone-platform](gameplay/paths/stone-platform-256.png)](masters/paths/stone-platform.png) | [![paths/star-platform](gameplay/paths/star-platform-256.png)](masters/paths/star-platform.png) |

### Icons

| lock | check | play |
| --- | --- | --- |
| [![icons/lock](gameplay/icons/lock-256.png)](masters/icons/lock.png) | [![icons/check](gameplay/icons/check-256.png)](masters/icons/check.png) | [![icons/play](gameplay/icons/play-256.png)](masters/icons/play.png) |

| world-leaf | world-honey | world-moon |
| --- | --- | --- |
| [![icons/world-leaf](gameplay/icons/world-leaf-256.png)](masters/icons/world-leaf.png) | [![icons/world-honey](gameplay/icons/world-honey-256.png)](masters/icons/world-honey.png) | [![icons/world-moon](gameplay/icons/world-moon-256.png)](masters/icons/world-moon.png) |

### Ui

| celebration-banner | level-panel | world-sign |
| --- | --- | --- |
| [![ui/celebration-banner](gameplay/ui/celebration-banner-256.png)](masters/ui/celebration-banner.png) | [![ui/level-panel](gameplay/ui/level-panel-256.png)](masters/ui/level-panel.png) | [![ui/world-sign](gameplay/ui/world-sign-256.png)](masters/ui/world-sign.png) |

| world-card | play-button | play-button-icon |
| --- | --- | --- |
| [![ui/world-card](gameplay/ui/world-card-256.png)](masters/ui/world-card.png) | [![ui/play-button](gameplay/ui/play-button-256.png)](masters/ui/play-button.png) | [![ui/play-button-icon](gameplay/ui/play-button-icon-256.png)](masters/ui/play-button-icon.png) |

### Props

| direction-sign | banner-a | banner-b |
| --- | --- | --- |
| [![props/direction-sign](gameplay/props/direction-sign-256.png)](masters/props/direction-sign.png) | [![props/banner-a](gameplay/props/banner-a-256.png)](masters/props/banner-a.png) | [![props/banner-b](gameplay/props/banner-b-256.png)](masters/props/banner-b.png) |

| lantern |
| --- |
| [![props/lantern](gameplay/props/lantern-256.png)](masters/props/lantern.png) |

### Effects

| star-trail | sparkles |
| --- | --- |
| [![effects/star-trail](gameplay/effects/star-trail-256.png)](masters/effects/star-trail.png) | [![effects/sparkles](gameplay/effects/sparkles-256.png)](masters/effects/sparkles.png) |

### Transitions

| portal-idle | portal-charge | portal-activate |
| --- | --- | --- |
| [![transitions/portal-idle](gameplay/transitions/portal-idle-256.png)](masters/transitions/portal-idle.png) | [![transitions/portal-charge](gameplay/transitions/portal-charge-256.png)](masters/transitions/portal-charge.png) | [![transitions/portal-activate](gameplay/transitions/portal-activate-256.png)](masters/transitions/portal-activate.png) |

### Backgrounds

| cloud-sky |
| --- |
| [![backgrounds/cloud-sky](gameplay/backgrounds/cloud-sky-256.png)](masters/backgrounds/cloud-sky.png) |

### Gateways

| cloudberry-base | cloudberry-active | honeydrop-base |
| --- | --- | --- |
| [![gateways/cloudberry-base](gameplay/gateways/cloudberry-base-256.png)](masters/gateways/cloudberry-base.png) | [![gateways/cloudberry-active](gameplay/gateways/cloudberry-active-256.png)](masters/gateways/cloudberry-active.png) | [![gateways/honeydrop-base](gameplay/gateways/honeydrop-base-256.png)](masters/gateways/honeydrop-base.png) |

| honeydrop-active | moonmallow-base | moonmallow-active |
| --- | --- | --- |
| [![gateways/honeydrop-active](gameplay/gateways/honeydrop-active-256.png)](masters/gateways/honeydrop-active.png) | [![gateways/moonmallow-base](gameplay/gateways/moonmallow-base-256.png)](masters/gateways/moonmallow-base.png) | [![gateways/moonmallow-active](gameplay/gateways/moonmallow-active-256.png)](masters/gateways/moonmallow-active.png) |

| sugarstar-base | sugarstar-active |
| --- | --- |
| [![gateways/sugarstar-base](gameplay/gateways/sugarstar-base-256.png)](masters/gateways/sugarstar-base.png) | [![gateways/sugarstar-active](gameplay/gateways/sugarstar-active-256.png)](masters/gateways/sugarstar-active.png) |

### Worlds

| cloudberry | honeydrop | moonmallow |
| --- | --- | --- |
| [![worlds/cloudberry](gameplay/worlds/cloudberry-256.png)](masters/worlds/cloudberry.png) | [![worlds/honeydrop](gameplay/worlds/honeydrop-256.png)](masters/worlds/honeydrop.png) | [![worlds/moonmallow](gameplay/worlds/moonmallow-256.png)](masters/worlds/moonmallow.png) |

| sugarstar |
| --- |
| [![worlds/sugarstar](gameplay/worlds/sugarstar-256.png)](masters/worlds/sugarstar.png) |

### Cards

| cloudberry | honeydrop | moonmallow |
| --- | --- | --- |
| [![cards/cloudberry](gameplay/cards/cloudberry-256.png)](masters/cards/cloudberry.png) | [![cards/honeydrop](gameplay/cards/honeydrop-256.png)](masters/cards/honeydrop.png) | [![cards/moonmallow](gameplay/cards/moonmallow-256.png)](masters/cards/moonmallow.png) |

| sugarstar |
| --- |
| [![cards/sugarstar](gameplay/cards/sugarstar-256.png)](masters/cards/sugarstar.png) |

### Animation

| portal-idle | portal-charge | portal-activate |
| --- | --- | --- |
| [![animation/portal-idle](gameplay/animation/portal-idle-256.png)](masters/animation/portal-idle.png) | [![animation/portal-charge](gameplay/animation/portal-charge-256.png)](masters/animation/portal-charge.png) | [![animation/portal-activate](gameplay/animation/portal-activate-256.png)](masters/animation/portal-activate.png) |

| unlock-locked | unlock-ready | unlock-selected |
| --- | --- | --- |
| [![animation/unlock-locked](gameplay/animation/unlock-locked-256.png)](masters/animation/unlock-locked.png) | [![animation/unlock-ready](gameplay/animation/unlock-ready-256.png)](masters/animation/unlock-ready.png) | [![animation/unlock-selected](gameplay/animation/unlock-selected-256.png)](masters/animation/unlock-selected.png) |

| chest-closed | chest-open | star-small |
| --- | --- | --- |
| [![animation/chest-closed](gameplay/animation/chest-closed-256.png)](masters/animation/chest-closed.png) | [![animation/chest-open](gameplay/animation/chest-open-256.png)](masters/animation/chest-open.png) | [![animation/star-small](gameplay/animation/star-small-256.png)](masters/animation/star-small.png) |

| star-medium | star-full | chest-reward |
| --- | --- | --- |
| [![animation/star-medium](gameplay/animation/star-medium-256.png)](masters/animation/star-medium.png) | [![animation/star-full](gameplay/animation/star-full-256.png)](masters/animation/star-full.png) | [![animation/chest-reward](gameplay/animation/chest-reward-256.png)](masters/animation/chest-reward.png) |

### Maps

| landscape | portrait |
| --- | --- |
| [![maps/landscape](gameplay/maps/landscape-256.png)](masters/maps/landscape.png) | [![maps/portrait](gameplay/maps/portrait-256.png)](masters/maps/portrait.png) |

### Examples

| world-selection | level-preview | world-complete |
| --- | --- | --- |
| [![examples/world-selection](gameplay/examples/world-selection-256.png)](masters/examples/world-selection.png) | [![examples/level-preview](gameplay/examples/level-preview-256.png)](masters/examples/level-preview.png) | [![examples/world-complete](gameplay/examples/world-complete-256.png)](masters/examples/world-complete.png) |

| world-unlocked |
| --- |
| [![examples/world-unlocked](gameplay/examples/world-unlocked-256.png)](masters/examples/world-unlocked.png) |

