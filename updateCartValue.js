export const updateCartValue = (cartProduct) => {
  const cart = document.querySelector("#cartLength");
  return (cart.textContent = cartProduct.length);
};
