GLASS CANNON — PLAYABLE DEMO 4

Open index.html in a modern browser. No installation, server, or connection required.

CONTROLS
A/D or left/right arrows: move sideways. W/S or up/down arrows: move within a 100-pixel forward/back band. Hold Space: cast. F: charged fireball. P: pause.
Touch: drag to move in both directions and cast; Fireball button unleashes the charged spell.
Sound defaults to on. Music and effects begin when Enter the dungeon is pressed; the Sound toggle still mutes both. The three selected music tracks are bundled locally. See MUSIC-CREDITS.txt.

FORMATION MOVEMENT
24 enemies enter in four groups of six. Each stage uses four distinct entry routes with varied sides, occasional split entrances, shuffled destination slots, and varied speed and timing. Final layouts alternate among a wide grid, staggered ranks, chevron, and split wings. Consecutive stages never repeat a layout. Each survivor keeps its assigned slot when returning from a dive.
The formation gently sways and expands. After assembly and a brief hold, leaders break away with escorts on curved, looping, or direct dives toward the wizard's position at launch. Surviving attackers pass off the bottom and sweep back to their original slots.
This is a Galaga-style adaptation to the demo's portrait dungeon playfield, not a frame-exact arcade recreation. Movement is independently implemented. The selected reference was inspected for its entry/formation/dive/return lifecycle:
https://github.com/jnikolaidis/Galaga
No upstream game source or artwork is bundled.

ENEMIES
Goblins and enchanted armor: contact damage only. Ghosts: contact drains all fireball charge without losing a life, including when the meter is empty.
Skeletons: fire arrows during dives.
Evil wizards: fire aimed violet spells during dives.
All five types now share the formation movement; earlier individual wandering and caster-pause movement have been replaced.
Every fifth wave ends with a boss. Five archetypes rotate: Gilded Warden (armor, golden swords), Goblin King (goblin, throwing daggers), Crypto Keeper (skeleton, arrows), Big Boo Boss (ghost, charge-draining wisps), and Necromancer (evil wizard, violet hexes). Each uses an enlarged, tinted version of its base sprite with a crown. The cycle repeats after all five. The Gilded Warden fires golden spectral sword volleys while gently moving sideways and periodically advancing into flamethrower range. Its eight-second cycle includes a rear hold, smooth approach, 1.5-second forward hold, and smooth retreat. Boss health equals the stage number: 5 hits at stage 5, 10 at stage 10, and so on. Each projectile deals one hit. A charged fireball deals half the boss maximum health, rounded up. Two charged fireballs defeat a full-health boss; one can finish a sufficiently weakened boss. Ordinary hits also charge the fireball meter. The boss health display shows hits remaining.

POWER-UPS
S: spread shot. B: bounce shot. F: short-range flamethrower.
Evil-wizard kills have a 20% potion-drop chance; other regular enemies never drop potions. A living boss drops one guaranteed potion when it first falls strictly below half maximum health, including from a charged fireball. The drop cannot repeat after respawning. Each pickup replaces the basic attack for 14 seconds; another pickup replaces the previous weapon. Charged fireball remains separate. The readiness prompt pulses gold (steady with reduced motion).
Only enemy contact and projectiles cause death. Escaping enemies return. Three seconds of respawn protection.

PREVIEW BUTTONS
Boss practice cycles through all five bosses with a charged fireball.
Try next power-up cycles the weapons.
Dance rehearsal cycles moonwalk, disco, wizard shuffle, and moshing.
Preview dramatic demise shows the blinking ashes without costing a life.

VALIDATION
Automated checks cover off-screen entry, complete assembly before dives, unique slots, surviving dives and re-entry, type-specific attacks, weapons, boss health, damage, respawn, pause, and drawing calls. Hands-on browser testing and difficulty balancing remain.
The portfolio is unchanged. Scoreboard and end-of-game statistics are not yet implemented.

ASH-PILE BLINK AUDIO
A soft descending bip is synchronized with each ash-pile eye-close, after death and on GAME OVER. It follows the existing Sound toggle and does not play while paused. GAME OVER ashes now continue blinking. Automated checks verify synchronization and prevent repeated sounds within a blink. Selected music tracks are now bundled.

RESPAWN CONTINUITY FIX
Losing a life freezes the current fight during the ash animation, then resumes it with three seconds of protection. Enemy identities, positions, formation slots, entry/dive progress, remaining groups, pickups, wave number, and boss health are preserved. Active projectiles are cleared for a safe respawn. The panic explosion is visual and awards no points. A new stage starts only after a genuine clear, not a death. Automated regressions verify normal-wave continuity, frozen positions, and resuming the same damaged boss.

STAGE CLEAR CLEANUP
Winning a stage clears player and enemy projectiles immediately, including on boss victories, before the celebration and next wave. Automated regressions verify cleanup and an empty projectile field at the next stage.

Boss scaling checks verify exact defeat counts at stages 5, 10, and 15 across all projectile types, plus charged-fireball damage and retained boss health after respawn.

Automated checks confirm flamethrower shots can hit during the forward hold and cannot reach the boss at its rear position.

WARDEN PROJECTILES
The enchanted-armor boss now fires directional golden spectral swords with visible blades, crossguards, and hilts instead of orbs. Spread timing, speed, and collision size are unchanged. Automated checks verify three sword projectiles per volley and a speed of 165 pixels per second; drawing smoke checks passed.

PORTRAIT ARCADE FIELD AND DODGING
The playfield is now 600 by 800, with unstretched character sprites, a narrower formation, revised boundaries, HUD, touch mapping, and player position. Boss sword volleys now contain three swords at 0.48-radian spacing (about 27.5 degrees), traveling at 165 pixels per second, with at least 1.2 seconds between volleys. The boss still advances into flame range. Automated checks cover portrait formation bounds, projectile spacing and speed, flamethrower reach, and existing gameplay regressions. Browser visual and hands-on balancing checks remain.

POTION PICKUPS
Blue potion (S): spread shot. Green potion (B): bounce shot. Red potion (F): flamethrower. Corked glass bottles replace the square pickup blocks, with letters retained for identification independent of color. Pickup behavior and duration are unchanged. Drawing smoke checks passed for all three bottles.

RESPONSIVE GAME LAYOUT
The portrait game scales to available viewport height without stretching. Instructions, potion guide, and demo controls sit in a side panel on wider screens and stack below the game on narrow screens. Touch controls remain available. HTML structure and gameplay checks passed; visual browser checks remain.

Player shots, enemy aiming, damage, potion collection, and ash animation now use the current vertical position. Automated regressions cover movement limits, live-position shots/collisions/pickups, respawn continuity, enemy drop eligibility, fireball drops, and one-time boss drops. Browser playtesting remains.

POTION CAP
At most two active potion pickups may be on screen. Further drops are skipped until a pickup is collected or leaves the screen. This applies to both wizard and boss drops. Automated cap checks passed.

Ghost-drain regression checks verify full, partial, and empty charge, no life loss, and survival of the touching ghost. Drain feedback plays once per contact rather than every frame.

ENTRY VARIETY VALIDATION
Checks cover non-repeating layouts, unique shuffled slots, all four entry routes, on-field formation bounds, off-screen starts, and successful arrival at each assigned slot. Existing gameplay regression checks also passed. Browser playtesting remains.

Boss-roster regressions verify all five sprites and projectile types, rotation, practice cycling, fireball damage, retained boss identity on respawn, rendering calls, and harmless charge-draining boss wisps. Browser visual and gameplay balancing checks remain.

FANTASY ARCADE AUDIO REVISION
Combat now layers low-pass-filtered noise with soft sine/triangle tones: spell whooshes, flame rushes, bassy fireballs, impact thuds, bow twangs, steel swishes, spectral breaths, and magical hexes. Charge, pickup, celebration, and blink tones are lower and softer. A shared 2600-Hz low-pass filter, reduced master gain, dynamic compression, smooth envelopes, and per-effect retrigger limits reduce harshness and overlap. Effects remain synthesized, offline, on by default, and dependency-free. Gameplay and audio-graph checks passed; listening and browser verification remain.

Audio balance follow-up: brighter noise layers, quicker attack edges, slightly stronger soft tones, and gentler compression restore arcade crispness without returning to square-wave beeps. Listening feedback still needed.

INCOMING MOVEMENT CUES
An attacking group plays one brief cue as it breaks formation: a marching rush for physical enemies, a spectral rise for ghosts, or a magical swell for evil wizards. Escorts share the leader cue to avoid excessive overlap. Bosses also play a cue when their forward approach begins. Existing mute controls apply. Automated checks cover group cue count, themed selection, audio-graph construction, and gameplay regressions. Listening feedback remains needed.

BACKGROUND MUSIC DEMO
Keep index.html beside the audio folder, or extract the entire ZIP before playing.
Press Enter the dungeon to begin with sound enabled. DarxieLand plays during regular waves; Heavy Battle 1 plays during bosses; Samza's Game Over Instrumental plays once after the final death animation. Preview GAME OVER triggers that sequence immediately. Boss practice cycles the bosses and starts the boss track. Music pauses during death, pause, muted sound, and hidden tabs. Respawns resume the active fight track. Use the separate Music volume slider to balance music against effects.
Music state and gameplay regression checks passed. Local-browser verification confirmed all three track transitions. Musical mix still benefits from user listening feedback. No music was added to the portfolio.

BRANDED TITLE SCREEN
The approved Miles From Home Studios / Glass Cannon logo and wizard now appear on a dedicated title screen before a normal new run. Enter the dungeon starts play. Restart and replay after GAME OVER return to this title screen. Losing a life still resumes the same fight. Demo practice controls remain direct shortcuts. The title screen is silent until a new run starts; Sound defaults to on. Automated tests verify restart/replay flow; browser checks confirmed the start and restart transitions.

VINTAGE SPEAKER MUSIC
All three music tracks now have a baked-in mono vintage computer-speaker treatment: 130 Hz bass roll-off, 6.5 kHz treble roll-off, mild midrange emphasis, soft saturation, and limiting. The files are MP3s and work offline without runtime audio-processing dependencies. Original source files are retained separately in the work folder. Attribution identifies the modifications. Browser verification confirmed default-on sound and music playback after Enter the dungeon; automated gameplay/audio-state checks passed. Listening feedback remains useful for fine-tuning the effect.

FANTASY ARCADE CABINET
A decorative antique-gold double frame, scrollwork corners, subdued rune rails, inset bevels, and dark wood-toned trim now surround the portrait playfield. Decoration ignores pointer input and is hidden from assistive technology. The redundant visible page title and quote have been removed, and Sound is beside How to play. A hidden page heading preserves document structure. The cabinet fits the browser height and narrows its trim on small screens. Browser visual review and HTML structure checks passed; gameplay regression checks passed.
