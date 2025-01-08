import { getCartProductFromLs } from "./getCartProductFromLs";
import { updateCartValue } from "./updateCartValue";
import { subtotalInCart } from "./subtotalInCart";
import { Toast } from "./Toast/showPopup";
export const removeProductFromCart = (id) => {
  let dataFromLs = getCartProductFromLs();
  const newArr = dataFromLs.filter((currElem) => {
    return currElem.id !== id;
  });
  localStorage.setItem("cartProductLs", JSON.stringify(newArr));
  const removableId = document.querySelector(`#cart${id}`);
  if (removableId) {
    removableId.remove();
    Toast("deleteItems", id);
  }
  //  update the cart button value
  updateCartValue(newArr);
  // update subtotal
  subtotalInCart();
};
