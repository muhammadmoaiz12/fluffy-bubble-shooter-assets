# Stage 11 — UX Architecture, Game Screens, Interaction & Visual Production Plan

**GDD version:** 1.1.0  
**Status:** UI/UX planning only. No new gameplay mockup, asset, typography or screen layout is approved by this document.

## 11.1 Inputs that cannot be changed by UI work

- Official game brand: **Puff Trails**; logo direction A (soft cream/pink Puff, warm golden Trails, purple outline) and previously generated branding assets are candidates subject to QA.
- Locked six families: Rosybuns, Skydoodles, Mossmops, Sunpuffs, Plumplets, Peachpeeps. Asset repo: `muhammadmoaiz12/fluffy-bubble-shooter-assets`; map brand aliases correctly. Do not generate random animals or replace the locked mascots.
- Characters are the **actual shootable pieces**, with real small/medium/giant collision radii, not milestones-only decoration. Magical orbs only for authored obstacles/boosters.
- React Native + Expo + Skia + Reanimated; Android/iOS portrait-first, optional reduced-motion control.
- Adventure-focused solo launch; 3+ same-family across size, 4+ family special automatically; cannon passive auto/active manual, pre-shot current/next swap, deterministic ricochets and nearest legal placement; shot/resolution ordering specified by Stage 2/3.
- Unlimited free retries; optional rewarded ads only, no automatic interstitials/banners; native IAP optional; simple daily gifts, daily challenge, weekly missions; leaderboards/seasonal events deferred.
- Approved styling: premium cozy soft-plush 2.5D fantasy, cream/lilac/pink/golden/purple, 90%-round fluffy family silhouettes. Proposed heading **Baloo 2** and body **Quicksand**. Do not ship copied concept-board art as production sprites.

## 11.2 Design deliverables before engineering integration

1. UX information architecture and screen/route map.
2. Mobile viewport constraints: safe areas, device width/height classes, aspect ratios, text scaling, portrait-only policy, system gesture exclusion and accessible tap targets.
3. Component inventory and design tokens (color, typography, spacing, elevation, borders, motion, audio/haptics, icon state).
4. Two canonical screen designs FIRST: gameplay HUD/board and home/navigation, both using real GitHub family sprites. Validate actual creature visual size/coverage on devices before locking artwork.
5. Other screen designs after interaction contracts: splash/loading, level/world map, pre-level objectives, pause, victory/loss, family collection/mastery, cannon selection/upgrade, boosters/shop, daily gift, daily challenge, missions, achievements, settings/privacy/accessibility, restore purchases, offline/pending/error states.
6. Interaction prototypes for aiming/touch release, swap, cannon charge/activation, booster target/cancel/confirm, pop/evolve/fall sequence, HUD progress, reward claims and purchase/optional ad flows.
7. Original art production list with master assets, alpha QA, responsive cropping and optimized package format; include QA on light/dark backgrounds and small gameplay scales.
8. UI-to-code handoff: component IDs, state diagrams, layout dimensions, assets.ts paths, tokens, internationalization keys, accessibility labels, acceptance tests.

## 11.3 Screen inventory and key contracts

| Screen | Required player actions | Critical information/state |
|---|---|---|
| Splash/loading | Load, recover interrupted save | Brand, bounded loading, no fake progress |
| Home | Continue, worlds, collection, cannons, shop, quests | Current progress, currency, accessible content |
| World map | Select unlocked world/level | Stars, new mechanics, locked reason |
| Level preview | View mission, shot budget, equip cannon | Obstacles, sizes/families, eligible boosters, start |
| Gameplay | Aim/launch, one swap, use charged cannon, use/confirm booster, pause | Mission, shots left, next shot, family/size readability, trajectory, hazard warning, charge |
| Pause/settings | Resume/restart/exit, sound/motion | No unintended shot, consistent state resume |
| Victory | Next, replay, claim | Exact authoritative star/reward result, mission outcomes |
| Failure | Retry immediately, return | No lives/timer/ad/purchase gate |
| Collection | Explore six families, expressions, evolved states | Unlock and mastery records; official master sprites |
| Cannon locker | Equip/upgrade, review skills | Unlocked state, charge rules, costs, permanent tier |
| Booster inventory/shop | Inspect inventory, earn/buy optional packs | Exact contents, prices from stores, pending transactions |
| Daily gift/challenge | Claim gift, start validated challenge | Authoritative eligibility, time, pending claim |
| Missions/achievements | View progress and claim | Stable event counters, idempotent grants |
| Settings/privacy | Audio, haptics, reduced motion, consent, support, purchases | Appropriate controls and current provider disclosures |

## 11.4 Critical gameplay constraints

- Actual creature collision radius is represented by physics not UI image bounds; decorative fur/features don't modify collisions. Design trajectory from actual projectile radius.
- Preserve enough board area for small-medium-giant contacts; HUD never obscures the cannon path. UI overlays must not capture active aim/release gestures except intentional controls.
- Cannon energy, shot queue, swap and booster controls must remain unmistakably distinct. Active ability target selection must be cancelable.
- Mission counts update **after** settled shot result, never on a speculative animation frame. Victory before failure when both coincide per Stage 2.
- Visual reaction states never change deterministic simulation results. Support reduced motion by reducing flourish, not game outcome.
- No purchase prompt or ad after clicking Retry; reward ads only after explicit optional choice and valid availability.
- Full-board/no-space terminal fallback remains a distinct Stage 2 implementation risk; UI needs safe explainable state, not a fabricated forced overlap.

## 11.5 Token / component design baseline (not signed-off specs)

Primary UI family: cream cards, berry-purple headings, gold quest rewards, lavender magic accents and compact outlined counters. Rounded display type Baloo 2, readable Quicksand labels. Minimum practical touch targets 44pt on iOS / 48dp on Android; confirm native design-system constraints, text scaling, contrast and disability/accessibility features. Sound/haptics must never be required for success.

Components: primary play CTA, secondary action, currency pill, star group, HUD mission counter, cannon charge gauge, shot queue panel, swap affordance, mission reward toast, booster inventory chip, modal shell, close/back, chapter card, collectible tile, purchase item row, verified claim confirmation, error and offline fallback.

No text labels baked permanently into reusable button art where localization is planned; prefer native accessible text over assets. App icons/splash assets require correct Android/iOS platform-specific output and review; brand-board image is not a final adaptive app icon.

## 11.6 Production asset inventory

- Locked master character sprites and expressions: read directly from versioned family directories, not a generated composite board.
- Branding: primary/compact/monochrome logos, app icons, splash treatment, favicon/social, fonts and font licenses.
- Cannons: 5 concept families + three tier variations once equipment visuals approved, loading/equip states and ability VFX.
- Worlds: layered scenic backgrounds with parallax-compatible divisions, level-map props, animated clouds and ambient particles.
- Gameplay: aim dots, wall reflect indicator, legal hit preview, shot trail, collision/emote particles, pop/fall/evolve effects, hazard badges, booster effects.
- Economy/UI: stars, coin, gift, optional booster, badge, goal icon, modal/button surfaces, progress bars, cannon charge meter.
- All exports: source PNG masters, transparent PNG or optimized lossless WebP gameplay variants, metadata pivots/scales, static Expo asset map, contact-sheet QA, provenance/license notes.

## 11.7 Review & delivery gates

1. Screen mechanics fully agree with locked GDD (no ordinary bubble substitution).
2. Real source sprites from six families render legibly at launch device sizes; same artwork across screens.
3. HUD and pointer controls work on compact phones with safe-area and typography scaling.
4. Navigation handles offline, pending rewards, ads unavailable and purchase restore states.
5. Animations and effects respect actual physics; no incorrect shot preview on rebound or variable sizes.
6. Accessibility contrast/touch controls/reduced motion and screen reader descriptions pass UX checklist.
7. User visually approves *screen direction* before final UI texture asset production.
8. UI code handoff requires measurable spacing and component semantics, not only flattened mockups.

## 11.8 Major open product/launch questions

- **Audience LOCKED:** general casual puzzle audience, primarily teens and adults, not specifically child-directed marketing. Store age ratings, ad SDK audience flags and child/privacy requirements still require accurate compliance review based on real content and distribution.
- Exact final game title, trademark and app-store clearance need completion before store launch (working name Puff Trails remains creatively approved).
- After UI review, any substantial layout change affecting gameplay visibility must be playtested and approved; routine numeric spacing choices can be made by design team.

**Next working step:** Resolve target audience and confirm Stage 11 screen production sequence (recommend gameplay mechanics wireframe, then home, then full journey; no extra question needed to adopt this implementation order).


## 11.9 Approved audience and UX consequences

**S11-04 LOCKED:** general casual gaming audience, primarily teens and adults. Cute and welcoming character art is intentionally retained; the game will not be designed or marketed specifically as a children’s game. This does **not** waive privacy, consent, COPPA/GDPR-K or store child-directed classification requirements if actual product/distribution triggers them. Final store questionnaire and ad SDK flags require current official policy review.

UX implications (design baseline): short, readable instructions; layered progressive disclosure rather than infantilizing tutorials; supports accessibility and both first-time and experienced casual users. No automatic interstitials/banners. Optional rewarded ads must be explicit.

## 11.10 Screen route hierarchy (information architecture; baseline)

```text
Boot / Recover / Consent (as applicable)
  -> Home / Continue
     -> World map -> Level preview -> Gameplay
                             Gameplay -> Pause -> Resume / Restart / Exit
                             Gameplay -> Win -> Claim -> Next / Replay / Home
                             Gameplay -> Lose -> Retry now / Level map
     -> Collection -> Family -> Evolution & Mastery
     -> Cannons -> Cannon details -> Equip / Upgrade
     -> Missions -> Daily / Weekly / Achievements
     -> Daily gift -> Claim
     -> Daily challenge -> Preview -> Challenge gameplay -> Result
     -> Shop -> Booster details / Native IAP -> Pending / Verified / Failed
     -> Settings -> Audio / Haptics / Reduced motion / Privacy / Purchase restore
```

**Launch exclusions:** leaderboards, PvP, seasonal event worlds, life refill/pay-to-retry overlays, automatic ads, and a children-specific UI mode.

## 11.11 Screen inventory and execution priority

| Priority | Screen/state | UX outcome | Hard gates |
|---|---|---|---|
| P0 | Gameplay screen (including loading, playing, resolving, pause, win/loss handoff) | Shoot and interpret outcomes, mission, shot queue, cannon power, boosters | True sprite sizes & ray preview; no UI overlap |
| P0 | Level preview / HUD tutorial | Understand objectives, shots and cannon | No hidden unfair condition |
| P0 | Win / Lose | Clear stars/rewards and free instant retry | Victory precedence, idempotent settlement |
| P1 | Home/Continue | Find next playable level and main systems | No child-targeted claims or misleading offers |
| P1 | World map | Navigate curated solo adventure | Locked states and replay |
| P1 | Collection / Cannon locker | Explore family mastery and upgrades | Approved assets and canonical aliases |
| P1 | Missions / daily gift / daily challenge | Clear optional goals and rewards | Valid seeds and once-only claims |
| P1 | Shop / rewarded ad offer | Transparent optional purchase/offer | Explicit opt-in and verification |
| P1 | Settings / privacy / purchase restore | Control audio, motion, data and entitlements | Accessibility, platform handling |
| P2 | Supplemental collection celebrations, deep statistics, themed decoration | More polish | Only after all P0/P1 states stable |

## 11.12 Global design system and navigation constraints

- Use approved Puff Trails logo direction A, existing branded materials and original six family artworks; no new animal mascots and no ordinary colored bubble substitution.
- Heading font Baloo 2 and body Quicksand are **available assets**, subject to rendered legibility/line-height testing. Embedded text in static buttons is unsuitable for localization; render text natively.
- Keep all tap actions reachable with one hand on portrait phones; game aim area captures only intended touches.
- Safe-area aware on notched and home-indicator devices; HUD and cannon use space remaining after top/bottom insets, not physical screenshot edges.
- For compact phones, condense secondary counters into an expandable layer. Never reduce board area so much that small family faces cease to be legible.
- Support screen reader semantics outside Skia canvas, high-contrast icons and reduced-motion alternatives; critical feedback must include readable text.
- Persist navigation state safely across app background/resume. Resume mid-flight from authoritative simulation state.
- Art direction does not override GDD physics, fairness, acquisition, or family identities.

## 11.13 Gameplay UX implementation companion

See [Stage 11A — Gameplay Screen](11a-gameplay-screen.md) for detailed spatial constraints, all UI states, controls, motion, event contracts, component names, responsiveness and acceptance tests.

**Review status:** content/UX baseline prepared. Actual layouts, polished screen mockups and physical-device validation pending.
