# Fluffy Bubble Shooter — Rosybuns asset library

Private library preserving the user's locked reference artwork and versioned game-asset deliveries.

## Latest delivery

[Rosybuns v1 — game integration candidate](locked/rosybuns/v1/README.md)

- 22 full sprite files: three core sizes, nine expressions plus hit, eight turntable angles and evolution.
- 66 lossless WebP game exports (128 / 256 / 512 px), PNG masters, 15 animation frames and three atlases.
- Nine optional component pieces, static TypeScript asset map, rendering metadata, generation provenance and checksums.
- [Light preview](locked/rosybuns/v1/qa/contact-light.png), [dark preview](locked/rosybuns/v1/qa/contact-dark.png), [animation preview](locked/rosybuns/v1/qa/animations.webp), and [interactive viewer](locked/rosybuns/v1/preview.html).

![Rosybuns v1 sprites](locked/rosybuns/v1/qa/contact-dark.png)

The new delivery was AI-generated from the supplied references, then cleaned and prepared using deterministic image processing explicitly authorized by the user. It is not pixel-identical to the reference artwork. File validation passed; final visual approval and actual engine/device testing remain pending. The `locked` path versions the delivery and does not imply the new artwork has already received final approval. Use full sprites first; optional component rigging requires placement review.

## Original references and recovered drafts

`references/locked/rosybuns/` contains the untouched original board and two detailed user-supplied sheets. `assets/characters/rosybuns/` preserves the older recovered local draft set; do not mix that set with v1.

The earlier ChatGPT ZIP was not accessible and has not been recovered. The local draft set is not represented as that ZIP. See [provenance](PROVENANCE.md) for the recovery history and limitations. Original boards remain the design authority; do not silently redesign or replace them.

## Download and review

Sign into the owning GitHub account, then choose **Code → Download ZIP**. Unzip and open `locked/rosybuns/v1/preview.html` locally to inspect expressions, turntable, bounce, blink and hit/pop, adjust sprite size and change the background. GitHub shows HTML source rather than running it.

No open-source license is granted. Preserve the user's artwork and provenance.
