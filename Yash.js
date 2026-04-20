const cartCount = document.querySelector(".cart-count");
const cartBtn = document.getElementById("cart-btn");
const cartContainer = document.getElementById("cart-container");

// Load count from localStorage
let count = localStorage.getItem("cartCount")
  ? parseInt(localStorage.getItem("cartCount"))
  : 0;

// Load cart items
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

cartCount.textContent = count;

// Fetch products
fetch("data/info.json")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".big");

    data.forEach(user => {
      container.innerHTML += `
        <div class="container">
          <div class="card">
            <div class="face front">
              <img src="${user.image}" alt="${user.name}">
              <p>${user.name}</p>
              <p class="stratingPrice">Starting from ₹${user.price}</p>
            </div>
            <div class="face back">
              <a href="https://www.google.com">
                <img src="${user.image}" alt="${user.name}">
              </a> 
              <p class="name">Click on the image to explore more</p>
              <button 
                class="add_cart_btn"
                data-name="${user.name}"
                data-image="${user.image}">
                Add To Cart
              </button>
              <button class="remove_cart_btn">Remove from Cart</button>
            </div>
          </div>
        </div>
      `;
    });

    const cartBtns = document.querySelectorAll(".add_cart_btn");
    const removeBtns = document.querySelectorAll(".remove_cart_btn");

    
    cartBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const item = {
          name: btn.dataset.name,
          image: btn.dataset.image
        };

        cartItems.push(item);
        count++;

        saveCart();
      });
    });

    removeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (count > 0) {
          cartItems.pop();
          count--;
          saveCart();
        }
      });
    });
  })
  .catch(err => console.error(err));


cartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle("show");
  renderCart();
});

// Render cart items
function renderCart() {
  cartContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  cartItems.forEach(item => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="50">
        <span>${item.name}</span>
      </div>
    `;
  });
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCartCount();
  renderCart();
}

// Update cart count
function updateCartCount() {
  cartCount.textContent = count;
  localStorage.setItem("cartCount", count);
}
