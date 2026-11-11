# Stage 5 — Worlds, levels and adventure progression

Version: 0.5.0 · 2026-11-11. **New locked decision: hybrid production philosophy.** Numerical schedules and individual content remain design baselines, not individually approved.

## Authority and status
- **LOCKED S5-01:** Main adventure levels are handcrafted/curated and reproducible. Optional daily/repeatable challenges may be procedurally generated, but must be seeded, validated and reproducible. Do not ship unvalidated random puzzle boards.
- **LOCKED earlier:** Adventure is primary; balanced difficulty; anchored variable-size circles; family-match 3+; qualifying 4+ automatic powers; per-level designed shot budget; seeded level-aware queue; post-resolution win-before-loss checks; progressive world-specific miss rules; no uncontrolled overlaps.
- **DESIGN BASELINE (tunable):** 100 launch levels / four worlds / 25 each, six mission categories, introduction sequence, 1–3-star rating and next-level unlocking after victory. These are implementation proposals, not user-approved numeric commitments.

## Content hierarchy
`Campaign > World > Level > Mission objectives > Completion result > Rewards and unlocks`. One level has stable `levelId`, `version`, `worldId`, authored layout, mission parameters, starting cannon constraints, available families and sizes, queue policy and RNG seed, authored ammo count, optional hazard policy, star thresholds, reward references, and optional tutorial steps. A change that affects solvability requires a level version bump. A player's completion and highest stars are keyed by stable level identity; old saves survive patches via migration.

## Proposed world arc (not locked)
| World | Candidate levels | Teaching arc | Candidate unlocks |
|---|---:|---|---|
| Cloudberry Meadows | 1–25 | Aiming, bank shots, 3-matches, simple rescues | Rosybuns/Skydoodles early, first cannon |
| Honeydrop Gardens | 26–50 | Mixed physical sizes, sticky surfaces, targeted obstacle clears | Mossmops/Sunpuffs, cannon tiers |
| Moonmallow Forest | 51–75 | Evolution and hazard combinations, conversion and rescue | Plumplets/Peachpeeps, further cannons |
| Sugarstar Skies | 76–100 | Combined objectives, complex topology, advanced masteries | Higher skill challenges |

Family availability may differ from collection discovery. All mandatory authored levels must be feasible with unlocked free equipment and their supplied queues. Any unlock order must be reconciled with earlier proposed Stage 3 level numbers before final content lock.

## Mission architecture: counted outcomes, not animation cues
- `CLEAR_FAMILY`: clear N eligible creatures of designated families. Explicitly configure whether a detached fall counts (default proposal: yes) and whether transformed identities count at action time.
- `RESCUE`: detach or release N tagged captive creatures; no accidental counting from unrelated pops.
- `EVOLVE`: activate N distinct eligible successful family powers or evolve designated family members; count once by event ID.
- `BREAK_OBSTACLE`: remove N tagged breakable obstacles; resistant obstacles need visible hit-state metadata.
- `COLLECT`: deliver N tagged stars/items when their support is removed; collection from a falling component counted at resolution, not on-screen animation completion.
- `COMBO`: achieve N authorized chain reaction events as defined by simulator causality; simultaneous animation particles do not imply extra combos.
- Early levels: one objective; later levels: two (rarely three). Each objective has `target`, `progress`, `scope`, and explicit event attribution policy. Mission completion evaluated once after all authoritative shot events settle.
- **DESIGN BASELINE:** Mission counting rules and categories require implementation validation; individual mission types are not separately user-approved.

## Obstacles and tutorials (proposed)
Crystal shells: removable by configured hits/specials; sticky honey: limits movement without changing visual contact; vine barriers: block paths and are explicitly anchored/cleared; moon fog: limits preview with telegraphing and accessibility options; portals: deterministic entry/exit transforms that preserve radius; moving anchors: authored motion between resolution steps only, with collision revalidation.

Introduction template: tutorial level using the new mechanic alone → two supported practice levels → combined challenge → later mastery. One major mechanic introduced at a time, no new mechanic combined with a new mission type in the same tutorial. Obstacle placement must respect circle geometry and fixed anchor policies.

## Difficulty, fairness and accessibility
- Every level has a designed finite shot allowance, seeded eligible queue and an estimated solution; no random dead-end that forces paid currency.
- Difficulty comes from arrangement, family count, radii, obstacles and objective combinations, not random surprise physics.
- **DESIGN BASELINE:** 1 star for victory; 2/3 stars from per-level authored remaining-shot thresholds; score may break ties but not replace mission success. Never require three stars to unlock the next main-path level. Store highest stars, not sum of retries.
- **DESIGN BASELINE:** Replay unlocked completed levels any time; repeat rewards configurable and idempotent; first-clear reward once. Next campaign level opens upon victory; optional world-star gates should not block mandatory path.
- Miss penalties are world-specific under approved S2-12, but concrete thresholds and hazard steps remain **PENDING**. Any escalation must be previewed before the player shoots.

## Validation pipeline / acceptance gates
1. Schema validation: IDs, objectives, shot budgets, references, assets, progression graph and currency/reward IDs valid.
2. Geometry validation: no illegal circle overlap, playable boundaries, anchor connectivity, initial danger state and no required object unreachable behind an impossible barrier.
3. Deterministic simulation: same level version + seed + inputs yields identical event log and result across runs; replay supports debugging.
4. Solver search: at least one legal victory path using free permitted cannon, the authored shot budget, allowed sizes and queue/swap; use bounded search and label `UNKNOWN` rather than falsely claiming unsolvable/solvable.
5. Fairness checks: useful or recoverable shot choices, no unwinnable generated queue, safe placement, no reliance on in-app purchase/ads, stable fallback behavior.
6. Human playtesting: clarity, difficulty, session length, fun, visual readability and performance on device; solver success alone is insufficient.
7. Content QA: tutorial instructions, obstacles and mission scoring match actual rules; accessibility checks.
8. Publishing: store exact seed, level definition hash, solver version, difficulty metrics and playtest approval.

Procedural daily level creation is offline/server reproducible: deterministic seed and bounded retries, verified reachable victory, fallback to a previously curated level if generation cannot certify a candidate. Do not publish an uncertified candidate.

## Unresolved (explicitly NOT LOCKED)
Final world/level counts; precise unlock schedules; obstacle roster and behavior; star thresholds and exact reward quantities; win-event counter nuances; queue fairness thresholds; world miss penalties; absolute no-space geometric fallback; blocked evolution fallback; live-service timing and leaderboards. Preserve earlier design baselines separately from user-approved decisions.
