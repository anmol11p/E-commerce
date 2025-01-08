export const homeQuantityToggle = (event, id, stock) => {
  const item = document.querySelector(`#product${id}`);

  let quantity =
    parseInt(
      item.querySelector("#quantity").getAttribute("product-quantity")
    ) || 1;

  if (event.target.className === "increment") {
    if (quantity < stock) {
      quantity += 1;
    } else {
      quantity = stock;
    }
  }
  if (event.target.className === "decrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  item.querySelector("#quantity").textContent = quantity;
  item.querySelector("#quantity").setAttribute("product-quantity", quantity);
  return quantity;
};
