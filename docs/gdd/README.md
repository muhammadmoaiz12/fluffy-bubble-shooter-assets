# Puff Trails — Game Design Document

**Version:** 1.1.0 · **Updated:** 2026-11-11 · **Status:** Active planning; UX specifications not yet visually approved

This is the source-of-truth planning package for the Puff Trails Android/iOS game. The game is a character-driven, anchored-cluster puzzle adventure, with match/pop/evolution mechanics and real variable-size circular creatures.

## Documents
- [Decision register](DECISIONS.md) — locked, design baseline and pending choices
- [Stage 1 — Core experience](stages/01-core-experience.md)
- [Stage 2 — Shooting, collision and matching](stages/02-shooting-collision.md)
- [Stage 3 — Character families and evolution](stages/03-character-families.md)
- [Stage 4 — Cannons and upgrades](stages/04-cannons.md)
- [Stage 5 — Worlds and levels](stages/05-worlds-levels.md)
- [Stage 6 — Boosters and special objects](stages/06-power-ups.md)
- [Stage 7 — Game economy](stages/07-economy.md)
- [Stage 8 — Achievements and missions](stages/08-achievements-missions.md)
- [Stage 9 — Retention and events](stages/09-retention-events.md)
- [Stage 10 — Monetization and fairness](stages/10-monetization-fairness.md)
- [Stage 11 — UI/UX planning](stages/11-ui-ux-planning.md)

## Documentation policy
1. **LOCKED** = explicitly approved by the user; must not change without a new user decision.
2. **PROPOSED** = recommended, not approved; code should not assume it is final.
3. **PENDING** = an open question or unspecified detail; needs a decision or prototype evidence.
4. **VALIDATE** = subject to technical/real-device testing before production acceptance.
5. After each user approval, update DECISIONS.md and the corresponding stage file; add a dated change log entry.
6. Keep concept-art approval separate from production sprite QA; never replace locked character references without approval.

## Known baseline
- Game / brand: **Puff Trails** (creatively selected; trademark/store clearance remains separate).
- Six original locked creative family names: Rosybuns, Skydoodles, Mossmops, Sunpuffs, Plumplets, Peachpeeps.
- GitHub artifact aliases currently seen: `rosybuns`, `skybubs` (Skydoodles), `leaflings` (Mossmops), `chirpyfluffs` (Sunpuffs), `twirlpuffs` (Plumplets), `peachtells` (Peachpeeps). Preserve mappings until canonical IDs are settled.
- 90% round, soft furry body with approximately 10% tiny signature features; distinct small/medium/giant *real collision sizes*, face reactions and evolution.
- React Native + Expo + TypeScript + Skia; actual implementation and device QA are not yet complete.
- Character repository: https://github.com/muhammadmoaiz12/fluffy-bubble-shooter-assets

## Change log
- 2026-11-11 — v0.3.1: user locked six distinct strategic family roles; documented separated Connect/Reposition/Create/Clear/Transform/Protect baselines, deterministic recipient/consumption, per-level Awakened persistence, permanent collection unlocks, target selection, validation tests; opened Stage 4 cannon planning.
- 2026-11-11 — v0.3.0: locked special-first evolution resolution, terminal victory priority, bounded growth push and classic-style nearest legal attachment. Absolute no-space behavior remains unapproved.
- 2026-11-11 — v0.3.0: locked per-level shot budgets, world-specific progressive miss rules, seeded level-aware queue fairness and nearest-valid attachment search; solver parameters and absolute no-space fallback pending.
- 2026-11-11 — v0.3.0: locked Q8 match-4+ special evolution eligibility, Q9 controlled push on growth, Q10 dual failure conditions, Q11 post-resolution danger check; exact implementation safeguards and penalties remain pending.
- 2026-11-11 — v0.3.0: locked Stage 2 Q5 (queue + one swap), Q6 (continuous attachment), Q7 (falling unsupported components).
- 2026-11-11 — v0.2.1: captured Stage 1 approvals and Stage 2 decisions 2.1–2.3; left all remaining Stage 2 rules open.

## Latest locked mechanic (2026-11-11)
- S2-05: Pop ordinary groups of **three or more connected creatures of the same family**, with each creature counting once irrespective of its small/medium/giant size. Shot queue (one pre-shot swap), continuous-circle attachment, falling unsupported groups, match-4+ special eligibility, controlled growth push, dual failure conditions, and post-resolution danger evaluation are locked; detailed activation, displacement limits, shot-budget values and world-specific miss thresholds remain pending.


## Stage 3 — In progress (2026-11-11)
- **LOCKED:** 4+ qualifying family special effects activate automatically (S3-01).
- **PROPOSED:** six family ability concepts, normal/awakened/master evolution, unlock milestones and parameters; NOT approved as final.
- **PENDING:** unique family ability roster, overlap between Heart Link and Nature Bloom, shield/failure interaction, evolved recipient, consumed pieces, duration and persistent tier rules.
- [Stage 3 character families](stages/03-character-families.md)
- New content is documented without editing or overwriting locked character artwork.

## Stage 3 current position
- **LOCKED:** Automatic special activation and six distinct strategic family roles.
- **DESIGN BASELINE (reviewable):** Exact six ability effects, recipient-selection priority, N-1 consumption, level-only Awakened state, deterministic targeting and collection persistence.
- **VALIDATE:** Correctness and fun in actual gameplay; Stage 2 unresolved absolute no-space handling remains separate.
- **Stage 4:** [Cannon systems and unlock design](stages/04-cannons.md) (proposal only).

## Stage 4 current position (v0.4.0)
- **LOCKED:** Each cannon has a unique balanced gameplay ability **and** can be upgraded to meaningfully stronger versions (combined user choice).
- **PROPOSED:** Five specialized cannon concepts, shared 3-tier model, charge economy, non-pay-to-win guardrails, and unlock principles.
- **PENDING:** Manual vs automatic activation of cannon abilities, tier limits, costs, unlock milestones, roster approval and in-game validation.
- [Stage 4 cannon specification](stages/04-cannons.md). No new UI visuals approved.

## Stage 4 hybrid activation (v0.5.0)
- **LOCKED:** passive cannon assistance is automatic and charge-free; charged active powers are player-triggered, never automatically spent. Family powers remain automatically triggered by eligible 4+ matches.
- **DESIGN BASELINE:** pre-level cannon equip, 3-tier upgrades, earned-resource unlock/upgrade progression, attempt-local energy, deterministic ability commands and economy safeguards.
- **VALIDATE/PENDING:** five named cannons, balance numbers, costs and paid-resource policy, plus remaining Stage 2 geometry fallbacks.


## Stage 5 (v0.5.0) — finalized production philosophy
- **LOCKED:** Handcrafted adventure plus *validated seeded procedural* optional/daily challenges.
- **DESIGN BASELINE:** Four proposed worlds / 100 proposed launch levels, mission taxonomy, stars, obstacle onboarding, replay and level unlocks. These are tunable, not separately owner-approved.
- **QUALITY GATES:** Schema/geometry checks, deterministic seeded replay, bounded solver verification, human playtests and device QA. Uncertified procedural puzzles must use a curated fallback.
- [Detailed Stage 5 specification](stages/05-worlds-levels.md)
- [Stage 6 proposals — not locked](stages/06-power-ups.md)
- No additional UI screens or character redesigns were authorized by this update.

## Current checkpoint — v0.6.0
- **LOCKED:** Stage 6 hybrid approach: optional booster consumables alongside earned family and cannon abilities.
- **BASELINE / VALIDATE:** exact booster roster, effect semantics, target validation, economy ledger, simultaneous events and physical collision integration.
- **PENDING MAJOR STAGE 7 CHOICE:** whether main adventure has a lives/attempt gate.
- Earlier approved decisions have not been overridden; Stage 2 terminal no-space fallback remains a separately identified pending item.

## Stage 7 checkpoint — v0.7.0
- **LOCKED:** unlimited retries in the primary adventure; no lives/energy gate.
- **TUNABLE:** coin reward table, booster prices and inventory, cannon upgrade costs, monetization frequency and product catalog.
- **ENGINEERING BASELINE:** verified store purchases, opt-in rewarded-ad grants, idempotent inventory/reward ledger, offline progress reconciliation.
- **NEXT:** Stage 8 proposed achievements, daily/weekly missions, family mastery and optional competitive systems. No Stage 8 mechanics have been locked.

## Current planning checkpoint (v0.8.0)
- **LOCKED:** solo-first launch; public leaderboards, competitive tournaments and ranked rewards deferred.
- **BASELINE:** achievement taxonomy, daily/weekly missions, family/cannon mastery, event-based exactly-once rewards, accessibility and anti-abuse.
- **PENDING MAJOR CHOICE:** timing/scope of live seasonal events (Stage 9).
- **UNCHANGED:** all Stage 1–7 user-approved decisions, locked artwork, and repository files.

## Current planning checkpoint — v0.9.0
- **LOCKED:** simple v1 retention: daily gifts, daily challenges and weekly missions; major seasonal events deferred.
- **BASELINE:** non-punitive streaks, seeded certified daily puzzles, idempotent claims, optional notification cadence and future-event schemas.
- **PENDING MAJOR OWNER CHOICE:** advertising model at launch (rewarded-only vs limited interstitials and optional removal).
- **UNCHANGED:** all previously locked gameplay, cannon, booster, progression, economy and character design decisions.

## v1.0.0 current checkpoint
- **LOCKED Stage 10:** opt-in rewarded-only advertising at launch; no automatic interstitials or banner ads. Earlier ads + optional IAP direction retained.
- **DESIGN BASELINE:** rewarded placement limits, fixed booster/cosmetic purchase catalog, verified inventory credit, app privacy and consent implementation.
- **Stage 11:** UX screen architecture and production-art checklist started; no new mockups or sprite changes.
- **MAJOR PENDING DECISION:** child-directed vs general audience classification for platform policy and SDK settings.

- [Stage 11A — Gameplay Screen UX specification](stages/11a-gameplay-screen.md)

## v1.1.0 checkpoint
- **LOCKED:** general casual audience, primarily teens and adults; no explicit child-directed marketing. Actual compliance and age rating require independent review.
- **DELIVERED:** Stage 11 screen architecture, flow states and detailed gameplay screen UX specification (baseline, not approved mockup).
- **NEXT:** use six locked character sprites in screen layout validation on compact Android and iOS before final artwork; no new families/pets/bubbles.
