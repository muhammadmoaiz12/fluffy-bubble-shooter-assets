# Stage 10 — Monetization, Fairness, Privacy and Store Compliance

**GDD version:** 1.0.0  
**Status:** launch rewarded-only ads LOCKED; other monetization details are reviewable implementation baselines or pending store/target-audience verification.

## 10.1 Decisions inherited and newly locked

- **S10-01 — LOCKED (2026-11-11):** **Rewarded ads only** at launch. Each ad must be expressly chosen by the player in exchange for an explicit reward. Never automatically show interstitials or banners; no rewarded-interstitial auto-placements; no ad gates for level starts, retries, character discovery, collections or permanent rewards.
- **LOCKED earlier:** monetization combines ads + optional native in-app purchases; unlimited adventure retries; earned automatic 4+ family powers; hybrid charged cannon specials; optional consumables; every mandatory adventure level is possible with starter cannon and without purchases/ad-earned boosters; solo-first launch; daily gifts and challenges.
- **DEFERRED:** automatic interstitials; a Remove Ads purchase (not meaningful with no automatic advertising); subscriptions; random paid loot, paid streak protection, premium-gems launch currency, exclusive pay-to-win gameplay.
- **NOT AUTOMATICALLY LOCKED:** the precise rewarded placement list, ad caps, prices, SKUs, currency rewards, chosen ad mediation vendor, and ad revenue assumptions.

## 10.2 Rewarded ad experience and states

Player flow: user opens a clearly labeled optional offer -> sees exact reward, quantity and any limit -> taps Watch -> availability and consent checks -> plays supported ad SDK rewarded placement -> completion evidence received -> reward granted exactly once -> UI displays result after authoritative grant.

Placement candidates (TUNABLE): a daily optional Coin award, one specified booster, a clearly labeled bonus reward in the shop. The offer must never appear automatically while the player is aiming, projectile is flying, match evolution is running, or a level result is resolving.

Finite-state model:
`idle -> requested -> loading -> showing -> completed_unverified -> granted | unavailable | canceled | interrupted | rejected`.

- Do not automatically retry by showing another ad. A no-fill or ad failure leaves gameplay and inventory unchanged.
- Distinguish dismissed/closed, truly completed and verified states. Never award on `onAdClosed` alone.
- Reward-once key: `player_id + placement_id + provider_transaction_id` when available; otherwise use a backend-signed unique grant intent combined with trusted verification. Duplicate callbacks are harmless.
- For online valuable inventory and coins, prefer verified server-side callbacks (SSV), signature verification and idempotent grants. Pending verification is communicated accurately; avoid promising immediate credited rewards when still unverified.
- Offline main adventure works without ads. Never manufacture an offline reward for an unavailable ad.
- **Tunable prototype policy:** maximum three rewarded claims/player/day across launch placements; adjust after measuring player benefit, privacy, provider limits and ad demand.
- Each placement must be skippable by *not starting* the ad. After opt-in, provider controls and disclosures must comply with audience and platform policies.

## 10.3 IAP launch catalog — REVIEWABLE BASELINE, NOT FIXED SKUs

| Purchase category | Store product type | What is delivered | Launch recommendation |
|---|---|---|---|
| Small booster bundle | Consumable | Exact, disclosed Rainbow/Precision/Soft Burst/Cozy Save quantities | Candidate |
| Large booster bundle | Consumable | Exact disclosed quantities, not randomized loot | Candidate |
| Cosmetic family/cannon styling | Non-consumable | Clearly approved artwork that does not change game balance | Candidate; art approval required |
| Optional Coins bundle | Consumable | Fixed quantity only | Defer until soft-currency simulation succeeds |
| Remove Ads | Non-consumable | Would remove auto interstitial/banner exposures | **Do not sell at rewarded-only launch** |
| Subscriptions, random boxes, pay-to-rank | N/A | N/A | Excluded from launch baseline |

Prices must come from StoreKit/Play catalog and use regional currency formatting; never invent price strings. Product keys, regional availability, refund rules, age/parental settings, sales descriptions and tax/legal implications must be verified at implementation. Store-specific policies/exceptions apply.

## 10.4 Purchases: secure and reproducible protocol

1. Fetch catalog and authoritative product definitions, expose exact item/quantity/price.
2. Player opts in to the platform-native purchase dialog; support canceled and pending states.
3. Verify purchase/transaction with Google Play Developer API or Apple-signed StoreKit/App Store Server interface and bind to player/entitlement safely.
4. Atomic idempotent inventory grant for consumables, permanent entitlement grant for non-consumables; never trust client `success` alone.
5. Acknowledge/consume/finish as required by current platform API; log retries and status safely without repeating grant.
6. Support non-consumable restore, new-device reconciliation, refunds, revocations, entitlement removal and customer support status.
7. Handle offline/pending store responses transparently. Do not claim paid items were delivered until persisted and verifiable.
8. Device clock, app reinstall, duplicate purchase notification, parallel logins and out-of-order callbacks must not duplicate coins or boosters.

**Important:** Apple current entitlements don't normally contain finished consumables; manage their verified fulfillment in the game's ledger. Purchased items require current supported platform billing paths unless applicable regional store policy exceptions have been independently reviewed.

## 10.5 Economy and fairness invariants

- Unlimited free retries remain absolute for handcrafted adventure levels, with no energy or premium continuation screen.
- The seeded level-aware cannon queue, real variable-size physical collisions, 3+ matches, special 4+ and shot outcome precedence cannot change depending on spend/ad views.
- Never require a booster, paid cannon tier, cosmetic purchase or ad reward to complete mandatory content.
- Never prompt for a purchase during shot resolution or interrupt a character's automatic special.
- Persistent rewards and purchases cannot be erased by a failed replay.
- Consumable spend occurs only when a valid action commits and its effect can be applied; cancel/invalid target causes no debit.
- No dark patterns, fake scarcity, fabricated discount timer, guilt-based streak protection, or intentional frustration tuning by payer cohort.
- Do not monetarily discriminate in physics/solver results; opt-in boosters may alter a chosen level attempt only according to disclosed mechanics.

## 10.6 Privacy, age audience and platform compliance — LAUNCH GATE

**Major unresolved owner product choice:** Intended target audience, especially whether children are targeted. This controls ad SDK mode, age screening, consent, ad content requirements, store classifications and analytics. **Do not claim family-friendly artwork proves child-directed targeting.** A separate owner choice is needed before final SDK flags and policy declarations.

Implementation checklist:
- Before loading ad SDKs or tracking, implement appropriate consent flow for jurisdiction and platform, including UMP or suitable provider integration; no assumption that consent to personalized ads is mandatory for gameplay.
- iOS: review App Tracking Transparency (ATT) if tracking or advertising identifier use qualifies; compile third-party SDK privacy manifest details and accurate App Store privacy disclosures.
- Google Play: accurately complete Data Safety and Ads declarations; if targeting children/unknown age, comply with Families rules and approved ad SDK/content/format constraints.
- Use least-privilege analytics; no unnecessary personal contact data; disclose necessary crash, performance, purchase, ad and attribution data.
- Privacy policy, support contact, opt-outs/withdrawal, account deletion (if online accounts added), and retention/deletion policy must match actual collected data.
- Region-specific age/privacy requirements need legal review before publishing. **Documentation does not certify compliance.**

Official references checked 2026-11-11:
- Apple App Review: https://developer.apple.com/app-store/review/guidelines/
- Apple privacy / ATT: https://developer.apple.com/app-store/user-privacy-and-data-use/
- Apple App Privacy details: https://developer.apple.com/app-store/app-privacy-details/
- Google Play Payments: https://support.google.com/googleplay/android-developer/answer/10281818
- Google Play Developer Program Policy (including Families): https://support.google.com/googleplay/android-developer/answer/18265346
- Google Play billing integration: https://developer.android.com/google/play/billing/integrate
- Google AdMob SSV: https://developers.google.com/admob/android/ssv
- Apple StoreKit transactions: https://developer.apple.com/documentation/storekit/transaction

## 10.7 Analytics, testing, rollout

Metrics (privacy-aware): rewarded offer viewed/selected, fill rate, valid completion, verified reward grant, pending count, duplicate callbacks, purchase verified/canceled/pending/refunded, restore success, booster assisted/unassisted success, coin/booster balances, retention and crash-free sessions. Do not optimize advertising at the expense of fairness.

Required acceptance cases:
1. Zero unsolicited ads, including after wins, losses, reloads and level transitions.
2. Ad unavailable, declined or failed never blocks a level or spends an inventory item.
3. Completed ad yields the exact advertised reward once with correct verification.
4. Duplicate SSV callbacks, retries and app resumes cannot double-grant.
5. Purchase pending, cancel and verification rejection never give phantom entitlements.
6. Verified consumable is delivered once; verified non-consumable can be restored on another device, subject to account binding.
7. Refund/chargeback/revocation flows reconcile; do not silently corrupt saved progress.
8. The entire mandatory campaign has free starter-cannon no-booster solvability evidence.
9. Play privacy/children policy and Apple ATT/App Privacy selections match actual ad/analytics SDK behavior.
10. Purchases, ads, and opt-outs are regression-tested on real Android and iOS hardware; production ad unit IDs never used in automated ad-render testing.

## Status summary
- **LOCKED:** rewarded-only advertising at launch; no unsolicited interstitials/banner ads; ads + optional IAP; unlimited retries, free-solvable mandatory campaign and prior approved gameplay.
- **DESIGN BASELINE:** proposed booster and cosmetic SKU list, safe ad placements, example daily ad cap, implementation architecture and analytics.
- **PENDING LAUNCH GATES:** owner target-audience choice, actual policy declarations, vendor and current SDK versions, pricing and store approval, app/device tests.
