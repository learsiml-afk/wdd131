const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const yearEl = document.getElementById("currentYear");
const modEl = document.getElementById("lastModified");

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modEl) modEl.textContent = document.lastModified;

const productSelect = document.getElementById("productName");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

const reviewCount = document.getElementById("reviewCount");
const reviewSummary = document.getElementById("reviewSummary");

if (reviewCount) {
  let count = parseInt(localStorage.getItem("reviewCount") || "0");
  count += 1;
  localStorage.setItem("reviewCount", count);
  reviewCount.textContent = count;
}

if (reviewSummary) {
  const params = new URLSearchParams(window.location.search);

  const productId = params.get("product");
  const rating = params.get("rating");
  const installDate = params.get("installDate");
  const features = params.getAll("features");
  const writtenReview = params.get("writtenReview");
  const userName = params.get("userName");

  const productObj = products.find(p => p.id === productId);
  const productName = productObj ? productObj.name : productId || "—";

  const starString = rating ? "★".repeat(parseInt(rating)) + "☆".repeat(5 - parseInt(rating)) : "—";

  const summaryItems = [
    { label: "Product", value: productName },
    { label: "Rating", value: starString },
    { label: "Installed", value: installDate || "—" },
    { label: "Features", value: features.length ? features.join(", ") : "None selected" },
  ];

  if (writtenReview) {
    summaryItems.push({ label: "Review", value: writtenReview });
  }

  if (userName) {
    summaryItems.push({ label: "Reviewer", value: userName });
  }

  summaryItems.forEach(item => {
    const p = document.createElement("p");
    p.innerHTML = `${item.label}: <span>${item.value}</span>`;
    reviewSummary.appendChild(p);
  });
}