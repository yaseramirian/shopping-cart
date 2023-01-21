// Variables
const addBtn = document.querySelectorAll(".add-btn");
const clearBtn = document.querySelector(".clear-btn");
const cardContent = document.querySelector(".cart");
const cart = document.querySelector(".cart-icon");

// Event Listeners
eventListeners();
function eventListeners() {
  for (i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", addProduct);
  }

  cardContent.addEventListener("click", removeProduct);
  clearBtn.addEventListener("click", clear);
}

// Functions
function addProduct(e) {
  const product = e.target.parentElement.parentElement;
  getProductInfo(product);
}

function getProductInfo(product) {
  const productInfo = {
    image: product.querySelector(".product-img").src,
    model: product.querySelector(".product-model").textContent,
    price: product.querySelector(".product-price").textContent,
  };

  addToCart(productInfo);
}

function addToCart(productInfo) {
  let cardProduct = document.createElement("div");
  cardProduct.classList.add("cart-proudct");

  cardProduct.innerHTML = `

   <img class="cart-proudct-img"
   src="${productInfo.image}"
   alt="${productInfo.model}"
   />
  <div class="cart-proudct-info">
  <p class="cart-proudct-model">${productInfo.model}</p>
  <p class="cart-proudct-price">Price: <span>${productInfo.price}</span></p>
  <button class="remove-btn">Remove</button>
  </div>
  
  
  `;
  cardContent.appendChild(cardProduct);
}

function removeProduct(e) {
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.parentElement.remove();
  }
}

function clear() {
  cardContent.remove();
}

