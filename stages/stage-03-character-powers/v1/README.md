# Stage 03 — Family powers · v1

Original concept board recovered from ChatGPT Library, verified against its recorded SHA-256, and preserved unchanged in `references/`. Six separate generated transparent effect masters interpret the proposed powers on that board. These are new effect artwork, not pixel-exact extractions of the board diagrams.

Open `preview.html` for individual effects with existing locked characters; `preview.png` is the contact sheet. Character reference PNGs are byte-identical copies of locked masters, not regenerated artwork. Mossmops also includes the original locked small sprite for its bud.

## Contents

- Six RGBA PNG masters at 1254 × 1254.
- Each effect exported at 256, 384 and 512 pixels, in PNG and lossless WebP (36 gameplay exports).
- Original board, seven exact locked character references, manifest, checksums, prompts and provenance.

## Integration

Load with straight alpha and source-over blending. Preserve soft alpha in glow effects. Master and export canvases use a centered anchor; dimensions include transparent padding. See alpha bounds in manifest for placement. Heart Link endpoints need placement across target groups; Sky Dash follows motion direction. Rings are reusable overlays, and references in the preview are illustrative.

Effects are static sprites intended for runtime opacity, scale, rotation and translation animation. This pack does not include authored animation frame sequences, executable powers, target selection, or tuned gameplay timings. Powers remain proposed as on the source board. Validate readability, overlap, texture memory and motion on target devices before release. No existing files, character designs or gameplay rules were changed.

## Provenance and QA

`provenance.json` records the recovered board. `generation.json` records the built-in image generation prompts. Masters retain generated alpha; smaller exports are deterministic resizes. `manifest.json` records sizes, alpha bounds, family mapping and SHA-256 checksums. Technical QA checks decoding, alpha, dimensions, lossless WebP equivalence and unchanged locked reference bytes; it is not a claim of engine-tested production readiness.

<!-- asset-gallery:start -->
## Individual asset previews

Every unique master is shown below, including animation frames and explicitly documented aliases. Click an image to open its PNG. Resolution exports repeat the same artwork.

### Effects

| Heart Link | Magic Shift | Seed Bloom |
| --- | --- | --- |
| [![Heart Link](masters/heart-link.png)](masters/heart-link.png) | [![Magic Shift](masters/magic-shift.png)](masters/magic-shift.png) | [![Seed Bloom](masters/seed-bloom.png)](masters/seed-bloom.png) |

| Sky Dash | Sun Burst | Sweet Rescue |
| --- | --- | --- |
| [![Sky Dash](masters/sky-dash.png)](masters/sky-dash.png) | [![Sun Burst](masters/sun-burst.png)](masters/sun-burst.png) | [![Sweet Rescue](masters/sweet-rescue.png)](masters/sweet-rescue.png) |


<!-- asset-gallery:end -->
