# Stage 7 — Game economy, rewards, purchases and ad policy

**Version:** v0.7.0 · **Status:** S7-01 LOCKED (unlimited adventure retries); rest is a reviewable design/engineering baseline, not individually user-approved.

## Approved rules and invariants

**S7-01 — LOCKED (user):** The main adventure has **unlimited retries**, with no lives, wait timers, tickets, energy cost, ad-view requirement or paid retry gate. Players may immediately retry any unlocked level after failure.

Previously approved constraints inherited unchanged:
- Free players can finish mandatory handcrafted adventure levels with the starter cannon and no purchased or ad-earned booster.
- Two progression systems remain meaningful: automatic 4+ family specials and charged, manually activated cannon powers with automatic passives.
- Stage 6 hybrid optional consumable boosters may be acquired through earned rewards, opt-in ads and store purchases; no forced consumption.
- Stage 5 main adventure is handcrafted; generated daily/optional content must be seeded and validated.
- Replay is always possible for cleared adventure levels. Never erase the best unlocked level or stars because a replay failed.
- Specific values below are **TUNABLE PROTOTYPE DEFAULTS**, not a contract for live pricing or launch rewards.

## Recommended resources — baseline
| Resource | Nature | Source | Sink | Expiry |
|---|---|---|---|---|
| Coins | Primary soft earnable currency | First clears, achievements, daily/weekly missions, limited repeats | Permanent cannon upgrades, optional booster crafting, cosmetic unlocks | Never |
| Best stars | Per-level high watermark, 0–3 | Authored-level completion and efficiency | Non-spendable; optional cumulative milestone gates | Never |
| Cannon energy | Attempt-scoped gauge (0–100 prototype) | Eligible match/effect events | Player-invoked charged cannon ability | Resets on new attempt |
| Booster stock | Item-specific ledger quantities | Rewards, opt-in ads, verified purchases | Explicit successful use only | Never by default |
| Premium gems | **Deferred** | — | — | — |
| Lives | **No lives system** | — | — | — |

**Design principle:** Keep the launch economy understandable with Coins + boosters. If premium gems are ever introduced, require a new economy review; do not add them implicitly.

## Initial numbers for economy simulation (TUNABLE, NOT LOCKED)

| Event | Suggested coins | Conditions |
|---|---:|---|
| First clear of regular level | 40 | Exactly once per player and level version |
| 2-star first clear bonus | +15 | Only if first result ≥2 stars |
| 3-star first clear bonus | +15 extra | Only if first result reaches 3 stars |
| Increase prior best stars on replay | +10 per newly gained star | At most once per star threshold per level |
| Repeat completed level | 0–5 | Daily capped, never infinite farm |
| Daily mission | 25–60 | Verified claim, bounded daily count |
| Weekly mission | 100–250 | Verified claim |
| Cannon discovery milestone | 75–150 | One-time |
| Collection milestone | 25–100 | One-time |

**Upgrade costs:** Example tier-II 250 Coins; tier-III 650 Coins. These are balancing seeds only; unlocking a cannon and buying its upgrade must not be required to solve mandatory adventure content. If stage 4 uses a Tier-I starter state, Tier-I is earned/unlocked and not a purchase.

**Booster coin costs:** Rainbow Friend 120, Precision Trail 80, Soft Burst 160, Cozy Save 100. All are placeholders; cap via purchase inventory/mission design rather than inflating prices based on frustration.

**Economy simulation acceptance:** Model non-paying players at several skill/retry profiles across 100 curated levels, measure coins earned vs optional spends, assure no softlock, detect infinite repeat farming, and check that booster income doesn't overwhelm level strategy.

## Earning, spending and inventory rules

- Inventory is nonnegative; every grant, spend, reversal and adjustment uses a globally unique event ID and a reason.
- The authoritative state transition is atomic: verify item, target, entitlement and action; then commit consumption and effect once. Never consume for preview, cancel, invalid target or failed application.
- If an app closes after spending but before animation, recover the committed state and do not charge again.
- No mandatory booster step in first-clear paths. A paid/ad-provided booster cannot be required for leaderboard eligibility unless the board explicitly separates assisted/unassisted rankings.
- Soft coins are not cash, aren't redeemable and cannot be transferred between accounts by default.
- Offline adventure uses a local journal plus versioned save snapshots; cloud-enabled economic claims reconcile with an authoritative ledger. The same reward must not be granted both offline and online.
- Unverified store or rewarded-ad callbacks cannot mint entitlements. Consume IDs exactly once and persist receipts safely.

## Rewarded advertisements — integration baseline

**Opt-in only** rewards: optional extra booster, bounded coin grant, or advertised convenience. Do not insert a rewarded ad without user selection or imply a reward when the ad is unavailable.

- Verify ad completion / server-side verification where supported; use server trusted event claims for valuable cloud balances.
- Default **proposed** cap: up to 3 rewarded claims/day per player for one specific reward class, adjusted by experimentation.
- Give the exact promised reward once; never re-run the reward callback due to app resuming or duplicate provider events.
- If no ad fills, do not punish or block level progression.
- No forced ad viewing as a prerequisite to unlimited retries.
- Interstitials, if used, only at natural completed-level breaks and never during play, flight or resolution. Candidate frequency: no more than one after several levels and never immediately after repeated losses; final frequency needs retention testing, consent/privacy review and platform policy verification.
- A permanent “Remove Ads” purchase should remove eligible forced interstitials, not automatically remove voluntary rewarded ads; explain this distinction before purchase.

## In-app purchases — architecture baseline

Offer transparent fixed-content items, **not paid random loot** at launch. Candidate catalog:
- Remove Ads (non-consumable permanent entitlement)
- Small/medium booster packs (consumables, with disclosed amounts)
- Cosmetic pack featuring already approved character/cannon designs (non-consumable)
- Optional coin bundle only if free coin progression remains fair

**Android:** Google Play Billing with a backend verification adapter (purchase token, product ID, signed data where applicable, current entitlement). **iOS:** StoreKit through a supported React Native integration with Apple transaction verification. Confirm current SDK, review and policy requirements immediately before implementation.

Processing:
1. Catalog fetched from the platform and compared with server-maintained product definitions.
2. Request native purchase; return pending/complete/cancel states.
3. Verify with store; atomically grant exact items or durable entitlements once per transaction ID.
4. Acknowledge/finish the transaction per platform requirements; retry safely.
5. Reconcile refunds, revocations and chargebacks; support restore of non-consumable purchases.
6. Never trust a client-only `purchaseSuccess` flag to grant paid inventory; handle offline pending without lying about delivery.

No price, sale discount, regional pricing or product identifier is approved yet.

## Cannon upgrade progression

- Permanent upgrades belong to the equipped cannon ID and tier; all cannon types retain identical base physics, collision, queue rules and match threshold.
- Cannon-energy is earned during the attempt and never purchasable.
- Tier-I=unlocked basic signature, Tier-II=bounded improved effect, Tier-III=additional limited utility; prototype 3-tier scheme, not separately locked by user.
- Any upgrade purchase must validate current tier, resources and no duplicate transition.
- Recommend cosmetic upgrades as a separate system from power upgrades to avoid visual identity drift.

## Daily/weekly rewards and time

- Use server time for online claim windows and event expiry; a single IANA time-zone policy must be chosen during implementation and documented.
- Local offline adventure remains playable if time sync or backend is unavailable.
- Repeatable claims need server-enforced idempotency (claim key + player + period), not merely client local storage.
- Don't penalize travel, device clock drift or missed days through undisclosed resets.

## Game analytics / balancing acceptance
Metrics: completion and retries per level, first-try success, average stars, progression pace, coin balance median/p10/p90, inventory earned/spent, booster-assisted clear rate, upgrade uptake, ad reward failure rate, IAP verified completion, refund rate, crash-free sessions, and fairness by acquisition cohort. Respect consent, parental/privacy rules and data minimization.

Engineering QA:
1. Unlimited retries after any number of failed attempts without timer or currency debit.
2. Failed replay does not roll back the existing best star score.
3. First-clear grant and every star milestone are once-only under duplicate event replay.
4. Booster purchase/grant/spend conserves inventory under concurrency and process death.
5. Premium receipt is verified before inventory grant; refund invokes reconciliation.
6. Failed/no-fill ads leave player able to continue without loss.
7. Wrong product ID or stale signature cannot grant entitlements.
8. Starter-cannon zero-booster solver route exists for each required level.
9. Upgrades do not alter collision radius, trajectory prediction or giant attachment mechanics.
10. Offline journal replay doesn't double award prizes after cloud sync.

## Decisions and status
- **LOCKED:** unlimited adventure retries; no lives/energy retry gate.
- **LOCKED from earlier stages:** ads + IAP business intent; hybrid boosters; earned family and cannon specials; free-solvable mandatory campaign.
- **BASELINE/VALIDATE:** one soft currency, proposed reward/cost values, no premium gems at launch, three upgrade tiers, sample ad caps and IAP catalog.
- **PENDING future product decisions:** final ads policy/frequency and store product catalog/prices at monetization stage; event-only tickets (if ever) need separate approval.
