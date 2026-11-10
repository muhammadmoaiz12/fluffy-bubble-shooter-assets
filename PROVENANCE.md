# Provenance and recovery record

Recovery date: 2026-11-10 (Asia/Karachi).
Source conversation: Bubble Shooter Prompt, ID `6af34984-1cac-83e8-8e29-401e8f3f2289`.

The conversation records that the user locked the earlier character designs and rejected newer redesigns. The Rosybuns board was attached to the request to extract the first family. The attachment was recovered through the conversation reader as `Rosybuns Fluffy Family Design Board-1.png`; its bytes are preserved as `references/locked/rosybuns/original-upload.png`.

An existing local Work output named `bubble-shooter-locked-assets` supplied the Rosybuns draft extractions, QA images, masks, source crops and `manifest.partial.json`. All files were copied byte-for-byte; the metadata was not rewritten. This is a separate local extraction set, not proof that the earlier ZIP has been recovered. Its source SHA-256 matches `references/locked/rosybuns/extraction-source.png`, recovered from the local project. That source and the conversation upload have identical decoded RGBA pixels, despite different PNG file hashes. All included images were decoded successfully during packaging.

The earlier conversation claimed a ZIP containing 3 sizes, 9 expressions, 4 views, an evolution reference and collection portrait. The recovered local set instead contains 3 sizes, 9 expressions and 8 views. This mismatch is explicitly retained rather than represented as the earlier pack. No original ZIP exists in this environment's `/mnt/data` (that directory is unavailable), the current workspace or the searched Downloads/local Codex outputs. The conversation reader returned image uploads, not the generated ZIP.

Other source images were available, but their individual approval/version mapping was not established for this upload; they are not asserted to be locked references in this repository. Only the Rosybuns board and its associated drafts are included. No artwork was changed during recovery.

## Additional references supplied by the user

The user subsequently supplied `Rosybuns Character Sprite Sheet.png`, `Rosybuns Fluffy Family Design Board-1.png`, and `Rosybuns Production Asset Pack Showcase.png`, describing them as the complete detailed family and requesting individual assets. The two new sheets are preserved byte-for-byte in `references/locked/rosybuns/`; the family board is byte-identical to the already preserved `extraction-source.png`. These are source references, not evidence that the illustrated standalone production files exist. All three are 1536 × 1024 composite images. The sprite sheet visibly contains five bounce examples and four hit/pop examples despite labels claiming six and five. Individual full-resolution sprites cannot be recovered from those labels. No new sprites have been produced in this reference-only update.

## Newly authored game-asset delivery

The user requested individual production-oriented assets based on the three supplied sheets, then explicitly authorized deterministic image processing to clean transparency, standardize sizes and alignment, and export PNG/WebP. `locked/rosybuns/v1/` contains a newly AI-generated integration candidate, not extracted original pixels. The built-in image generator produced the character variants and several standalone component assets; complete prompt text is recorded for those variants in `generation.json`, while the initial three core-form requests have labeled prompt summaries. Original generator outputs are preserved under that version's `sources/generated/`.

Processing removed disconnected alpha specks, restored opaque interiors, retained soft silhouette alpha, aligned expression silhouettes through face-region compositing, and created resized lossless WebP exports. Bounce and hit/pop sequences were authored with deterministic transforms; blink uses eyelid compositing. Optional components were checked visually and faulty automatic eye/cheek cutouts were replaced with separately generated whole components. No original reference board was edited.

The delivery contains 22 full sprite files, 66 game exports, 15 animation frames, 3 atlases and 9 component pieces. Source pixels, generation prompts, manifest hashes and technical validation are retained. The browser preview loaded all displayed images and its bounce/blink/pause controls were checked. Actual game-engine/device validation and final visual approval are pending. Independently rendered turntable views are not a recovered 3D rig. Evolution effects are baked into the full sprite.

## Skybubs family — 2026-11-11

The user supplied Skybubs Character Asset Pack.png and requested the same preparation as Rosybuns. The original composite sheet is preserved byte-for-byte at `references/locked/skybubs/Skybubs Character Asset Pack.png`, SHA-256 `5886ee83600d8bb7b67880551b1e3626e084864b74c2a638127d2a0586016256`. The presentation is a design reference, not proof that separate sprites, layers or stated resolutions existed.

`locked/skybubs/v1/` contains new built-in image-generator renders, authorized deterministic alpha cleanup, aligned frontal expressions, lossless exports, and newly authored transform/eyelid animations. All generator originals and exact prompts are retained in that folder. Source artwork was not edited. Generated sprites are not pixel-identical extractions. Side/back views are nominal independent 2D renders. Evolution effects are baked in. Optional component pieces have approximate placement and require rig-specific review. Technical validation is recorded in qa/validation.json; actual engine/device testing and final visual approval remain pending.

## Leaflings family — 2026-11-11

The user supplied Leaflings Production Asset Board.png and requested the same preparation as Rosybuns and Skybubs. Original file preserved byte-for-byte at `references/locked/leaflings/Leaflings Production Asset Board.png`, SHA-256 `86d1efef1df88168784720c60e2d76bb8aeb30a848ee5187cc5f246bfd073573`. The composite is a visual reference; production claims printed on it do not establish actual file availability.

`locked/leaflings/v1/` contains newly generated renders from the built-in image generator, followed by user-authorized deterministic transparency cleanup, frontal face compositing, alignment and lossless exports. Exact prompts and original generated outputs are retained. Bounce/hit-pop transforms and blink eyelid compositing are newly authored. Original reference pixels are unchanged; generated sprites are not pixel-identical extractions. The 2D turntable angles are nominal, evolution glow is baked in, and optional components have estimated placement. Leaves replace the other families' head accessories; eye parts include brows. The board's small:medium:giant scale guidance is retained as 1:1.5:2 in metadata. File validation is recorded in qa/validation.json. Final visual approval and testing inside the actual game remain pending.
