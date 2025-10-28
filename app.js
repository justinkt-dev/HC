// HC-Shop plain JavaScript
(function(){
  const contacts = [
    { name: 'Service Client', phone: '+33 6 12 34 56 78' },
    { name: 'Whatsapp', phone: '+33 7 00 11 22 33' },
    { name: 'Ventes Pro', phone: '+33 1 44 55 66 77' },
    { name: 'Support', phone: '+33 9 87 65 43 21' },
  ];

  // Asset list used for hero rotation (up to 20)
  const ASSETS = [
    './assets/black-bag-nob.webp',
    './assets/lady-nob.webp',
    './assets/dress2-nob.webp',
    './assets/baz-nob.webp',
    './assets/hair-nob.webp',
    './assets/bazins-nob.webp',
    './assets/guess-nob.webp',
    './assets/bazvert-nob.webp',
    './assets/ond-nob.webp',
    './assets/Ishidu_GY1236.webp',
    './assets/shoes-brown.webp',
    './assets/bazrose-nob.webp',
    './assets/bazblue-nob.webp',
    './assets/perruque2.webp',
    './assets/perruque3.webp',
    './assets/perruque4.webp',
    './assets/perruque5.webp',
    './assets/perruque6.webp',
    './assets/perruque7.webp',
    './assets/ens1.webp',
    './assets/ens2.webp',

  ];

  const products = [
    // Mèches
    { id: 'p1', title: 'Mèches Naturelles Taille 20', price: 79, category: 'meches', image: './assets/hair-red.webp' },
    { id: 'p2', title: 'Mèches Naturelles Taille 24', price: 79, category: 'meches', image: './assets/hair-fe.webp' },
    { id: 'p3', title: 'Mèches Naturelles Ondulées', price: 79, category: 'meches', image: './assets/hair-ond.webp' },
    { id: 'p4', title: 'Perruque Naturelle', price: 79, category: 'meches', image: './assets/perruque.webp' },
    { id: 'p5', title: 'Perruque Naturelle Marron', price: 79, category: 'meches', image: './assets/perruque2.webp' },
    { id: 'p6', title: 'Mèches 4 Pièces', price: 79, category: 'meches', image: './assets/hair-4p.webp' },
    { id: 'p7', title: 'Mèches Naturelles', price: 79, category: 'meches', image: './assets/hair-sd.webp' },
    { id: 'p8', title: 'Mèches Ondulées', price: 79, category: 'meches', image: './assets/hair-ondu.webp' },
    { id: 'p9', title: 'Perruque Frisé Longueur 28', price: 79, category: 'meches', image: './assets/perruque3.webp' },


    // Bazin
    { id: 'p10', title: 'Bazin De Marque', price: 89, category: 'bazin', image: './assets/bazins.webp' },
    { id: 'p11', title: 'Voile De Marque', price: 95, category: 'voiles', image: './assets/bazin-blue.webp' },
    { id: 'p12', title: 'Bazin Getzner 3m', price: 79, category: 'bazin', image: './assets/bazin-getzner-rose.webp', isNew: true },
    { id: 'p13', title: 'Bazin Getzner', price: 79, category: 'bazin', image: './assets/bazin-rouge.webp', isNew: true },
    { id: 'p14', title: 'Bazin Getzner Vert', price: 79, category: 'bazin', image: './assets/bazin-getzner-vert.webp', isNew: false },
    { id: 'p15', title: 'Voile De Marque', price: 79, category: 'voiles', image: './assets/bazin-class2.webp', isNew: false },
    { id: 'p16', title: 'Bazin Getzner Bleu', price: 79, category: 'bazin', image: './assets/bazin-getzner-blue.webp', isNew: false },
    { id: 'p17', title: 'Voile De Marque', price: 79, category: 'voiles', image: './assets/bazin-class.webp', isNew: false },
    { id: 'p18', title: 'Bazin Getzner Jaune', price: 79, category: 'bazin', image: './assets/baz-yellow.webp', isNew: false },
    { id: 'p19', title: 'Perruque Coupe Vietnamienne', price: 79, category: 'meches', image: './assets/perruque4.webp' },

 
    // Accessoires
    { id: 'p20', title: 'Dentelle De Qualité', price: 39, category: 'dentelles', image: './assets/voile1.webp' },
    { id: 'p21', title: 'Voile Obama', price: 39, category: 'voiles', image: './assets/voile2.webp' },
    { id: 'p22', title: 'Virginie 24', price: 39, category: 'meches', image: './assets/hair-vir.webp' },
    { id: 'p23', title: 'Mèches Naturelles', price: 39, category: 'meches', image: './assets/hair-2.webp' },
    { id: 'p24', title: 'Mèches Naturelles', price: 39, category: 'meches', image: './assets/hair-3.webp' },
    { id: 'p25', title: 'Dentelle De Marque', price: 39, category: 'dentelles', image: './assets/voile3.webp' },
    { id: 'p26', title: 'Ensemble  Chaussures  et Accessoires', price: 39, category: 'accessoires', image: './assets/ens1.webp' },
    { id: 'p27', title: 'Ensemble  Chaussures  et Accessoires', price: 39, category: 'accessoires', image: './assets/ens2.webp' },


    // Sacs
    { id: 'p30', title: 'Sac Guess Marron', price: 99, category: 'sacs', image: './assets/bag-guess.webp', isNew: false },
    { id: 'p31', title: 'Sac De Marque', price: 99, category: 'sacs', image: './assets/bag-blue.webp', isNew: false },
    { id: 'p32', title: 'Sac De Marque', price: 99, category: 'sacs', image: './assets/bag-green.webp', isNew: false },
    { id: 'p33', title: 'Sac Chris Bella', price: 99, category: 'sacs', image: './assets/bag-mar.webp', isNew: false },
    { id: 'p34', title: 'Perruque Coupe 10', price: 79, category: 'meches', image: './assets/perruque5.webp' },
    { id: 'p35', title: 'Perruque Longeur 24', price: 79, category: 'meches', image: './assets/perruque6.webp' },
    { id: 'p36', title: 'Cheveux Indien Avec Closure Frontale', price: 79, category: 'meches', image: './assets/perruque7.webp' },
    { id: 'p37', title: 'Mèches Naturelles 3 Pièces', price: 79, category: 'meches', image: './assets/hair-3p.webp' },
    { id: 'p38', title: 'Voiles', price: 79, category: 'voile', image: './assets/voile4.webp' },


    // Pagne Wax
    { id: 'p40', title: 'Pagne Lepi', price: 65, category: 'pagne-wax', image: './assets/pagne-lepi.webp', isNew: true },
    { id: 'p41', title: 'Wax De Qualité', price: 79, category: 'pagne-wax', image: './assets/wax.webp', isNew: true },
    { id: 'p41', title: 'Wax De Marque', price: 79, category: 'pagne-wax', image: './assets/wax4.webp', isNew: true },
    { id: 'p42', title: 'Wax De Marque', price: 79, category: 'pagne-wax', image: './assets/wax2.webp', isNew: true },
    { id: 'p43', title: 'Wax De Qualité', price: 79, category: 'pagne-wax', image: './assets/wax3.webp', isNew: true },
    { id: 'p44', title: 'Wax De Marque', price: 79, category: 'pagne-wax', image: './assets/wax5.webp', isNew: true },
    { id: 'p45', title: 'Wax De Qualité', price: 79, category: 'pagne-wax', image: './assets/wax6.webp', isNew: true },
    { id: 'p46', title: 'Wax De Marque', price: 79, category: 'pagne-wax', image: './assets/wax7.webp', isNew: true },
    { id: 'p47', title: 'Wax De Qualité', price: 79, category: 'pagne-wax', image: './assets/wax8.webp', isNew: true },
    { id: 'p48', title: 'Wax De Marque', price: 79, category: 'pagne-wax', image: './assets/wax9.webp', isNew: true },
    { id: 'p49', title: 'Wax De Qualité', price: 79, category: 'pagne-wax', image: './assets/wax10.webp', isNew: true },


    // Chaussures
    { id: 'p50', title: 'Chaussure Ishidu GY1236', price: 79, category: 'chaussures', image: './assets/Ishidu_GY1236.webp' },
    { id: 'p51', title: 'Chaussure Ishidu WS9544', price: 79, category: 'chaussures', image: './assets/Ishidu_WS9544.webp' },
    { id: 'p52', title: 'Chaussure Marron', price: 79, category: 'chaussures', image: './assets/shoes-brown.webp' },
    { id: 'p53', title: 'Chaussure De Marque', price: 79, category: 'chaussures', image: './assets/shoes-1.webp' },
    { id: 'p54', title: 'Chaussure De Marque', price: 79, category: 'chaussures', image: './assets/shoes-2.webp' },
    { id: 'p55', title: 'Chaussure De Marque', price: 79, category: 'chaussures', image: './assets/shoes-3.webp' },
    { id: 'p56', title: 'Chaussure De Marque', price: 79, category: 'chaussures', image: './assets/shoes-4.webp' },


    // Chemises
    { id: 'p60', title: 'Chemise Slim', price: 55, category: 'chemises', image: './assets/chemise.webp' },
    { id: 'p61', title: 'Bazin Getzner 3m Perlé', price: 49, category: 'bazin', image: './assets/baz-getz.webp', isNew: true },
    { id: 'p62', title: 'Bazin Getzner 3m Ordinateur', price: 49, category: 'bazin', image: './assets/baz-getz2.webp', isNew: true },
    { id: 'p63', title: 'Bazin De Qualité', price: 49, category: 'bazin', image: './assets/baz-2.webp', isNew: true },
    { id: 'p64', title: 'Bazin Getzner Perlage 5m', price: 49, category: 'bazin', image: './assets/baz-getz5.webp', isNew: true },
    { id: 'p65', title: 'Chemise Italienne', price: 49, category: 'chemises', image: './assets/chemise2.webp', isNew: true },

    // Lacostss
    { id: 'p70', title: 'Polo Lacostss', price: 59, category: 'lacostss', image: './assets/lacoste.webp', isNew: true },
    { id: 'p71', title: 'Dentelle De Qualité', price: 59, category: 'dentelles', image: './assets/voile5.webp', isNew: true },

    // Dentelles
    { id: 'p80', title: 'Dentelle Élégante', price: 72, category: 'dentelles', image: './assets/dentelles.webp', isNew: true },
    { id: 'p81', title: 'Dentelle Blanche', price: 72, category: 'dentelles', image: './assets/dentell-2.webp', isNew: false },

    // Voiles
    { id: 'p90', title: 'Voile Léger', price: 68, category: 'voiles', image: './assets/voiles.webp' },
    { id: 'p91', title: 'Voile Premium', price: 79, category: 'voiles', image: './assets/voile-fabric.webp' },
  ];

  const grid = document.getElementById('productGrid');
  const chips = document.getElementById('chipBar');
  const searchInput = document.getElementById('searchInput');
  const topSearch = document.getElementById('topSearch');
  const topSearchInput = document.getElementById('topSearchInput');
  const dropdown = document.getElementById('contactsDropdown');
  const yearEl = document.getElementById('year');
  const heroGallery = document.getElementById('heroGallery');
  const lightboxEl = document.getElementById('lightbox');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  let activeCategory = 'all';
  let query = '';

  const formatPrice = (value) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);

  function filterProducts(){
    return products.filter((p) => {
      const byCat = activeCategory === 'all' ? true : (activeCategory === 'new' ? p.isNew === true : p.category === activeCategory);
      const byQuery = query.trim() === '' ? true : p.title.toLowerCase().includes(query.toLowerCase());
      return byCat && byQuery;
    });
  }

  function renderProducts(){
    if (!grid) return;
    const list = filterProducts();
    grid.innerHTML = list.map((p) => `
      <article class="card" tabindex="0">
        <div class="card__media">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          ${p.isNew ? '<span class="badge new">Nouveau</span>' : ''}
        </div>
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <div class="card__actions">
            <a class="btn whatsapp" href="https://api.whatsapp.com/send?phone=224628767038&text=Bonjour%20!%20Je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20${encodeURIComponent(p.title)}" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/></svg>
              <span>WhatsApp</span>
            </a>
            <a class="btn messenger" href="https://www.facebook.com/profile.php?id=61575687953539" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.584 1.948 6.73 4.86 8.47L3.5 24l3.97-1.24C8.5 23.5 10.2 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.568 16.5c-.2.6-1.2 1.1-1.8 1.2-.6.1-1.3.2-2.1.2-1.1 0-2.2-.3-3.1-.8-1.4-.7-2.5-1.8-3.2-3.2-.7-1.4-.7-2.9 0-4.3.7-1.4 1.8-2.5 3.2-3.2 1.4-.7 2.9-.7 4.3 0 1.4.7 2.5 1.8 3.2 3.2.7 1.4.7 2.9 0 4.3-.2.4-.5.7-.8 1z" fill="currentColor"/></svg>
              <span>Messenger</span>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  function updateActiveChip(target){
    document.querySelectorAll('.chip').forEach((c) => c.classList.remove('chip--active'));
    target.classList.add('chip--active');
  }

  if (chips){
    chips.addEventListener('click', (e) => {
      const el = e.target;
      if (!(el instanceof HTMLElement)) return;
      const cat = el.getAttribute('data-cat');
      if (!cat) return;
      activeCategory = cat;
      updateActiveChip(el);
      renderProducts();
    });
  }

  function renderContacts(list){
    if (!dropdown) return;
    if (!list || list.length === 0){
      dropdown.classList.remove('open');
      dropdown.innerHTML = '';
      return;
    }
    dropdown.classList.add('open');
    dropdown.innerHTML = list.map((c) => `<div class="contact" data-phone="${c.phone}"><span>${c.name}</span><strong>${c.phone}</strong></div>`).join('');
  }

  if (dropdown){
    dropdown.addEventListener('click', (e) => {
      const el = e.target;
      if (!(el instanceof HTMLElement)) return;
      const item = el.closest('.contact');
      if (!item) return;
      const phone = item.getAttribute('data-phone');
      if (phone){
        if (navigator.clipboard) navigator.clipboard.writeText(phone).catch(()=>{});
        dropdown.classList.remove('open');
      }
    });
  }

  if (searchInput){
    searchInput.addEventListener('input', () => {
      query = searchInput.value;
      renderProducts();
      const filtered = contacts.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.phone.includes(query));
      renderContacts(filtered);
    });
  }

  if (topSearch){
    topSearch.addEventListener('submit', (e) => {
      e.preventDefault();
      query = topSearchInput ? topSearchInput.value : '';
      if (searchInput) searchInput.value = query;
      // Reset category to all for global searches
      activeCategory = 'all';
      const allChip = document.querySelector('.chip[data-cat="all"]');
      if (allChip) updateActiveChip(allChip);
      renderProducts();
      // Jump to boutique section
      const boutiqueEl = document.getElementById('boutique');
      if (boutiqueEl && typeof boutiqueEl.scrollIntoView === 'function') {
        boutiqueEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (typeof history !== 'undefined' && typeof history.replaceState === 'function') {
          history.replaceState(null, '', '#boutique');
        } else if (typeof window !== 'undefined') {
          window.location.hash = 'boutique';
        }
      }

      // Clear the top search input after executing the query
      if (typeof topSearch?.reset === 'function') {
        topSearch.reset();
      } else if (topSearchInput) {
        topSearchInput.value = '';
      }
    });
  }

  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!(t instanceof Node)) return;
    if (!searchInput || !dropdown) return;
    const within = t === searchInput || dropdown.contains(t);
    if (!within) dropdown.classList.remove('open');
  });

  if (grid){
    grid.addEventListener('click', (e) => {
      const btn = (e.target instanceof HTMLElement) ? e.target.closest('.btn.details') : null;
      if (!btn) return;
      const id = btn.getAttribute('data-details');
      const product = products.find((x) => x.id === id);
      if (product) alert(`${product.title} — ${formatPrice(product.price)}`);
    });

    // Open lightbox when clicking on a product image
    grid.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      const img = target.closest('.card__media img');
      if (!img || !(img instanceof HTMLImageElement)) return;
      if (!lightboxEl) return;
      // Inject only the image inside the overlay
      const src = img.getAttribute('src') || '';
      const alt = img.getAttribute('alt') || '';
      lightboxEl.innerHTML = `<img src="${src}" alt="${alt}">`;
      lightboxEl.classList.add('open');
      lightboxEl.setAttribute('aria-hidden', 'false');
      if (document && document.body) document.body.style.overflow = 'hidden';
    });
  }

  renderProducts();

  // Nav actions
  const linkHome = document.getElementById('linkHome');
  const linkBoutique = document.getElementById('linkBoutique');
  const linkNouveau = document.getElementById('linkNouveau');

  if (linkHome){
    linkHome.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (linkBoutique){
    linkBoutique.addEventListener('click', () => {
      activeCategory = 'all';
      const allChip = document.querySelector('.chip[data-cat="all"]');
      if (allChip) updateActiveChip(allChip);
      renderProducts();
    });
  }
  if (linkNouveau){
    linkNouveau.addEventListener('click', () => {
      activeCategory = 'new';
      const newChip = document.querySelector('.chip[data-cat="new"]');
      if (newChip) updateActiveChip(newChip);
      renderProducts();
    });
  }

  // Hero rotating gallery (4 at a time) from assets folder
  const heroImages = ASSETS.slice(0, 20);
  const GROUP_SIZE = 4;
  let heroStartIndex = 0;
  function renderHeroBatch(){
    if (!heroGallery) return;
    const slice = [];
    for (let i=0;i<GROUP_SIZE;i+=1){
      slice.push(heroImages[(heroStartIndex + i) % heroImages.length]);
    }
    heroGallery.innerHTML = slice.map((src) => `<div class="tile"><img src="${src}" alt="Visuel" loading="lazy"></div>`).join('');
    heroStartIndex = (heroStartIndex + GROUP_SIZE) % heroImages.length;
  }
  renderHeroBatch();
  setInterval(renderHeroBatch, 4000);

  // Close lightbox on backdrop click or Escape
  if (lightboxEl){
    lightboxEl.addEventListener('click', (e) => {
      if (e.target === lightboxEl){
        lightboxEl.classList.remove('open');
        lightboxEl.setAttribute('aria-hidden', 'true');
        if (document && document.body) document.body.style.overflow = '';
        lightboxEl.innerHTML = '';
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxEl.classList.contains('open')){
        lightboxEl.classList.remove('open');
        lightboxEl.setAttribute('aria-hidden', 'true');
        if (document && document.body) document.body.style.overflow = '';
        lightboxEl.innerHTML = '';
      }
    });
  }

  // Theme handling: default to light (Latte); respect saved preference
  const THEME_KEY = 'hc_theme';
  function applyTheme(theme){
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (themeIcon){
      themeIcon.src = isDark ? './assets/theme_light.webp' : './assets/theme_dark.webp';
      themeIcon.alt = isDark ? 'Icône thème clair' : 'Icône thème sombre';
    }
  }
  const saved = (typeof localStorage !== 'undefined') ? localStorage.getItem(THEME_KEY) : null;
  applyTheme(saved === 'dark' ? 'dark' : 'light');

  if (themeToggle){
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try{ localStorage.setItem(THEME_KEY, next); }catch(_){}
    });
  }
})();


