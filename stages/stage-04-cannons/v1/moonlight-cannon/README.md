# Moonlight Cannon · v1

Individual board-derived renders generated using the supplied original board and a shared three-quarter-front master. Original PNG preserved byte-for-byte in `references/`. These are newly generated renders, not pixel-exact extractions or a rigged 3D model.

## Contents

Eight views, six full-cannon expressions, idle/firing/charged-aim poses, five isolated effects (projectile, trail, muzzle halo, aim dot, target brackets), an ability icon and composed app tile, board-matched silhouettes, and five composite firing frames. All masters are 1024 square. Every master includes 64/128/256/512 PNG and lossless WebP exports. Manifest records aliases and generated/composite origins explicitly. Source-board texture close-ups remain in the reference board, not misrepresented as seamless texture maps.

## Integration

Straight alpha/source-over blending. Cannon baseline y=922 on a 1024 canvas; center-bottom anchor [0.5,0.9]. Art fits inside an 860px envelope. Consult individual alpha bounds for placement. Effects use centered anchors. Compute aim-dot placement from real projectile physics; brackets do not grant targeting validity or automatic hits. Existing locked characters should supply all target portraits; board thumbnails are not new creature assets.

Moon Pause temporarily suspends eligible authored hazards. It does not bypass the danger line or shot exhaustion. Active powers require player action after charging. This pack changes no gameplay rules, numeric tuning, unlocks, currencies or collision behavior.

Five animation frames use deterministic squash/recoil and effect compositing, not independently drawn continuous animation. Timings are illustrative. Review muzzle placement and transitions in-engine. Generated views can have small geometry differences; check continuity before turntable use.

## QA and provenance

`preview.html` and `preview.jpg` show the set. `manifest.json` records actual file hashes, dimensions, origins and alpha bounds. `generation.json` retains prompts and cleanup details. Technical checks cover decoding, transparent alpha, dimensions and lossless PNG/WebP pixel equivalence. Stray pixels are removed and enclosed solid-body alpha filled; glow transparency remains. No claim of engine-tested production lock. Earlier cannons and locked character files remain unchanged.

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


### Effects

| Aim Dot | Muzzle Flash | Projectile |
| --- | --- | --- |
| [![Aim Dot](masters/effects/aim-dot.png)](masters/effects/aim-dot.png) | [![Muzzle Flash](masters/effects/muzzle-flash.png)](masters/effects/muzzle-flash.png) | [![Projectile](masters/effects/projectile.png)](masters/effects/projectile.png) |

| Target Brackets | Trail |
| --- | --- |
| [![Target Brackets](masters/effects/target-brackets.png)](masters/effects/target-brackets.png) | [![Trail](masters/effects/trail.png)](masters/effects/trail.png) |


### Expressions

| Celebrating | Excited | Focused |
| --- | --- | --- |
| [![Celebrating](masters/expressions/celebrating.png)](masters/expressions/celebrating.png) | [![Excited](masters/expressions/excited.png)](masters/expressions/excited.png) | [![Focused](masters/expressions/focused.png)](masters/expressions/focused.png) |

| Happy | Sleeping | Surprised |
| --- | --- | --- |
| [![Happy](masters/expressions/happy.png)](masters/expressions/happy.png) | [![Sleeping](masters/expressions/sleeping.png)](masters/expressions/sleeping.png) | [![Surprised](masters/expressions/surprised.png)](masters/expressions/surprised.png) |


### Icons

| Ability | App Tile |
| --- | --- |
| [![Ability](masters/icons/ability.png)](masters/icons/ability.png) | [![App Tile](masters/icons/app-tile.png)](masters/icons/app-tile.png) |


### Poses

| Aiming Charged | Firing | Idle |
| --- | --- | --- |
| [![Aiming Charged](masters/poses/aiming-charged.png)](masters/poses/aiming-charged.png) | [![Firing](masters/poses/firing.png)](masters/poses/firing.png) | [![Idle](masters/poses/idle.png)](masters/poses/idle.png) |


### Silhouettes

| Back | Front | Left |
| --- | --- | --- |
| [![Back](masters/silhouettes/back.png)](masters/silhouettes/back.png) | [![Front](masters/silhouettes/front.png)](masters/silhouettes/front.png) | [![Left](masters/silhouettes/left.png)](masters/silhouettes/left.png) |

| Three Quarter Front |
| --- |
| [![Three Quarter Front](masters/silhouettes/three-quarter-front.png)](masters/silhouettes/three-quarter-front.png) |


### Views

| Back | Bottom | Front |
| --- | --- | --- |
| [![Back](masters/views/back.png)](masters/views/back.png) | [![Bottom](masters/views/bottom.png)](masters/views/bottom.png) | [![Front](masters/views/front.png)](masters/views/front.png) |

| Left | Right | Three Quarter Back |
| --- | --- | --- |
| [![Left](masters/views/left.png)](masters/views/left.png) | [![Right](masters/views/right.png)](masters/views/right.png) | [![Three Quarter Back](masters/views/three-quarter-back.png)](masters/views/three-quarter-back.png) |

| Three Quarter Front | Top |
| --- | --- |
| [![Three Quarter Front](masters/views/three-quarter-front.png)](masters/views/three-quarter-front.png) | [![Top](masters/views/top.png)](masters/views/top.png) |


<!-- asset-gallery:end -->
