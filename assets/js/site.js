(function () {
  const root = window.SITE_ROOT || "./";
  const data = window.SITE_DATA;
  const page = document.body.dataset.page || "";
  const esc = (value = "") => String(value).replace(/[&<>\"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const image = path => `${root}assets/images/${path}`;
  const navItems = [["Home", ""], ["About", "about/"], ["Games", "games/"], ["Blog", "blog/"], ["Contact", "contact/"]];

  document.querySelector("#site-header").innerHTML = `<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="shell nav"><a class="brand" href="${root}"><span class="brand-mark">F_</span><span>Freamdev</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="nav-links">Menu</button><nav id="nav-links" class="nav-links" aria-label="Primary">${navItems.map(([label, path]) => `<a href="${root}${path}" ${page === label.toLowerCase() ? 'aria-current="page"' : ""}>${label}</a>`).join("")}</nav></div></header>`;
  document.querySelector("#site-footer").innerHTML = `<footer class="footer"><div class="shell footer-row"><span>© ${new Date().getFullYear()} Freamdev · Built as a static site.</span><span class="footer-links"><a href="https://github.com/freamdev">GitHub</a><a href="https://www.linkedin.com/in/richard-pinter/">LinkedIn</a><a href="mailto:freamdev@gmail.com">Email</a></span></div></footer>`;
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => { const menu = document.querySelector(".nav-links"); const open = menu.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });

  function tags(items) { return `<div class="tags">${items.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>`; }
  function gameCard(game) {
    const actions = [
      game.playable ? `<a class="button" href="${root}play/${game.slug}/" target="_blank" rel="noopener noreferrer">Play</a>` : "",
      game.featured ? `<a class="button secondary" href="${root}games/${game.slug}/">Details</a>` : "",
      game.post ? `<a class="button secondary" href="${root}blog/${game.post}/">Read more</a>` : ""
    ].join("");
    return `<article class="card">${game.image ? `<img class="card-image" src="${image(game.image)}" alt="${esc(game.title)} screenshot" loading="lazy">` : `<div class="card-placeholder" aria-hidden="true">${esc(game.title.slice(0,2).toUpperCase())}</div>`}<div class="card-body"><div class="meta">${esc(game.status)}</div><h3>${esc(game.title)}</h3><p>${esc(game.description)}</p>${tags(game.tech)}${actions ? `<div class="card-actions">${actions}</div>` : ""}</div></article>`;
  }
  function postCard(post) {
    return `<article class="card">${post.image ? `<img class="card-image" src="${image(post.image)}" alt="" loading="lazy">` : ""}<div class="card-body"><div class="meta"><time datetime="${post.date}">${new Date(post.date + "T12:00:00").toLocaleDateString("en", {year:"numeric", month:"short", day:"numeric"})}</time></div><h3><a href="${root}blog/${post.slug}/">${esc(post.title)}</a></h3><p>${esc(post.summary)}</p>${tags(post.tags)}</div></article>`;
  }
  const uniqueGames = data.games.filter((game, index, all) => {
    const title = game.title.trim().toLowerCase();
    return index === all.findIndex(candidate =>
      candidate.slug === game.slug || candidate.title.trim().toLowerCase() === title
    );
  });
  const featuredGames = document.querySelector("#featured-games");
  if (featuredGames) featuredGames.innerHTML = uniqueGames.filter(x => x.featured).map(gameCard).join("");
  const latestPosts = document.querySelector("#latest-posts");
  if (latestPosts) latestPosts.innerHTML = data.posts.slice(0, 3).map(postCard).join("");
  const gameGrid = document.querySelector("#game-grid");
  if (gameGrid) gameGrid.innerHTML = uniqueGames.map(gameCard).join("");
  const posts = document.querySelector("#post-grid");
  if (posts) posts.innerHTML = data.posts.map(postCard).join("");

  function inline(text) {
    return text
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => `<img src="${rewriteUrl(url)}" alt="${esc(alt)}">`)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
        const href = rewriteUrl(url);
        const newTab = href.startsWith(`${root}play/`) ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a href="${href}"${newTab}>${label}</a>`;
      })
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }
  function rewriteUrl(url) {
    if (url.startsWith("/assets/img/")) return `${root}assets/images/${url.slice(12)}`;
    if (url.startsWith("https://freamdev.com/games/")) {
      const map = {DungeonExplorer:"dungeon-explorer", ZombieShooter:"zombie-shooter", Skyfall:"skyfall", UFOLander:"ufo-lander", LootBoxes:"loot-boxes", PixelRaiders:"pixel-raiders"};
      const name = url.split("/games/")[1].split("/")[0];
      return map[name] ? `${root}play/${map[name]}/` : url;
    }
    return url;
  }
  function markdown(source) {
    source = source.replace(/^---[\s\S]*?---\s*/, "");
    const lines = source.replace(/\r/g, "").split("\n");
    let html = "", listDepth = 0, paragraph = [];
    const flushP = () => { if (paragraph.length) { html += `<p>${inline(paragraph.join(" "))}</p>`; paragraph = []; } };
    const closeLists = () => { while (listDepth) { html += "</ul>"; listDepth--; } };
    for (const raw of lines) {
      const line = raw.trimEnd();
      const heading = line.match(/^(#{2,4})\s+(.+)/);
      const item = line.match(/^(\s*)-\s+(.+)/);
      if (heading) { flushP(); closeLists(); const level = heading[1].length; html += `<h${level}>${inline(heading[2])}</h${level}>`; }
      else if (item) { flushP(); const depth = Math.floor(item[1].length / 2) + 1; while (listDepth < depth) { html += "<ul>"; listDepth++; } while (listDepth > depth) { html += "</ul>"; listDepth--; } html += `<li>${inline(item[2])}</li>`; }
      else if (/^\|/.test(line)) { flushP(); closeLists(); paragraph.push(line.replace(/^\||\|$/g, "").split("|").map(x => x.trim()).join(" · ")); }
      else if (!line.trim()) { flushP(); closeLists(); }
      else { closeLists(); paragraph.push(line.trim()); }
    }
    flushP(); closeLists(); return html;
  }

  const article = document.querySelector("#article-body");
  if (article) {
    const slug = document.body.dataset.slug;
    const post = data.posts.find(x => x.slug === slug);
    if (!post) { article.innerHTML = '<div class="empty">Article not found.</div>'; return; }
    document.title = `${post.title} · Freamdev`;
    document.querySelector("#article-title").textContent = post.title;
    document.querySelector("#article-date").textContent = new Date(post.date + "T12:00:00").toLocaleDateString("en", {year:"numeric", month:"long", day:"numeric"});
    document.querySelector("#article-tags").innerHTML = tags(post.tags);
    const cover = document.querySelector("#article-cover");
    if (post.image) { cover.src = image(post.image); cover.alt = `${post.title} screenshot`; } else cover.remove();
    fetch(`${root}content/posts/${post.file}`).then(r => { if (!r.ok) throw new Error(); return r.text(); }).then(text => article.innerHTML = markdown(text)).catch(() => article.innerHTML = '<div class="notice">The article could not be loaded. Serve this site over HTTP rather than opening it as a file.</div>');
  }
})();
