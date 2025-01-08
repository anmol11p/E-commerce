import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";
const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");
export const showProduct = (product) => {
  if (!product) {
    return false;
  }
  product.forEach((currElem,index) => {
    const {
      actual_price,
      category,
      image,
      product_description,
      product_name,
      product_price,
      total_stock_available,
      id,
    } = currElem;

    let productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".product-category").textContent = category;
    productClone.querySelector(".prdctImg").src = image;
    productClone.querySelector(".product-name").textContent = product_name;
    productClone.querySelector(".product-description").textContent =
      product_description;
    productClone.querySelector(".price").textContent = ` ₹ ${product_price}`;
    productClone.querySelector(
      ".actual-price"
    ).textContent = `₹ ${actual_price}`;
    productClone.querySelector(".stocks").textContent = total_stock_available;

    productClone
      .querySelector(".product-item")
      .setAttribute("id", `product${id}`);

    // increase or decrease the quantity
    productClone
      .querySelector(".quantity-buttons")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, total_stock_available);
      });
    // add to card option
    productClone
      .querySelector(".add-to-cart")
      .addEventListener("click", (event) => {
        addToCart(event, id, total_stock_available);
      });
    productContainer.append(productClone);
  });
};
