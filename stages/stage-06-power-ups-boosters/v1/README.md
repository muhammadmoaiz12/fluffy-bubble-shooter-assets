# Power-ups & boosters · Stage 6 · v1

113 individual assets, layers, state variants and compositions; 492 PNG/WebP exports. All ten concepts from the supplied [original board](references/original-power-up-showcase.png) are included. The original PNG is unchanged.

![Ten core boosters](previews/core.jpg)

## Existing context preserved

The ten names are visual concept IDs: Rainbow Shot, Bomb Burst, Line Blaster, Color Pop, Shuffle, Extra Move, Aim Guide, Star Magnet, Time Freeze and Mega Burst. Their artwork does not approve new mechanics or replace the GDD's reviewable roster. The locked hybrid architecture remains: optional inventory boosters, automatic earned family powers and manually activated charged cannon powers are separate systems. Main-path progression must remain achievable without paid boosters or ads.

The board's +5, inventory counts and x3/x10/x30/x50 pack quantities are not baked into the reusable art. Render those through runtime text after balancing. No prices, grants, unlocks, effect radii, inventory rules, time-freeze durations or shot bonuses are defined here. A puff-filled chest is a decorative illustration, not approval of randomized paid rewards.

Approved characters, cannon and reused assets remain unchanged. Gameplay examples use the actual locked sprites and existing Cloud Sling cannon; alternate mascots from the board are excluded. Rosybuns, Skydoodles, Mossmops, Sunpuffs, Plumplets and Peachpeeps map to the existing storage aliases documented in the GDD.

## Files and integration

- New individual art uses 1024-square transparent PNG masters. Reused masters retain their original dimensions and exact file bytes. The hotbar and action examples are larger assembled compositions, not native 2K renders.
- Every asset has 256/512 PNG and lossless WebP exports. The ten core icons additionally have 64/128 exports for small UI review.
- Each booster has idle, selected, charging, activated and effect key poses. The first four states use the same core at the same size and center; effects are separate reusable layers. Some effects are deliberately shared.
- `ui` contains empty hotbar, slot, badge, ribbons, meters and flags, plus a blank-count assembled hotbar. Add accessible localized text separately. These raster surfaces are not validated nine-slice components.
- `packs` and `collectibles` include the gift, bottle, blue sack, closed/open chest, purple crate, brown sack and composed reward chests. Quantities are runtime data.
- `examples` contains two flattened action illustrations, not a collision simulation, playable screen or approved targeting preview.
- Use straight alpha/source-over blending and center anchors. `states.json` maps key poses and effects without assigning timing or activation rules. These still poses do not constitute a smooth 60-FPS loop; transitions and reduced-motion behavior require engine work. Animation callbacks must never grant rewards or apply effects twice.

`generation.json` records built-in image generation prompts, source checksums and cleanup. `manifest.json` lists every file and asset. `qa.json` records export checks. `preview.html` is an offline gallery. Technical export QA and visual review do not replace in-engine, balancing, accessibility or device testing.

## Every individual preview

### Effects

| bubble-particles | flower-explosion | purple-vortex |
| --- | --- | --- |
| [![effects/bubble-particles](gameplay/effects/bubble-particles-256.png)](masters/effects/bubble-particles.png) | [![effects/flower-explosion](gameplay/effects/flower-explosion-256.png)](masters/effects/flower-explosion.png) | [![effects/purple-vortex](gameplay/effects/purple-vortex-256.png)](masters/effects/purple-vortex.png) |

| charge-ring | pink-sparkles | gold-sparkles |
| --- | --- | --- |
| [![effects/charge-ring](gameplay/effects/charge-ring-256.png)](masters/effects/charge-ring.png) | [![effects/pink-sparkles](gameplay/effects/pink-sparkles-256.png)](masters/effects/pink-sparkles.png) | [![effects/gold-sparkles](gameplay/effects/gold-sparkles-256.png)](masters/effects/gold-sparkles.png) |

| rainbow-trail | gold-glint | cloud-puff |
| --- | --- | --- |
| [![effects/rainbow-trail](gameplay/effects/rainbow-trail-256.png)](masters/effects/rainbow-trail.png) | [![effects/gold-glint](gameplay/effects/gold-glint-256.png)](masters/effects/gold-glint.png) | [![effects/cloud-puff](gameplay/effects/cloud-puff-256.png)](masters/effects/cloud-puff.png) |

| star-comet | aim-dot | aim-trajectory |
| --- | --- | --- |
| [![effects/star-comet](gameplay/effects/star-comet-256.png)](masters/effects/star-comet.png) | [![effects/aim-dot](gameplay/effects/aim-dot-256.png)](masters/effects/aim-dot.png) | [![effects/aim-trajectory](gameplay/effects/aim-trajectory-256.png)](masters/effects/aim-trajectory.png) |

| star-attraction | freeze-field | mega-explosion |
| --- | --- | --- |
| [![effects/star-attraction](gameplay/effects/star-attraction-256.png)](masters/effects/star-attraction.png) | [![effects/freeze-field](gameplay/effects/freeze-field-256.png)](masters/effects/freeze-field.png) | [![effects/mega-explosion](gameplay/effects/mega-explosion-256.png)](masters/effects/mega-explosion.png) |

### Ui

| ribbon | slot | flags |
| --- | --- | --- |
| [![ui/ribbon](gameplay/ui/ribbon-256.png)](masters/ui/ribbon.png) | [![ui/slot](gameplay/ui/slot-256.png)](masters/ui/slot.png) | [![ui/flags](gameplay/ui/flags-256.png)](masters/ui/flags.png) |

| gold-meter | count-badge | purple-meter |
| --- | --- | --- |
| [![ui/gold-meter](gameplay/ui/gold-meter-256.png)](masters/ui/gold-meter.png) | [![ui/count-badge](gameplay/ui/count-badge-256.png)](masters/ui/count-badge.png) | [![ui/purple-meter](gameplay/ui/purple-meter-256.png)](masters/ui/purple-meter.png) |

| hotbar | three-star-ribbon | meter-half |
| --- | --- | --- |
| [![ui/hotbar](gameplay/ui/hotbar-256.png)](masters/ui/hotbar.png) | [![ui/three-star-ribbon](gameplay/ui/three-star-ribbon-256.png)](masters/ui/three-star-ribbon.png) | [![ui/meter-half](gameplay/ui/meter-half-256.png)](masters/ui/meter-half.png) |

| hotbar-assembled |
| --- |
| [![ui/hotbar-assembled](gameplay/ui/hotbar-assembled-256.png)](masters/ui/hotbar-assembled.png) |

### Core

| extra-move | star-magnet | time-freeze |
| --- | --- | --- |
| [![core/extra-move](gameplay/core/extra-move-256.png)](masters/core/extra-move.png) | [![core/star-magnet](gameplay/core/star-magnet-256.png)](masters/core/star-magnet.png) | [![core/time-freeze](gameplay/core/time-freeze-256.png)](masters/core/time-freeze.png) |

| bomb-burst | aim-guide | shuffle |
| --- | --- | --- |
| [![core/bomb-burst](gameplay/core/bomb-burst-256.png)](masters/core/bomb-burst.png) | [![core/aim-guide](gameplay/core/aim-guide-256.png)](masters/core/aim-guide.png) | [![core/shuffle](gameplay/core/shuffle-256.png)](masters/core/shuffle.png) |

| color-pop | rainbow-shot | mega-burst |
| --- | --- | --- |
| [![core/color-pop](gameplay/core/color-pop-256.png)](masters/core/color-pop.png) | [![core/rainbow-shot](gameplay/core/rainbow-shot-256.png)](masters/core/rainbow-shot.png) | [![core/mega-burst](gameplay/core/mega-burst-256.png)](masters/core/mega-burst.png) |

| line-blaster |
| --- |
| [![core/line-blaster](gameplay/core/line-blaster-256.png)](masters/core/line-blaster.png) |

### Collectibles

| blue-booster-bag | purple-booster-crate | gift |
| --- | --- | --- |
| [![collectibles/blue-booster-bag](gameplay/collectibles/blue-booster-bag-256.png)](masters/collectibles/blue-booster-bag.png) | [![collectibles/purple-booster-crate](gameplay/collectibles/purple-booster-crate-256.png)](masters/collectibles/purple-booster-crate.png) | [![collectibles/gift](gameplay/collectibles/gift-256.png)](masters/collectibles/gift.png) |

| booster-bottle | chest-closed |
| --- | --- |
| [![collectibles/booster-bottle](gameplay/collectibles/booster-bottle-256.png)](masters/collectibles/booster-bottle.png) | [![collectibles/chest-closed](gameplay/collectibles/chest-closed-256.png)](masters/collectibles/chest-closed.png) |

### Icons

| plus | ticket | energy |
| --- | --- | --- |
| [![icons/plus](gameplay/icons/plus-256.png)](masters/icons/plus.png) | [![icons/ticket](gameplay/icons/ticket-256.png)](masters/icons/ticket.png) | [![icons/energy](gameplay/icons/energy-256.png)](masters/icons/energy.png) |

| star | gem | cloud |
| --- | --- | --- |
| [![icons/star](gameplay/icons/star-256.png)](masters/icons/star.png) | [![icons/gem](gameplay/icons/gem-256.png)](masters/icons/gem.png) | [![icons/cloud](gameplay/icons/cloud-256.png)](masters/icons/cloud.png) |

### Packs

| brown-booster-bag | chest-open | bottle |
| --- | --- | --- |
| [![packs/brown-booster-bag](gameplay/packs/brown-booster-bag-256.png)](masters/packs/brown-booster-bag.png) | [![packs/chest-open](gameplay/packs/chest-open-256.png)](masters/packs/chest-open.png) | [![packs/bottle](gameplay/packs/bottle-256.png)](masters/packs/bottle.png) |

| star-chest | puff-chest |
| --- | --- |
| [![packs/star-chest](gameplay/packs/star-chest-256.png)](masters/packs/star-chest.png) | [![packs/puff-chest](gameplay/packs/puff-chest-256.png)](masters/packs/puff-chest.png) |

### States · Rainbow Shot

| idle | selected | charging |
| --- | --- | --- |
| [![states/rainbow-shot/idle](gameplay/states/rainbow-shot/idle-256.png)](masters/states/rainbow-shot/idle.png) | [![states/rainbow-shot/selected](gameplay/states/rainbow-shot/selected-256.png)](masters/states/rainbow-shot/selected.png) | [![states/rainbow-shot/charging](gameplay/states/rainbow-shot/charging-256.png)](masters/states/rainbow-shot/charging.png) |

| activated | effect |
| --- | --- |
| [![states/rainbow-shot/activated](gameplay/states/rainbow-shot/activated-256.png)](masters/states/rainbow-shot/activated.png) | [![states/rainbow-shot/effect](gameplay/states/rainbow-shot/effect-256.png)](masters/states/rainbow-shot/effect.png) |

### States · Bomb Burst

| idle | selected | charging |
| --- | --- | --- |
| [![states/bomb-burst/idle](gameplay/states/bomb-burst/idle-256.png)](masters/states/bomb-burst/idle.png) | [![states/bomb-burst/selected](gameplay/states/bomb-burst/selected-256.png)](masters/states/bomb-burst/selected.png) | [![states/bomb-burst/charging](gameplay/states/bomb-burst/charging-256.png)](masters/states/bomb-burst/charging.png) |

| activated | effect |
| --- | --- |
| [![states/bomb-burst/activated](gameplay/states/bomb-burst/activated-256.png)](masters/states/bomb-burst/activated.png) | [![states/bomb-burst/effect](gameplay/states/bomb-burst/effect-256.png)](masters/states/bomb-burst/effect.png) |

### States · Line Blaster

| idle | selected | charging |
| --- | --- | --- |
| [![states/line-blaster/idle](gameplay/states/line-blaster/idle-256.png)](masters/states/line-blaster/idle.png) | [![states/line-blaster/selected](gameplay/states/line-blaster/selected-256.png)](masters/states/line-blaster/selected.png) | [![states/line-blaster/charging](gameplay/states/line-blaster/charging-256.png)](masters/states/line-blaster/charging.png) |

| activated | effect |
| --- | --- |
| [![states/line-blaster/activated](gameplay/states/line-blaster/activated-256.png)](masters/states/line-blaster/activated.png) | [![states/line-blaster/effect](gameplay/states/line-blaster/effect-256.png)](masters/states/line-blaster/effect.png) |

### States · Color Pop

| idle | selected | charging |
| --- | --- | --- |
| [![states/color-pop/idle](gameplay/states/color-pop/idle-256.png)](masters/states/color-pop/idle.png) | [![states/color-pop/selected](gameplay/states/color-pop/selected-256.png)](masters/states/color-pop/selected.png) | [![states/color-pop/charging](gameplay/states/color-pop/charging-256.png)](masters/states/color-pop/charging.png) |

| activated | effect |
| --- | --- |
| [![states/color-pop/activated](gameplay/states/color-pop/activated-256.png)](masters/states/color-pop/activated.png) | [![states/color-pop/effect](gameplay/states/color-pop/effect-256.png)](masters/states/color-pop/effect.png) |

### States · Shuffle

| idle | selected | charging |
| --- | --- | --- |
| [![states/shuffle/idle](gameplay/states/shuffle/idle-256.png)](masters/states/shuffle/idle.png) | [![states/shuffle/selected](gameplay/states/shuffle/selected-256.png)](masters/states/shuffle/selected.png) | [![states/shuffle/charging](gameplay/states/shuffle/charging-256.png)](masters/states/shuffle/charging.png) |

| activated | effect |
| --- | --- |
| [![states/shuffle/activated](gameplay/states/shuffle/activated-256.png)](masters/states/shuffle/activated.png) | [![states/shuffle/effect](gameplay/states/shuffle/effect-256.png)](masters/states/shuffle/effect.png) |

### States · Extra Move

| idle | selected | charging |
| --- | --- | --- |
| [![states/extra-move/idle](gameplay/states/extra-move/idle-256.png)](masters/states/extra-move/idle.png) | [![states/extra-move/selected](gameplay/states/extra-move/selected-256.png)](masters/states/extra-move/selected.png) | [![states/extra-move/charging](gameplay/states/extra-move/charging-256.png)](masters/states/extra-move/charging.png) |

| activated | effect |
| --- | --- |
| [![states/extra-move/activated](gameplay/states/extra-move/activated-256.png)](masters/states/extra-move/activated.png) | [![states/extra-move/effect](gameplay/states/extra-move/effect-256.png)](masters/states/extra-move/effect.png) |

### States · Aim Guide

| idle | selected | charging |
| --- | --- | --- |
| [![states/aim-guide/idle](gameplay/states/aim-guide/idle-256.png)](masters/states/aim-guide/idle.png) | [![states/aim-guide/selected](gameplay/states/aim-guide/selected-256.png)](masters/states/aim-guide/selected.png) | [![states/aim-guide/charging](gameplay/states/aim-guide/charging-256.png)](masters/states/aim-guide/charging.png) |

| activated | effect |
| --- | --- |
| [![states/aim-guide/activated](gameplay/states/aim-guide/activated-256.png)](masters/states/aim-guide/activated.png) | [![states/aim-guide/effect](gameplay/states/aim-guide/effect-256.png)](masters/states/aim-guide/effect.png) |

### States · Star Magnet

| idle | selected | charging |
| --- | --- | --- |
| [![states/star-magnet/idle](gameplay/states/star-magnet/idle-256.png)](masters/states/star-magnet/idle.png) | [![states/star-magnet/selected](gameplay/states/star-magnet/selected-256.png)](masters/states/star-magnet/selected.png) | [![states/star-magnet/charging](gameplay/states/star-magnet/charging-256.png)](masters/states/star-magnet/charging.png) |

| activated | effect |
| --- | --- |
| [![states/star-magnet/activated](gameplay/states/star-magnet/activated-256.png)](masters/states/star-magnet/activated.png) | [![states/star-magnet/effect](gameplay/states/star-magnet/effect-256.png)](masters/states/star-magnet/effect.png) |

### States · Time Freeze

| idle | selected | charging |
| --- | --- | --- |
| [![states/time-freeze/idle](gameplay/states/time-freeze/idle-256.png)](masters/states/time-freeze/idle.png) | [![states/time-freeze/selected](gameplay/states/time-freeze/selected-256.png)](masters/states/time-freeze/selected.png) | [![states/time-freeze/charging](gameplay/states/time-freeze/charging-256.png)](masters/states/time-freeze/charging.png) |

| activated | effect |
| --- | --- |
| [![states/time-freeze/activated](gameplay/states/time-freeze/activated-256.png)](masters/states/time-freeze/activated.png) | [![states/time-freeze/effect](gameplay/states/time-freeze/effect-256.png)](masters/states/time-freeze/effect.png) |

### States · Mega Burst

| idle | selected | charging |
| --- | --- | --- |
| [![states/mega-burst/idle](gameplay/states/mega-burst/idle-256.png)](masters/states/mega-burst/idle.png) | [![states/mega-burst/selected](gameplay/states/mega-burst/selected-256.png)](masters/states/mega-burst/selected.png) | [![states/mega-burst/charging](gameplay/states/mega-burst/charging-256.png)](masters/states/mega-burst/charging.png) |

| activated | effect |
| --- | --- |
| [![states/mega-burst/activated](gameplay/states/mega-burst/activated-256.png)](masters/states/mega-burst/activated.png) | [![states/mega-burst/effect](gameplay/states/mega-burst/effect-256.png)](masters/states/mega-burst/effect.png) |

### Ui Icons

| rainbow-shot | bomb-burst | line-blaster |
| --- | --- | --- |
| [![ui-icons/rainbow-shot](gameplay/ui-icons/rainbow-shot-256.png)](masters/ui-icons/rainbow-shot.png) | [![ui-icons/bomb-burst](gameplay/ui-icons/bomb-burst-256.png)](masters/ui-icons/bomb-burst.png) | [![ui-icons/line-blaster](gameplay/ui-icons/line-blaster-256.png)](masters/ui-icons/line-blaster.png) |

| color-pop | shuffle | extra-move |
| --- | --- | --- |
| [![ui-icons/color-pop](gameplay/ui-icons/color-pop-256.png)](masters/ui-icons/color-pop.png) | [![ui-icons/shuffle](gameplay/ui-icons/shuffle-256.png)](masters/ui-icons/shuffle.png) | [![ui-icons/extra-move](gameplay/ui-icons/extra-move-256.png)](masters/ui-icons/extra-move.png) |

| aim-guide | star-magnet | time-freeze |
| --- | --- | --- |
| [![ui-icons/aim-guide](gameplay/ui-icons/aim-guide-256.png)](masters/ui-icons/aim-guide.png) | [![ui-icons/star-magnet](gameplay/ui-icons/star-magnet-256.png)](masters/ui-icons/star-magnet.png) | [![ui-icons/time-freeze](gameplay/ui-icons/time-freeze-256.png)](masters/ui-icons/time-freeze.png) |

| mega-burst |
| --- |
| [![ui-icons/mega-burst](gameplay/ui-icons/mega-burst-256.png)](masters/ui-icons/mega-burst.png) |

### Examples

| rainbow-shot-action | bomb-burst-action |
| --- | --- |
| [![examples/rainbow-shot-action](gameplay/examples/rainbow-shot-action-256.png)](masters/examples/rainbow-shot-action.png) | [![examples/bomb-burst-action](gameplay/examples/bomb-burst-action-256.png)](masters/examples/bomb-burst-action.png) |

