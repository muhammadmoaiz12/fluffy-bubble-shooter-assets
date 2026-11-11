# Stage 6 — Power-ups, special objects and interaction rules

**Version:** 0.6.0 · **Status:** hybrid ability/booster architecture LOCKED; individual items and numerical parameters are reviewable design baselines.

## S6-01 — Approved major direction (LOCKED)
**Hybrid power-up economy:** Optional consumable boosters exist *in addition* to earned automatic family powers and earned/manual cannon abilities. They may be earned through regular play, optional rewarded advertisements or in-app purchases. Mandatory adventure levels must be achievable without paying for or watching advertisements for boosters.

This is the only newly user-approved Stage 6 product decision. Specific boosters, inventory limits, pricing and effect radii remain tunable design baselines until validated.

## Authoritative power categories

| Category | Owner | Trigger | Cost | Persistence |
|---|---|---|---|---|
| Family special | Matching/evolution system | Eligible connected 4+ family match; auto-resolves | None | Effect follows Stage 3; temporary board state as configured |
| Cannon passive | Equipped cannon | Automatically while equipped | None | During level with that cannon |
| Cannon active | Equipped cannon | Player explicitly activates when charged | Earned in-level energy | Unspent energy is attempt-local |
| Consumable booster | Player inventory | Explicit pre-shot or targeted confirmation | Exactly one inventory unit on successful authorized action | Unspent inventory survives retries/restarts |
| Mission object | Authored level | Triggered by physics/authorized effects | None | Level state only |

**Resolution precedence (design baseline):**
1. Validate player booster selection, inventory and target without spending; reject invalid commands.
2. Commit booster intent as a unique action; spend atomically only if the defined effect succeeds.
3. When a projectile launches, apply approved pre-shot modifiers to the authoritative trajectory/identity; physical collision remains authoritative.
4. Attach, resolve normal 3+ or special 4+ matches, family effects, legal displacement, disconnected falls and bounded authorized chains under Stage 2/3 ordering.
5. Apply earned cannon charge to settled qualifying events; a manually requested charged cannon effect resolves at its own safe command boundary.
6. Emit objective and reward deltas with stable event IDs; settle victory before loss.
Animations never trigger a second effect. Any simultaneous interaction is resolved by event sequence number and stable IDs, not frame rate.

## Baseline consumable roster — NOT individually user-approved

### Rainbow Friend — pre-shot family substitution
- Applies to exactly one upcoming projectile after explicit player confirmation.
- Player chooses a currently eligible family; matching identity becomes that family *for this shot only*.
- Does not change its collision radius, character collection identity, permanent unlock, or grant free access to a locked family.
- Visual indicator must show chosen temporary matching identity without silently replacing original approved sprite.
- On invalid family, cancel without consumption. A legal shot consumes one booster on launch.
- Avoid duplicating Plumplets' Magic Shift: Rainbow affects the incoming shot before attachment, whereas Magic Shift changes an already-attached neighbor after a 4+ special.

### Precision Trail — trajectory assistance
- One-shot expanded trajectory and first-hit preview; accurate for wall ricochets and true projectile radius.
- Does not change velocity, hitboxes, placement, queue, shots allowed or underlying physics.
- Must not bypass intentionally authored restricted-visibility objectives unless the level explicitly permits it.
- Consume only when the player actually launches a shot with the enhanced guide, not when previewing.

### Soft Burst — targeted removal
- Select legal target within defined level/booster restrictions; preview exactly which eligible objects will be affected.
- Removes a bounded subset of removable objects; no destruction of fixed anchors, protected mission objects or indestructible hazards.
- Cannot create unanchored overlaps; recompute structural support and update mission counts once.
- Distinct from Sunpuffs' earned auto Sun Burst: this is purchased/earned inventory with tighter defined targeting/strength.

### Cozy Save — defensive hazard intervention
- Stops **one eligible, clearly telegraphed hazard escalation** on confirmation.
- Does not ignore danger-line loss after settled resolution, refund finished shots, or guarantee victory.
- Consumption occurs only when the selected eligible hazard event is actually prevented.
- Distinct from Peachpeeps' earned Sweet Rescue: Peachpeeps acts on tagged rescue/status effects; Cozy Save prevents one specific forecast hazard step.

## Special objects — authored level-only objects, NOT new matching families
- **Star Orb:** tagged collectible released through authorized clearing/detachment, counted once.
- **Crystal Shell:** destructible obstacle with authored hit points and eligible damage types.
- **Sticky Honey:** locally modifies movement/displacement rules; its restriction is visible and checked before transforms.
- **Vine Barrier:** explicit obstructing/anchored geometry; cannot be ignored by normal matching.
- **Portal / Moving Anchor / Fog:** advanced authored mechanics requiring predictable trajectories, deterministic transitions and accessibility feedback.
The final obstacle roster and introduction levels are not locked.

## Targeting, economy and safety baseline
- Inventory ledger: `inventory_item_id`, `quantity`, `source`, `grant_event_id`; nonnegative quantities, unique purchase/reward event IDs.
- Commands: `preview -> confirm -> validate -> apply -> settle`; no spend on cancel, invalid target, failure to apply, or duplicate retry.
- One-shot modifiers never carry to a different shot without an explicit rule.
- Never auto-spend a consumable. Do not open a premium purchase prompt mid-flight.
- Paid and ad-earned boosters cannot be mandatory for a main-path level. Verify baseline solutions using starter cannon and zero boosters.
- Match-three vs match-four thresholds remain unchanged; boosters cannot force overlapping circles or invalid fixed-anchor movement.
- Special objects respect precedence of victory over simultaneous danger or exhausted shots after complete shot settlement.
- Booster inventories are portable across levels, but use/availability may be restricted by authored level tags; restrictions must be known before level entry.
- Rewarded ad failure, purchase verification failure, app background/resume, duplicate callbacks or offline state must never double-charge or double-grant.
- Consumable acquisition rates, caps, prices, cooldowns and expiry are **Stage 7 design/economy matters**, not locked here.

## Engineering examples and tests
1. Rainbow Friend changes the correct shot's match identity, even after current/next swap.
2. Small, medium and giant still use physical radii when using any booster; no range or ricochet mismatches.
3. Two consecutive taps cannot spend the same booster twice.
4. Canceling the target overlay consumes nothing and restores prior controls.
5. App restart after debit-before-animation resumes from idempotent authoritative state.
6. Family auto-power + cannon charge + booster effect generate one deterministic event log under identical seed/commands.
7. A Soft Burst causes one falling component and counts the proper mission events once.
8. Targeting a protected anchor or non-removable collectible is rejected with no cost.
9. Last-shot victory overrides concurrent danger when mission becomes complete.
10. Free starter-cannon test path remains viable on every mandatory adventure level without paid/ad boosts.
11. Daily procedural level generator excludes boosters as required solver dependencies.
12. No-resolvable-attachment and blocked-evolution terminal policies are still pending under Stage 2; booster use does not silently resolve those product decisions.

## Stage 6 acceptance status
- **LOCKED:** hybrid optional consumable + earned ability architecture.
- **DESIGN BASELINE:** four proposed boosters, data schema, targeting/safety/default resolution, level-object taxonomy.
- **VALIDATE:** gameplay effect clarity, balance, exploit testing, device input and animation timing.
- **PENDING:** final booster roster and numeric tuning, economy grants/costs, Stage 2 terminal geometry fallback.
