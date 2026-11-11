# Stage 8 — Achievements, Daily/Weekly Missions, Family & Cannon Mastery

**Version:** v0.8.0
**Status:** competitive roadmap LOCKED (single-player at launch; leaderboards later); system specification is a reviewable baseline, adjustable by testing.

## 8.1 Locked product decision: competition later

**S8-03 — LOCKED:** Puff Trails launches as a **single-player-first** game. No public leaderboards, competitive tournaments, rank-based awards, or PvP are required for v1. The data architecture should support future competition, including deterministic level versioning, event IDs, scoring provenance and replay validation. Launch user flows must work without accounts or live network connectivity for the primary adventure.

Future competitive features **cannot** be enabled merely because tables exist; they require separate approval, cheating/privacy review, and assisted-vs-unassisted policy. Do not promise cross-device leaderboards at launch.

## 8.2 Goals

- Celebrate mastery and discovery of the six locked families without changing their visual identity.
- Encourage replay and experimentation, not compulsory daily engagement.
- Make achievements feel earned; no achievements requiring an ad view, purchase or paid equipment.
- Avoid stacking so many missions that each shot produces distracting pop-ups.
- Preserve unlimited adventure retries and three-star high-watermark progress.

## 8.3 Achievement data model

Achievement definition:
`id`, `version`, `track`, `title_key`, `description_key`, `icon_asset_id`, `condition_kind`, `filter`, `target`, `progress_mode`, `prerequisites`, `reward_id`, `repeatability`, `visibility`, `effective_from`, `effective_to`, `content_version`.

Player progress:
`achievement_id`, `definition_version`, `progress_value`, `unlocked_at`, `claimed_at`, `last_event_id`, `source_revision`.

- Conditions use named event types; authoring code cannot inject arbitrary executable expressions.
- Every achievement is deterministically derived from stable gameplay events.
- Hidden achievements may be revealed when triggered, but avoid misleading locked rewards.
- Distinguish **unlocked** (condition met) from **claimed** (reward granted).
- Lifetime cumulative achievements never regress because later levels or equipment change.
- Reward grants are idempotent by `player_id + achievement_id + tier`.

## 8.4 Achievement tracks & starter catalog (design baseline; targets are tunable)

| Track | Sample achievement | Suggested tiers | Example reward |
|---|---|---|---|
| Adventure | Trailblazer — clear unique campaign levels | 10 / 25 / 50 / 100 | Coins and themed badges |
| Stars | Star Keeper — accumulate best-ever stars | 25 / 75 / 150 / 250 | Cosmetic badge |
| Precision | Wall Wizard — win levels involving valid wall-bounce shots | 5 / 20 / 60 | Badge + coins |
| Match | Fluff Matchmaker — clear same-family groups | 100 / 500 / 2000 creatures | Family collection emblem |
| Evolution | Awaken the Crew — activate special powers | 1 each / 25 total / 100 total | Family mastery emblem |
| Rescue | Friendly Hero — release specified rescued creatures | 10 / 50 / 200 | Coin/booster reward |
| Cannon | Cannon Keeper — use distinct equipped cannons' specials | 1 / 3 / 5 cannon types | Cannon banner |
| World mastery | Reach world-specific star goals | Authored thresholds | Profile decoration |

Milestones refer to verified authored gameplay events, not asset animations or estimated player time. If a family/cannon is not yet unlocked, the app shouldn't surface impossible daily missions for it.

## 8.5 Daily missions (baseline)

- Exactly **three** available daily missions in the starter design, from different tracks when feasible.
- Assign on authoritative daily period using a documented server-day policy; cache assignments for offline display.
- Candidate mission templates: complete N accessible adventure levels, make N qualifying match groups, perform N valid bank shots, trigger N family powers, rescue N eligible friends, clear N obstacles, earn N new stars.
- Mission generator checks each player's current accessible content and feature flags. It must not assign locked family/cannon/obstacle objectives.
- Mission completion advances from verified event counters; no “watch ad to finish” mission.
- Each claim has an event ID; double taps, restart or delayed server acknowledgment do not duplicate rewards.
- If offline and the reward can affect an online economy, show a pending claim until reconciliation rather than pretending server entitlement was granted.
- Expired unclaimed daily rewards follow a documented policy; recommended non-punitive expiration without reversal of already earned rewards.

### Example daily missions (TUNABLE)
1. Finish 2 eligible adventure levels → 30 Coins.
2. Resolve 5 match groups → 25 Coins.
3. Trigger one automatic family special → 1 Precision Trail booster (only if the player has unlocked specials).

## 8.6 Weekly missions (baseline)

- Three to five longer goals, mixing adventure, precision, mastery and exploration.
- Examples: complete 12 eligible levels, perform 20 bank shots, trigger five evolutions, improve 10 best-star results.
- Rewards are larger than daily missions but should not be required for standard progression.
- Weekly periods use server-authoritative schedule; no calendar/clock spoofing gains.

## 8.7 Family collection mastery

Canonical player-facing families:
1. Rosybuns
2. Skydoodles (asset alias `skybubs`)
3. Mossmops (alias `leaflings`)
4. Sunpuffs (alias `chirpyfluffs`)
5. Plumplets (alias `twirlpuffs`)
6. Peachpeeps (alias `peachtells`)

A family's permanent collection record tracks:
`discovered`, `first_match`, `first_special`, `first_awakened`, `total_specials`, `total_cleared`, `best_combo`, `mastery_badges`, `cosmetic_unlocks`.

**Mastery stages (proposed):** Discovered → Apprentice → Expert → Master. These are permanent collection milestones, distinct from an in-level Normal/Awakened/Master *evolution tier*. Family names, portraits, fur and faces must come from locked character assets; cosmetic variants need separate approval.

Mastery cannot change normal matching (three of same family across all sizes), four-plus family special activation, or actual physical collision diameters.

## 8.8 Cannon mastery

Track cannon discovery, equipped wins, charged special activations, and permanent upgrade tiers. Each cannon has its own mastery badges. Progress uses stable cannon identifiers and cannot be gained through invalid manual activation or canceled powers. Core achievements must remain possible with starter gear.

## 8.9 Rewards and notification behavior

- Proposed rewards: earned Coins, booster stock, badges, collection frames and non-functional celebratory effects.
- No paid loot boxes or speculative random rewards in the launch baseline.
- Show unobtrusive in-level progress, and consolidate award celebrations after the shot / level result. Never interrupt projectile motion.
- Completion/claim are separate; exactly-once grant through the Stage 7 event ledger.
- Never show an achievement as claimed until persisted in local transactional save or confirmed by the authoritative server, as applicable.
- Support reduced motion and high contrast. Avoid color-only mission cues.

## 8.10 Offline state, privacy and anti-abuse

- Local campaign records remain accessible without sign-in. Pending online reward claims are tagged and reconciled when online.
- Back-end validates time-bound claims and signed challenge definitions. Device clock alone cannot award multiple daily claims.
- One event ID must never advance two copies of the same mission due to resume/animation callbacks.
- New content versions must preserve earned lifetime achievements; use explicit migrations when definitions change.
- Do not create server leaderboards or public profiles during v1 without separate approval.
- Event log includes `event_id`, `type`, `level_version`, `seed`, `shot_index`, `timestamp`, `family/cannon IDs`, `result_hash` where applicable.
- Define privacy retention / deletion separately before enabling online account syncing.

## 8.11 Acceptance criteria

1. Achievements progress once under replayed or duplicated shot result events.
2. Ordinary match-three does not count as four-plus family-special activation.
3. Small/medium/giant variants contribute correctly toward same-family clear goals.
4. Failed attempts do not remove existing unlocked achievements or best stars.
5. Daily missions do not reference inaccessible family/cannon features.
6. A level replay never duplicates first-clear rewards.
7. Claiming an earned reward twice results in a single durable inventory grant.
8. Daily mission claims remain stable across device clock changes.
9. Accessibility settings do not modify achievement eligibility.
10. No v1 screens or systems require leaderboard server availability.
11. Character collection uses correct canonical-to-asset alias mapping.
12. Existing guaranteed adventure progress is never invalidated by content update.

## Status
- **LOCKED:** solo-first launch, defer leaderboards/competition.
- **DESIGN BASELINE:** achievement tracks, daily and weekly mission structure, mastery stage labels, reward classes and notifications.
- **TUNABLE:** mission count, milestone thresholds, coin quantities and time schedules.
- **REQUIRES VALIDATION:** event recording, cloud reconciliation, economy balance, offline/time-zone anti-abuse.
- **PENDING FUTURE MAJOR CHOICE:** competitive categories, rankings, rewards and assist eligibility when leaderboards are eventually planned.
