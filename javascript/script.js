import { product } from "./product.js";

const jsProductGrid =  document.querySelector('.js-products-grid');
let containerProduct = ''

product.forEach((item) =>{
  const html = `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${item.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${item.titre}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${item.notation.etoile}">
            <div class="product-rating-count link-primary">
              ${item.notation.note}
            </div>
          </div>

          <div class="product-price">
            ${item.cout}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`
  containerProduct += html
})
jsProductGrid.innerHTML = containerProduct