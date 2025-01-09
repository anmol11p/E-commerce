import { getProductData } from "./api/product";
import { getCartProductFromLs } from "./getCartProductFromLs";
import { subtotalInCart } from "./subtotalInCart";

let productData = [];
const getProductDetails = async () => {
  try {
    let resp = await getProductData();
    productData = [...resp];
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

export const increment_decrementQuantityInCart = (event, id) => {
  const TargetedElement = document.getElementById(`cart${id}`);
  let quantity = TargetedElement.querySelector(
    ".ProductquantityCart"
  ).textContent;
  quantity = parseInt(quantity);
  let price = TargetedElement.querySelector(".productPriceCart").textContent;
  price = parseFloat(price);
  let stock = 0;
  const isIncrement = event.target.className === "incrementInCart";
  const isDecrement = event.target.className === "decrementInCart";
  productData.find((elem) => {
    if (elem.id === id) {
      stock = elem.total_stock_available;
    }
  });
  if ((isIncrement && quantity < stock) || (isDecrement && quantity > 1)) {
    quantity = isIncrement ? quantity + 1 : quantity - 1;
    productData.find((elem) => {
      if (elem.id === id) {
        price = (elem.product_price * quantity).toFixed(3);
        stock = elem.total_stock_available;
      }
    });
    //! update in local storage
    const cartData = getCartProductFromLs();
    const data = cartData.find((currProd) => {
      return currProd.id === id;
    });
    // update data
    data.quantity = quantity;
    data.price = Number(price);
    const newArr = cartData.filter((elem) => {
      return elem.id !== id;
    });
    // push data in localStorage
    newArr.push(data);
    localStorage.setItem("cartProductLs", JSON.stringify(newArr));

    // update in dom
    TargetedElement.querySelector(".ProductquantityCart").textContent =
      quantity;
    TargetedElement.querySelector(".productPriceCart").textContent = price;
  }
  // update subtotal
  subtotalInCart();
};

getProductDetails();
