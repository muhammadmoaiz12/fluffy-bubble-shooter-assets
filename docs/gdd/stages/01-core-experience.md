# Stage 1 — Core game experience

**State: APPROVED** · Confirmed 2026-11-11.

## Identity and vision
Puff Trails is a cozy, premium, character-driven puzzle adventure where players shoot living furry creatures into **anchored overhead clusters**, match families, clear connected groups, trigger special evolution and complete missions across themed fantasy worlds. The six locked character families are the actual ordinary game pieces; glass/rainbow bubbles may appear as special mechanisms, not replacements for them.

## Locked player-experience goals
- **Primary mode:** level-based **adventure** with worlds, missions, rewards and unlocks.
- **Difficulty:** balanced, friendly learning curve with growing strategic challenge.
- **Family powers:** special activation only (not on every ordinary match), via yet-to-be-defined triggers such as advanced combinations or evolution.
- **Pieces:** real small, medium, giant sizes; signature face/eyes/features; fluffy animation; family as primary matching identity.
- **Visual identity:** 90% round body, approximately 10% tiny distinguishing features; six user-approved families unchanged.
- **Platforms:** Android/iOS with React Native, Expo, Skia and TypeScript.

## Intended player loop (design blueprint; details in Stage 2)
1. Select an unlocked adventure level and read mission objectives, available shots, and any special rule.
2. Plan by family, size, angle, obstacles, and visible shooting information.
3. Launch a living fluffy character; it rebounds from walls and attaches to the anchored cluster.
4. Resolve contact, same-family match(es), pops, support detachment, and *eligible* special triggers in a deterministic order.
5. Recheck victory and loss conditions after the shot fully resolves.
6. On victory, award mission progression, star rating and any defined rewards; on failure, support replay without erasing prior permanent unlocks.

## Adventure progression principles
- World → level → explicit mission objective(s) → result → star/reward/unlock.
- Each level is replayable; rewards and unlocks must support idempotency so replay does not duplicate one-time grants.
- Introduce aiming/matching before complex obstacles, giant launched pieces, or evolution chains.
- Level designs must be validated for geometry, solvability, target difficulty and fairness, including collision constraints.
- Proposed early world themes (not locked schedules): Cloudberry Meadows, Honeydrop Gardens, Moonmallow Forest, Sugarstar Skies.
- Stage 4+ will lock family powers, cannons, economy, rewards, milestones, world counts and UI design.

## Design acceptance criteria (not software-test results)
- Level objectives and pass/fail outcomes are explicit and testable.
- No normal gameplay requires account sign-in or permanent online connectivity unless separately approved.
- Family identity and collisions remain logically distinct: same character family can occur in three physical sizes.
- Every action has predictable feedback and a reproducible outcome for equal initial state/input/random seed.
- Rewards/achievements are neither duplicated nor lost across retries.
- No new UI screen is treated as approved solely because concept art was generated.

## Open dependencies
Actual matching threshold, queue, special evolution triggers, stars, retry economy, win/loss rules, and cannon abilities are **not yet approved**. See [Stage 2](02-shooting-collision.md).
