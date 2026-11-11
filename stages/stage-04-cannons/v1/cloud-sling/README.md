# Cloud Sling · v1

Individual assets generated from the user-provided detailed Cloud Sling board and a shared 3/4-front master. The original board is preserved unchanged one directory above. These are newly generated board-derived renders, not exact crops or a rigged 3D model. Existing locked family artwork is unchanged.

## Assets

Eight views; idle and firing poses; six expressions; cannon/cloud/star/wind icons and a composed app tile; five aiming/firing effect components; three silhouettes; eight composite firing frames. PNG masters are 1024 square. Every asset includes 256/384/512 PNG and lossless WebP exports. `manifest.json` lists all actual files and hashes; `generation.json` retains every prompt and processing method.

## Use

Open `preview.html` or `preview.jpg`. Cannon views/expressions use a bottom baseline at y=922 on a 1024 canvas. Their artwork fits within 860px; see individual alpha bounds. Use straight alpha/source-over rendering. Aiming dot, bounce marker and target brackets are separate reusable UI components: position them from the real physics simulation, never use a baked trajectory to determine hits. Cloud Sling remains passive aiming assistance; it does not auto-target, alter hitboxes or guarantee shots. No game rules are changed by this pack.

The eight firing frames are deterministic squash/recoil and FX composites using the shared generated poses; they are not independently drawn animation keyframes. Timing in `animation.json` is illustrative and needs tuning. The icons and collection views are raster images, not editable vector or 3D source.

## QA and limitations

Files are decoded and checked for transparency, consistent canvas sizes, matching lossless PNG/WebP pixel data, and hashes. Cleaned images remove faint stray pixels and fill enclosed opaque-body alpha. Fine fur and glow remain antialiased. AI-generated angles may have small geometric differences; inspect turntable/expression continuity and muzzle alignment in the game before production lock. This pack has not been engine-tested. No new upgrade tiers or unshown gameplay mechanics are invented.
