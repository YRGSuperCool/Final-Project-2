const PRODUCTS_API = "https://dummyjson.com/products";
const starterProducts = [
  {
    id: 1,
    name: "Ceramic mug",
    price: 32,
    category: "home",
    condition: "Excellent",
    seller: "Mara K.",
    color: "clay",
    label: "drinkware",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 2,
    name: "Canvas market tote",
    price: 24,
    category: "wear",
    condition: "Good",
    seller: "Studio 14",
    color: "canvas",
    label: "utility",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 3,
    name: "Oak side table",
    price: 180,
    category: "home",
    condition: "Excellent",
    seller: "Jon Bell",
    color: "oak",
    label: "furniture",
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 4,
    name: "Brass desk lamp",
    price: 68,
    category: "objects",
    condition: "Well-loved",
    seller: "Mina R.",
    color: "brass",
    label: "lighting",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 5,
    name: "Wool beanie set",
    price: 86,
    category: "wear",
    condition: "Excellent",
    seller: "North 02",
    color: "knit",
    label: "apparel",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 6,
    name: "Stoneware pitcher",
    price: 48,
    category: "home",
    condition: "Good",
    seller: "Mara K.",
    color: "stone",
    label: "ceramic",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 7,
    name: "Pocket field camera",
    price: 125,
    category: "objects",
    condition: "Good",
    seller: "Theo P.",
    color: "camera",
    label: "analog",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 8,
    name: "Linen chore jacket",
    price: 72,
    category: "wear",
    condition: "Excellent",
    seller: "Common Seller",
    color: "linen",
    label: "apparel",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=90",
  },
];
const searchFixtures = [
  {
    id: 20001,
    name: "Stoneware mug",
    price: 28,
    category: "home",
    condition: "Excellent",
    seller: "Mara K.",
    color: "stone",
    label: "drinkware",
    image:
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20002,
    name: "Travel coffee mug",
    price: 22,
    category: "home",
    condition: "Good",
    seller: "Studio 14",
    color: "clay",
    label: "drinkware",
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20003,
    name: "Ceramic coffee cup",
    price: 19,
    category: "home",
    condition: "Excellent",
    seller: "Pine Works",
    color: "stone",
    label: "drinkware",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20004,
    name: "Canvas carry tote",
    price: 30,
    category: "wear",
    condition: "Excellent",
    seller: "North 02",
    color: "canvas",
    label: "utility",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20005,
    name: "Leather tote bag",
    price: 90,
    category: "wear",
    condition: "Good",
    seller: "Common Goods partner",
    color: "oak",
    label: "bags",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20006,
    name: "Reading floor lamp",
    price: 115,
    category: "objects",
    condition: "Excellent",
    seller: "Mina R.",
    color: "brass",
    label: "lighting",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20007,
    name: "Walnut bookshelf",
    price: 240,
    category: "home",
    condition: "Good",
    seller: "Jon Bell",
    color: "oak",
    label: "furniture",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20008,
    name: "Striped linen shirt",
    price: 44,
    category: "wear",
    condition: "Excellent",
    seller: "North 02",
    color: "linen",
    label: "apparel",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20009,
    name: "Leather weekend bag",
    price: 135,
    category: "wear",
    condition: "Good",
    seller: "Studio 14",
    color: "oak",
    label: "bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20010,
    name: "Cotton cushion cover",
    price: 26,
    category: "home",
    condition: "New",
    seller: "Hearth House",
    color: "throw",
    label: "textile",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20011,
    name: "Vintage alarm clock",
    price: 42,
    category: "objects",
    condition: "Well-loved",
    seller: "Mina R.",
    color: "brass",
    label: "vintage",
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20012,
    name: "Desk organizer",
    price: 21,
    category: "objects",
    condition: "Excellent",
    seller: "Pine Works",
    color: "wood",
    label: "workspace",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20013,
    name: "Wool scarf",
    price: 38,
    category: "wear",
    condition: "Excellent",
    seller: "Common Goods partner",
    color: "knit",
    label: "apparel",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20014,
    name: "Rattan storage basket",
    price: 58,
    category: "home",
    condition: "Good",
    seller: "Hearth House",
    color: "canvas",
    label: "storage",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=90",
  },
];
const $ = (selector) => document.querySelector(selector);
const productGrid = $("#product-grid"),
  searchForm = $("#search-form"),
  searchInput = $("#search-input"),
  sortSelect = $("#sort-select"),
  emptyState = $("#empty-state"),
  resultCount = $("#result-count"),
  sellForm = $("#sell-form"),
  formMessage = $("#form-message"),
  cartDrawer = $("#cart-drawer"),
  cartButton = $("#cart-button"),
  closeCart = $("#close-cart"),
  drawerOverlay = $("#drawer-overlay"),
  cartItems = $("#cart-items"),
  cartCount = $("#cart-count"),
  cartTotal = $("#cart-total"),
  checkoutButton = $("#checkout-button"),
  checkoutMessage = $("#checkout-message");
let savedListings = JSON.parse(
    localStorage.getItem("common-goods-listings") || "[]",
  ),
  products = [...starterProducts, ...searchFixtures, ...savedListings],
  activeCategory = "all",
  cart = JSON.parse(localStorage.getItem("common-goods-cart") || "[]");
let usingApiProducts = false;
const money = (value) => `$${Number(value).toLocaleString()}`;
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ],
  );
function visibleProducts() {
  const query = searchInput.value.trim().toLowerCase();
  return products
    .filter(
      (product) =>
        (activeCategory === "all" || product.category === activeCategory) &&
        (!query ||
          `${product.name} ${product.label} ${product.seller}`
            .toLowerCase()
            .includes(query)),
    )
    .sort((a, b) =>
      sortSelect.value === "price-low"
        ? a.price - b.price
        : sortSelect.value === "price-high"
          ? b.price - a.price
          : sortSelect.value === "newest"
            ? b.id - a.id
            : a.id - b.id,
    );
}
function artwork(product) {
  const image = product.image
    ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">`
    : "";
  return `<div class="product-art art-${escapeHtml(product.color)}">${image}<span>${escapeHtml(product.label)}</span></div>`;
}
function renderProducts() {
  const items = visibleProducts();
  resultCount.textContent = `${items.length} ${items.length === 1 ? "piece" : "pieces"}`;
  emptyState.hidden = items.length > 0;
  productGrid.innerHTML = items
    .map(
      (product, index) =>
        `<article class="product-card" style="animation-delay:${index * 35}ms">${artwork(product)}<div class="product-info"><div><p class="product-category">${escapeHtml(product.category)} · ${escapeHtml(product.condition)}</p><h3>${escapeHtml(product.name)}</h3><p class="seller">Sold by ${escapeHtml(product.seller)}</p></div><strong class="price">${money(product.price)}</strong></div><button class="add-button" type="button" data-add="${product.id}">Add to bag <span aria-hidden="true">+</span></button></article>`,
    )
    .join("");
}
function categoryForApiProduct(category) {
  if (
    [
      "mens-shirts",
      "mens-shoes",
      "womens-dresses",
      "womens-shoes",
      "womens-bags",
      "tops",
    ].includes(category)
  )
    return "wear";
  if (
    ["furniture", "home-decoration", "kitchen-accessories"].includes(category)
  )
    return "home";
  return "objects";
}
function normalizeApiProduct(product) {
  return {
    id: 10000 + product.id,
    name: product.title,
    price: Math.round(product.price),
    category: categoryForApiProduct(product.category),
    condition: "New",
    seller: "Common Goods partner",
    color: "camera",
    label: product.category.replaceAll("-", " "),
    image: product.thumbnail || product.images?.[0],
  };
}
async function loadProductsFromApi(query = "") {
  resultCount.textContent = "Loading pieces...";
  try {
    const endpoint = query
      ? `${PRODUCTS_API}/search?q=${encodeURIComponent(query)}`
      : `${PRODUCTS_API}?limit=30`;
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Product API unavailable");
    const data = await response.json();
    const apiProducts = (data.products || []).map(normalizeApiProduct);
    const localMatches = query
      ? searchFixtures.filter((product) =>
          `${product.name} ${product.label}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
      : [];
    products = [
      ...new Map(
        [...apiProducts, ...localMatches].map((product) => [
          product.id,
          product,
        ]),
      ).values(),
    ];
    usingApiProducts = true;
    renderProducts();
  } catch (error) {
    usingApiProducts = false;
    resultCount.textContent = "Local pieces";
    renderProducts();
  }
}
function saveCart() {
  localStorage.setItem("common-goods-cart", JSON.stringify(cart));
}
function renderCart() {
  const items = cart
      .map((id) => products.find((product) => product.id === id))
      .filter(Boolean),
    total = items.reduce((sum, product) => sum + product.price, 0);
  cartCount.textContent = items.length;
  cartTotal.textContent = money(total);
  cartItems.innerHTML = items.length
    ? items
        .map(
          (product) =>
            `<div class="cart-item">${artwork(product)}<div><strong>${escapeHtml(product.name)}</strong><span>${money(product.price)}</span><button type="button" data-remove="${product.id}">Remove</button></div></div>`,
        )
        .join("")
    : `<p class="cart-empty">Your bag is waiting for something good.</p>`;
}
function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartButton.setAttribute("aria-expanded", "true");
  drawerOverlay.hidden = false;
}
function hideCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartButton.setAttribute("aria-expanded", "false");
  drawerOverlay.hidden = true;
}
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loadProductsFromApi(searchInput.value.trim());
  $("#shop").scrollIntoView({ behavior: "smooth" });
});
searchInput.addEventListener("input", () => {
  if (!usingApiProducts) renderProducts();
});
sortSelect.addEventListener("change", renderProducts);
document.querySelectorAll(".filter-button").forEach((button) =>
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document
      .querySelectorAll(".filter-button")
      .forEach((item) => item.classList.toggle("active", item === button));
    renderProducts();
  }),
);
productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  cart.push(Number(button.dataset.add));
  saveCart();
  renderCart();
  button.textContent = "Added ✓";
  button.classList.add("added");
  setTimeout(() => {
    button.innerHTML = 'Add to bag <span aria-hidden="true">+</span>';
    button.classList.remove("added");
  }, 1200);
});
cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  cart = cart.filter((id) => id !== Number(button.dataset.remove));
  saveCart();
  renderCart();
});
cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", hideCart);
drawerOverlay.addEventListener("click", hideCart);
checkoutButton.addEventListener("click", () => {
  checkoutMessage.textContent = cart.length
    ? "Demo checkout ready. Your items are reserved for 15 minutes."
    : "Add an item before checking out.";
});
sellForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(sellForm),
    listing = {
      id: Date.now(),
      name: data.get("name"),
      price: Number(data.get("price")),
      category: data.get("category"),
      condition: data.get("condition"),
      seller: "You",
      color:
        data.get("category") === "wear"
          ? "linen"
          : data.get("category") === "home"
            ? "oak"
            : "brass",
      label: "new listing",
      image:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=85",
    };
  products = [listing, ...products];
  savedListings = [listing, ...savedListings];
  localStorage.setItem("common-goods-listings", JSON.stringify(savedListings));
  sellForm.reset();
  formMessage.textContent = "Your item is live in the marketplace.";
  renderProducts();
  $("#shop").scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideCart();
});
renderProducts();
renderCart();
$("#current-year").textContent = new Date().getFullYear();
loadProductsFromApi();
