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
  products = [...starterProducts, ...savedListings],
  activeCategory = "all",
  cart = JSON.parse(localStorage.getItem("common-goods-cart") || "[]");
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
  renderProducts();
  $("#shop").scrollIntoView({ behavior: "smooth" });
});
searchInput.addEventListener("input", renderProducts);
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
