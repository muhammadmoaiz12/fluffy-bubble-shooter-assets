# Bloom Launcher · v1

Individual board-derived renders created with built-in image generation using the supplied original board and a common three-quarter-front master. The original board is preserved byte-for-byte in `references/`. These are new renders, not pixel-exact crops or a 3D model.

## Contents

Eight views, six full-cannon expressions, three gameplay poses, six component images (body, flower barrel, gold ring, flower crown, leaves and base), six effects (petal, bloom shot, sparkle, charge ring, aim dot and target reticle), six silhouettes, one app tile, and five composite animation key poses. Every master is 1024 square with 128/256/384/512 PNG and lossless WebP exports. Idle and happy are explicit aliases of the shared front master.

## Integration

Use straight alpha/source-over blending. Cannon baseline is y=922 on a 1024 canvas, inside an 860px envelope. See per-image alpha bounds. Effects and components use centered anchors. Components are separately generated reference assets, not pixel-registered rig layers; align and mask them before assembling animation. Independently generated angles may have small geometry differences, so review continuity before a turntable animation.

The five firing frames are deterministic squash/recoil/FX composites, not independently drawn continuous animation. Durations are illustrative. Aim dots and reticle must follow engine-computed legal targeting; no baked trajectory or cannon collision logic is supplied. Petal Nudge remains manually triggered after charging and only repositions eligible creatures to valid non-overlapping spots. This asset pack changes no gameplay rules or balance values.

## QA and provenance

Open `preview.html` or `preview.jpg`. The manifest records all actual file hashes, dimensions, origins and alpha bounds. Generation prompts and cleanup details are in `generation.json`. Technical checks cover decoding, transparency, canvas sizes and lossless PNG/WebP equivalence. Tiny stray pixels are removed and enclosed solid-body alpha filled; VFX retain translucency. Visual consistency, muzzle alignment, timing and target-device performance still need in-game review. No claim of engine-tested production lock. Existing cannon and locked family assets remain unchanged.

<!-- asset-gallery:start -->
## Individual asset previews

Every unique master is shown below, including animation frames and explicitly documented aliases. Click an image to open its PNG. Resolution exports repeat the same artwork.

### Animation

| 00 Idle | 01 Charge 1 | 02 Charge 2 |
| --- | --- | --- |
| [![00 Idle](masters/animation/00-idle.png)](masters/animation/00-idle.png) | [![01 Charge 1](masters/animation/01-charge-1.png)](masters/animation/01-charge-1.png) | [![02 Charge 2](masters/animation/02-charge-2.png)](masters/animation/02-charge-2.png) |

| 03 Release | 04 Recoil |
| --- | --- |
| [![03 Release](masters/animation/03-release.png)](masters/animation/03-release.png) | [![04 Recoil](masters/animation/04-recoil.png)](masters/animation/04-recoil.png) |


### Components

| Base | Body | Flower Barrel |
| --- | --- | --- |
| [![Base](masters/components/base.png)](masters/components/base.png) | [![Body](masters/components/body.png)](masters/components/body.png) | [![Flower Barrel](masters/components/flower-barrel.png)](masters/components/flower-barrel.png) |

| Flower Crown | Gold Ring | Leaves |
| --- | --- | --- |
| [![Flower Crown](masters/components/flower-crown.png)](masters/components/flower-crown.png) | [![Gold Ring](masters/components/gold-ring.png)](masters/components/gold-ring.png) | [![Leaves](masters/components/leaves.png)](masters/components/leaves.png) |


### Effects

| Aim Dot | Bloom Shot | Charge Ring |
| --- | --- | --- |
| [![Aim Dot](masters/effects/aim-dot.png)](masters/effects/aim-dot.png) | [![Bloom Shot](masters/effects/bloom-shot.png)](masters/effects/bloom-shot.png) | [![Charge Ring](masters/effects/charge-ring.png)](masters/effects/charge-ring.png) |

| Petal | Sparkle | Target Reticle |
| --- | --- | --- |
| [![Petal](masters/effects/petal.png)](masters/effects/petal.png) | [![Sparkle](masters/effects/sparkle.png)](masters/effects/sparkle.png) | [![Target Reticle](masters/effects/target-reticle.png)](masters/effects/target-reticle.png) |


### Expressions

| Confident | Excited | Focused |
| --- | --- | --- |
| [![Confident](masters/expressions/confident.png)](masters/expressions/confident.png) | [![Excited](masters/expressions/excited.png)](masters/expressions/excited.png) | [![Focused](masters/expressions/focused.png)](masters/expressions/focused.png) |

| Happy | Sleeping | Surprised |
| --- | --- | --- |
| [![Happy](masters/expressions/happy.png)](masters/expressions/happy.png) | [![Sleeping](masters/expressions/sleeping.png)](masters/expressions/sleeping.png) | [![Surprised](masters/expressions/surprised.png)](masters/expressions/surprised.png) |


### Icons

| App Tile |
| --- |
| [![App Tile](masters/icons/app-tile.png)](masters/icons/app-tile.png) |


### Poses

| Aiming Charged | Firing | Idle |
| --- | --- | --- |
| [![Aiming Charged](masters/poses/aiming-charged.png)](masters/poses/aiming-charged.png) | [![Firing](masters/poses/firing.png)](masters/poses/firing.png) | [![Idle](masters/poses/idle.png)](masters/poses/idle.png) |


### Silhouettes

| Back | Bottom | Front |
| --- | --- | --- |
| [![Back](masters/silhouettes/back.png)](masters/silhouettes/back.png) | [![Bottom](masters/silhouettes/bottom.png)](masters/silhouettes/bottom.png) | [![Front](masters/silhouettes/front.png)](masters/silhouettes/front.png) |

| Right Side | Three Quarter Front | Top |
| --- | --- | --- |
| [![Right Side](masters/silhouettes/right-side.png)](masters/silhouettes/right-side.png) | [![Three Quarter Front](masters/silhouettes/three-quarter-front.png)](masters/silhouettes/three-quarter-front.png) | [![Top](masters/silhouettes/top.png)](masters/silhouettes/top.png) |


### Views

| Back | Bottom | Front |
| --- | --- | --- |
| [![Back](masters/views/back.png)](masters/views/back.png) | [![Bottom](masters/views/bottom.png)](masters/views/bottom.png) | [![Front](masters/views/front.png)](masters/views/front.png) |

| Left Side | Right Side | Three Quarter Back |
| --- | --- | --- |
| [![Left Side](masters/views/left-side.png)](masters/views/left-side.png) | [![Right Side](masters/views/right-side.png)](masters/views/right-side.png) | [![Three Quarter Back](masters/views/three-quarter-back.png)](masters/views/three-quarter-back.png) |

| Three Quarter Front | Top |
| --- | --- |
| [![Three Quarter Front](masters/views/three-quarter-front.png)](masters/views/three-quarter-front.png) | [![Top](masters/views/top.png)](masters/views/top.png) |


<!-- asset-gallery:end -->
