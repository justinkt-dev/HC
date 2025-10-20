// HC-Shop plain JavaScript
(function(){
  const contacts = [
    { name: 'Service Client', phone: '+33 6 12 34 56 78' },
    { name: 'Whatsapp', phone: '+33 7 00 11 22 33' },
    { name: 'Ventes Pro', phone: '+33 1 44 55 66 77' },
    { name: 'Support', phone: '+33 9 87 65 43 21' },
  ];

  const bag = './assets/bag.webp';
  const products = [
    { id: 'p1', title: 'Sac A-Line', price: 115, category: 'sacs', image: './assets/bag.webp'},
    { id: 'p2', title: 'Robe Cocktail', price: 133, category: 'robes', image: './assets/dress.webp', isNew: false },
    { id: 'p3', title: 'Robe Soleil', price: 120, category: 'robes', image: './assets/hab.webp', isNew: true },
    { id: 'p4', title: 'Sac Classique', price: 89, category: 'sacs', image: './assets/basin.webp'},
    { id: 'p5', title: 'Ceinture Fine', price: 29, category: 'ceintures', image: './assets/shoes.webp', isNew: false },
    { id: 'p6', title: 'Escarpins Chic', price: 149, category: 'chaussures', image: './assets/habit.webp', isNew: true },
    { id: 'p7', title: 'Boucles d’oreilles', price: 39, category: 'accessoires', image: './assets/black-bag.webp' },
    { id: 'p8', title: 'Sac Bandoulière', price: 99, category: 'sacs', image: './assets/bag.webp', isNew: false },
    { id: 'p9', title: 'Sandales Été', price: 79, category: 'chaussures', image: './assets/sandal.webp' },
    { id: 'p10', title: 'Sandales', price: 79, category: 'chaussures', image: './assets/cho.webp' },
    { id: 'p11', title: 'Pagne Lepi', price: 79, category: 'accessoires', image: './assets/pagne.webp', isNew: true },

  ];

  const grid = document.getElementById('productGrid');
  const chips = document.getElementById('chipBar');
  const searchInput = document.getElementById('searchInput');
  const topSearch = document.getElementById('topSearch');
  const topSearchInput = document.getElementById('topSearchInput');
  const dropdown = document.getElementById('contactsDropdown');
  const yearEl = document.getElementById('year');
  const heroGallery = document.getElementById('heroGallery');

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
          <button class="fav" aria-label="Ajouter aux favoris">♡</button>
        </div>
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__price">${formatPrice(p.price)}</p>
          <div class="card__actions">
            <a class="btn whatsapp" href="https://api.whatsapp.com/send?phone=224666958301&text=Bonjour%20!%20Je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20${encodeURIComponent(p.title)}" target="_blank" rel="noreferrer">WhatsApp</a>
            <a class="btn messenger" href="https://www.facebook.com/profile.php?id=61575687953539" target="_blank" rel="noreferrer">Messenger</a>
            <button class="btn details" data-details="${p.id}">Détails</button>
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
      renderProducts();
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

  // Hero rotating gallery (4 at a time)
  const heroImages = [
    './assets/bag.webp',
    './assets/black-bag.webp',
    './assets/dress.webp',
    './assets/basin.webp',
    './assets/hab.webp',
    './assets/habit.webp',
    './assets/sandal.webp',
    './assets/shoes.webp',
  ];
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
})();


