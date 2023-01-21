// Variables
const addBtn = document.querySelectorAll(".add-btn");
const cardContent = document.querySelector(".cart");

// Event Listeners
eventListeners();
function eventListeners() {
  for (i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", buy);
  }
}

// Functions
function buy(e) {
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

   <img
  class="cart-proudct-img"
  src="${productInfo.image}"
  alt="${productInfo.model}"
  />

  <div class="cart-proudct-info">
  <p class="cart-proudct-model">${productInfo.model}</p>
  <p class="cart-proudct-price">Price: <span>${productInfo.price}</span></p>
  <button>Remove</button>
  </div>
  
  
  
  `;
  cardContent.appendChild(cardProduct);
}
