# Stage 2 — Shooting, collision and matching mechanics

**State: PARTIALLY APPROVED — Q16–Q19 user intent recorded; terminal fallback pending** · Updated 2026-11-11.

## Locked Stage 2 decisions

### S2-01 — Match eligibility: A
**Same family, any physical size.** Small + medium + giant Rosybuns may belong to the same connected match group. Different families do not automatically match; cross-family wildcard/power mechanics need separate approval. The match threshold and counting method are locked under S2-05.

### S2-02 — Launchable sizes: A
Start with **small and medium** creature shots; **giant projectile shots unlock later**. Giants can still be placed on boards earlier if levels specify them, pending level design. Exact introduction milestone, queue weighting, and giant-shot constraints are not yet approved.

### S2-03 — Wall reflection: A
Accurate side-wall ricochet aiming. Trajectory preview and actual shot must use the **same collision geometry**, including variable projectile radius. Idealized reflection for a vertical side wall reverses horizontal velocity, preserving the normal speed; no hidden random deflection.

### S2-05 — Ordinary match threshold: three (approved)
When the newly attached shot has finished placement, any **connected group of at least three creatures of the same family** qualifies as an ordinary match. Each creature counts as **one**, whether small, medium, or giant. Connectivity is by the gameplay contact graph (not just nearby pixels); a gap does not count. This decision does **not** lock chain-reaction timing, evolution conditions, wildcard behavior, or scoring.

**Design examples:** three contacting Rosybuns of mixed sizes qualify; two giants do not; a Rosybuns separated from the other two by an unrelated family does not form a qualifying group through that unrelated creature.

## Locked geometry decision and remaining implementation proposals
- **LOCKED:** Continuous-position circle attachment/contact graph, not a fixed snapping grid. Creatures have distinct real physical radii.
- Physics contact radius ignores minor ears, leaf sprouts, horns, and fur fringe; sprites may extend outside the collider.
- Attachment candidate must be inside bounds, not overlap other colliders, and have a valid support/contact connection (or ceiling anchor).
- A graph tracks touching neighbors and paths to ceiling anchors. Remove unsupported groups when defined removal rules trigger.
- Stable collision handling, no teleporting/projectile tunneling, deterministic tie-breaking for simultaneous contacts; test crowded corner cases.
- Proposed physical diameter ratios: small/medium/giant = **0.75 / 1 / 1.5**. Existing asset packs contain inconsistent metadata ratios; game design will define the canonical physical ratios rather than rely on PNG size or per-family artwork.

## Locked queue/detachment rules and proposed state machine

### S2-06 — Queue with one pre-shot swap (approved)
Display the **current** and **next** creatures. Permit **one swap per shot**, only before the projectile launches; swapping exchanges the current and next creature and consumes the swap opportunity for that shot. Reset eligibility for the subsequent shot. How to refill the queue, distribution, family eligibility and handling a failed launch are still **PENDING**.

### S2-07 — Unsupported creatures drop (approved)
Following removals and any authorized special resolution, any cluster with **no path to a ceiling anchor** will **fall with visible animation and then disappear**. Special rescue mechanics, bonus score, objective accounting and how mid-flight chains interact are **PENDING**. The permanent game state must not wait for rendering frames to determine support.

### Proposed shot state machine — not separately locked
`READY → AIMING → FLYING → ATTACHING → RESOLVING → RESULT_EVALUATION → READY / WON / LOST`.
Only one in-flight shot at a time. Do not allow duplicate launch or a second queued shot while attaching/resolving. Separate simulation from Skia drawing and animation timings.

## Resolution order (proposal)
1. Final collision/contact placement validation.
2. Attach or perform explicit safe fallback if no legal location exists.
3. Discover matching connected component(s) by family; evaluate ordinary threshold.
4. Pop matches; apply special/evolution resolution under future rules.
5. Rebuild contact/support graph, detach unsupported groups, apply cascades as defined.
6. Update score/mission counters and evaluate victory/failure at settled state.
7. Advance next shot queue if still playing.

## Locked Q8–Q11 — evolution and fail conditions (2026-11-11)

### Q8 / S2-11 — Four-plus matches are eligible for special evolution (LOCKED)
A connected group of **four or more same-family creatures** meets the special evolution/ability trigger instead of being treated as an ordinary-only three-creature match. Three-creature groups remain ordinary pops. Precisely which creature evolves, whether the rest pop or contribute energy, eligibility exclusions, and whether the result is persistent are **PENDING**. This rule does not imply that all four grow or that every family has the same power.

### Q9 / S2-13 — Controlled push on growth (LOCKED)
When an evolution increases the creature's physical collision radius, the simulation must **push neighboring creatures** into a legal non-overlapping configuration as part of resolution. A push cannot silently overlap other circles, penetrate walls, or rely on random visual tweening as collision truth. The maximum push distance, displacement order, interactions with ceiling anchors, no-legal-solution fallback and safety against unintended loss are **PENDING** and require a deterministic algorithm/prototype before implementation.

### Q10 / S2-14 — Dual adventure fail modes (LOCKED)
A level can fail if (1) **available shots are exhausted** with required missions incomplete, or (2) the resolved cluster reaches/crosses the configured **danger boundary**. The actual shot allotment, whether unused queue creatures count, and boundary positions are **PENDING**.

### Q11 / S2-15 — Post-resolution danger evaluation (LOCKED)
Check danger only after the current shot's matching, evolution, displacement and detached-group resolution are complete. A shot that temporarily enters danger but clears the relevant creatures in the same resolution **does not lose solely for the temporary entry**. Compute outcome from the settled simulation state, not animation frames. Exact priority when victory and loss criteria coincide remains **PENDING**.

## Locked Q12–Q15 — shots, misses, fairness and blocked placement (2026-11-11)

### Q12 / S2-16 — Per-level designed shot budgets (LOCKED)
Each adventure level defines its own finite shot limit, based on its intended mission, layout, available families/sizes and target difficulty. **No fixed universal budget is implied.** Numerical budgets, counting of retries/failed launches, unused-shot rewards and whether emergency boosts add shots remain PENDING. The existing Q10 shot-exhaustion failure rule remains effective.

### Q13 / S2-12 — Progressive world-specific miss penalties (LOCKED)
The miss consequence depends on world/gameplay progression: early worlds should be forgiving; later worlds **may** introduce explicitly authored additional consequences for missed matches, such as a bounded row/descent hazard. A shot that does not remove a qualifying group still uses one shot under normal shot accounting; exact formal definition of a miss, counter thresholds, penalty events, resets, telegraphing and interactions with special-evolution outcomes are PENDING. Do not add random or invisible punishments by default.

### Q14 / S2-17 — Controlled, seeded and level-aware next-shot generation (LOCKED)
Generate queue entries from the level's eligible families and unlocked projectile sizes using a deterministic seed and level-aware constraints. Sequences must be reproducible for debugging and checked against solvability/fairness constraints; no promise that every individual shot creates an immediate match. Seed source, initial sequence design, dead-color pruning, max-run constraints and behavior on unsolvable candidate sequences are PENDING. Preserve the approved current/next display and one pre-shot swap.

### Q15 / S2-10 — Nearest valid attachment position (LOCKED, fallback unresolved)
If the naive collision contact location cannot legally accommodate the projectile, deterministically search for the **nearest** valid non-overlapping position with legal board contact/support while respecting boundaries and collision sizes. Define distance in board/world coordinates, stable tie-breaking, search bounds and capacity limits before implementation. If **no** valid candidate exists, the fallback is PENDING: do not automatically remove the shot, overlap a creature, mutate a random neighbor, or claim a refund has been approved. The approved Q9 growth-push rule applies to evolution; projectile attachment repositioning must not silently invent a new push mechanic.

### Non-locking recommended resolution model
An engine-side transaction should calculate shot outcomes independently of animation frames. Candidate flow: (1) projectile impact and valid placement, (2) match detection, (3) selected special/evolution processing, (4) deterministic growth push, (5) graph rebuild and detachment, (6) any authorized chains, (7) mission/score changes, (8) victory/failure evaluation, (9) queue advance only if game continues. **Exact precedence and simultaneous-effect rules are PENDING.**

### Safety and reproducibility invariants to validate
- No circle overlap after attachment, growth push, or detachment processing.
- No displacement outside walls or through fixed ceiling anchors/obstacles.
- Nearest-position search always terminates with a legal result or explicit failure state.
- Fixed state + seed + shot yields the same result independent of visual frame rate.
- Danger/failure evaluated at the fully resolved state; victory-vs-loss precedence is PENDING.
- A failed attachment never silently consumes resources without an explicit approved fallback.
- Miss-triggered hazards cannot fire before the appropriate stage-specific rules are finalized.

## Locked Q16–Q19 — resolution, precedence, bounded push, Bubble Shooter attachment (2026-11-11)

### Q16 / S2-18 — Special resolution first (LOCKED)
When a connected same-family group of four or more qualifies, select its eligible special evolution/power outcome **before** applying the ordinary pop-removal sequence. Then perform authorized consumption/removal, bounded physical push for actual growth, graph rebuild, removal and falling of unsupported groups, authorized cascades, accounting and terminal checks. Each state transition is deterministic and frame-independent. Exact evolved recipient, consumption and chain eligibility remain Stage 3 PENDING.

### Q17 / S2-19 — Victory overrides simultaneous failure (LOCKED)
After the *entire* shot finishes logically resolving, if all required mission objectives are satisfied, declare victory even if the same shot exhausted the last ammunition or the settled board also touches the danger zone. Otherwise evaluate configured loss conditions. Visual animation delays cannot alter the result.

### Q18 / S2-20 — Limited deterministic physical push (LOCKED)
Physical growth must push movable neighboring circles only as much as necessary within bounded, reproducible displacement limits; fixed ceiling anchors, walls and non-movable obstacles remain valid. No overlap or out-of-bounds final configuration. Exact push cap, iteration bound, movement tie-breaker and blocked-growth behavior are **PENDING**; do not pretend an unbounded rearrangement was approved.

### Q19 / S2-21 — Attach like a classic Bubble Shooter (LOCKED intent; ultimate fallback PENDING)
When the initial impact point is crowded, **the projectile should attach to the board**, not bounce back or disappear merely because the direct contact point is occupied. Deterministically find the nearest legal non-overlapping, in-bounds position touching the existing anchored cluster or ceiling, then snap into place as the normal Bubble Shooter experience would. Because Puff Trails has *real differing circle radii*, this is **circle-contact snapping**, not a conventional uniform hex-grid cell or permission to overlap.

**Unresolved critical distinction:** If the board has literally **no legal attachment position anywhere within the allowed search**, classic snapping cannot be achieved without violating physics; terminal handling needs a further user decision. A size increase that cannot fit despite bounded push similarly needs an explicit fallback. These were not approved.

### Recommended logical sequence (special-first now approved; selection details pending)
1. Find first impact and nearest legal anchored attachment; place only if collision-legal.
2. Rebuild contact graph; detect qualifying connected family group.
3. For 4+ eligible group select the special outcome first; for 3 apply normal pop.
4. Apply explicitly authorized consumption/removal and any evolved physical growth using bounded push.
5. Rebuild support graph and detach unsupported components; schedule their falling visuals.
6. Resolve only explicitly authorized subsequent chains with deterministic bounds.
7. Apply scores, objectives and resource changes once; check complete mission first, then danger/shot exhaustion.
8. Advance queue only if the level continues. Remaining sequencing/timing details must be validated.

## Remaining unapproved Stage 2 details
- Terminal no-space shot placement handling when no legal anchored circle contact exists at all.
- Growth failure after deterministic bounded push is exhausted.
- World-specific miss thresholds, shot budgets, penalties and queue fairness constraints.
- Fixed contact tie-breaking, search radius, solver bounds, special recipient selection and cascading resolution rules.
- Exhaustive test cases for tangencies, wall corners, giant projectiles, simultaneous win/loss and seed reproducibility.

## Acceptance test plan (not yet executed)
1. Exact same-family match across mixed physical sizes; different families alone do not match.
2. Small and medium projectiles available initially; giant shots gated until unlock.
3. Wall reflection and trajectory prediction agree within a defined screen-space tolerance under multiple aspect ratios.
4. Contact and anchor support remain valid at boundaries, narrow gaps, simultaneous contacts and crowded clusters.
5. No penetration or stacking of distinct collision circles, including giant-to-small contacts.
6. Same initial game state, action inputs and random seed produce identical placements, matches and rewards.
7. One shot only until full resolution; rapid touch spam cannot fire twice.
8. If an evolution increases size, its transformed collider cannot intersect existing objects (define a deterministic rule before enabling).
9. Victory/failure evaluated only after effects resolve; replay cannot duplicate permanent rewards.
10. Offline on-device performance and memory validation required before certification.

## Change log
- 2026-11-11: Q16 special-first resolution, Q17 victory priority, Q18 bounded push, Q19 normal Bubble Shooter-style nearest legal attachment locked. Absolute no-space and blocked-growth terminal fallbacks remain pending.
- 2026-11-11: Q12 per-level designed shot limits; Q13 progressive world-specific miss penalties; Q14 controlled seeded level-aware queue; Q15 nearest legal blocked attachment position locked. No-space fallback and final resolution priority remain pending.
- 2026-11-11: Q8 match 4+ special evolution, Q9 push neighbors on physical growth, Q10 dual failure modes, Q11 danger checked after resolution locked; safeguards and numerical parameters still pending.
- 2026-11-11: User approved Q5 swap queue, Q6 continuous circle geometry and Q7 detached-fall behavior; implementation subrules remain pending.
- 2026-11-11: User approved S2-05 ordinary threshold: three or more connected same-family creatures, one count each regardless of size.
- 2026-11-11: User locked A/A/A for matching across sizes, progressive launched sizes and ricochet wall shooting.
