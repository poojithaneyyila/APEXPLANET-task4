// === Product Listing Logic ===
const products = [
  { name: "T-Shirt", category: "clothing", price: 20, rating: 4.2 },
  { name: "Laptop", category: "electronics", price: 800, rating: 4.8 },
  { name: "Headphones", category: "electronics", price: 50, rating: 4.5 },
  { name: "Novel Book", category: "books", price: 15, rating: 4.7 },
  { name: "Jacket", category: "clothing", price: 60, rating: 4.3 },
  { name: "Smartwatch", category: "electronics", price: 120, rating: 4.1 },
  { name: "Notebook", category: "books", price: 8, rating: 4.0 },
  { name: "Sneakers", category: "clothing", price: 75, rating: 4.6 },
  { name: "Tablet", category: "electronics", price: 300, rating: 4.4 },
  { name: "Cookbook", category: "books", price: 22, rating: 4.5 },
  { name: "Bluetooth Speaker", category: "electronics", price: 45, rating: 4.3 },
  { name: "Backpack", category: "clothing", price: 40, rating: 4.4 },
  { name: "Desk Lamp", category: "electronics", price: 25, rating: 4.2 },
  { name: "Fantasy Novel", category: "books", price: 18, rating: 4.6 },
  { name: "Sweatshirt", category: "clothing", price: 35, rating: 4.5 },
  { name: "Power Bank", category: "electronics", price: 28, rating: 4.1 },
  { name: "Sci-Fi Book", category: "books", price: 19, rating: 4.4 },
  { name: "Running Shorts", category: "clothing", price: 25, rating: 4.3 },
  { name: "Wireless Mouse", category: "electronics", price: 18, rating: 4.0 },
  { name: "Travel Guide", category: "books", price: 20, rating: 4.5 }
];

const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");
const productGrid = document.getElementById("productGrid");

function displayProducts(filteredProducts) {
  productGrid.innerHTML = "";

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h2>${product.name}</h2>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
      <a href="#" class="btn">Buy Now</a>
    `;
    productGrid.appendChild(card);
  });
}

function filterAndSortProducts() {
  const category = categoryFilter.value;
  const sort = sortOption.value;

  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);

// Initialize display on page load
window.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});