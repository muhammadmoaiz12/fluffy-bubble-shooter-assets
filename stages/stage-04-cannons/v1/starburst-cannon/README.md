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
