import { increment_decrementQuantityInCart } from "./incrementDecrementInCart";
import { removeProductFromCart } from "./removeProductFromCart";

const template = document.querySelector(".cartContainerTemplate");
const container = document.querySelector(".cartContainer");
export const showProductInCart = (data) => {
  const templateClone = document.importNode(template.content, true);
  const { id, category, image, product_name, quantity, price } = data;

  templateClone.querySelector(".product-info").setAttribute("id", `cart${id}`);
  templateClone.querySelector(".productCategoryCart").textContent = category;
  templateClone.querySelector(".productImageCart").src = image;
  templateClone.querySelector(".productNameCart").textContent = product_name;

  templateClone.querySelector(".productPriceCart").textContent = price;
  templateClone.querySelector(".ProductquantityCart").textContent = quantity;
  // remove the product from the cart
  templateClone.querySelector(".removeButton").addEventListener("click", () => {
    removeProductFromCart(id);
    
  });
  // increment/decrement the cart quantity
  templateClone
    .querySelector(".quantity-selector-cart")
    .addEventListener("click", (event) => {
      increment_decrementQuantityInCart(event, id);
    });

  container.append(templateClone);
};
