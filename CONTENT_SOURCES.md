# Content sources and migration inventory

This file records what was inspected, what was used, and what was intentionally omitted. The two local source trees were treated as read-only.

## Source summary

| Source                           | Inspected                                                                                                | Result                                                                                                       |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `../freamdev.github.io/`         | All 64 files, including configuration, posts, layouts, tabs and images                                   | Identity, contact links, site positioning, 15 articles, project descriptions and screenshots were imported.  |
| `../games/`                      | All 638 files / 636 paths reported by `rg`, including every HTML entry point, README and build directory | 14 presentable browser builds were copied. Other builds are inventoried below.                               |
| `https://freamdev.blogspot.com/` | Homepage, JSON feed, RSS feed, sitemap and web search                                                    | Homepage redirected to Google sign-in; feeds and sitemap returned 401. No inaccessible content was invented. |

The filesystem modification dates in the supplied `games` tree were all `2026-09-26`, so they were not treated as reliable creation or release dates.

## Identity and links

From `../freamdev.github.io/_config.yml` and `_data/contact.yml`:

- Display identity: **Freamdev**
- Description: personal blog about game development
- GitHub: <https://github.com/freamdev>
- LinkedIn: <https://www.linkedin.com/in/richard-pinter/> (provided by the site owner)
- Email: <freamdev@gmail.com>
- Timezone: Europe/Budapest

No employer history, job titles, full legal name, education timeline, phone number or postal location was present. The old `about.md` contained only the theme's placeholder prompt. These fields were omitted rather than inferred.

## Imported local articles

All article bodies were copied without rewriting from `../freamdev.github.io/_posts/` to `content/posts/`. Metadata summaries in the UI were lightly normalized for readability.

| Article            | Date       | Source                                    | Local route                |
| ------------------ | ---------- | ----------------------------------------- | -------------------------- |
| Racer game         | 2023-09-05 | `_posts/2023-09-05-racer-game.md`         | `blog/racer-game/`         |
| The Quantum Menace | 2021-04-25 | `_posts/2021-04-25-the-quantum-menace.md` | `blog/the-quantum-menace/` |
| Pixel Raiders      | 2020-07-30 | `_posts/2020-07-30-pixel-raiders.md`      | `blog/pixel-raiders/`      |
| Loot Boxes         | 2020-01-10 | `_posts/2020-01-10-loot-boxes.md`         | `blog/loot-boxes/`         |
| UFO Landing 3D     | 2019-11-15 | `_posts/2019-11-15-ufo-lander.md`         | `blog/ufo-lander/`         |
| Skyfall            | 2019-10-20 | `_posts/2019-10-20-skyfall.md`            | `blog/skyfall/`            |
| Zombie Shooter     | 2019-09-28 | `_posts/2019-09-28-zombie-shooter.md`     | `blog/zombie-shooter/`     |
| Dungeon Explorer   | 2019-06-11 | `_posts/2019-06-11-dungeon-explorer.md`   | `blog/dungeon-explorer/`   |
| Mistery Dungeon    | 2013-12-31 | `_posts/2013-12-31-mistery-dungeon.md`    | `blog/mistery-dungeon/`    |
| Spwarces           | 2013-12-25 | `_posts/2013-12-25-spwarces.md`           | `blog/spwarces/`           |
| Land of Asciia     | 2013-12-08 | `_posts/2013-12-08-land-of-asciia.md`     | `blog/land-of-asciia/`     |
| Sci-Fi Simulation  | 2013-11-12 | `_posts/2013-11-12-sci-fi-simulation.md`  | `blog/sci-fi-simulation/`  |
| Fantasy RPG Games  | 2013-11-06 | `_posts/2013-11-06-fantasy-rpg-games.md`  | `blog/fantasy-rpg-games/`  |
| Tower Defense      | 2013-11-05 | `_posts/2013-11-05-tower-defense.md`      | `blog/tower-defense/`      |
| Moon-Base          | 2013-10-23 | `_posts/2013-10-23-moon-base.md`          | `blog/moon-base/`          |

Associated images came from `../freamdev.github.io/assets/img/`. The favicon and cake/brand artwork were also retained in the asset archive even where the redesign does not directly display every file.

## Documented game projects

- **Moon-Base** — sourced from `2013-10-23-moon-base.md`; a school thesis, block-based RTS with four modes and a map editor. The external Google Drive source link remains in the article.
- **Tower Defense** — sourced from `2013-11-05-tower-defense.md`; a Java/OpenGL learning project.
- **Dungeon Crawler, Game of Dragons and Mistery Dungeon** — consolidated into “Fantasy RPG Experiments”; source is `2013-11-06-fantasy-rpg-games.md` plus `2013-12-31-mistery-dungeon.md`.
- **Stars and Galaxy** — consolidated into “Sci-Fi Simulations”; source is `2013-11-12-sci-fi-simulation.md`.
- **Land of Asciia** — sourced from `2013-12-08-land-of-asciia.md`; explicitly described as a C project.

## Copied playable games

The following builds were copied without modifying their internal loaders or binary assets:

| Site route                 | Source directory                          | Supporting description / image                                                     |
| -------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- |
| `play/ludicrous-racer/`    | `../games/Racer/`                         | 2023 article and `Racer/Build/webgl.jpg`                                           |
| `play/vanguard-guild/`     | `../games/VanguardGuild/`                 | Custom build page, `Content/*.json`, screenshots and hero data                     |
| `play/the-quantum-menace/` | `../games/LD48/Web/`                      | 2021 article, `LD48/MainScreen.png`; Ludum Dare 48                                 |
| `play/pixel-raiders/`      | `../games/PixelRaiders/Deploys/Version2/` | 2020 article and `games/media/PixelRaiders.png`; latest of two documented versions |
| `play/loot-boxes/`         | `../games/LootBoxes/`                     | 2020 article and `games/media/LootBoxes.png`                                       |
| `play/zombie-shooter/`     | `../games/ZombieShooter/`                 | 2019 article and `games/media/ZombieShooter.png`                                   |
| `play/skyfall/`            | `../games/Skyfall/`                       | 2019 article and `games/media/Skyfall.png`                                         |
| `play/dungeon-explorer/`   | `../games/DungeonExplorer/`               | 2019 article and `games/media/DungeonExplorer.png`                                 |
| `play/ufo-lander/`         | `../games/UFOLander/`                     | 2019 article and `games/media/UFOLander.png`                                       |
| `play/raiders/`            | `../games/Raiders/`                       | `games/media/Raiders.png`; build title only                                        |
| `play/runic-summoner/`     | `../games/RunicSummoner/`                 | Build page identifies product version 0.2.0                                        |
| `play/adventure-run/`      | `../games/AdventureRun/`                  | Build title only; no unsupported gameplay description added                        |
| `play/clicker-warrior/`    | `../games/ClickerWarrior/`                | Build page identifies product version 0.1.0                                        |
| `play/the-last-bastion/`   | `../games/TheLastBastion/`                | Build title only; no unsupported gameplay description added                        |

## Games and experiments not copied

These remain in the read-only source tree. They were excluded to keep the publishable site below GitHub Pages' 1 GB site-size limit and to avoid presenting internal tests as portfolio releases.

- `IARPG/` — 581.5 MB and contains multiple overlapping versioned builds (`0.1.4`, `0.1.5`, `0.1.9`, `IARPG`, `Releases`, `WebGL`). No README provides enough evidence to choose the canonical release.
- `TheGame/` — 111.4 MB; build title is `NoInteraction` and no description or release context was present.
- `vrising/` — 72.4 MB; README contains only “Placeholder” and the build title is `VRisingControls`.
- `CLeaderboard/` — 72.2 MB; identified only as `LeaderboardSimulator`, with no portfolio description.
- `IDHTemu/` — 55.8 MB; identified as `IdleHeroesCombatCopy`, so it was treated as an emulation/prototype rather than a public portfolio release.
- `CloudSave/` — 42.2 MB; appears to be an `IdleCommon` cloud-save/service experiment and may require external Unity services.
- `LD53/` — 42.4 MB; a playable build exists, but no title beyond `LD53`, screenshot, jam theme or description was found.
- `Dungeon3D/` and `oldDungeonExplorer/` — older/duplicate builds of Dungeon Explorer; the documented `DungeonExplorer/` version was retained.
- `PixelRaiders/Deploys/Version1/` — superseded by documented Version 2.
- `LD48/webJam/` — duplicate jam build; `LD48/Web/` was retained. Windows and itch ZIP packages were not copied because the web build is directly playable.
- `Test/` — explicitly named test build (`URP_2D`).
- root `Build/` and root `TemplateData/` — orphaned Unity output without a matching root player page.
- `viki-weather/` — source-only Angular exercise; omitted from Games because it is a standalone web app rather than a game project.
- `HtmlLooter/` — collection of images and one loadout HTML tool, not a documented game release.
- `htmls/` — unrelated standalone prototypes and tools (`flight`, `flight2026`, `climb`, `cupid`, `cursor`, `office`, `rainbow`, `vampire`) without supporting descriptions. Retained only in the source archive.
- `org-slash/` and `speaker-picker/` — standalone web tools rather than documented games; omitted from the game showcase.

## Duplicated and outdated material

- `Dungeon3D`, `DungeonExplorer` and `oldDungeonExplorer` share the title “3D Fantasy Dungeon Batteler” / Dungeon Explorer. The build linked by the existing site was chosen.
- Pixel Raiders has Version 1 and Version 2. The existing article identifies Version 2 as the newer snapshot, so Version 2 was chosen.
- Ludum Dare 48 has `Web` and `webJam` builds plus ZIP packages. The `Web` directory was chosen for the site.
- Several old article images duplicate `games/media/*`; both source sets were inspected, and the article-specific image is used where available.

## Broken, ambiguous or manually reviewable items

- Blogspot cannot currently be read anonymously. If it should be public, update its Blogger reader permissions, then export or re-run an import from the Blogger feed. Its original post URLs and labels could not be recorded.
- Several 2013 articles link to old Google Drive, GameJolt, YouTube and project websites. They were retained in the original Markdown but were not assumed to remain functional.
- The Sci-Fi Simulation and Spwarces articles use Markdown image syntax around YouTube URLs. These are source-level formatting mistakes; the migration preserves them rather than inventing video embeds.
- The old site has no usable CV text beyond projects, technologies and contact configuration. Employment and education details need manual author input.
- Generic Unity builds without README files may have controls or browser requirements not discoverable from static build output.
- Some newer Unity builds may depend on services or browser headers not provided by GitHub Pages. The copied showcase favors uncompressed build outputs where available; older `.unityweb` builds use Unity's own loader decompression.
