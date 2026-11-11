# Stage 11A — Gameplay Screen: UX Specification & Wireframe Brief

**GDD version:** v1.1.0 · **Status:** implementation-oriented UX baseline, not an approved image mockup or built gameplay.

## 0. Guardrails (authoritative prior decisions)

- Portrait-first React Native + Expo + Skia + Reanimated on Android and iOS.
- **Playable pieces are original six fluffy families**: `rosybuns`, `skydoodles`, `mossmops`, `sunpuffs`, `plumplets`, `peachpeeps` (map GitHub aliases `skybubs`, `leaflings`, `chirpyfluffs`, `twirlpuffs`, `peachtells` respectively). Use versions from `muhammadmoaiz12/fluffy-bubble-shooter-assets`. No replacement pets or colored glass balls.
- Family match threshold: connected 3+ of same family regardless of size; 4+ special activates automatically, using Stage 3 deterministic survivor and chain rules.
- Real small:medium:giant collision diameters `0.75 : 1.0 : 1.5`; decorative soft fur/features do not enlarge hitboxes. Level authoring/physics remains authoritative.
- Continuous-position anchored circle attachment, wall rebound, nearest **legal** snap, detachment falling, bounded evolution pushing.
- Current and next creature shown; one voluntary swap allowed before launch. Giant launcher availability is progressively unlocked.
- Designer-authored shot budget, seeded level-aware next-shot fairness, world-specific miss penalties.
- Failure by exhausted shots or danger boundary after full shot settled; victory takes priority when objectives complete at same time.
- Family abilities auto, equipped cannon passive auto and charged active manual; boosters are optional, explicit consent/confirmation and charged only on successful use.
- Unlimited retries; rewarded ads optional only, never forced.

## 1. Content hierarchy & layout goal

Prioritize **shot accuracy and visibility**. HUD must never steal usable cluster, aim trajectory, cannon or control space. World art adds atmosphere only behind a quiet, readable board.

```text
┌──────────────────────────────────────┐
│ SAFE TOP: Pause   Level 12   Shots  │ ← primary HUD
│ Mission: Rescue 2 / 3    Stars  ★★☆ │ ← concise objectives
├──────────────────────────────────────┤
│              CEILING                 │
│   ○  ◯ ○  ○  ◉    ○  ◯              │ ← ONLY locked fluffy character sprites
│      ◯ ○  ◉  ○  ◯                   │   geometric sizes shown conceptually
│        ○ ◯   ○                       │
│           ↓ hazard limit             │
│                                      │
│             · · · ·                  │ ← exact launch trajectory incl ricochets
│                ·                     │
│                ·                     │
├──────────────────────────────────────┤
│ Boosters (optional)    Cannon gauge │ ← dismissible compact utility strip
│          [ CURRENT PUFF ]           │
│  [NEXT PUFF] [SWAP] [CANNON POWER]   │ ← thumb-reachable controls
│ SAFE BOTTOM / GESTURE BAR            │
└──────────────────────────────────────┘
```

**This is a semantic diagram, not an approved visual layout.** Rebuild with actual static sprite references and dynamic safe-area dimensions.

## 2. Responsive layout constraints (tunable defaults, not locks)

- Use `useSafeAreaInsets` or equivalent. Define usable height `H = viewportHeight - safeTop - safeBottom`. Render inside usable rectangle.
- Suggested starting allocations: compact primary HUD **10–15% of H**, active cluster-and-aim field **58–70% of H**, bottom control zone **17–27% of H**; do not force percentages without min-height checks.
- Compact phone test: logical width 320–360dp; mainstream 375–430dp; tall 440dp+. Treat actual world-to-screen scaling based on board width, not hardcoded sprite pixel dimensions.
- Touch targets should aim for Android ≥48dp and iOS ≥44pt. If visual booster icons are smaller, their hit areas remain large and non-overlapping.
- Sprite visual diameter derives from physics diameter and board-to-screen scale. Verify family recognition at small sizes and protect at least a few pixels of transparent fuzzy silhouette outside nominal hitbox.
- Prevent clipped giant features near wall and bottom. Do not use image padding to define collision.
- Do not introduce horizontal scroll, accidental vertical scroll, or browser-like gestures during play.
- Tablet layouts may add side margins/decor rather than stretching gameplay circles and hit target beyond readable dimensions.

## 3. Component/state contracts

| Component ID | Data/state | Player action | Critical invariant |
|---|---|---|---|
| `pt.game.levelHeader` | level, pause, shots left | Pause | Accurate after settled state |
| `pt.game.missionStrip` | objectives, current/target | Inspect / expand | One source of truth; not animation-driven |
| `pt.game.boardCanvas` | creatures, obstacles, ceiling support graph, hazard | Drag/aim/launch | Physics authoritative; 6 locked families |
| `pt.game.trajectory` | projectile center/radius, ricochet path, terminal preview | None separately | Exact same collision math as simulation |
| `pt.game.cannon` | equipped ID/tier, current projectile | Aim/launch | Shot budget reduced once for committed launch |
| `pt.game.nextPuff` | queued family/size | Preview | Correct deterministic queue |
| `pt.game.swap` | allowed/used/disabled | Swap once | No duplicate swap or inventory spend |
| `pt.game.cannonCharge` | energy, ready/blocked | Activate manually | No auto-fire active ability |
| `pt.game.boosters` | eligible stock and target previews | Select/confirm/cancel | No spend before successful effect |
| `pt.game.hazard` | warning phase and measured boundary | Inspect | Evaluated after shot settlement |
| `pt.game.resolutionOverlay` | pop/evolve/fall/score | None | Cosmetic only; does not alter engine result |
| `pt.game.results` | win/loss, stars, reward/claim | Next/retry | Victory precedence and unlimited retries |

## 4. State machine & input arbitration

`PREPARING -> READY -> AIMING -> PROJECTILE_IN_FLIGHT -> RESOLVING -> (READY | WON | LOST)`

- PAUSED is an overlay state allowed from READY/AIMING and a safe boundary for in-flight/resolving; freeze simulation/render interpolation coherently.
- BOOSTER_TARGETING and CANNON_TARGETING are modal input states entered from READY only, with explicit cancel and confirm.
- Input to launch begins from an unobstructed aim area/cannon gesture. Finger release fires if angle/gesture validity passes, otherwise cancels with zero shot cost.
- Lock swap and active booster use while projectile is in flight or resolution is processing. No second projectile can fire before settled READY.
- Native back/home gestures do not fire or consume a shot; handle resume without duplicate side effects.
- Repeated taps, interrupted release and frame drops have exactly-once shot semantics.

## 5. Motion and expression choreography

1. **Ready:** creature idle breathing and soft blink. Current/next sprite faces visible and aligned with official portraits.
2. **Aim:** eyes follow direction when supported, dots predict trajectory and first contact; sprite doesn't occlude predicted terminal spot.
3. **Launch:** brief squash/stretch on current official sprite; projectile travels with fixed collision center/radius; animation never changes hitbox.
4. **Collision:** expressive wobble, then deterministic snap to legal contact; no visual teleport across the board.
5. **Ordinary three:** happy reaction, pop and removal, unsupported attachments drop; update counters once after authoritative resolution.
6. **Four-plus:** choose deterministic survivor, auto family power, bounded displacement, legal chains, drop and reward; expansion VFX may be delayed but resolved state is fixed.
7. **Danger:** prewarn visually and with accessible text; don't fail on transient mid-shot crossings.
8. **Win/loss:** transition after full resolution; awards are already committed before celebratory display.

Respect reduced motion: replace squash/large shake/flash with opacity, subtle scale and static status; timing and results identical. Haptics and audio are optional and independently disabled.

## 6. Canonical family artwork mapping

| User-facing family | Current asset folder | Visible identity |
|---|---|---|
| Rosybuns | `locked/rosybuns/v1` | Rosy pink, heart tuft and cheeks, tiny ears |
| Skydoodles | `locked/skybubs/v1` | Sky blue, tufted round fluffy silhouette |
| Mossmops | `locked/leaflings/v1` | Mint-green, small leaf tufts |
| Sunpuffs | `locked/chirpyfluffs/v1` | Golden yellow, soft sun/crown tuft |
| Plumplets | `locked/twirlpuffs/v1` | Lavender, tiny curled horns |
| Peachpeeps | `locked/peachtells/v1` | Peach/apricot, curled tuft and freckles |

Use `assets.ts` static registries and versioned `gameplay/256/` variants initially, but select higher/lower resolution from measured device memory and screen-space usage. App should fail fast in development if any missing sprite mapping, never silently substitute a generic bubble. Art QA and actual Skia rendering remain pending.

## 7. Functional screen routes and boundary states

- `LevelPreview`: mission, shot budget, mission-specific hazards/booster restrictions, cannon equipped, optional change cannon; Start.
- `Gameplay`: input states above.
- `Pause`: Resume, Restart, Leave, sound/motion toggles, confirm destructive restart if needed.
- `Victory`: authoritative stars, mission completion, grants, replay/next; deferred claim is clearly marked pending.
- `Failure`: reason (shots/danger/other authored condition), Retry immediately, World Map; never show life refill or mandatory ad.
- `LoadingRecovery`: app resumes with complete committed shot result or restarts from last safe snapshot; never shows fabricated rewards.
- `Offline/AdUnavailable/PurchasePending`: non-blocking; base adventure still works.

## 8. UX playtest & technical acceptance gates

1. First-time player can identify current shooter, next shooter, swap control, mission and remaining shots without tutorial text longer than one sentence.
2. All six family sprites look distinct and readable on 320dp viewport on dark and light world backgrounds.
3. Small projectiles traverse openings that medium/giant geometrically cannot; preview and simulation agree.
4. Bounced projected path matches actual physics at several angles and near walls.
5. No UI overlay masks legal attachment space or intercepts aiming/release gestures by accident.
6. Only one swap before each shot and queue remains seed-reproducible.
7. Three-family match counts by individuals, regardless of size; four-plus special automatically resolves before pop.
8. Awakened growth performs safe bounded pushing with no overlaps or anchor corruption.
9. After resolution, eligible disconnected clusters drop exactly once; objectives are credited only once.
10. Last-shot mission completion wins even if shot budget reaches zero or a transient danger crossing occurred.
11. Retry always available without lives/ads/paywalls.
12. No automatic interstitial/banner appears during, before, or after a level.
13. Active cannon power requires explicit player action and earned charge; cancel consumes nothing.
14. Booster target cancel/invalid target consumes nothing; successful effect consumes precisely one.
15. Screen remains usable with large text, reduced motion, screen reader and safe areas.
16. Performance profiling must measure FPS/frame time, texture memory, startup decode, input lag and animation stutters on representative low/mid/high-end Android plus iOS hardware. Targets must be established from testing, not claimed without it.

## 9. Remaining open conditions (do not silently lock)

- Exact final UI art/layout approval and logo icon compositions; design system direction is selected, asset integration still requires QA.
- Numeric responsive split, font size scale, particle density and animation duration are engineering/UI tuning knobs.
- Stage 2 physically impossible attachment terminal policy and fully blocked evolution fallback need explicit engine-safe handling before production.
- Store age rating, children/privacy flags, ATT/tracking and ad consent require app-specific final launch review. General adult/teen marketing is not an exemption.
- Performance and accessibility measured on real devices are pending, not certified.
