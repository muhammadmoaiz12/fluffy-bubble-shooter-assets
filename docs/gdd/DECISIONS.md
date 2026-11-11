# Puff Trails — Decision register

Updated 2026-11-11 · v0.5.0. **Never reinterpret proposed mechanics as locked.**

| ID | Decision | State | Rationale / notes |
|---|---|---|---|
| BAS-01 | Name: Puff Trails | LOCKED (creative) | Legal/store availability not fully cleared |
| BAS-02 | Android and iOS; React Native + Expo + TypeScript + Skia | LOCKED | Code-first AI-assisted mobile development |
| BAS-03 | Six original family visuals and 90% spherical/10% distinctive features | LOCKED | Reuse approved art; production QA separate |
| BAS-04 | Real small, medium, giant collision sizes | LOCKED | Exact physical radius tuning remains VALIDATE |
| BAS-05 | Anchored hanging-cluster shooting | LOCKED | Avoid dropping/merging jar gameplay |
| BAS-06 | Hybrid match/pop, special evolution, effects | LOCKED (high level) | Exact special triggers still PENDING |
| BAS-07 | Multiple distinct themed worlds, highly expressive animation | LOCKED (high level) | Content specifics to be approved later |
| S1-01 | Primary mode: level-based adventure | LOCKED | Endless not a required launch mode |
| S1-02 | Balanced difficulty: accessible first, strategic later | LOCKED | Gradual onboarding, no arbitrary surprise physics |
| S1-03 | Family abilities activate only through special matches/evolutions/mission mechanics | LOCKED | Not every ordinary match automatically triggers family powers |
| S1-04 | Level-based missions, explicit victory/failure evaluation | LOCKED (principle) | Detailed objectives and scoring later |
| S2-01 | Match by same family across any of three sizes | LOCKED | Size does not prohibit same-family matching |
| S2-02 | Small/medium launchable initially; giant projectiles unlock later | LOCKED | Exact unlock level PENDING |
| S2-03 | Bank shots reflect from side walls, trajectory preview must be accurate | LOCKED | Mathematical behavior subject to tests |
| S2-04 | Continuous 2D circle placement/contact graph | LOCKED | Q6 approved; exact attachment tie-breaking remains PENDING |
| S2-05 | Ordinary match requires **3 or more connected creatures of the same family**, counting each creature once regardless of size | LOCKED | Size does not weight match count; connected means contact in the anchored cluster graph |
| S2-06 | Show current and next creature; allow **one swap per shot** before firing | LOCKED | Q5 approved; eligibility, refill and queue RNG rules PENDING |
| S2-07 | Unsupported connected components **fall, animate, then disappear** | LOCKED | Q7 approved; bonus scoring and mission accounting PENDING |
| S2-08 | Shot resolution and evaluation is atomic; no next shot before settle | PROPOSED | Important reproducibility property; detailed ordering PENDING |
| S2-09 | Collision radii common across families | PROPOSED | Normalize inconsistent source asset metadata ratios |
| S2-10 | When attachment is blocked, search nearest valid non-overlapping position | LOCKED (Q15-A; partial) | A deterministic nearest-valid search must honor valid contacts, boundaries and approved push policy; no-legal-position fallback remains PENDING |
| S2-11 | Four or more same-family connected creatures qualify for special evolution/family ability instead of an ordinary-only match | LOCKED (Q8-A) | Exact selection, consumption, permanent/temporary form and chain interaction PENDING |
| S2-13 | Physical growth uses controlled push/displacement of neighboring circles | LOCKED (Q9-B) | Must avoid overlap, wall penetration, unfair cascading loss; no-space fallback and tie-breaking PENDING |
| S2-14 | Adventure failure can occur from shots exhausted with objectives unmet OR unresolved cluster crossing danger boundary | LOCKED (Q10-A) | Exact level shot budgets, boundary position and exceptions PENDING |
| S2-15 | Danger boundary checked after full shot match/evolution/fall resolution | LOCKED (Q11-A) | Same-shot clearance can save player; rendering timing must not change outcome |
| S2-12 | Miss penalties: **progressive and world-specific** | LOCKED (Q13-C) | Early worlds are forgiving; advanced worlds may introduce bounded miss-triggered hazards. Exact counters, consequences, and telegraphing PENDING |

| S2-16 | Shot limits: individually designed per level | LOCKED (Q12-A) | Explicit finite level shot budgets; numeric budgets and unused-shot scoring PENDING |
| S2-17 | Queue fairness: controlled, seeded, level-aware generation | LOCKED (Q14-A) | Reproducible family/size choices and solvability-aware validation; constraints, reroll policy and impossible-state handling PENDING |

## Final Stage 2 approvals (2026-11-11)
| ID | Decision | State | Rationale / boundaries |
|---|---|---|---|
| S2-18 / Q16 | Resolve eligible 4+ special evolution before ordinary popping | LOCKED (Q16-A) | Select special outcome, then apply approved consumption/removal, controlled growth push, detachment, authorized chains, accounting and terminal evaluation. Exact family-specific selection/consumption still PENDING Stage 3. |
| S2-19 / Q17 | Full mission completion takes priority over simultaneous danger or zero shots | LOCKED (Q17-A) | Evaluate only after fully settled shot; no premature loss during animation. |
| S2-20 / Q18 | Bounded deterministic growth displacement | LOCKED (Q18-A) | Push only movable neighbors by necessary bounded amounts; never move fixed anchors, penetrate walls or overlap. Numeric cap/solver/tie-break details PENDING. |
| S2-21 / Q19 | Classic Bubble Shooter attachment on blocked impact | LOCKED (user clarification, partial) | Do not return a merely awkward shot: search/snap to a nearby physically legal, anchored board-contact position, preserving real-size circles. No forced overlaps or conversion to a fixed hex grid. Absolute no-legal-position fallback remains PENDING. |

## Still unresolved; not approved
1. **Q19 terminal geometry:** if the *entire* board has no legal anchored non-overlapping attachment position even after deterministic search, decide whether to end level, refund a shot, or apply a different explicitly defined rule. Similarly, blocked evolution after bounded push needs separate fallback approval.
2. **Q20 world-specific fairness:** miss counters, escalation, hazard thresholds, queue exclusions and per-level numerical budgets.
3. **Solver parameters and resolution details:** deterministic contact ties, attachment search distance/caps, push displacement limits, special consume/evolve selection, chain ordering and all special ability interactions.
4. **Technical cases:** simultaneous contacts, tangencies, narrow gaps, giant shots near boundaries, fully crowded boards, final-shot victory, and seeded replays.

## Provenance / cautions
Some GitHub `v1` assets are described as integration candidates, not final production-certified sprites; their QA and visual approval are separate from these rules. Logo typography direction: plush Concept A, Baloo 2 headings and Quicksand UI text as reference; game screens remain **not finalized**.


## Stage 3 — Character families / special abilities (2026-11-11)

| ID | Decision | State | Notes |
|---|---|---|---|
| S3-01 | Qualifying 4+ same-family match **automatically activates** its family special effect during shot resolution | **LOCKED (user choice A)** | No tap-to-activate reserve charge or deferred activation in the baseline. Preserve S2-18 special-first and settled-state outcome rules. |
| S3-02 | Rosybuns: Heart Link | **PROPOSED — NOT APPROVED** | Short-range virtual same-family linking; limits below, physics unaffected by virtual edges. |
| S3-03 | Skydoodles: Sky Dash | **PROPOSED — NOT APPROVED** | Bounded deterministic gust / reposition of movable neighbors. |
| S3-04 | Mossmops: Nature Bloom | **PROPOSED — NOT APPROVED** | Temporary vine connections; distinguish matching edges from structural support. |
| S3-05 | Sunpuffs: Sun Burst | **PROPOSED — NOT APPROVED** | Limited-radius explosion removing eligible targets only. |
| S3-06 | Plumplets: Magic Shift | **PROPOSED — NOT APPROVED** | Controlled neighbor family conversion, matching recomputed. |
| S3-07 | Peachpeeps: Sweet Shield | **PROPOSED — NOT APPROVED** | Temporary danger protection; should not negate a completed mission or shot-exhaustion rule. |
| S3-08 | Normal → Awakened → Master tier concept | **PROPOSED — NOT APPROVED** | Master may be post-launch; physical size and tier modeled independently. |
| S3-09 | Example family unlock levels: 1/8/18/30/45 | **PROPOSED — NOT APPROVED** | Tuning placeholders; do not promise these levels. |
| S3-10 | Special selection/consumption policy, persistence, retrigger, tier, combo cap, and target priority | **PENDING** | Stage 3 cannot be closed until important behavior is approved/tested. |

**Design authority:** Original locked family identities are Rosybuns, Skydoodles, Mossmops, Sunpuffs, Plumplets and Peachpeeps. Repository aliases: skybubs, leaflings, chirpyfluffs, twirlpuffs and peachtells are storage aliases only, not permission to rename the game families. No family visuals have been changed by this GDD.

## Stage 3 design direction and implementation baseline — 2026-11-11

| ID | Decision | State | Notes |
|---|---|---|---|
| S3-11 | Six families have **distinct strategic abilities**, not cosmetic-only or overlapping powers | **LOCKED — user selected `distinct`** | One role per family; original locked character art is unchanged |
| S3-12 | Mossmops uses **Seed Bloom**, creates a single legal physical bud rather than virtual connection | **DESIGN BASELINE — reviewable** | Replaces duplicative Nature Bloom linking; makes Mossmops mechanically distinct from Rosybuns |
| S3-13 | Peachpeeps uses **Sweet Rescue**, repairs/protects eligible tagged hazards but never masks danger-line loss | **DESIGN BASELINE — reviewable** | Replaces unbounded danger protection |
| S3-14 | Recipient of 4+ match selected deterministically (fired member first, otherwise nearest event origin then stable ID); consume other N-1 | **DESIGN BASELINE — reviewable** | One persistent per-level Awakened survivor; one automatic activation per unique matching event |
| S3-15 | Size and tier independent; Awakening does not automatically increase collider; growth only when level explicitly asks | **DESIGN BASELINE — reviewable** | Retains Stage 2 bounded growth push for authored size-changing effects; fallback still pending |
| S3-16 | Awakened persists for the current level; collection discovery persists across levels; Master deferred | **DESIGN BASELINE — reviewable** | No premium gate to required ability; one-time reward IDs |
| S3-17 | Target selection deterministic and mission-aware; safe no-target fallback; chain cap configurable | **DESIGN BASELINE — reviewable / VALIDATE** | Detailed test cases in Stage 3; initial chain cap=8 is tunable, not a locked value |

**Status distinction:** User explicitly approved the six-distinct-powers direction and automatic activation; detailed family names, effect algorithms, unlock-level estimates and numbers are delegated design baselines, not separately user-approved choices. Prior `S3-02..S3-10` proposal entries above are retained as historical records; Stage 3 v0.3.1 supersedes duplicate Mossmops and shield proposals without silently marking older entries as approved.

## Stage 4 — Cannons (2026-11-11)
| ID | Decision | State | Notes |
|---|---|---|---|
| S4-01 | Cannons have **distinct, balanced gameplay abilities** AND **upgradeable powerful ability paths** | **LOCKED — user-approved combined choice** | Both specialized abilities and meaningful upgrades are required. Do not reduce cannons to cosmetic-only or assume a single-tier system. |
| S4-02 | Ability activation policy (manual charge / auto / hybrid) | **PENDING major choice** | Stage 4 next major product question. |
| S4-03 | Five example cannons and tier I–III effects | **DESIGN BASELINE — not individually approved** | Technical proposals for playtests; no final art or prices. |
| S4-04 | No mandatory paid power, default cannon remains campaign-viable | **DESIGN GUARDRAIL** | Numeric limits, unlock thresholds, resource costs and fairness require balancing. |

## Stage 4 hybrid activation — 2026-11-11

| ID | Decision | State | Notes |
|---|---|---|---|
| S4-02 | Hybrid cannon ability activation: passive utility runs automatically; charged active powers trigger only at player request | **LOCKED — user approval** | Passive uses no energy; active does not auto-fire when full. Distinct from Stage 3 automatic family powers. |
| S4-05 | Single pre-level equipped cannon, permanent unlocks and upgrade tiers, attempt-local energy | **DESIGN BASELINE — reviewable** | No automatic mid-level switch; Cloud Sling must remain mandatory-campaign viable. |
| S4-06 | Integer 0–100 energy meter; shot-result-based grants; active cost 100; no charge on invalid command | **TUNABLE PROTOTYPE — not locked** | +10 ordinary match, +15 special, +5 detached component (cap +15), per-shot cap +35. No feedback loop. |
| S4-07 | Three tiers I/II/III, earned progression resource, bounded improvements | **DESIGN BASELINE — not separately approved** | Upgrade identity/costs/paid access remain pending economy stage. |
| S4-08 | Five proposed cannon identities/abilities and exact unlock schedules | **PROPOSED — not approved** | Must validate non-overlap with character abilities and starter solvability. |


## Stage 5 — Adventure content and production (2026-11-11)

| ID | Decision | State | Notes |
|---|---|---|---|
| S5-01 | Main adventure handcrafted and curated; optional daily/repeatable challenges may use seeded validated procedural generation | **LOCKED — user choice `hybrid`** | Require solvability and reproducibility checks; no uncertified random layouts |
| S5-02 | Four named worlds and 100 launch levels (25 each) | **DESIGN BASELINE — not individually approved** | World/level quantities and unlock schedules are tunable |
| S5-03 | Six mission objective classes with explicit event-based counting | **DESIGN BASELINE — reviewable** | Clear, rescue, evolve, obstacle, collectible, combo; objective accounting needs playtest |
| S5-04 | Progressive obstacle tutorials and authored difficulty curve | **DESIGN BASELINE — reviewable** | One major mechanic at a time; named obstacles not separately locked |
| S5-05 | Per-level 1–3 stars based on victory and authored efficiency thresholds | **DESIGN BASELINE — reviewable** | 1-star victory, higher stars for more efficient solve; numeric limits tunable |
| S5-06 | Replay completed levels, best-star persistence, next level on victory, idempotent first-clear rewards | **DESIGN BASELINE — reviewable** | Economy quantities, time gates and edge cases pending |
| S5-07 | Schema/geometry/seeded solver/human playtest gates for level publishing | **ENGINEERING REQUIREMENT — validation pending** | A bounded solver returning UNKNOWN must not falsely certify a generated level |

## Stage 6 — Power-ups (hybrid architecture locked)

| ID | Decision | State | Notes |
|---|---|---|---|
| S6-01 | Optional consumable helpers **plus** earned family and cannon abilities (hybrid) | **LOCKED — user approved** | Main-path levels remain free-solvable, consumables are optional; no forced purchases or ads |
| S6-02 | Rainbow Friend, Precision Trail, Soft Burst, Cozy Save, mission objects | **PROPOSED — not approved** | Distinct targeting and cancellation safeguards; exact roster pending |

## Stage 6 approved direction / detailed baselines — 2026-11-11

| ID | Decision | Status | Notes |
|---|---|---|---|
| S6-03 | Hybrid boosters: optional inventory consumables plus earned family/cannon abilities | **LOCKED** | User selected hybrid; supersedes earlier S6-01 provisional status |
| S6-04 | Rainbow Friend, Precision Trail, Soft Burst, Cozy Save | **DESIGN BASELINE — not individually approved** | Distinct roles, preview/confirm, no spend on cancel/invalid, configurable caps and effects |
| S6-05 | Star Orb, Crystal/Honey/Vine and later special objects | **DESIGN BASELINE — reviewable** | Level-authored obstacles and objectives, not a seventh family |
| S6-06 | Once-only ledger and event-based resolution across boosters/family/cannon effects | **ENGINEERING BASELINE — VALIDATE** | No double consumption/grants; deterministic replay and offline/resume safety |
| S6-07 | Acquisition sources, ad caps, store prices, stock limits, expiries | **PENDING Stage 7** | No economy amounts locked |

## Stage 7 — Economy (opened 2026-11-11)
| ID | Decision | Status | Notes |
|---|---|---|---|
| S7-01 | Unlimited main-adventure retries, no lives, tickets, recharge, paid retry or ad gate | **LOCKED — user approved** | Immediate free retries even after repeated failures |
| S7-02 | Soft coins, best-stars record, optional premium gems, optional fixed-price booster bundles | **DESIGN BASELINE — not approved** | Prices, rates, balances and inventory limits need balancing |
| S7-03 | Optional rewarded ads and native IAP with verified grants and fair main-path | **DESIGN GUARDRAIL / VALIDATE** | Prior monetization direction is ads + IAP; specifics pending |

## Stage 7 finalized architecture and tunable defaults — 2026-11-11
| ID | Rule | Status | Notes |
|---|---|---|---|
| S7-04 | Unlimited main-adventure attempts | **LOCKED — user approved** | Reiterates S7-01; separate optional event ticket systems not approved |
| S7-05 | One primary earnable Coins currency; stars nonspendable, gems deferred | **DESIGN BASELINE — tunable** | No launch premium-gem economy without further review |
| S7-06 | Permanent cannon upgrades with earnable currency; no purchasable cannon energy | **DESIGN BASELINE / VALIDATE** | Must preserve starter-cannon main-path solvability |
| S7-07 | Item ledger and verified, idempotent ad/IAP reward entitlement | **ENGINEERING BASELINE / VALIDATE** | No double-grant, no spend on cancel/failed booster |
| S7-08 | Indicative coin rewards, booster costs, ad claim caps and candidate IAP catalog | **TUNABLE — not approved prices or live caps** | Numbers in Stage 7 for balancing simulation |
| S7-09 | Final ad frequency, paid SKUs/prices, regional/compliance policies | **PENDING monetization-stage review** | Must re-verify platform policies before implementation |

## Stage 8 opened — Achievements and missions
| ID | Rule | Status | Notes |
|---|---|---|---|
| S8-01 | Achievement categories, daily/weekly missions, family/cannon mastery, reward badges | **PROPOSED — not user approved** | Stage 8 design baseline; no final daily cadence/amounts |
| S8-02 | Claim-once event-derived progress with offline/online reconciliation | **ENGINEERING BASELINE / VALIDATE** | No double claims or pay-to-complete tasks |
| S8-03 | Launch as single-player; defer leaderboards, ranked events and tournaments until after launch | **LOCKED — user approved `later`** | Keep architecture extensible; no v1 competitive services |

## Stage 8 finalized — 2026-11-11
| ID | Decision | Status | Notes |
|---|---|---|---|
| S8-04 | Single-player launch; leaderboards and competitive rankings later | **LOCKED — user approved** | Reinforces S8-03; defer ranking, privacy and anti-cheat product decisions |
| S8-05 | Adventure/skill/evolution/cannon/collection achievements and milestone badges | **DESIGN BASELINE — tunable** | Categories and example thresholds specified; individual amounts not approved |
| S8-06 | Daily/weekly missions with accessibility-aware eligibility and exactly-once claims | **DESIGN/ENGINEERING BASELINE — VALIDATE** | Must never assign locked families or paid activities |
| S8-07 | Family mastery and cannon mastery records | **DESIGN BASELINE** | Must not change locked art or special-power rules |
| S8-08 | Achievement and reward event logs, replay dedupe, offline/cloud reconciliation | **ENGINEERING BASELINE — VALIDATE** | Maintain nonregression and privacy controls |

## Stage 9 opened — Retention and events (2026-11-11)
| ID | Decision | Status | Notes |
|---|---|---|---|
| S9-01 | At launch: daily gifts, daily challenges and weekly missions; major seasonal events only after launch | **LOCKED — user selected `simple`** | No timed live-event world or competitive ranking in v1 |
| S9-02 | Gentle daily rewards, no lost progress for absence, optional notifications | **DESIGN BASELINE — not user approved** | Timing/rewards and notification rules remain tunable |
| S9-03 | Seeded daily challenges with deterministic validation and offline fallback | **DESIGN/ENGINEERING BASELINE — VALIDATE** | Built on locked Stage 5 hybrid production |

## Stage 9 approved — 2026-11-11
| ID | Rule | Status | Notes |
|---|---|---|---|
| S9-04 | Daily gifts, seeded validated daily challenges and weekly missions at launch; seasonal events deferred | **LOCKED — user approval** | Reiterates S9-01; simple single-player retention scope |
| S9-05 | Seven-day daily-gift examples, gentle streaks, cadence, mission quantities and rewards | **DESIGN BASELINE — tunable, not separately approved** | No progress/reward losses for absence; not necessarily a strict streak |
| S9-06 | Event deferral, future event schema, opt-in messaging, safe notification and privacy policies | **ENGINEERING/DESIGN BASELINE — validate** | Future events need separate permission before enabling |
| S9-07 | Daily rewards and weekly mission claims processed once, generated challenge certified and reproducible | **ENGINEERING BASELINE — validate** | Do not trust clock or unverified online grants |

## Stage 10 — Monetization and fairness (opened 2026-11-11)
| ID | Rule | Status | Notes |
|---|---|---|---|
| S10-01 | Rewarded ads only at launch; no automatic interstitials or banner ads | **LOCKED — user approved `rewarded`** | Optional explicitly requested rewards; interstitials and Remove Ads deferred |
| S10-02 | Optional verified native IAP catalog, non-consumables and fixed-content consumables | **DESIGN BASELINE — not priced/approved SKUs** | Store policy and final catalog require launch-time review |
| S10-03 | Fair, free-solvable adventure; no paid boost requirement or ad gate | **CARRIED-FORWARD LOCKED CONSTRAINTS** | No paywall or manipulative shot queue |

## Stage 10 locked and scoped — 2026-11-11

| ID | Rule | Status | Notes |
|---|---|---|---|
| S10-04 | Rewarded-only ads in initial Android/iOS release | **LOCKED — user approval** | No automatic interstitials, banners, rewarded-interstitial placements, mandatory ad gates |
| S10-05 | Keep optional native store IAP; do not sell Remove Ads with rewarded-only launch | **LOCKED ad-model consequence / REVIEW catalog** | IAP intent approved earlier; specific prices/products unapproved |
| S10-06 | Ad reward verified once; precise offer, opt-in only, no fill doesn't block play | **ENGINEERING/FAIRNESS BASELINE — VALIDATE** | Signed SSV where feasible, ledger idempotency |
| S10-07 | Booster/cosmetic packs, no loot boxes, example daily ad caps | **DESIGN BASELINE — TUNABLE** | SKU pricing and rate caps not approved |
| S10-08 | StoreKit/Play verification, refund and restore, privacy & consent handling | **IMPLEMENTATION/COMPLIANCE GATE** | Re-verify platform rules, target-age settings, purchase events |
| S10-09 | General casual gaming audience; primarily teens and adults; not specifically child-directed marketing | **LOCKED — user approved `general`** | Do not equate marketing intent with an automatic store age-rating/privacy exemption; assess content and actual users at submission |

## Stage 11 — UI/UX planning (opened 2026-11-11)

| ID | Rule | Status | Notes |
|---|---|---|---|
| S11-01 | Screens, design tokens, production UI assets and interaction contracts after GDD | **DESIGN PLANNING BASELINE** | Gameplay wireframe first, home next, then full journey |
| S11-02 | All six approved families are gameplay pieces, no random pets or ordinary balls | **CARRIED-FORWARD LOCKED CONSTRAINT** | Use actual versioned character artwork and alias map |
| S11-03 | No game UI designs finalized before gameplay geometry and real-device fit checks | **VALIDATION GATE** | Safe areas, touch targets, performance and readability |

## Stage 11 — Audience and UX architecture (2026-11-11)

| ID | Rule | Status | Notes |
|---|---|---|---|
| S11-04 | Primary audience: general casual puzzle players, mainly teens and adults; not specifically marketed to children | **LOCKED — user approved** | Friendly character visuals remain; actual store age rating and children/privacy obligations must be assessed using content, targeting and user data |
| S11-05 | Portrait-first gameplay UI using approved six family sprites as actual projectile and cluster pieces | **CARRIED-FORWARD LOCKED RULE / UX BASELINE** | The exact design proportions and panel positions are not user approved; must pass real device validation |
| S11-06 | Screen hierarchy, interaction states and text/accessibility contracts below | **UX DESIGN BASELINE — REVIEW/VALIDATE** | No new gameplay rules, ads, currencies, cannon behaviors or content unlocks approved by this document |
| S11-07 | Final gameplay art and production-ready UI exports | **PENDING VISUAL QA** | First validate sprite readability, variable-size geometry and compact viewport using real assets |
