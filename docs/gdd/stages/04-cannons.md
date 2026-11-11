# Puff Trails — Stage 4: Cannons, Abilities and Upgrades

**Version:** 0.4.1 · **Status:** CORE DIRECTION AND HYBRID ACTIVATION LOCKED; roster, numbers, and pricing remain DESIGN BASELINES / VALIDATE.

## S4-01 — User-approved direction (LOCKED, 2026-11-11)
Every collectible cannon has a **distinct, balanced gameplay ability**. Cannons also have **upgrade paths**, with meaningful increases or enhancements in power. The system must remain compatible with the core shooting rules and avoid unfair, mandatory paid advantages. This combines prior options B and C rather than treating them as alternatives.

## S4-02 — Hybrid ability activation (LOCKED, 2026-11-11)
**Passive utility** (e.g. Cloud Sling aiming assistance) runs automatically when eligible and requires no manual activation or player charge. **Charged active abilities** (e.g. petal nudge, star shot, moon pause, prism choice) become available after earning cannon energy and only fire upon explicit player action. Passive features must not consume charge. No automatic discharge of active abilities, including at full meter, level end or next shot. Every active selection has a visible pre-commit preview and cancel path. Activating a power must not consume the ordinary current/next projectile or its one allowed pre-shot swap unless the specific ability is explicitly defined as a special shot; any such exception requires a further approved design.

Hybrid cannon activation is **separate** from Stage 3 family special abilities: a qualifying 4+ family match activates its family power automatically during shot resolution. There is no transfer of charge between the two systems without an explicit future design decision.

## Non-negotiable inherited rules (LOCKED)
- Cannon uses the same deterministic projectile movement, real family/size hitboxes, precise ricochet and accurate aim guide.
- Current + next character, exactly one pre-shot swap opportunity; controlled seeded level-aware shot generation.
- Three connected same-family creatures pop; 4+ qualifies for an automatic family ability. Cannon abilities do not alter these thresholds.
- No arbitrary cannon effect may create overlaps, bypass safety constraints, duplicate rewards or alter settled victory-first precedence.
- Official six fluffy families and locked visuals remain unchanged.

## Design architecture (DESIGN BASELINE)
- Equip **one cannon** before a level. It remains equipped for that attempt; swapping loadouts mid-level is disabled by default.
- All cannons have common basic shooting and **one signature ability**. A charge meter fills from eligible successful gameplay actions for active abilities only; passive utility functions without a meter. Earned charge is attempt-local and resets on replay, win, or loss. The active ability is explicitly player-triggered even at full charge. Level authors can disable an ability only if communicated before entry and solvability validated.
- The cannon charge system is distinct from **family special powers**, which always activate automatically on qualifying 4+ matches. The same event may charge a cannon but cannot trigger infinite mutual reactivation.
- Upgrade tiers **I / II / III** are suggested. Upgrades improve bounded range, clarity or limited charges, but not raw projectile collision behavior or minimum match thresholds. Exact costs, timers, and numerical scales remain tunable and non-locked.
- Store cannon stats as data definitions separate from animation, texture skins and deterministic game-engine commands. The progression inventory saves cannon unlock/level and validates grant idempotently.

## Proposed roster (reviewable; not individually approved)
| Cannon | Ability | Tier I | Tier II | Tier III | Balance boundary |
|---|---|---|---|---|---|
| Cloud Sling | **Soft Aim** — expanded projected path around one ricochet | Short standard guide | Longer guide | Clearer narrow-gap preview | No altered path, no auto-hit or free shot |
| Bloom Launcher | **Petal Nudge** — one controlled reposition of an eligible free creature | Short nudge | Slightly wider allowed target area | Extra targeting flexibility | Must preserve anchor/connectivity and non-overlap |
| Starburst Cannon | **Star Shot** — limited utility projectile that clears a tiny defined obstacle area | One eligible obstacle | Modest additional effect radius | Better obstacle specificity | Cannot clear mission-protected targets; limited charge |
| Moonlight Cannon | **Moon Pause** — temporarily suspends one authored advancing hazard | One event window | Longer window | Two eligible hazard events at most | Does not suspend shot exhaustion or danger-line rule indefinitely |
| Rainbow Launcher | **Prism Choice** — preview/select between limited queue-safe family alternatives | One extra eligible option | Two extra options | One conditional size choice where allowed | Must preserve seeded queue, level family eligibility and solvability |

This roster is an initial balancing proposal, not permission to create production assets or commit to these names/stats. Alternative implementation might consolidate effects after prototype testing if they overlap with family specials.

## Unlocks, upgrades and economy (DESIGN BASELINE)
- Cloud Sling is unlocked and playable at level 1. Other cannons unlock through world progress, mastery goals or achievements; exact milestones await the world/economy stages.
- Upgrades use earned progression resources. Paid purchases may accelerate cosmetics or optional convenience only, subject to economy-stage review; essential progress must remain feasible without payment or ads.
- Upgrades never silently modify a level's pre-authored shot limit. Default cannon must pass a level solvability gate. Stronger cannons should improve creative strategies rather than trivially auto-solve missions.
- Unlocks and upgrades have no randomized paid lootbox dependency; all players can see ability description, tier stats and unlock requirements.

## Collision / determinism rules
- An ability is a validated domain command with a unique action ID and postcondition; deduct a charge only on success or explicitly reported spent use.
- Re-simulate attachment, support graph, detached creatures, matches, evolution, danger and rewards using the same engine as ordinary shots.
- Repeated identical seed + input + level state + loadout + tier produces identical results; visual animation timing may differ without changing the result.
- Ability operations that cannot legally resolve must fail safely with no overlap. Charge-refund or partial action handling must be specified by each ability before implementation.
- Triggered effects are bounded by budgeted target counts, distances and chain depth. Upgrade ceilings are authored and tested on low-end devices.

## Acceptance criteria and tests
1. Each cannon's signature mechanic is recognizable and differs from all other cannon and family abilities.
2. Equipping and upgrading persist across app relaunch, and cannot double-spend or double-grant.
3. Accurate trajectory and collisions remain unchanged across cannon tiers except an explicitly displayed approved utility effect.
4. The default cannon can complete all mandatory campaign levels under documented solvability assumptions.
5. A charged ability has clear eligibility, permitted targets, deterministic selection, and safe disabled states.
6. A cannon effect cannot manufacture illegal placements, infinite chains, repeated special activations or duplicate reward claims.
7. Unlock and upgraded states are represented by accessible text/icons, not only color.
8. Monetization, consent and economy rules are reviewed in later GDD stages before release.



## Pending implementation specifics
Exact cannon ability roster, upgrade strength and maximum tiers, unlock levels, currency type/cost, per-shot charge formulas, level exclusions and special interaction with family evolutions must be tested and/or reviewed before production lock. No cannon UI mockups are authorized merely by this planning document.

## Cannon progression architecture — v0.4.1 (DESIGN BASELINE, numerics VALIDATE)

### Equip, unlock and persistence
- One unlocked cannon may be equipped on the **pre-level loadout** screen, independent of which family is shot. Its equipped ID and permanent upgrade tier persist across restarts. Switching during a live attempt is disabled.
- Every mandatory story level remains completable using the free starter Cloud Sling at base tier with generated, solvability-tested ammo. An alternative cannon can improve convenience/strategy but never be a required purchase or the only way to win a mandatory mission.
- Unlock an equipment blueprint from campaign/world or mastery milestones, then grant ownership exactly once via a durable, idempotent progression transaction. Exact level gates are **not yet locked**; first playable prototype unlocks only Cloud Sling to avoid confounding shooting physics.
- Provide a clear pre-entry description of ability, eligibility, charge and tier effects. An active cannon with no valid targets shows disabled state, not a misleading usable action. Replays maintain permanent unlocks/upgrades, but reset attempt-local energy.

### Energy rules (DESIGN BASELINE)
- Only cannons with **active** powers have an energy meter. Its state is an integer `energy` from 0 to `energyCap` and `ready = energy >= activationCost`. Level starts at zero energy unless an authored level explicitly declares a different start condition.
- Proposed starter tuning: `energyCap=100`, `activationCost=100`; grant +10 for a successful ordinary 3-match, +15 for eligible 4+ special resolution, +5 for each detached component cleared (max +15 per shot). A nonmatching shot gives zero. Each logical result event is credited **once**; cap the total charge from one shot at +35 to contain extreme cascades. **These numbers are tunable prototypes, not user-locked values.**
- Grant energy **after** resolving the entire shot, based on its unique, deduplicated gameplay events; no recursive energy is awarded from an active cannon's own effect unless an explicit authored rule allows it. This prevents infinite activation loops.
- Passive Cloud Sling always shows the standard accurate preview (all cannons get accurate trajectories) and may add *readability assistance* (e.g. highlighted first contact or accessibility cues), not a unique physics advantage. Avoid describing accuracy itself as exclusive to this cannon.
- Charge spending is atomic with a successful active ability command. If the effect cannot legally apply or is cancelled, consume **no energy**. A preview never changes game state. Fully charged energy remains banked until the user activates it or the attempt ends. No cooldown or forced use by default.
- Active abilities are restricted to a stable input phase: no active use while projectile is airborne, the cluster is settling, a chain is resolving, or a terminal result is being evaluated. Every accepted action has an idempotency key and is persisted as an event for deterministic replays.

### Upgrade model (DESIGN BASELINE)
- Three initial tiers: **I** (signature utility), **II** (controlled enhancement), **III** (an interesting but bounded extension). Upgrades are permanent for an owned cannon; no mid-level upgrade, durability, energy decay or random stat rolls.
- Each upgrade changes only authored and visible ability parameters, such as effect radius, eligible target count, additional choice or duration; it **never** changes collision radius, basic shot speed, wall-bounce math, 3/4 match threshold, full-shot victory precedence or guaranteed ammo fairness.
- Tier III must not turn a special into automatic win; apply per-level and per-ability target caps. Higher tiers can be disabled in specific tutorial/challenge levels only when that restriction is disclosed before entry and the level is validated as completable.
- Upgrades use an **earned in-game progression resource** rather than real-money-only purchases. Resource name, exact costs, and any paid access to upgrade resources are **PENDING Stage 7/10 economy/monetization decisions**, not approved here.
- Proposed resource cost scaling for balance simulation only: Tier I included on unlock, Tier II 100 units, Tier III 250 units; these are placeholders, not game prices.

### Balancing and acceptance gates
1. Baseline accuracy is identical across all cannons; visually confirm preview vs projectile trajectories, including edge ricochets.
2. Every mandatory level has a verified Cloud Sling Tier I solution without ads, purchases or rare event rewards; seed/queue fairness is preserved.
3. On a balanced validation sample, alternative cannons give meaningful but bounded assistance rather than guaranteed mission completion; record metrics for win rate, shots remaining, usage rate and power-induced deadlocks by tier.
4. An ability cannot push fixed anchors, create overlap, reveal hidden randomness, select out-of-level families, bypass a danger-line loss rule, double-count rewards or re-trigger itself indefinitely.
5. Exact same initial seed + inputs + loadout + tier yields the same result regardless of animation frame rate or app foreground/background transitions.
6. Loadout, upgrades, energy grant, spending and unlocks are tested for interruption, restart, duplicate commands and stale save versions.
7. All ability targeting has safe no-legal-target handling; no charge taken on rejected commands.
8. Optimize mobile memory and animation workload; test charged-ability presentation and active targeting on small phone viewports and mid-range Android hardware.

### Remaining design decisions / tests (NOT LOCKED)
- Final five-cannon roster and names, specific upgrade effects, earned-resource identity and costs, exact per-world unlock milestones, paid resource policy (economy stage), and tuning values are not user-approved.
- Potential overlap between Bloom Launcher motion and Skydoodles Sky Dash must be validated. Distinguish equipment's manually targeted utility from automatically triggered character power; redesign if playtests show redundancy.
- Cloud Sling's proposed passive must meaningfully differ from the **standard** universally accurate trajectory preview, which is already a locked requirement. Final passive enhancement awaits prototype evaluation.
- Remaining Stage 2 no-legal-position behavior and blocked-evolution fallback stay separate unresolved mechanics; cannons cannot silently override them.
