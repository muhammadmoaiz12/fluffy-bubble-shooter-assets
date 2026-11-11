# Cloud Sling · v1

Individual assets generated from the user-provided detailed Cloud Sling board and a shared 3/4-front master. The original board is preserved unchanged one directory above. These are newly generated board-derived renders, not exact crops or a rigged 3D model. Existing locked family artwork is unchanged.

## Assets

Eight views; idle and firing poses; six expressions; cannon/cloud/star/wind icons and a composed app tile; five aiming/firing effect components; three silhouettes; eight composite firing frames. PNG masters are 1024 square. Every asset includes 256/384/512 PNG and lossless WebP exports. `manifest.json` lists all actual files and hashes; `generation.json` retains every prompt and processing method.

## Use

Open `preview.html` or `preview.jpg`. Cannon views/expressions use a bottom baseline at y=922 on a 1024 canvas. Their artwork fits within 860px; see individual alpha bounds. Use straight alpha/source-over rendering. Aiming dot, bounce marker and target brackets are separate reusable UI components: position them from the real physics simulation, never use a baked trajectory to determine hits. Cloud Sling remains passive aiming assistance; it does not auto-target, alter hitboxes or guarantee shots. No game rules are changed by this pack.

The eight firing frames are deterministic squash/recoil and FX composites using the shared generated poses; they are not independently drawn animation keyframes. Timing in `animation.json` is illustrative and needs tuning. The icons and collection views are raster images, not editable vector or 3D source.

## QA and limitations

Files are decoded and checked for transparency, consistent canvas sizes, matching lossless PNG/WebP pixel data, and hashes. Cleaned images remove faint stray pixels and fill enclosed opaque-body alpha. Fine fur and glow remain antialiased. AI-generated angles may have small geometric differences; inspect turntable/expression continuity and muzzle alignment in the game before production lock. This pack has not been engine-tested. No new upgrade tiers or unshown gameplay mechanics are invented.

<!-- asset-gallery:start -->
## Individual asset previews

Every unique master is shown below, including animation frames and explicitly documented aliases. Click an image to open its PNG. Resolution exports repeat the same artwork.

### Animation

| Fire 00 | Fire 01 | Fire 02 |
| --- | --- | --- |
| [![Fire 00](masters/animation/fire-00.png)](masters/animation/fire-00.png) | [![Fire 01](masters/animation/fire-01.png)](masters/animation/fire-01.png) | [![Fire 02](masters/animation/fire-02.png)](masters/animation/fire-02.png) |

| Fire 03 | Fire 04 | Fire 05 |
| --- | --- | --- |
| [![Fire 03](masters/animation/fire-03.png)](masters/animation/fire-03.png) | [![Fire 04](masters/animation/fire-04.png)](masters/animation/fire-04.png) | [![Fire 05](masters/animation/fire-05.png)](masters/animation/fire-05.png) |

| Fire 06 | Fire 07 |
| --- | --- |
| [![Fire 06](masters/animation/fire-06.png)](masters/animation/fire-06.png) | [![Fire 07](masters/animation/fire-07.png)](masters/animation/fire-07.png) |


### Effects

| Aim Dot | Charge Ring | Muzzle Cloud |
| --- | --- | --- |
| [![Aim Dot](masters/effects/aim-dot.png)](masters/effects/aim-dot.png) | [![Charge Ring](masters/effects/charge-ring.png)](masters/effects/charge-ring.png) | [![Muzzle Cloud](masters/effects/muzzle-cloud.png)](masters/effects/muzzle-cloud.png) |

| Ricochet Marker | Target Brackets |
| --- | --- |
| [![Ricochet Marker](masters/effects/ricochet-marker.png)](masters/effects/ricochet-marker.png) | [![Target Brackets](masters/effects/target-brackets.png)](masters/effects/target-brackets.png) |


### Expressions

| Excited | Focused | Happy |
| --- | --- | --- |
| [![Excited](masters/expressions/excited.png)](masters/expressions/excited.png) | [![Focused](masters/expressions/focused.png)](masters/expressions/focused.png) | [![Happy](masters/expressions/happy.png)](masters/expressions/happy.png) |

| Sleeping | Surprised | Wink |
| --- | --- | --- |
| [![Sleeping](masters/expressions/sleeping.png)](masters/expressions/sleeping.png) | [![Surprised](masters/expressions/surprised.png)](masters/expressions/surprised.png) | [![Wink](masters/expressions/wink.png)](masters/expressions/wink.png) |


### Icons

| App Tile | Cannon | Cloud |
| --- | --- | --- |
| [![App Tile](masters/icons/app-tile.png)](masters/icons/app-tile.png) | [![Cannon](masters/icons/cannon.png)](masters/icons/cannon.png) | [![Cloud](masters/icons/cloud.png)](masters/icons/cloud.png) |

| Star | Wind |
| --- | --- |
| [![Star](masters/icons/star.png)](masters/icons/star.png) | [![Wind](masters/icons/wind.png)](masters/icons/wind.png) |


### Poses

| Firing | Idle |
| --- | --- |
| [![Firing](masters/poses/firing.png)](masters/poses/firing.png) | [![Idle](masters/poses/idle.png)](masters/poses/idle.png) |


### Silhouettes

| Back | Front | Side Left |
| --- | --- | --- |
| [![Back](masters/silhouettes/back.png)](masters/silhouettes/back.png) | [![Front](masters/silhouettes/front.png)](masters/silhouettes/front.png) | [![Side Left](masters/silhouettes/side-left.png)](masters/silhouettes/side-left.png) |


### Views

| Back | Bottom | Front |
| --- | --- | --- |
| [![Back](masters/views/back.png)](masters/views/back.png) | [![Bottom](masters/views/bottom.png)](masters/views/bottom.png) | [![Front](masters/views/front.png)](masters/views/front.png) |

| Side Left | Side Right | Three Quarter Back |
| --- | --- | --- |
| [![Side Left](masters/views/side-left.png)](masters/views/side-left.png) | [![Side Right](masters/views/side-right.png)](masters/views/side-right.png) | [![Three Quarter Back](masters/views/three-quarter-back.png)](masters/views/three-quarter-back.png) |

| Three Quarter Front | Top |
| --- | --- |
| [![Three Quarter Front](masters/views/three-quarter-front.png)](masters/views/three-quarter-front.png) | [![Top](masters/views/top.png)](masters/views/top.png) |


<!-- asset-gallery:end -->
