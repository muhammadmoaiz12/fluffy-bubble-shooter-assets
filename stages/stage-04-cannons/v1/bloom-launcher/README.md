# Bloom Launcher · v1

Individual board-derived renders created with built-in image generation using the supplied original board and a common three-quarter-front master. The original board is preserved byte-for-byte in `references/`. These are new renders, not pixel-exact crops or a 3D model.

## Contents

Eight views, six full-cannon expressions, three gameplay poses, six component images (body, flower barrel, gold ring, flower crown, leaves and base), six effects (petal, bloom shot, sparkle, charge ring, aim dot and target reticle), six silhouettes, one app tile, and five composite animation key poses. Every master is 1024 square with 128/256/384/512 PNG and lossless WebP exports. Idle and happy are explicit aliases of the shared front master.

## Integration

Use straight alpha/source-over blending. Cannon baseline is y=922 on a 1024 canvas, inside an 860px envelope. See per-image alpha bounds. Effects and components use centered anchors. Components are separately generated reference assets, not pixel-registered rig layers; align and mask them before assembling animation. Independently generated angles may have small geometry differences, so review continuity before a turntable animation.

The five firing frames are deterministic squash/recoil/FX composites, not independently drawn continuous animation. Durations are illustrative. Aim dots and reticle must follow engine-computed legal targeting; no baked trajectory or cannon collision logic is supplied. Petal Nudge remains manually triggered after charging and only repositions eligible creatures to valid non-overlapping spots. This asset pack changes no gameplay rules or balance values.

## QA and provenance

Open `preview.html` or `preview.jpg`. The manifest records all actual file hashes, dimensions, origins and alpha bounds. Generation prompts and cleanup details are in `generation.json`. Technical checks cover decoding, transparency, canvas sizes and lossless PNG/WebP equivalence. Tiny stray pixels are removed and enclosed solid-body alpha filled; VFX retain translucency. Visual consistency, muzzle alignment, timing and target-device performance still need in-game review. No claim of engine-tested production lock. Existing cannon and locked family assets remain unchanged.
