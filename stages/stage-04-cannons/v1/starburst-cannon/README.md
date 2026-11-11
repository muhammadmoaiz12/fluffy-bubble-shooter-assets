# Starburst Cannon · v1

Individual renders generated from the supplied original Starburst Cannon board and a shared three-quarter-front master. Original board preserved byte-for-byte in `references/`. These are board-derived renders, not pixel-exact extractions or a 3D model.

## Contents

Eight views, six expressions, three gameplay poses, five effects (star projectile, star trail, muzzle flash, aim dot and target brackets), ability icon and composed app tile, three silhouettes, and five composite firing key poses. All masters are 1024 square with 64/128/256/512 PNG and lossless WebP exports. Happy is an explicit alias of the shared master.

## Integration

Use straight alpha/source-over blending. Cannon baseline is y=922 on a 1024 canvas, inside an 860px envelope. Center-bottom anchor is recorded as [0.5,0.9]; consult alpha bounds for precise placement. Effects use centered anchors. Render aim dots from the real engine trajectory and target brackets around eligible targets only. None of these art assets changes physics, hitboxes or automatic targeting.

The active cannon power remains manually triggered after charge. Clearing scope, eligible obstacles and balance remain governed by existing GDD rules, not by a broad visual blast. No gameplay code, numeric tuning or changes to locked rules are included.

The five animation frames are deterministic squash/recoil and effect composites, not independently drawn animation frames or a rig. Durations are illustrative. Individual generated views can have geometric differences; review turntable continuity, muzzle alignment and expression transitions in-engine before production lock.

## QA and provenance

Open `preview.html` or `preview.jpg`. `manifest.json` records actual file hashes, origins, dimensions and alpha bounds. `generation.json` retains prompts and processing details. Checks cover image decoding, transparency, consistent dimensions and lossless PNG/WebP equivalence. Faint stray pixels are removed, enclosed opaque-body alpha filled, and fine fur/glow antialiasing retained. The pack has not been tested in the game. Existing cannons and locked characters remain unchanged.

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

| Aim Dot | Muzzle Flash | Star Projectile |
| --- | --- | --- |
| [![Aim Dot](masters/effects/aim-dot.png)](masters/effects/aim-dot.png) | [![Muzzle Flash](masters/effects/muzzle-flash.png)](masters/effects/muzzle-flash.png) | [![Star Projectile](masters/effects/star-projectile.png)](masters/effects/star-projectile.png) |

| Star Trail | Target Brackets |
| --- | --- |
| [![Star Trail](masters/effects/star-trail.png)](masters/effects/star-trail.png) | [![Target Brackets](masters/effects/target-brackets.png)](masters/effects/target-brackets.png) |


### Expressions

| Cheerful Wink | Excited | Focused |
| --- | --- | --- |
| [![Cheerful Wink](masters/expressions/cheerful-wink.png)](masters/expressions/cheerful-wink.png) | [![Excited](masters/expressions/excited.png)](masters/expressions/excited.png) | [![Focused](masters/expressions/focused.png)](masters/expressions/focused.png) |

| Happy | Sleepy | Surprised |
| --- | --- | --- |
| [![Happy](masters/expressions/happy.png)](masters/expressions/happy.png) | [![Sleepy](masters/expressions/sleepy.png)](masters/expressions/sleepy.png) | [![Surprised](masters/expressions/surprised.png)](masters/expressions/surprised.png) |


### Icons

| App Tile | Starburst Clear |
| --- | --- |
| [![App Tile](masters/icons/app-tile.png)](masters/icons/app-tile.png) | [![Starburst Clear](masters/icons/starburst-clear.png)](masters/icons/starburst-clear.png) |


### Poses

| Aiming Charged | Firing | Idle |
| --- | --- | --- |
| [![Aiming Charged](masters/poses/aiming-charged.png)](masters/poses/aiming-charged.png) | [![Firing](masters/poses/firing.png)](masters/poses/firing.png) | [![Idle](masters/poses/idle.png)](masters/poses/idle.png) |


### Silhouettes

| Back | Front | Left |
| --- | --- | --- |
| [![Back](masters/silhouettes/back.png)](masters/silhouettes/back.png) | [![Front](masters/silhouettes/front.png)](masters/silhouettes/front.png) | [![Left](masters/silhouettes/left.png)](masters/silhouettes/left.png) |


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
