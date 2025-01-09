import { getCartProductFromLs } from "./getCartProductFromLs";
import { updateCartValue } from "./updateCartValue";
import { Toast } from "./Toast/showPopup";

getCartProductFromLs();
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLs();
  const currentCard = document.querySelector(`#product${id}`);
  let quantity = Number(currentCard.querySelector("#quantity").textContent);
  let price = currentCard.querySelector(".price").textContent;
  price = Number(price.replace("₹", ""));
  //   now add id,price,quantity in local storage

  const productAlreadyExist = arrLocalStorageProduct.find((currElem) => {
    return currElem.id === id;
  });
  if (productAlreadyExist && quantity > 1) {
    quantity = productAlreadyExist.quantity + quantity;
    if (quantity > stock) {
      quantity = stock;
    }
    price = Number(price * quantity);
    let updateCart = { id, quantity, price };
    updateCart = arrLocalStorageProduct.map((currProd) => {
      return currProd.id === id ? updateCart : currProd;
    });
    localStorage.setItem("cartProductLs", JSON.stringify(updateCart));
    Toast("addItems", id);
  }
  if (productAlreadyExist) {
    return false;
  }

  price = parseFloat((quantity * price).toFixed(3));

  let updateCart = { id, quantity, price };
  arrLocalStorageProduct.push(updateCart);
  Toast("addItems", id);
  localStorage.setItem("cartProductLs", JSON.stringify(arrLocalStorageProduct));
  //  update the cart button value
  updateCartValue(arrLocalStorageProduct);
};
