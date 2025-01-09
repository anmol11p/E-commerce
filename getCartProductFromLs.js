import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLs = () => {
  let cartProducts = localStorage.getItem("cartProductLs");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);
  //  update the cart button value
  updateCartValue(cartProducts);
  return cartProducts;
};
