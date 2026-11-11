# Puff Trails — Stage 3: Character families, powers, evolution and unlocks

**Version:** 0.3.1 · **Date:** 2026-11-11  
**Status:** DISTINCT FAMILY ROLES APPROVED; implementation design specified for review and testing.  
**Authority:** User-approved Stage 1/2 decisions, original six locked visual identities, and Stage 3 automatic activation + six distinct strategic roles.

## 1. Decision status and scope

- **LOCKED (user-approved):** All six families remain the playable character pieces; 90% spherical silhouette and 10% distinctive tiny traits; 3+ same-family connected creatures across all physical sizes match; a group of 4+ qualifies for special evolution; special-first resolution; powers activate **automatically**; **six strategically distinct family powers** rather than cosmetic variants or duplicate roles.
- **DESIGN BASELINE (assistant-defined, reviewable):** Individual named effects and their exact targeting/consumption/persistence rules below. These implement the user's requested 'distinct' direction but were **not individually selected by the user**; a prototype and product review can revise them without changing locked foundations.
- **BALANCE DEFAULT (tunable):** All radii, target counts, turns, unlock levels and chain caps. Use level data and tuning; do not represent as final approved numbers.
- **PENDING outside Stage 3:** Stage 2 terminal no-legal-shot attachment, blocked mandatory physical growth, exact world miss-penalty thresholds and detailed geometry solver; cannon mechanics Stage 4; pricing/economy Stage 7.

Repository storage aliases are `rosybuns`, `skybubs`, `leaflings`, `chirpyfluffs`, `twirlpuffs`, `peachtells`; **canonical in-game family names remain** Rosybuns, Skydoodles, Mossmops, Sunpuffs, Plumplets and Peachpeeps. Do not replace locked art with generated placeholder pets.

## 2. Distinct family power roster — proposed implementation baseline

| Family | Ability | Distinct role | Automatically resolved effect | Default limit / safe fallback |
|---|---|---|---|---|
| **Rosybuns** | **Heart Link** | CONNECT | Form one *matching-only* virtual link between two nearby same-family components, then evaluate newly qualifying 3+ matches once | Up to one pair within 2 medium diameters; no eligible pair → visible heart sparkle, no state modification |
| **Skydoodles** | **Sky Dash** | REPOSITION | Move up to two legal nearby **movable** pieces along the deterministic shot-direction vector to open space | Bounded per-piece displacement; collision solver rejects invalid moves; no valid move → gust visual only |
| **Mossmops** | **Seed Bloom** | CREATE / GROW | Spawn exactly one small Mossmops *bud creature* at a nearest legal adjacent contact location, allowing new matches and support checks | One per activation; if no valid legal contact → flower sparkle without spawn; never a virtual bridge |
| **Sunpuffs** | **Sun Burst** | CLEAR | Remove eligible directly touching removable pieces/obstacles around the activation location | Contact graph distance one; tagged protected objects immune; no target → visual burst only |
| **Plumplets** | **Magic Shift** | TRANSFORM | Change one legal neighboring ordinary creature's family ID into Plumplets without changing its radius or position, then reevaluate match groups | Prefer conversion yielding most newly matchable Plumplets; stable-ID ties; no legal target → visual shimmer |
| **Peachpeeps** | **Sweet Rescue** | PROTECT / RECOVER | Remove one **world-specific, eligible negative status** (e.g. ice, sticky lock, or damage counter) from an adjacent creature, or grant one-turn protection from *a tagged hazard effect*, not from danger-line failure | One eligible piece; no such target → cosmetic healing pulse; never ignores danger boundary, shot exhaustion, or ceiling support |

### Why the roster is genuinely distinct

Rosybuns creates only **logical match connections**, not physical pieces or ceiling support. Mossmops creates **one physical new creature** that takes space, can be matched, can detach, and must pass all normal geometry tests. Skydoodles changes positions, Sunpuffs removes objects, Plumplets changes matching identity, and Peachpeeps prevents or repairs a narrowly tagged status. This removes the previous Heart Link/Nature Bloom duplication and the dangerous 'ignore danger line' shield concept.

### Targeting priority (design baseline)

1. Exclude impossible/locked/protected objects and illegal targets.
2. Evaluate candidate outcomes in a deterministic simulation without graphics.
3. Prefer the outcome improving the active mission objective; otherwise maximize legal match potential; otherwise minimize target contact distance; final tie-break by stable entity ID / coordinate ordering.
4. Targets, selection reasons and state deltas are recorded in an event log for replay and debugging. No uncontrolled random target selection.

## 3. Deterministic 4+ evolution algorithm (design baseline)

**Preconditions:** A shot has attached legally. Resolve groups by family and physical contact graph. Ignore decorative fur, temporary matching links and screen animation frames for collision/support.

1. **Detect:** Collect a qualifying connected 4+ group after attachment or approved chain effect. Sort by immutable IDs.
2. **Recipient:** If the newly fired piece belongs to the group, it survives; otherwise select the group member closest to the current event origin with ties settled by stable ID. If multiple qualifying groups compete, sort by distance to the projectile impact and then group-min-ID.
3. **Reserve once:** Create a unique `specialEventId=(levelRunId,shotId,groupSignature,activationSequence)`; mark the group as processed in this shot. Reserve the chosen survivor before consuming other members, satisfying special-first resolution.
4. **Consume:** Remove exactly the other `N-1` matched creatures; preserve the survivor as an attached, anchored-if-supported piece. Each removed creature is accounted for exactly once; consuming a matched creature is not the same as a falling-detached creature.
5. **Awaken + activate:** If the survivor is Normal, mark it Awakened for this level. Run its family's special effect automatically once as the event resolves. If already Awakened, it may still be the survivor and activate on a **new qualifying group**, subject to new event identity; never retrigger on the same group/state signature.
6. **Physical size:** Awakened is **independent of sizeClass**. No automatic radius increase from a four-match. If an authored level separately requests physical growth, execute the locked bounded-push rule; its unresolved no-space fallback must not be guessed by implementation.
7. **Recompute:** Rebuild physical contacts/support, apply any valid effect outcome, resolve authorized newly formed matches in stable order, then unsupported groups fall, and mission accounting is performed once. To prevent infinite loops, set a tunable per-shot special-chain cap (initially 8); an exhausted cap causes a validation error in authored content rather than hidden arbitrary clearing.
8. **Terminal:** Complete all logical resolution, then apply locked win-before-loss precedence and post-resolution danger check. Present animations from the committed event log; never let animation timing alter game state.

**3-match behavior:** Three connected same-family creatures pop normally; no survivor, tier change or family power.  
**4+-match behavior:** Exactly one survivor in the chosen matched group with `N-1` consumed, and one automatic family power per unique qualifying event.  
**Newly spawned Mossmops:** It counts as a new physical piece, with a new ID, but its addition cannot recursively retrigger an already processed special event.

## 4. Evolution and collection persistence (design baseline)

- State attributes: `familyId`, `sizeClass` (`small|medium|giant`), `evolutionTier` (`normal|awakened` in initial game), `statusEffects[]`, `sourceEventId` and `abilityEventIds[]`.
- **Awakened remains on the board** with its tier appearance until popped, detached, converted where permitted or the current level ends. An Awakened piece is not a reusable manual button/charge; powers occur only on a new qualifying 4+ match.
- **No carryover of on-board creatures or tiers between levels.** The first valid discovery of a tier or ability is recorded **permanently in the collection**, as an idempotent unlock. Replay cannot grant the one-time collection reward twice.
- **Master tier deferred**, not required for initial gameplay; define cosmetic and behavioral expansion later and keep artwork separate from locked Normal/Awakened assets.
- Family unlocks permit appearance in **eligible authored levels**, not free choice of every shot. No essential family progression is monetization-gated.
- Existing sprite packs are *integration candidates*. If Awakened art is unapproved, use a reversible, non-destructive effect overlay on the locked base sprite, not a newly invented replacement character.

## 5. Progression and onboarding (BALANCE DEFAULT)

Suggested tutorial order (not locked level IDs): Rosybuns + Skydoodles at start; Mossmops around level 8; Sunpuffs around 18; Peachpeeps around 30; Plumplets around 45. Introduce abilities only after the player understands a normal 3-match; then teach one special at a time with an authored solvable level. Giant shots unlock progressively per S2-02, not automatically alongside a particular family.

Collection states: `unknown → seen → discovered → special-used → mastery-progress`. Permanent progression milestones need idempotent grant IDs. Cosmetic rewards never modify physics; a family may appear in a level before its power tutorial only if that level does not require its special.

## 6. Balancing controls and safeguards

All values live in game content configuration, not hardcoded C#-style scene data: `abilityRadius`, `maxTargets`, `maxDisplacement`, `statusDurationShots`, `maxSpecialEventsPerShot`, `familyUnlockLevel`, and per-level banned/protected tags. Start conservatively, collect outcomes in telemetry and tune through real-device playtesting.

- Avoid disproportionate Sun Burst clearing: directly touching neighbors only, protected objects excluded.
- Prevent Rosybuns Heart Link from providing structural anchoring; it is *matching-only* and expires after one evaluation.
- Prevent Sky Dash from moving ceiling anchors, fixed objects or crossing walls; movement uses the same deterministic geometry solver as evolution pushing.
- Seed Bloom cannot spawn into an occupied contact or exceed a level's legal spawning constraints; spawned pieces must remain support-valid or resolve detachment normally.
- Magic Shift conversion does not change hitbox, movement, obstacle tags, mission protection or entity ID.
- Sweet Rescue never bypasses the locked loss conditions and requires an author-tagged hazard to be useful. A normal level with no such hazard still remains winnable without it.
- Every power must have predictable visuals and a nonpunitive no-target fallback; no extra ads, currency or shots are required for special activation.

## 7. Acceptance test matrix (specification only; not executed)

| Test | Required result |
|---|---|
| Same family: small + medium + giant | All count one; group of 3 pops normally |
| Four-member group including fired creature | Fired member survives; three consumed; ability automatically fires once |
| Four-member group without fired member, arising from effect | Nearest to event origin survives; deterministic ID tie |
| Heart Link between unconnected same-family components | One temporary match-only edge; never structural support |
| Seed Bloom on crowded board | Legal small seed placed or no-op; never overlap |
| Sky Dash blocked by wall/anchor | No illegal movement; cosmetic gust fallback |
| Sun Burst near protected target | Only legally removable targets cleared |
| Magic Shift conversion | Family changes, collision circle and ID unchanged |
| Sweet Rescue with no hazard | No danger-line bypass; cosmetic pulse |
| Repeat identical level seed and shot sequence | Byte-equivalent logical state/event order |
| Two chains attempt to consume same entity | Processed once; no duplicate mission/reward credit |
| Four-match on final shot with active danger | Finish effect and falls; victory evaluated first |
| Awakened survives match and is then popped | Tier persists only until removal/level exit; collection discovery persists |
| Art unavailable for Awakened | Approved base sprite plus non-destructive overlay; no random mascot substitution |

**Stage 3 acceptance gate:** Design package is ready for cannon planning. Production closure requires actual gameplay tests and product review of the six abilities; they are not yet verified by a running game.
