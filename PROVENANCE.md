# Provenance and recovery record

Recovery date: 2026-11-10 (Asia/Karachi).
Source conversation: Bubble Shooter Prompt, ID `6af34984-1cac-83e8-8e29-401e8f3f2289`.

The conversation records that the user locked the earlier character designs and rejected newer redesigns. The Rosybuns board was attached to the request to extract the first family. The attachment was recovered through the conversation reader as `Rosybuns Fluffy Family Design Board-1.png`; its bytes are preserved as `references/locked/rosybuns/original-upload.png`.

An existing local Work output named `bubble-shooter-locked-assets` supplied the Rosybuns draft extractions, QA images, masks, source crops and `manifest.partial.json`. All files were copied byte-for-byte; the metadata was not rewritten. This is a separate local extraction set, not proof that the earlier ZIP has been recovered. Its source SHA-256 matches `references/locked/rosybuns/extraction-source.png`, recovered from the local project. That source and the conversation upload have identical decoded RGBA pixels, despite different PNG file hashes. All included images were decoded successfully during packaging.

The earlier conversation claimed a ZIP containing 3 sizes, 9 expressions, 4 views, an evolution reference and collection portrait. The recovered local set instead contains 3 sizes, 9 expressions and 8 views. This mismatch is explicitly retained rather than represented as the earlier pack. No original ZIP exists in this environment's `/mnt/data` (that directory is unavailable), the current workspace or the searched Downloads/local Codex outputs. The conversation reader returned image uploads, not the generated ZIP.

Other source images were available, but their individual approval/version mapping was not established for this upload; they are not asserted to be locked references in this repository. Only the Rosybuns board and its associated drafts are included. No artwork was changed during recovery.

## Additional references supplied by the user

The user subsequently supplied `Rosybuns Character Sprite Sheet.png`, `Rosybuns Fluffy Family Design Board-1.png`, and `Rosybuns Production Asset Pack Showcase.png`, describing them as the complete detailed family and requesting individual assets. The two new sheets are preserved byte-for-byte in `references/locked/rosybuns/`; the family board is byte-identical to the already preserved `extraction-source.png`. These are source references, not evidence that the illustrated standalone production files exist. All three are 1536 × 1024 composite images. The sprite sheet visibly contains five bounce examples and four hit/pop examples despite labels claiming six and five. Individual full-resolution sprites cannot be recovered from those labels. No new sprites have been produced in this reference-only update.
