# Rosybuns v1 — integration candidate

Prepared from the three user-supplied locked reference sheets using the built-in image generator, followed by explicitly authorized deterministic transparency cleanup and export preparation. Original reference files remain untouched under `references/locked/rosybuns/` at repository root.

## Included

- Three core forms: small, medium and giant (512 / 768 / 1024 px PNG masters).
- Nine standard expressions plus a hit reaction, with the same medium silhouette and framing.
- Eight nominal 45-degree turntable directions (independent 2D renders, not a calibrated 3D model).
- Evolution sprite with baked-in golden light effects.
- PNG animation sequences: six bounce frames, four blink frames and five hit/pop frames; atlas PNGs and timing metadata included.
- Nine optional component cutouts: fur body, left/right ears, tuft, left/right eyes, mouth, left/right cheeks. These are preparation parts, not a recovered source rig; the full sprites are the recommended integration path.
- Lossless WebP game exports at 128, 256 and 512 px, static TypeScript asset map, metadata, generation provenance and SHA-256 inventory.
- Light/dark contact sheets, component preview, animated preview and an offline interactive viewer (`preview.html`). Download the repo and open the viewer locally; GitHub displays HTML as source rather than running it.

## Using in the game

Use `assets.ts` for static image bundling or select files under `gameplay/256/` to start. Keep the sprite canvas and pivot consistent when switching expressions. Metadata paths are relative to this folder. Pivot estimates are `[0.5, 0.57]` for ordinary sprites; collision-radius estimates exclude decorative ears/tuft. Keep the small:medium:giant gameplay collision diameter ratio at 0.75:1:1.5; export resolution does not determine physical size. Tune the estimated radius in the actual game.

Images have straight RGBA alpha; let the image loader perform the renderer's required premultiplication. Do not apply alpha twice. Use the provided animation rects and durations when reading an atlas. The final hit/pop frame is intentionally transparent. Standard animations use deterministic transforms and eyelid compositing rather than independently regenerated frames.

## Status and limits

This is a usable **integration candidate**, not a claim of production certification. Technical file validation is recorded in `qa/validation.json`. No game project or device was supplied, so device performance, collisions and engine rendering have not been tested. Visual approval is still pending. Do not infer approval from the `locked` storage path: it versions this delivery, while the original boards remain the design authority.

Generated artwork is not pixel-identical to the reference. Turntable volume/lighting can vary across views. The evolution effect is baked into its sprite. Optional components use separately generated parts with estimated placement and need rig-specific placement/art review; their preview is separate from the full-sprite path. No source 3D model, skeletal rig, vector artwork, or layered PSD is claimed.

The earlier recovered drafts remain in `assets/characters/rosybuns/` at repository root; do not mix those with this new version. Missing animation frames in the original presentation sheet were authored for this pack, not represented as recovered originals.
