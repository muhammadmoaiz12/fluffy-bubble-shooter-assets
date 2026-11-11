# Stage 9 — Retention, Daily Rewards & Seasonal Events

**Version:** v0.9.0  
**Stage status:** launch-scope decision LOCKED; individual rewards, numbers, timing and later-event features are adjustable design baselines.

## S9-01 — Approved launch scope (LOCKED)

Puff Trails launches with **simple single-player retention**: optional daily gifts, validated daily challenges and weekly missions. Larger themed seasonal events, limited-time worlds and ranked competition are **deferred until after launch**. This is the user's approved `simple` option, not authorization to launch seasonal events in v1.

This decision builds on Stage 8: single-player launch, leaderboards later. Main handcrafted adventure remains playable offline and has unlimited immediate retries. No gift, streak, ad view or event is required to advance through mandatory levels.

## 9.1 Launch feature ownership

| Feature | Launch design baseline | Dependencies | Restrictions |
|---|---|---|---|
| Daily gift | One optional daily claim, small earned Coins or booster | Stage 7 inventory and reward ledger | No purchases/ads required; earned permanent rewards never revoked |
| Daily challenge | One seeded, solver-validated optional puzzle per daily period | Stage 5 validated generation/fallback; Stage 2 shot physics | If the generated level fails validation, serve pre-certified authored fallback |
| Weekly missions | Three to five varied, accessible goals | Stage 8 missions and claim system | Never assign locked characters, cannons or missions |
| Gentle streaks | Non-punitive calendar milestone rewards, optional at launch | Daily claim ledger | Missing a day cannot remove earned progress or rewards |
| Seasonal events | Post-launch candidate, **not launched** | Live-ops backend, approved seasonal artwork, event test suite | Separate approval before scheduling or shipping |
| Push notifications | Optional and opt-in | Device permissions, settings and user preference | No permission coercion, fake scarcity, guilt or penalties |

### Daily gift baseline
- Seven-day **illustrative** rotation: Coins and occasional booster, with a small day-seven bonus. Rewards not bought or randomized for money.
- Claim must be explicit, never silently auto-granted by merely opening the app. The claim displays exact item/count.
- Missing days does not roll back an earned gift, existing stars, unlocked creatures, completed levels or cannon upgrades.
- Example values: day 1 = 20 Coins, day 2 = 30 Coins, day 3 = Precision Trail, day 4 = 40 Coins, day 5 = Rainbow Friend, day 6 = 50 Coins, day 7 = cosmetic badge or small bundle. **Not approved balance numbers.**
- Time policy: one explicit server-authoritative reset boundary (`period_id`), versioned and consistent across regions; avoid relying on device clock. Specific timezone/reset hour to be selected during service implementation, not a major owner question.
- Offline gameplay remains available; if online claims cannot be safely authenticated, queue claim intent and show it as pending, not as already delivered.
- Exactly-once key: `player_id + reward_program_version + period_id`.

### Daily challenge baseline
- Use a deterministic seed + `generator_version` + `level_version` + content eligibility snapshot. Authoritative challenge ID is unique per period.
- Validate geometry, collisions, objective feasibility, cannon/character availability, no overlap, safe attachments and at least one certified solution route using regular earnable/default systems.
- A bounded solver may return `SOLVED`, `UNSOLVABLE`, or `UNKNOWN`; `UNKNOWN` is **not certified**. Fall back to a manually tested challenge. Never ship a random impossible level.
- New users get an appropriately easy certified version; challenges may be tiered by progression, but must not consume lives or prohibit adventure retries.
- Completion grants one claimable reward per period by stable event ID. Repeat plays can update personal best but may not mint repeated daily first-clear rewards.
- A daily challenge may optionally count toward weekly missions; prevent duplicate credit from replayed resolution events.
- Failure to download challenges never blocks the handcrafted adventure.

### Weekly missions baseline
- Three to five missions selected from player-accessible activity (levels completed, match counts, wall rebounds, family powers, rescued creatures, cannon specials, earned stars).
- Mix easy regular actions with at most one stretch goal. Avoid requiring unreleased worlds or locked families.
- Proposed reward classes: Coins, a small number of boosters, collection cosmetics, achievements. Stage 7 economy must set amounts after simulation.
- Every mission has `mission_definition_id`, `period_id`, filter, target, progress and claim state. Unique reward claim keys guarantee once-only grants.
- If the account/device is offline, adventure progress is locally journaled; server-dependent reward settlement is reconciled and clearly labeled.
- Weekly rollover does not delete permanent rewards already claimed.

## 9.2 Gentle streaks (design baseline)
- Never display punitive loss messaging or demand a purchase to repair a streak.
- Preferred implementation: reward cumulative days played/claimed within the last seven or fourteen days instead of strict consecutive-day streaks. A player who skips one day can still earn progress toward the milestone.
- No streak protection paid products; no urgency-inducing countdown on ordinary adventure.
- Optional in launch: if it adds complexity or friction to the daily gift, launch without separate streak UI and enable after telemetry review.

## 9.3 Seasonal events deferred (post-launch architecture only)
- After core retention and economy metrics stabilize, consider limited themed puzzle paths, environmental decorations, and optional cosmetics built on approved canonical families.
- Seasonal events do not modify the locked character design without separate art review.
- Scheduled event record (future): `event_id`, `version`, start/end in UTC, eligibility, level_set_version, reward_table, supported_app_version, localization, art_manifest`, and safe disable flag.
- Only officially deployed/signed data determines online event windows and grants; no arbitrary remote code execution.
- Earned cosmetic rewards persist beyond event expiry. Expiry affects new entries/claims according to clearly disclosed terms, not previously settled inventory.
- No ranked leaderboard, paid entry, or event-only currencies at launch.

## 9.4 Optional push and re-engagement messaging
- Permission is requested after a user-contextual explanation, never on first boot by default; the user can decline and still play normally.
- Settings support per-category toggles and a single global disable. Notification cadence starts conservatively; proposed default maximum 2/week, not a locked number.
- Respect quiet hours and localization, deduplicate across devices, stop messaging after opt-out, and avoid revealing private play history on lock screen without consent.
- No manipulative message about lost progress; not playing does not cause ordinary progress loss.

## 9.5 Retention safeguards and analytics
- Clearly label all optional daily/event systems, store claims and deadlines. No dark patterns, artificially impossible levels or pay-to-progress mechanics.
- Measure D1/D7/D30 retention, completion rates, quit/retry ratio, daily gift opt-ins, daily challenge participation, claim failure, revenue vs player fairness, reports of frustration and accessibility compliance.
- Keep analytics data minimal, honor appropriate consent and age requirements; exact privacy implementation belongs to launch compliance.
- Do not promise, schedule or imply background checking of players. These are future in-game implementation requirements, not currently running services.

## 9.6 Acceptance tests
1. Main adventure and unlimited retries work without network, a daily gift or a challenge claim.
2. Daily claim repeated via tap/app resume/server retry grants one item exactly once.
3. Device date changes do not cause additional daily gift or weekly mission awards.
4. Missing a day does not remove permanent currency, stars, unlocks, mastery or earned prizes.
5. An unsolved/unknown generated daily puzzle is rejected and a certified fallback served.
6. Replay of a daily challenge does not repeat first-clear rewards, even when the result event is resent.
7. A newly unlocked family can appear in new missions, but older missions remain valid.
8. A new player is not assigned a mission using an inaccessible power/cannon/obstacle.
9. Notification refusal and opting out have no gameplay consequences; future sends stop after opt-out.
10. A seasonal event cannot accidentally be surfaced by launch feature flags.
11. Character-bearing event art uses only the locked families unless new variants receive explicit approval.
12. State restore and offline-to-online reconciliation do not produce duplicate Coins, booster or achievement claims.

## Stage 9 decision status
- **LOCKED:** daily gifts, validated daily challenges and weekly missions for the v1 single-player launch; major seasonal events deferred until after launch.
- **BASELINE:** seven-day gift design, gentle streak model, mission count and reward classes, limited opt-in notifications.
- **TUNABLE:** exact rewards, reset hour, notification frequency, reward caps and calendar details.
- **PENDING future approval:** enabling full seasonal live events or competitive leaderboards; do not authorize them with this document.
