# Freamdev portfolio, games and blog

A dependency-free static personal site combining the useful material from the existing `freamdev.github.io` portfolio, the local `games` archive, and the reachable metadata for the Freamdev blog.

The site is designed for GitHub Pages and does not require a build step, package manager, backend, database, or external content service.

## Project structure

```text
cvblog/
├── index.html                 # Landing page
├── about/                     # About / web CV
├── projects/                  # Compatibility redirect to Games
├── games/                     # Unified games and project listing
├── blog/                      # Blog index and clean article routes
├── contact/                   # Verified links from the old site
├── content/posts/             # Original Markdown article sources
├── play/                      # Self-contained browser game builds
├── assets/
│   ├── css/site.css           # Site-wide design system
│   ├── js/data.js             # Curated game/post metadata
│   ├── js/site.js             # Shared layout and rendering code
│   └── images/                # Copied screenshots and artwork
├── CONTENT_SOURCES.md         # Content provenance and audit notes
├── 404.html
└── .nojekyll                  # Prevents Jekyll processing on Pages
```

## Run locally

The article pages load their Markdown with `fetch`, and Unity WebGL builds require HTTP. Do not open `index.html` directly from the filesystem.

From the `cvblog` directory, use any static server. For example:

```sh
python -m http.server 8080
```

Then open <http://localhost:8080/>.

No build command is required. Changes to HTML, CSS, JavaScript, Markdown or images are immediately available after refreshing the browser.

## Deploy to GitHub Pages

1. Create a GitHub repository and place the contents of this folder at its root.
2. Push the repository to GitHub.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the publishing branch (usually `main`) and the root (`/`) folder.
6. Save and wait for the Pages deployment to finish.

All site navigation uses relative paths, so the site works both at a user domain and under a repository path such as `https://username.github.io/cvblog/`.

The repository is approximately 546 MB because it includes browser-playable Unity builds. This is below GitHub Pages' 1 GB published-site limit at the time this project was prepared, but pushes and deployments will be relatively large. If repository size becomes a concern, move optional builds to separate Pages repositories and update their `play` URLs in `assets/js/data.js`.

## Blog content

Imported article source is stored in `content/posts/` as Markdown with its original Jekyll front matter. `assets/js/site.js` loads and renders that Markdown on the corresponding clean article route under `blog/<slug>/`.

The Blogspot site redirected anonymous access to Google sign-in during migration; its JSON/RSS feeds and sitemap returned authorization errors. As a result, only articles already preserved in `freamdev.github.io/_posts/` were imported. See `CONTENT_SOURCES.md` for details.

### Add a blog post

1. Add a Markdown file to `content/posts/`.
2. Add its metadata to the `posts` array in `assets/js/data.js`.
3. Copy any images into `assets/images/`.
4. Create `blog/<slug>/index.html` by copying an existing article page and changing `data-slug` on `<body>` to the new slug.

The small built-in renderer supports headings, paragraphs, unordered lists, links, images, inline code, bold and emphasis. For more complex articles, author the body directly as HTML or extend the renderer.

## Add a game

1. Copy the complete static/browser build into `play/<slug>/`.
2. Confirm that `play/<slug>/index.html` works from a local HTTP server.
3. Add one object to the `games` array in `assets/js/data.js`. The `slug` must be unique.
4. Put its cover image in `assets/images/`, or set `image` to `null` for a generated typographic cover.

Keep every build's internal `Build/`, `TemplateData/`, and `StreamingAssets/` paths unchanged. Older Unity loaders depend on exact filenames and relative directory placement.

Documented projects without a browser build belong in the same `games` array with `playable: false` and a `post` slug. They appear once in the Games archive with a link to their project notes instead of a Play button.

## Maintenance notes

- The source folders `../freamdev.github.io` and `../games` are not runtime dependencies and were not modified.
- Content claims are limited to information supported by source files.
- There was no substantive CV/employment history in the old site; the About page therefore presents a source-backed skills and project timeline and explicitly notes the missing fields.
- `CONTENT_SOURCES.md` is the canonical audit trail for copied, consolidated and omitted content.
