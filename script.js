/* ==========================================================================
   FILM BEYNİ — script.js
   NOT: Orijinal pakette script.js bulunmuyordu; arayüzdeki tüm görünümler,
   ID'ler ve class'lar temel alınarak uygulama mantığı sıfırdan yazıldı.
   ========================================================================== */
(() => {
  "use strict";

  /* ---------------- veri: film kütüphanesi (yerel demo verisi) ---------------- */
  const MOVIES = [
    { id:1,  title:"Yıldız Tozu Rüyası", genre:"bilim-kurgu", era:"2020ler", year:2022, rating:8.4, free:true,  res:"4K",
      grad:"linear-gradient(135deg,#8b5cf6,#2be7f5)", emoji:"🚀",
      desc:"Zamanın kırıldığı bir gemide, mürettebat evreni kurtarmak için son bir sıçrama yapar.",
      cast:["A. Yılmaz","D. Kara","M. Ersoy"], tip:"Gerilim ve bilim kurguyu birlikte sevenler için biçilmiş kaftan." },
    { id:2,  title:"Son Vardiya", genre:"gerilim", era:"2010lar", year:2015, rating:7.8, free:false, res:"HD",
      grad:"linear-gradient(135deg,#1d1a45,#8b5cf6)", emoji:"🕵️",
      desc:"Bir gece nöbetçisi, hastanenin karanlık koridorlarında sır dolu bir olayla yüzleşir.",
      cast:["E. Toprak","S. Güneş"], tip:"Gerilimi yüksek, sürükleyici bir gece nöbeti hikayesi." },
    { id:3,  title:"Kahkaha Sokağı", genre:"komedi", era:"2020ler", year:2023, rating:7.2, free:true, res:"HD",
      grad:"linear-gradient(135deg,#f2c14e,#f7d878)", emoji:"😂",
      desc:"Küçük bir mahallede açılan garip bir dükkan, herkesin hayatını tepetaklak eder.",
      cast:["B. Demir","C. Aydın"], tip:"Hafif, keyifli, aile ile izlenebilecek bir komedi." },
    { id:4,  title:"Menekşe Rüzgarı", genre:"romantik", era:"1990lar", year:1994, rating:8.0, free:false, res:"HD",
      grad:"linear-gradient(135deg,#a78bfa,#f2c14e)", emoji:"🌹",
      desc:"İki eski dostun yıllar sonra yeniden karşılaşmasıyla başlayan klasik bir aşk hikayesi.",
      cast:["N. Aksoy","F. Yıldırım"], tip:"Nostaljik, duygusal bir 90'lar klasiği." },
    { id:5,  title:"Demir Vadisi", genre:"aksiyon", era:"2000ler", year:2004, rating:7.6, free:true, res:"HD",
      grad:"linear-gradient(135deg,#c8952b,#8b5cf6)", emoji:"💥",
      desc:"Terk edilmiş bir maden kasabasında adalet arayan yalnız bir kahramanın hikayesi.",
      cast:["K. Aslan","T. Bozkurt"], tip:"Sert, hızlı tempolu klasik bir aksiyon filmi." },
    { id:6,  title:"Sisli Malikane", genre:"korku", era:"2010lar", year:2017, rating:7.1, free:false, res:"4K",
      grad:"linear-gradient(135deg,#141230,#8b5cf6)", emoji:"👻",
      desc:"Eski bir malikaneye taşınan aile, duvarların ardındaki karanlık sırla yüzleşir.",
      cast:["R. Çelik","İ. Şahin"], tip:"Klasik atmosferik korku sevenler için." },
    { id7:7, id:7, title:"Efsanevi Krallık", genre:"macera", era:"1980ler", year:1985, rating:8.2, free:true, res:"HD",
      grad:"linear-gradient(135deg,#f2c14e,#c8952b)", emoji:"🗺️",
      desc:"Kayıp bir krallığın haritasını bulan genç bir kaşif, destansı bir yolculuğa çıkar.",
      cast:["O. Kaya","L. Turan"], tip:"80'lerin klasik macera ruhunu taşıyan bir yapım." },
    { id:8,  title:"Kod Adı: Sonsuzluk", genre:"bilim-kurgu", era:"2020ler", year:2024, rating:8.7, free:false, res:"4K",
      grad:"linear-gradient(135deg,#2be7f5,#8b5cf6)", emoji:"🛰️",
      desc:"Yapay zekanın insanlığın kaderini belirlediği yakın bir gelecekte geçen bir gerilim.",
      cast:["Y. Polat","Z. Aydemir"], tip:"Güncel yapay zeka temalarına meraklıysanız kaçırmayın." },
    { id:9,  title:"Ada'nın Şarkısı", genre:"drama", era:"2000ler", year:2006, rating:8.3, free:true, res:"HD",
      grad:"linear-gradient(135deg,#9793c9,#1d1a45)", emoji:"🎻",
      desc:"Küçük bir kıyı kasabasında büyüyen bir müzisyenin hayalleriyle yüzleşmesi.",
      cast:["A. Demirtaş","P. Karaca"], tip:"Duygusal, ödüllü bir drama." },
    { id:10, title:"Gece Yarısı Ekspresi", genre:"gerilim", era:"1990lar", year:1997, rating:7.9, free:false, res:"HD",
      grad:"linear-gradient(135deg,#141230,#2be7f5)", emoji:"🚆",
      desc:"Bir trende mahsur kalan yolcular, gizemli bir kayıptan sorumlu kişiyi bulmaya çalışır.",
      cast:["H. Er","G. Sönmez"], tip:"Kapalı mekan gerilimi sevenler için ideal." },
    { id:11, title:"Pikselden Kalbe", genre:"animasyon", era:"2020ler", year:2021, rating:8.5, free:true, res:"4K",
      grad:"linear-gradient(135deg,#f7d878,#2be7f5)", emoji:"🎨",
      desc:"Dijital bir dünyada yaşayan küçük bir karakterin gerçek dünyayı keşfetme hikayesi.",
      cast:["Seslendirme: D. Yavuz"], tip:"Her yaştan izleyiciye hitap eden sıcak bir animasyon." },
    { id:12, title:"Kum Saati", genre:"drama", era:"1980ler", year:1988, rating:7.7, free:false, res:"HD",
      grad:"linear-gradient(135deg,#c8952b,#9793c9)", emoji:"⏳",
      desc:"Zamanla yarışan bir ailenin, geçmişiyle yüzleşerek yeniden bir araya gelme çabası.",
      cast:["M. Aydın","S. Kurt"], tip:"Ağır çekim, katmanlı bir aile draması." },
  ];

  const GENRES = [
    {key:"aksiyon", label:"Aksiyon", emoji:"💥"},
    {key:"komedi", label:"Komedi", emoji:"😂"},
    {key:"drama", label:"Drama", emoji:"🎭"},
    {key:"korku", label:"Korku", emoji:"👻"},
    {key:"romantik", label:"Romantik", emoji:"🌹"},
    {key:"bilim-kurgu", label:"Bilim Kurgu", emoji:"🚀"},
    {key:"gerilim", label:"Gerilim", emoji:"🕵️"},
    {key:"macera", label:"Macera", emoji:"🗺️"},
    {key:"animasyon", label:"Animasyon", emoji:"🎨"},
  ];

  const ERAS = [
    {key:"2020ler", label:"2020'ler", note:"Güncel yapımlar", emoji:"✨"},
    {key:"2010lar", label:"2010'lar", note:"Yakın dönem klasikleri", emoji:"🎞️"},
    {key:"2000ler", label:"2000'ler", note:"Milenyum sineması", emoji:"📀"},
    {key:"1990lar", label:"1990'lar", note:"Altın çağ", emoji:"📼"},
    {key:"1980ler", label:"1980'ler", note:"Kült klasikler", emoji:"📽️"},
  ];

  /* ---------------- basit yerel depolama yardımcıları ---------------- */
  const store = {
    get(key, fallback){ try{ const v = JSON.parse(localStorage.getItem(key)); return v===null||v===undefined ? fallback : v; }catch(e){ return fallback; } },
    set(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }
  };

  const todayKey = () => new Date().toISOString().slice(0,10);

  let state = {
    favorites: store.get("fb_favorites", []),
    stats: store.get("fb_stats", { suggested:0, watched:0 }),
    settings: store.get("fb_settings", { voice:true, jokes:true, notif:true, anim:"ultra" }),
    credits: (() => {
      const c = store.get("fb_credits", null);
      if (!c || c.day !== todayKey()) return { day: todayKey(), left: 20 };
      return c;
    })(),
    lastGenreResults: null,
    lastEraResults: null,
    currentDetailId: null,
  };
  store.set("fb_credits", state.credits);

  /* ---------------- yardımcı DOM kısayolları ---------------- */
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  /* ================= SPLASH -> APP ================= */
  const splash = $("#splash");
  const app = $("#app");
  window.addEventListener("load", () => {
    setTimeout(() => {
      splash.classList.add("leaving");
      setTimeout(() => {
        splash.style.display = "none";
        app.classList.add("visible");
        renderChatIntro();
      }, 620);
    }, 2000);
  });

  /* ================= GÖRÜNÜM (VIEW) YÖNETİMİ ================= */
  function showView(id){
    $$(".view").forEach(v => v.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
    $$(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.nav === id));
    if (id === "view-genres") renderGenreGrid();
    if (id === "view-eras") renderEraList();
    if (id === "view-favorites") renderFavorites();
    if (id === "view-profile") renderProfile();
  }

  $$(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      showView(btn.dataset.nav);
      if (btn.dataset.focusComposer) setTimeout(() => $("#composerInput").focus(), 250);
    });
  });
  $$("[data-back]").forEach(btn => {
    btn.addEventListener("click", () => showView(btn.dataset.back));
  });
  $("#menuBtn").addEventListener("click", () => showView("view-profile"));
  $("#settingsShortcut").addEventListener("click", () => showView("view-settings"));
  $("#gotoSettings").addEventListener("click", () => showView("view-settings"));

  /* ================= KREDİ ROZETİ ================= */
  function renderCredits(){
    $("#creditBadge").textContent = `🎫 ${state.credits.left}`;
    $("#statCredits").textContent = state.credits.left;
  }
  function spendCredit(){
    if (state.credits.left > 0){
      state.credits.left -= 1;
      store.set("fb_credits", state.credits);
      renderCredits();
    }
  }
  renderCredits();

  /* ================= SOHBET (CHAT) ================= */
  const chatScroll = $("#chatScroll");

  function addMsg(text, who="genie"){
    const div = document.createElement("div");
    div.className = `msg ${who}`;
    div.innerHTML = text;
    chatScroll.appendChild(div);
    chatScroll.scrollTop = chatScroll.scrollHeight;
    return div;
  }

  function speak(text){
    if (!state.settings.voice) return;
    if (!("speechSynthesis" in window)) return;
    try{
      const plain = text.replace(/<[^>]*>/g, "");
      const u = new SpeechSynthesisUtterance(plain);
      u.lang = "tr-TR";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }catch(e){}
  }

  function renderChatIntro(){
    if (chatScroll.dataset.inited) return;
    chatScroll.dataset.inited = "1";
    addMsg("Selamlar Efendim! 🧞 Lambadan çıktım ve film önerme vaktim geldi. Bir tür, bir dönem söyleyin ya da <b>Rastgele Öner</b> deyin, sihri başlatayım.");
  }

  function genieReplyFor(query){
    const q = query.toLowerCase();
    const genreHit = GENRES.find(g => q.includes(g.label.toLowerCase()) || q.includes(g.key));
    const eraHit = ERAS.find(e => q.includes(e.key.replace("ler","").replace("lar","")) || q.includes(e.label.toLowerCase()));
    let pool = MOVIES;
    let title = "Öneriler";
    if (genreHit){ pool = MOVIES.filter(m => m.genre === genreHit.key); title = genreHit.label + " Önerileri"; }
    else if (eraHit){ pool = MOVIES.filter(m => m.era === eraHit.key); title = eraHit.label + " Önerileri"; }
    else {
      // basit anahtar kelime eşleşmesi
      pool = MOVIES.filter(m => m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q));
      if (pool.length === 0) pool = shuffle(MOVIES).slice(0,5);
      title = "Aramanıza Göre Öneriler";
    }
    return { pool: pool.slice(0,6), title };
  }

  function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }

  function handleUserQuery(text){
    addMsg(escapeHtml(text), "user");
    $("#composerInput").value = "";
    const loading = addMsg(renderConjuring(), "genie");
    setTimeout(() => {
      loading.remove();
      const { pool, title } = genieReplyFor(text);
      const jokeSuffix = state.settings.jokes ? " İyi seyirler dilerim, tozlu lambama geri dönüyorum! 😄" : "";
      addMsg(`<b>${pool.length}</b> öneri buldum.${jokeSuffix}`, "genie");
      speak(`${pool.length} öneri buldum.`);
      showResults(pool, title);
      state.stats.suggested += pool.length;
      store.set("fb_stats", state.stats);
      spendCredit();
    }, 900);
  }

  function renderConjuring(){
    return `<div class="conjuring"><div class="mini-lamp">🧞</div><div class="progress-bar"><div></div></div></div>`;
  }

  function escapeHtml(s){
    const d = document.createElement("div"); d.textContent = s; return d.innerHTML;
  }

  $("#composerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const val = $("#composerInput").value.trim();
    if (!val) return;
    if (state.credits.left <= 0){
      addMsg("Bugünlük büyü hakkınız doldu Efendim. Yarın yeniden deneyin! ⏳", "genie");
      return;
    }
    handleUserQuery(val);
  });

  $("#quickActions").addEventListener("click", (e) => {
    const btn = e.target.closest(".quick-chip");
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === "genres") showView("view-genres");
    else if (action === "eras") showView("view-eras");
    else if (action === "random"){
      addMsg("Rastgele öner", "user");
      const loading = addMsg(renderConjuring(), "genie");
      setTimeout(() => {
        loading.remove();
        const pool = shuffle(MOVIES).slice(0,6);
        addMsg("İşte sizin için seçtiğim rastgele filmler! ✨", "genie");
        speak("İşte sizin için seçtiğim rastgele filmler.");
        showResults(pool, "Rastgele Öneriler");
        state.stats.suggested += pool.length;
        store.set("fb_stats", state.stats);
        spendCredit();
      }, 900);
    }
  });

  /* ================= SESLİ KOMUT (MIC) ================= */
  const micBtn = $("#micBtn");
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognizer = null;
  if (SpeechRec){
    recognizer = new SpeechRec();
    recognizer.lang = "tr-TR";
    recognizer.interimResults = false;
    recognizer.maxAlternatives = 1;
    recognizer.addEventListener("result", (e) => {
      const text = e.results[0][0].transcript;
      $("#composerInput").value = text;
      micBtn.classList.remove("listening");
      handleUserQuery(text);
    });
    recognizer.addEventListener("end", () => micBtn.classList.remove("listening"));
    recognizer.addEventListener("error", () => micBtn.classList.remove("listening"));
  }
  micBtn.addEventListener("click", () => {
    if (!recognizer){
      addMsg("Bu cihaz/tarayıcı sesli komutu desteklemiyor. 🎙️", "genie");
      return;
    }
    micBtn.classList.add("listening");
    try{ recognizer.start(); }catch(e){ micBtn.classList.remove("listening"); }
  });

  /* ================= TÜR (GENRE) IZGARASI ================= */
  function renderGenreGrid(){
    const grid = $("#genreGrid");
    if (grid.dataset.inited) return;
    grid.dataset.inited = "1";
    grid.innerHTML = GENRES.map(g => `
      <button class="card-pick" data-genre="${g.key}">
        <span class="emoji">${g.emoji}</span>
        <span class="label">${g.label}</span>
      </button>`).join("");
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".card-pick");
      if (!btn) return;
      const g = GENRES.find(x => x.key === btn.dataset.genre);
      const pool = MOVIES.filter(m => m.genre === g.key);
      showResults(pool, g.label + " Önerileri");
      state.stats.suggested += pool.length;
      store.set("fb_stats", state.stats);
    });
  }

  /* ================= DÖNEM (ERA) LİSTESİ ================= */
  function renderEraList(){
    const list = $("#eraList");
    if (list.dataset.inited) return;
    list.dataset.inited = "1";
    list.innerHTML = ERAS.map(e => `
      <button class="era-row" data-era="${e.key}">
        <span class="emoji">${e.emoji}</span>
        <span class="era-info"><b>${e.label}</b><small>${e.note}</small></span>
        <span class="icon-btn" aria-hidden="true" style="pointer-events:none;">→</span>
      </button>`).join("");
    list.addEventListener("click", (e) => {
      const btn = e.target.closest(".era-row");
      if (!btn) return;
      const era = ERAS.find(x => x.key === btn.dataset.era);
      const pool = MOVIES.filter(m => m.era === era.key);
      showResults(pool, era.label + " Önerileri");
      state.stats.suggested += pool.length;
      store.set("fb_stats", state.stats);
    });
  }

  /* ================= SONUÇLAR (RESULTS) ================= */
  function showResults(pool, title){
    $("#resultsTitle").textContent = title;
    const list = $("#resultsList");
    list.innerHTML = pool.map(m => resultCardHtml(m)).join("") ||
      `<p class="empty-note" style="display:block;">Bu kritere uygun film bulunamadı.</p>`;
    showView("view-results");
  }

  function resultCardHtml(m){
    return `
      <div class="result-card" data-id="${m.id}">
        <div class="poster-mini" style="background:${m.grad}">${m.emoji}</div>
        <div class="result-info">
          <h4>${m.title} <span style="color:var(--mist);font-weight:400;">(${m.year})</span></h4>
          <div class="result-meta">
            <span>⭐ ${m.rating}</span>
            <span class="tag ${m.free ? "free":"res"}">${m.free ? "Ücretsiz" : "Kiralık"}</span>
            <span class="tag res">${m.res}</span>
          </div>
        </div>
      </div>`;
  }

  $("#resultsList").addEventListener("click", (e) => {
    const card = e.target.closest(".result-card");
    if (!card) return;
    openDetail(Number(card.dataset.id));
  });

  /* ================= DETAY (DETAIL) ================= */
  function openDetail(id){
    const m = MOVIES.find(x => x.id === id);
    if (!m) return;
    state.currentDetailId = id;
    const isFav = state.favorites.includes(id);
    $("#detailFavBtn").textContent = isFav ? "♥" : "♡";
    $("#detailFavBtn").style.color = isFav ? "var(--gold-300)" : "";
    $("#detailBody").innerHTML = `
      <div class="detail-hero" style="background:${m.grad}">
        <h2>${m.title}</h2>
      </div>
      <div class="detail-content">
        <div class="detail-tags">
          <span class="tag ${m.free ? "free":"res"}">${m.free ? "Ücretsiz" : "Kiralık"}</span>
          <span class="tag res">${m.res}</span>
          <span class="tag res">⭐ ${m.rating}</span>
          <span class="tag res">${m.year}</span>
        </div>
        <div class="detail-section">
          <h4>Konu</h4>
          <p>${m.desc}</p>
        </div>
        <div class="detail-section">
          <h4>Oyuncular</h4>
          <ul>${m.cast.map(c => `<li>${c}</li>`).join("")}</ul>
        </div>
        <div class="detail-section">
          <h4>Cin'in Yorumu</h4>
          <p>🧞 ${m.tip}</p>
        </div>
        <button class="watch-btn" id="watchBtn">▶ İzlemeye Başla</button>
        <p class="watch-note">Bu bir demo arayüzdür; gerçek bir yayın bağlantısı içermez.</p>
      </div>`;
    $("#watchBtn").addEventListener("click", () => {
      state.stats.watched += 1;
      store.set("fb_stats", state.stats);
      $("#watchBtn").textContent = "✓ İşaretlendi";
    });
    showView("view-detail");
  }

  $("#detailFavBtn").addEventListener("click", () => {
    const id = state.currentDetailId;
    if (id == null) return;
    const idx = state.favorites.indexOf(id);
    if (idx === -1){ state.favorites.push(id); }
    else { state.favorites.splice(idx,1); }
    store.set("fb_favorites", state.favorites);
    const isFav = state.favorites.includes(id);
    $("#detailFavBtn").textContent = isFav ? "♥" : "♡";
    $("#detailFavBtn").style.color = isFav ? "var(--gold-300)" : "";
  });

  /* ================= FAVORİLER ================= */
  function renderFavorites(){
    const grid = $("#favGrid");
    const empty = $("#favEmpty");
    const favMovies = state.favorites.map(id => MOVIES.find(m => m.id === id)).filter(Boolean);
    if (favMovies.length === 0){
      grid.innerHTML = "";
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";
    grid.innerHTML = favMovies.map(m => `
      <div class="fav-item" data-id="${m.id}">
        <button class="remove-fav" data-remove="${m.id}" aria-label="Favoriden çıkar">✕</button>
        <div class="poster-mini" style="background:${m.grad}">${m.emoji}</div>
        <h5>${m.title}</h5>
      </div>`).join("");
  }

  $("#favGrid").addEventListener("click", (e) => {
    const rem = e.target.closest("[data-remove]");
    if (rem){
      const id = Number(rem.dataset.remove);
      state.favorites = state.favorites.filter(x => x !== id);
      store.set("fb_favorites", state.favorites);
      renderFavorites();
      return;
    }
    const item = e.target.closest(".fav-item");
    if (item) openDetail(Number(item.dataset.id));
  });

  /* ================= PROFİL ================= */
  function renderProfile(){
    $("#statSuggested").textContent = state.stats.suggested;
    $("#statWatched").textContent = state.stats.watched;
    $("#statFav").textContent = state.favorites.length;
    $("#statCredits").textContent = state.credits.left;
  }

  /* ================= AYARLAR ================= */
  function applyToggleUI(el, on){ el.classList.toggle("on", on); }

  const toggleVoice = $("#toggleVoice");
  const toggleJokes = $("#toggleJokes");
  const toggleNotif = $("#toggleNotif");

  applyToggleUI(toggleVoice, state.settings.voice);
  applyToggleUI(toggleJokes, state.settings.jokes);
  applyToggleUI(toggleNotif, state.settings.notif);
  $$("#segAnim button").forEach(b => b.classList.toggle("active", b.dataset.val === state.settings.anim));

  toggleVoice.addEventListener("click", () => {
    state.settings.voice = !state.settings.voice;
    applyToggleUI(toggleVoice, state.settings.voice);
    store.set("fb_settings", state.settings);
  });
  toggleJokes.addEventListener("click", () => {
    state.settings.jokes = !state.settings.jokes;
    applyToggleUI(toggleJokes, state.settings.jokes);
    store.set("fb_settings", state.settings);
  });
  toggleNotif.addEventListener("click", () => {
    state.settings.notif = !state.settings.notif;
    applyToggleUI(toggleNotif, state.settings.notif);
    store.set("fb_settings", state.settings);
    if (state.settings.notif && "Notification" in window && Notification.permission === "default"){
      Notification.requestPermission();
    }
  });
  $("#segAnim").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    state.settings.anim = btn.dataset.val;
    $$("#segAnim button").forEach(b => b.classList.toggle("active", b === btn));
    store.set("fb_settings", state.settings);
    document.documentElement.style.setProperty(
      "--anim-scale",
      state.settings.anim === "low" ? "0" : state.settings.anim === "mid" ? "0.5" : "1"
    );
  });

  $("#testVoiceBtn").addEventListener("click", () => {
    if (!("speechSynthesis" in window)){
      $("#voiceSupportNote").textContent = "Bu tarayıcı sesli okumayı desteklemiyor.";
      return;
    }
    const u = new SpeechSynthesisUtterance("Selamlar Efendim, ben Film Beyni'nin cini. Sesim böyle geliyor.");
    u.lang = "tr-TR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  });

  if (!("speechSynthesis" in window)){
    $("#voiceSupportNote").textContent = "Not: Bu cihazda sesli okuma desteklenmiyor olabilir.";
  }

  /* ================= GÜNCELLEME BİLDİRİMİ (Service Worker) =================
     Yeni bir sürüm (sw.js içindeki CACHE_VERSION artırıldığında) yayınlanınca
     kullanıcıya üstte bir "Yenile" bildirimi gösterilir. Kullanıcı yenilemeden
     mevcut sürümde kalmaya devam edebilir; sayfayı kapatıp tekrar açtığında da
     güncelleme otomatik uygulanır. */
  const updateToast = $("#updateToast");
  const updateToastBtn = $("#updateToastBtn");
  const updateToastClose = $("#updateToastClose");
  let waitingWorker = null;

  function showUpdateToast(worker){
    waitingWorker = worker;
    updateToast.classList.add("visible");
  }
  updateToastClose.addEventListener("click", () => updateToast.classList.remove("visible"));
  updateToastBtn.addEventListener("click", () => {
    if (!waitingWorker) { window.location.reload(); return; }
    waitingWorker.postMessage("SKIP_WAITING");
  });

  if ("serviceWorker" in navigator){
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").then((reg) => {
        // Zaten bekleyen (henüz devreye alınmamış) bir sürüm varsa hemen bildir
        if (reg.waiting) showUpdateToast(reg.waiting);

        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller){
              // Yeni sürüm indi ve kuruldu, eski sayfa hâlâ aktif kontrolcüde — bildirim göster
              showUpdateToast(newWorker);
            }
          });
        });

        // Sekmeler arasında/periyodik olarak yeni sürüm var mı diye kontrol et
        setInterval(() => reg.update().catch(() => {}), 60 * 60 * 1000);
      }).catch(() => {});

      // Yeni sürüm devreye girince (skipWaiting sonrası) sayfayı bir kez yenile
      let refreshed = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshed) return;
        refreshed = true;
        window.location.reload();
      });
    });
  }

})();

