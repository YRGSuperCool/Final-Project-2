const API_KEY = "thewdb";
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const movieGrid = document.querySelector("#movie-grid");
const statusPanel = document.querySelector("#status-panel");
const statusMessage = document.querySelector("#status-message");
const loader = document.querySelector(".loader");
const resultCount = document.querySelector("#result-count");
const sortSelect = document.querySelector("#sort-select");
const filterButtons = document.querySelectorAll(".filter-button");
const loadMoreButton = document.querySelector("#load-more");
const favoritesCount = document.querySelector("#favorites-count");
const detailModal = document.querySelector("#detail-modal");
const modalClose = document.querySelector("#modal-close");
const detailPoster = document.querySelector("#detail-poster");
const detailType = document.querySelector("#detail-type");
const detailTitle = document.querySelector("#detail-title");
const detailFacts = document.querySelector("#detail-facts");
const detailPlot = document.querySelector("#detail-plot");
const detailCredits = document.querySelector("#detail-credits");
let movies = [];
let activeType = "all";
let currentQuery = "";
let currentPage = 1;
let totalResults = 0;
let isLoading = false;
let favorites = JSON.parse(localStorage.getItem("framefind-favorites") || "[]");

function setStatus(message, isLoading = false) {
  statusMessage.textContent = message;
  loader.hidden = !isLoading;
  statusPanel.hidden = !isLoading && movies.length > 0;
}

function filteredMovies() {
  const visible =
    activeType === "favorites"
      ? movies.filter((movie) => favorites.includes(movie.imdbID))
      : activeType === "all"
        ? [...movies]
        : movies.filter((movie) => movie.Type === activeType);
  const sort = sortSelect.value;
  return visible.sort((first, second) => {
    if (sort === "az") return first.Title.localeCompare(second.Title);
    if (sort === "za") return second.Title.localeCompare(first.Title);
    if (sort === "newest")
      return Number(second.Year.slice(0, 4)) - Number(first.Year.slice(0, 4));
    if (sort === "oldest")
      return Number(first.Year.slice(0, 4)) - Number(second.Year.slice(0, 4));
    return 0;
  });
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ],
  );
}

function updateFavoritesCount() {
  favoritesCount.textContent = favorites.length;
}

function renderMovies() {
  const visibleMovies = filteredMovies();
  movieGrid.innerHTML = visibleMovies
    .map((movie, index) => {
      const poster =
        movie.Poster !== "N/A"
          ? `<img class="movie-poster" src="${escapeHtml(movie.Poster)}" alt="${escapeHtml(movie.Title)} poster" loading="lazy">`
          : `<div class="movie-poster poster-missing">Poster unavailable</div>`;
      const isFavorite = favorites.includes(movie.imdbID);
      return `<article class="movie-card" style="animation-delay: ${index * 45}ms"><button class="movie-card-button" type="button" data-details="${escapeHtml(movie.imdbID)}">${poster}<div class="movie-meta"><span>${escapeHtml(movie.Type)}</span><span>${escapeHtml(movie.Year)}</span></div><h3>${escapeHtml(movie.Title)}</h3></button><button class="save-button ${isFavorite ? "saved" : ""}" type="button" data-favorite="${escapeHtml(movie.imdbID)}" aria-label="${isFavorite ? "Remove" : "Save"} ${escapeHtml(movie.Title)} ${isFavorite ? "from" : "to"} favorites">${isFavorite ? "★" : "☆"}</button></article>`;
    })
    .join("");
  resultCount.textContent = `${visibleMovies.length} ${visibleMovies.length === 1 ? "result" : "results"}`;
  statusPanel.hidden = visibleMovies.length > 0;
  loadMoreButton.hidden =
    activeType === "favorites" || movies.length >= totalResults;
  if (!visibleMovies.length && movies.length)
    setStatus("No results match this filter.");
}

async function fetchMovies(query, page = 1) {
  if (isLoading) return;
  isLoading = true;
  setStatus("Searching the archive...", true);
  if (page === 1) movieGrid.innerHTML = "";
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query.trim())}&page=${page}`,
    );
    if (!response.ok) throw new Error("Network request failed");
    const data = await response.json();
    if (data.Response === "False")
      throw new Error(data.Error || "No titles found");
    movies =
      page === 1 ? data.Search || [] : [...movies, ...(data.Search || [])];
    currentPage = page;
    totalResults = Number(data.totalResults || movies.length);
    renderMovies();
  } catch (error) {
    if (page === 1) {
      movies = [];
      movieGrid.innerHTML = "";
      statusPanel.hidden = false;
      setStatus(
        error.message.includes("found")
          ? "No titles found. Try a different search."
          : "We could not reach the movie archive. Please try again.",
      );
      resultCount.textContent = "No results";
    } else setStatus("Could not load more results. Please try again.");
  } finally {
    isLoading = false;
    if (movies.length) setStatus("");
  }
}

function searchMovies(query) {
  currentQuery = query.trim();
  currentPage = 1;
  totalResults = 0;
  fetchMovies(currentQuery);
}

async function showDetails(imdbID) {
  detailModal.hidden = false;
  detailTitle.textContent = "Loading details...";
  detailPlot.textContent = "";
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${encodeURIComponent(imdbID)}&plot=full`,
    );
    const movie = await response.json();
    if (movie.Response === "False") throw new Error();
    detailTitle.textContent = movie.Title;
    detailType.textContent = `${movie.Type} / ${movie.Year}`;
    detailFacts.textContent = [movie.Runtime, movie.Genre, movie.Rated]
      .filter((fact) => fact && fact !== "N/A")
      .join(" • ");
    detailPlot.textContent =
      movie.Plot !== "N/A" ? movie.Plot : "No plot summary is available.";
    detailCredits.textContent = `Directed by ${movie.Director !== "N/A" ? movie.Director : "unknown"} · Starring ${movie.Actors !== "N/A" ? movie.Actors : "unknown"}`;
    detailPoster.innerHTML =
      movie.Poster !== "N/A"
        ? `<img src="${escapeHtml(movie.Poster)}" alt="${escapeHtml(movie.Title)} poster">`
        : "Poster unavailable";
  } catch (error) {
    detailTitle.textContent = "Details unavailable";
    detailPlot.textContent = "We could not load this title right now.";
  }
}

function toggleFavorite(imdbID) {
  favorites = favorites.includes(imdbID)
    ? favorites.filter((id) => id !== imdbID)
    : [...favorites, imdbID];
  localStorage.setItem("framefind-favorites", JSON.stringify(favorites));
  updateFavoritesCount();
  renderMovies();
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (searchInput.value.trim()) searchMovies(searchInput.value);
});
sortSelect.addEventListener("change", renderMovies);
loadMoreButton.addEventListener("click", () =>
  fetchMovies(currentQuery, currentPage + 1),
);
movieGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailButton = event.target.closest("[data-details]");
  if (favoriteButton) {
    event.stopPropagation();
    toggleFavorite(favoriteButton.dataset.favorite);
  } else if (detailButton) showDetails(detailButton.dataset.details);
});
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    activeType = button.dataset.type;
    filterButtons.forEach((item) =>
      item.classList.toggle("active", item === button),
    );
    if (movies.length) renderMovies();
  }),
);
modalClose.addEventListener("click", () => {
  detailModal.hidden = true;
});
detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) detailModal.hidden = true;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") detailModal.hidden = true;
});
updateFavoritesCount();
document.querySelector("#current-year").textContent = new Date().getFullYear();
