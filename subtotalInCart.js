import { getCartProductFromLs } from "./getCartProductFromLs";

let subTotal = document.querySelector(".cartTotalPrice").textContent;
subTotal = parseInt(subTotal);
subTotal = 0;
let cartFinalTotal = document.querySelector(".cartFinalTotal").textContent;
cartFinalTotal = parseInt(cartFinalTotal);
cartFinalTotal = 0;
let tax = document.querySelector(".tax").textContent;
tax = parseInt(tax);
tax = 50;

export const subtotalInCart = () => {
  const cartData = getCartProductFromLs();
  subTotal = cartData.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);
  subTotal = Number(subTotal).toFixed(3);
  cartFinalTotal = Number(subTotal) + tax;
  document.querySelector(".cartTotalPrice").textContent = `₹${subTotal}`;
  document.querySelector(".cartFinalTotal").textContent = `₹${cartFinalTotal}`;
};
