// Service icons (inline SVG)
const ICON = (d) => `<div class="icon"><svg viewBox="0 0 24 24">${d}</svg></div>`;
const svgs = {
  box:`<rect x="3" y="4" width="7" height="7"/><rect x="14" y="4" width="7" height="7"/><rect x="3" y="15" width="7" height="7"/><path d="M14 15h7v7h-7zM7 7l10 10"/>`,
  tick:`<circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/>`,
  ship:`<rect x="1" y="3" width="15" height="13"/><path d="M16 8h5l2 3v5h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>`,
  time:`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>`,
  grid:`<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h7v7h-7zM7 7h7v7"/>`
};

window.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // KPIs
  const kpis = [
    ["1500+ SKUs","Sustainable catalog"],
    ["34+ Countries","Multi-modal freight"],
    ["139+ White Labelling","Brand & pack"],
    ["MOQ 5 cbm","Flexible order size"]
  ];
  document.getElementById("kpis").innerHTML = kpis.map(([t,d]) =>
    `<div class="kpi"><h3>${t}</h3><p>${d}</p></div>`).join("");

  // Services
  const services = [
    {t:"Supplier Consolidation", d:"Many vendors, one contact.", i:svgs.grid},
    {t:"SKU Curation", d:"Market-fit products first.", i:svgs.tick},
    {t:"Freight Consolidation", d:"One shipment, many factories.", i:svgs.ship},
    {t:"Pre-Shipment QC", d:"Inspect before dispatch.", i:svgs.tick},
    {t:"Lead Time Compliance", d:"Ship on time, always.", i:svgs.time},
    {t:"3PL & Warehousing", d:"Store and deliver locally.", i:svgs.box}
  ];
  document.getElementById("services-grid").innerHTML = services.map(s => `
    <div class="card square">
      ${ICON(s.i)}
      <div class="title">${s.t}</div>
      <div class="muted">${s.d}</div>
    </div>
  `).join("");

  /* Reviews — keep to 3 (Google Maps) */
  const REVIEWS = [
    {
      name:"Google Maps Reviewer",
      role:"Local Guide",
      avatar:"images/avatar-1.jpg",
      quote:`Great supplier to work with. Clear communication and timely updates throughout our import. Highly recommend.`,
      metric:`Source: Google Maps`
    },
    {
      name:"Google Maps Reviewer",
      role:"Buyer, Home Goods",
      avatar:"images/avatar-2.jpg",
      quote:`Quality of palm leaf plates and bagasse ware was excellent. Documentation and photos shared before dispatch were very helpful.`,
      metric:`Source: Google Maps`
    },
    {
      name:"Google Maps Reviewer",
      role:"Operations Lead",
      avatar:"images/avatar-3.jpg",
      quote:`Seamless consolidation and shipping. Tracking and post-shipment support were top-notch.`,
      metric:`Source: Google Maps`
    }
  ];

  const STAR = "★";
  const AVATAR_PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100%' height='100%' fill='#e5e7eb'/></svg>");

  document.getElementById("reviews-grid").innerHTML = REVIEWS.map(r => `
    <article class="review-card">
      <header class="review-head">
        <img class="review-avatar" src="${r.avatar}" alt="${r.name}" loading="lazy"
             onerror="this.onerror=null;this.src='${AVATAR_PLACEHOLDER}'" />
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-role">${r.role}</div>
        </div>
      </header>
      <div class="stars" aria-label="5 star rating">
        <span>${STAR}</span><span>${STAR}</span><span>${STAR}</span><span>${STAR}</span><span>${STAR}</span>
      </div>
      <blockquote class="review-quote">"${r.quote}"</blockquote>
      <div class="review-metric">${r.metric}</div>
    </article>
  `).join("");

  // Products (unchanged list)
  const PRODUCTS = [
    {name:`10" Areca Palm Leaf Deep Round Plate`, meta:"200 pcs (50×4)",  cat:"Palm Leaf Plates",
     image:"images/areca-10in-deep-round.jpg",
     link:"https://arbhuenterprises.com/know-our-products/areca-palm-leaf/plates/50-pieces-per-pack/10-inch-areca-palm-leaf-deep-round-plate-200-pieces-50x4/"},
    {name:`12" Areca Palm Leaf Round 4CP Plate`,  meta:"200 pcs (50×4)",  cat:"Palm Leaf Plates",
     image:"images/areca-12in-4cp.jpg",
     link:"https://arbhuenterprises.com/know-our-products/areca-palm-leaf/plates/50-pieces-per-pack/12-inch-areca-palm-leaf-round-4cp-plate-200-pieces-50x4/"},
    {name:`5" Areca Palm Leaf Square Plate`,      meta:"200 pcs (100×2)", cat:"Palm Leaf Plates",
     image:"images/areca-5in-square.jpg",
     link:"https://arbhuenterprises.com/know-our-products/areca-palm-leaf/plates/50-pieces-per-pack/5-inch-areca-palm-leaf-square-plate-200-pieces-100x2/"},
    {name:`13×9" Areca Palm Leaf Oval Tray`,      meta:"100 pcs (100×1)", cat:"Palm Leaf Plates",
     image:"images/areca-13x9-oval-tray.jpg",
     link:"https://arbhuenterprises.com/know-our-products/areca-palm-leaf/trays/50-pieces-per-pack-trays-areca-palm-leaf/13x9-inch-areca-palm-leaf-oval-tray-100-pieces-100x1/"},
    {name:`9" Bagasse Round Plate (Deep)`,         meta:"500 pcs (25×20)", cat:"Bagasse Tableware",
     image:"images/bagasse-9in-deep.jpg",
     link:"https://arbhuenterprises.com/know-our-products/bagasse/plates-bagasse/25-pieces-per-pack-plates-bagasse/9-inch-bagasse-round-plate-deep-500-pieces-25x20/"},
    {name:`7" Bagasse Round Plate`,                meta:"1000 pcs (50×20)",cat:"Bagasse Tableware",
     image:"images/bagasse-7in-round.jpg",
     link:"https://arbhuenterprises.com/know-our-products/bagasse/plates-bagasse/50-pieces-per-pack-plates-bagasse/7-inch-bagasse-round-plate-1000-pieces-50x20/"},
    {name:"Birchwood Spoon/Fork/Knife 160mm",      meta:"8700 pcs (300×29)",cat:"Birchwood Cutlery",
     image:"images/birchwood-160mm-set.jpg",
     link:"https://arbhuenterprises.com/know-our-products/birchwood/cutleries/160mm-birchwood-spoonforkknife-8700-pieces-30029/"},
    {name:"Birchwood Cutleries — Range",           meta:"Forks, Spoons, Knives",cat:"Birchwood Cutlery",
     image:"images/birchwood-range.jpg",
     link:"https://arbhuenterprises.com/know-our-products/birchwood/cutleries/"},
    {name:"Bamboo Facial Tissue Pack of 12",       meta:"1200 pcs (100×12)",cat:"Bamboo Tissue",
     image:"images/bamboo-facial-12.jpg",
     link:"https://arbhuenterprises.com/know-our-products/bamboo/tissues/bamboo-facial-tissue-pack-of-12-1200-pieces-100-x-12/"},
    {name:"Bamboo Napkin Pack of 100",             meta:"600 pcs (100×6)", cat:"Bamboo Tissue",
     image:"images/bamboo-napkin-100.jpg",
     link:"https://arbhuenterprises.com/know-our-products/bamboo/tissues/bamboo-napkin-pack-of-100-600-pieces-100x6/"},
    {name:"Bamboo Toilet Roll Pack of 48",         meta:"14400 rolls (300×48)",cat:"Bamboo Tissue",
     image:"images/bamboo-toilet-48.jpg",
     link:"https://arbhuenterprises.com/know-our-products/bamboo/tissues/bamboo-toilet-roll-pack-of-48-14400-rolls-300-x-48/"},
    {name:"Bamboo Toothbrush 190mm S-Curve (10 pcs)", meta:"450 pcs (10×45)", cat:"Bamboo Toothbrush",
     image:"images/bamboo-brush-10.jpg",
     link:"https://arbhuenterprises.com/know-our-products/bamboo-toothbrush/190mm-s-curve-charcoal-fiber-10pcs-pack-450-pieces-1045/"},
    {name:"Bamboo Toothbrush 190mm S-Curve (4 pcs)",  meta:"468 pcs (4×117)", cat:"Bamboo Toothbrush",
     image:"images/bamboo-brush-4.jpg",
     link:"https://arbhuenterprises.com/know-our-products/bamboo-toothbrush/190mm-s-curve-charcoal-fiber-4pcs-pack-468-pieces-4117/"},
    {name:"Bamboo Toothbrush — Range",               meta:"Adults, Kids, Travel",cat:"Bamboo Toothbrush",
     image:"images/bamboo-brush-range.jpg",
     link:"https://arbhuenterprises.com/bamboo-toothbrushes/"},
    {name:`4.5" Sal Leaf Bowl (Kraftsheet)`,       meta:"3125 pcs (25×125)",cat:"Sal Leaf Disposables",
     image:"images/sal-4-5-bowl.jpg",
     link:"https://arbhuenterprises.com/know-our-products/saal-leaf/4-5-inch-sal-leaf-bowlkraftsheet-3125-pieces-25x125-2/"},
    {name:`12" Sal Leaf 4CP Plate`,                meta:"300 pcs (25×12)",  cat:"Sal Leaf Disposables",
     image:"images/sal-12-4cp.jpg",
     link:"https://arbhuenterprises.com/know-our-products/12-inch-sal-leaf-4cp-plate-300pieces-25x12/"}
  ];

  const PRODUCT_PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>
      <rect width='100%' height='100%' fill='#eef1f4'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#94a3b8' font-family='Arial' font-size='22'>Image coming soon</text>
    </svg>`);

  // Filters
  const CATEGORIES = ["All","Palm Leaf Plates","Birchwood Cutlery","Bagasse Tableware","Bamboo Tissue","Bamboo Toothbrush","Sal Leaf Disposables"];
  const chipsEl = document.getElementById("chips");
  let activeCat = "All";
  CATEGORIES.forEach((c, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (idx === 0 ? " is-active" : "");
    b.textContent = c;
    b.addEventListener("click", () => {
      activeCat = c;
      document.querySelectorAll(".chip").forEach(el => el.classList.remove("is-active"));
      b.classList.add("is-active");
      render();
    });
    chipsEl.appendChild(b);
  });

  const searchEl = document.getElementById("search");
  searchEl.addEventListener("input", render);

  // Render products
  const grid = document.getElementById("products-grid");
  function render(){
    const q = searchEl.value.trim().toLowerCase();
    const list = PRODUCTS.filter(p => {
      const inCat = (activeCat === "All") || (p.cat === activeCat);
      const inText = !q || (p.name.toLowerCase().includes(q) || p.meta.toLowerCase().includes(q));
      return inCat && inText;
    });
    grid.innerHTML = list.map(p => `
      <div class="card product-card">
        <img class="product-thumb" src="${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.onerror=null;this.src='${PRODUCT_PLACEHOLDER}'" />
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-meta">${p.cat} • ${p.meta}</div>
          <div class="product-actions">
            <a class="btn btn-primary" href="${p.link}" target="_blank" rel="noopener">View</a>
          </div>
        </div>
      </div>
    `).join("");
  }
  render();
});
