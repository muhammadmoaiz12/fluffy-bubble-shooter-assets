# Puff Trails · Shop & Monetization

**Interactive responsive shop UI · 7 component sheets · 25 new masters · 150 PNG/WebP exports · 33 original asset references.** Only the shop-bag icon is newly generated artwork. The other 24 masters are compositions of approved artwork. Original character, cannon, currency, booster, and chest designs remain unchanged.

![Shop screens](overview.jpg)

## Try the shop

[Open the shop source](ui/index.html). GitHub displays source; it does not run this HTML page. From the repository root, run `python3 -m http.server 8877`, then open `http://localhost:8877/stages/stage-10-shop/v1/ui/`.

The UI includes Featured, Boosters, Bundles, Cosmetics and Rewards; four collection filters; bundle contents; previews; keyboard-dismissable dialogs; and store/ad-unavailable feedback. Layouts were checked at desktop and 390px mobile widths. Text, tabs, cards and buttons remain editable HTML/CSS. No dependencies or build step are required.

**This is a working front-end prototype, not connected billing, ads or inventory.** Balance placeholders do not invent player data. Purchases and rewarded videos remain unavailable. Restore reports unavailable without changing entitlements. There are no fake grants, sample prices or automatic ads.

## Preserved decisions

- Four approved helpers: Rainbow Friend, Precision Trail, Soft Burst and Cozy Save.
- Stars are progress, not spendable shop currency. Cannon energy is earned in play, not sold. Gems and coin purchases remain deferred.
- All five original character-bearing cannons and six original families are reused. The collection gallery is a preview, not an offer to buy power or character access.
- Fixed bundle quantities in the dialog are clearly marked illustrative, pending authoritative catalog configuration. No random paid loot or fabricated discounts.
- Native store catalog, regional prices, explicit opt-in ads, verified exactly-once grants, restore, pending/canceled/rejected/refund handling and audience decisions still require integration and device testing. No provider SDK is loaded here.

## UI screen previews

### Shop Mobile

<img src="previews/shop-mobile.png" width="600" alt="shop-mobile">

### Shop Desktop

<img src="previews/shop-desktop.png" width="600" alt="shop-desktop">

### Boosters

<img src="previews/boosters.png" width="600" alt="boosters">

### Bundles

<img src="previews/bundles.png" width="600" alt="bundles">

### Cosmetics

<img src="previews/cosmetics.png" width="600" alt="cosmetics">

### Rewards

<img src="previews/rewards.png" width="600" alt="rewards">

### Bundle Details

<img src="previews/bundle-details.png" width="600" alt="bundle-details">

## Component sheets

### Approved Booster Catalog

![Approved Booster Catalog](sheets/booster-catalog.png)

### Fixed-content Bundle Compositions

![Fixed-content Bundle Compositions](sheets/bundle-compositions.png)

### Shop Components

![Shop Components](sheets/shop-components.png)

### Offer & Ownership States

![Offer & Ownership States](sheets/offer-states.png)

### Original Cannon Collection

![Original Cannon Collection](sheets/cannon-collection.png)

### Original Character Collection

![Original Character Collection](sheets/character-collection.png)

### Existing Cosmetic Frame Artwork

![Existing Cosmetic Frame Artwork](sheets/cosmetic-frames.png)

## Every new individual component

Labelled raster buttons are preview exports; the actual UI draws localized text at runtime. Inactive desaturated tabs and locked/owned/pending examples are visual references, not authoritative player states.

### icons/shop-bag

[Master PNG](masters/icons/shop-bag.png) · [512px WebP](gameplay/icons/shop-bag-512.webp)

<img src="gameplay/icons/shop-bag-256.png" width="150" alt="icons/shop-bag">

### tabs/featured-active

[Master PNG](masters/tabs/featured-active.png) · [512px WebP](gameplay/tabs/featured-active-512.webp)

<img src="gameplay/tabs/featured-active-256.png" width="150" alt="tabs/featured-active">

### tabs/featured-inactive

[Master PNG](masters/tabs/featured-inactive.png) · [512px WebP](gameplay/tabs/featured-inactive-512.webp)

<img src="gameplay/tabs/featured-inactive-256.png" width="150" alt="tabs/featured-inactive">

### tabs/boosters-active

[Master PNG](masters/tabs/boosters-active.png) · [512px WebP](gameplay/tabs/boosters-active-512.webp)

<img src="gameplay/tabs/boosters-active-256.png" width="150" alt="tabs/boosters-active">

### tabs/boosters-inactive

[Master PNG](masters/tabs/boosters-inactive.png) · [512px WebP](gameplay/tabs/boosters-inactive-512.webp)

<img src="gameplay/tabs/boosters-inactive-256.png" width="150" alt="tabs/boosters-inactive">

### tabs/bundles-active

[Master PNG](masters/tabs/bundles-active.png) · [512px WebP](gameplay/tabs/bundles-active-512.webp)

<img src="gameplay/tabs/bundles-active-256.png" width="150" alt="tabs/bundles-active">

### tabs/bundles-inactive

[Master PNG](masters/tabs/bundles-inactive.png) · [512px WebP](gameplay/tabs/bundles-inactive-512.webp)

<img src="gameplay/tabs/bundles-inactive-256.png" width="150" alt="tabs/bundles-inactive">

### tabs/cosmetics-active

[Master PNG](masters/tabs/cosmetics-active.png) · [512px WebP](gameplay/tabs/cosmetics-active-512.webp)

<img src="gameplay/tabs/cosmetics-active-256.png" width="150" alt="tabs/cosmetics-active">

### tabs/cosmetics-inactive

[Master PNG](masters/tabs/cosmetics-inactive.png) · [512px WebP](gameplay/tabs/cosmetics-inactive-512.webp)

<img src="gameplay/tabs/cosmetics-inactive-256.png" width="150" alt="tabs/cosmetics-inactive">

### tabs/rewards-active

[Master PNG](masters/tabs/rewards-active.png) · [512px WebP](gameplay/tabs/rewards-active-512.webp)

<img src="gameplay/tabs/rewards-active-256.png" width="150" alt="tabs/rewards-active">

### tabs/rewards-inactive

[Master PNG](masters/tabs/rewards-inactive.png) · [512px WebP](gameplay/tabs/rewards-inactive-512.webp)

<img src="gameplay/tabs/rewards-inactive-256.png" width="150" alt="tabs/rewards-inactive">

### buttons/watch-ad

[Master PNG](masters/buttons/watch-ad.png) · [512px WebP](gameplay/buttons/watch-ad-512.webp)

<img src="gameplay/buttons/watch-ad-256.png" width="150" alt="buttons/watch-ad">

### buttons/view-bundle

[Master PNG](masters/buttons/view-bundle.png) · [512px WebP](gameplay/buttons/view-bundle-512.webp)

<img src="gameplay/buttons/view-bundle-256.png" width="150" alt="buttons/view-bundle">

### buttons/view-details

[Master PNG](masters/buttons/view-details.png) · [512px WebP](gameplay/buttons/view-details-512.webp)

<img src="gameplay/buttons/view-details-256.png" width="150" alt="buttons/view-details">

### buttons/restore

[Master PNG](masters/buttons/restore.png) · [512px WebP](gameplay/buttons/restore-512.webp)

<img src="gameplay/buttons/restore-256.png" width="150" alt="buttons/restore">

### buttons/unavailable

[Master PNG](masters/buttons/unavailable.png) · [512px WebP](gameplay/buttons/unavailable-512.webp)

<img src="gameplay/buttons/unavailable-256.png" width="150" alt="buttons/unavailable">

### bundles/starter

[Master PNG](masters/bundles/starter.png) · [512px WebP](gameplay/bundles/starter-512.webp)

<img src="gameplay/bundles/starter-256.png" width="150" alt="bundles/starter">

### bundles/collection

[Master PNG](masters/bundles/collection.png) · [512px WebP](gameplay/bundles/collection-512.webp)

<img src="gameplay/bundles/collection-256.png" width="150" alt="bundles/collection">

### states/normal

[Master PNG](masters/states/normal.png) · [512px WebP](gameplay/states/normal-512.webp)

<img src="gameplay/states/normal-256.png" width="150" alt="states/normal">

### states/locked

[Master PNG](masters/states/locked.png) · [512px WebP](gameplay/states/locked-512.webp)

<img src="gameplay/states/locked-256.png" width="150" alt="states/locked">

### states/owned

[Master PNG](masters/states/owned.png) · [512px WebP](gameplay/states/owned-512.webp)

<img src="gameplay/states/owned-256.png" width="150" alt="states/owned">

### states/pending

[Master PNG](masters/states/pending.png) · [512px WebP](gameplay/states/pending-512.webp)

<img src="gameplay/states/pending-256.png" width="150" alt="states/pending">

### states/disabled

[Master PNG](masters/states/disabled.png) · [512px WebP](gameplay/states/disabled-512.webp)

<img src="gameplay/states/disabled-256.png" width="150" alt="states/disabled">

### cards/booster-blank

[Master PNG](masters/cards/booster-blank.png) · [512px WebP](gameplay/cards/booster-blank-512.webp)

<img src="gameplay/cards/booster-blank-256.png" width="150" alt="cards/booster-blank">

### cards/featured-bundle

[Master PNG](masters/cards/featured-bundle.png) · [512px WebP](gameplay/cards/featured-bundle-512.webp)

<img src="gameplay/cards/featured-bundle-256.png" width="150" alt="cards/featured-bundle">

## Reused original artwork

[Original master](../../../locked/puff-trails-brand/v1/masters/logos/main.png)

<img src="../../../locked/puff-trails-brand/v1/masters/logos/main.png" width="140" alt="main">

[Original master](../../../locked/puff-trails-brand/v1/masters/backgrounds/world.png)

<img src="../../../locked/puff-trails-brand/v1/masters/backgrounds/world.png" width="140" alt="world">

[Original master](../../stage-07-economy/v1/coins/masters/packs/small-stack.png)

<img src="../../stage-07-economy/v1/coins/masters/packs/small-stack.png" width="140" alt="small-stack">

[Original master](../../stage-07-economy/v1/stars/masters/states/earned.png)

<img src="../../stage-07-economy/v1/stars/masters/states/earned.png" width="140" alt="earned">

[Original master](../../stage-07-economy/v1/booster-inventory/masters/rewards/gift.png)

<img src="../../stage-07-economy/v1/booster-inventory/masters/rewards/gift.png" width="140" alt="gift">

[Original master](../../stage-07-economy/v1/reward-chests/masters/premium/closed.png)

<img src="../../stage-07-economy/v1/reward-chests/masters/premium/closed.png" width="140" alt="closed">

[Original master](../../stage-08-achievements/v1/ui-components/masters/components/card.png)

<img src="../../stage-08-achievements/v1/ui-components/masters/components/card.png" width="140" alt="card">

[Original master](../../stage-08-achievements/v1/ui-components/masters/buttons/view-progress-blank.png)

<img src="../../stage-08-achievements/v1/ui-components/masters/buttons/view-progress-blank.png" width="140" alt="view-progress-blank">

[Original master](../../stage-08-achievements/v1/ui-components/masters/buttons/claim-reward-blank.png)

<img src="../../stage-08-achievements/v1/ui-components/masters/buttons/claim-reward-blank.png" width="140" alt="claim-reward-blank">

[Original master](../../stage-08-achievements/v1/ui-components/masters/icons/check.png)

<img src="../../stage-08-achievements/v1/ui-components/masters/icons/check.png" width="140" alt="check">

[Original master](../../stage-07-economy/v1/stars/masters/components/lock.png)

<img src="../../stage-07-economy/v1/stars/masters/components/lock.png" width="140" alt="lock">

[Original master](../../stage-08-achievements/v1/badge-states/masters/claim/pending.png)

<img src="../../stage-08-achievements/v1/badge-states/masters/claim/pending.png" width="140" alt="pending">

[Original master](../../../locked/puff-trails-brand/v1/masters/icons/star-empty.png)

<img src="../../../locked/puff-trails-brand/v1/masters/icons/star-empty.png" width="140" alt="star-empty">

[Original master](../../stage-06-power-ups-boosters/v1/masters/effects/gold-sparkles.png)

<img src="../../stage-06-power-ups-boosters/v1/masters/effects/gold-sparkles.png" width="140" alt="gold-sparkles">

[Original master](../../stage-07-economy/v1/booster-inventory/masters/rainbow-friend/front.png)

<img src="../../stage-07-economy/v1/booster-inventory/masters/rainbow-friend/front.png" width="140" alt="front">

[Original master](../../stage-07-economy/v1/booster-inventory/masters/precision-trail/front.png)

<img src="../../stage-07-economy/v1/booster-inventory/masters/precision-trail/front.png" width="140" alt="front">

[Original master](../../stage-07-economy/v1/booster-inventory/masters/soft-burst/front.png)

<img src="../../stage-07-economy/v1/booster-inventory/masters/soft-burst/front.png" width="140" alt="front">

[Original master](../../stage-07-economy/v1/booster-inventory/masters/cozy-save/front.png)

<img src="../../stage-07-economy/v1/booster-inventory/masters/cozy-save/front.png" width="140" alt="front">

[Original master](../../stage-04-cannons/v1/cloud-sling/masters/views/three-quarter-front.png)

<img src="../../stage-04-cannons/v1/cloud-sling/masters/views/three-quarter-front.png" width="140" alt="three-quarter-front">

[Original master](../../stage-04-cannons/v1/moonlight-cannon/masters/views/three-quarter-front.png)

<img src="../../stage-04-cannons/v1/moonlight-cannon/masters/views/three-quarter-front.png" width="140" alt="three-quarter-front">

[Original master](../../stage-04-cannons/v1/bloom-launcher/masters/views/three-quarter-front.png)

<img src="../../stage-04-cannons/v1/bloom-launcher/masters/views/three-quarter-front.png" width="140" alt="three-quarter-front">

[Original master](../../stage-04-cannons/v1/rainbow-launcher/masters/views/three-quarter-front.png)

<img src="../../stage-04-cannons/v1/rainbow-launcher/masters/views/three-quarter-front.png" width="140" alt="three-quarter-front">

[Original master](../../stage-04-cannons/v1/starburst-cannon/masters/views/three-quarter-front.png)

<img src="../../stage-04-cannons/v1/starburst-cannon/masters/views/three-quarter-front.png" width="140" alt="three-quarter-front">

[Original master](../../../locked/rosybuns/v1/masters/core/medium.png)

<img src="../../../locked/rosybuns/v1/masters/core/medium.png" width="140" alt="medium">

[Original master](../../../locked/skybubs/v1/masters/core/medium.png)

<img src="../../../locked/skybubs/v1/masters/core/medium.png" width="140" alt="medium">

[Original master](../../../locked/leaflings/v1/masters/core/medium.png)

<img src="../../../locked/leaflings/v1/masters/core/medium.png" width="140" alt="medium">

[Original master](../../../locked/chirpyfluffs/v1/masters/core/medium.png)

<img src="../../../locked/chirpyfluffs/v1/masters/core/medium.png" width="140" alt="medium">

[Original master](../../../locked/twirlpuffs/v1/masters/core/medium.png)

<img src="../../../locked/twirlpuffs/v1/masters/core/medium.png" width="140" alt="medium">

[Original master](../../../locked/peachtells/v1/masters/core/medium.png)

<img src="../../../locked/peachtells/v1/masters/core/medium.png" width="140" alt="medium">

[Original master](../../stage-08-achievements/v1/ui-components/masters/frames/gold.png)

<img src="../../stage-08-achievements/v1/ui-components/masters/frames/gold.png" width="140" alt="gold">

[Original master](../../stage-08-achievements/v1/ui-components/masters/frames/violet.png)

<img src="../../stage-08-achievements/v1/ui-components/masters/frames/violet.png" width="140" alt="violet">

[Original master](../../stage-08-achievements/v1/ui-components/masters/frames/elite.png)

<img src="../../stage-08-achievements/v1/ui-components/masters/frames/elite.png" width="140" alt="elite">

[Original master](../../stage-08-achievements/v1/ui-components/masters/frames/laurel.png)

<img src="../../stage-08-achievements/v1/ui-components/masters/frames/laurel.png" width="140" alt="laurel">

[Manifest](manifest.json) · [Provenance and source hashes](generation.json) · [Original board](references/original-shop-board.png) · [Locked shop decisions](../../../docs/gdd/stages/10-monetization-fairness.md) · [Browser QA](qa.json)
