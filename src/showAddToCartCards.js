// ls se id ke jariye product info nikalni hai
// product price quantity LS se
import { getProductData } from "./api/product";
import { getCartProductFromLs } from "./getCartProductFromLs";
import { getLoginUserInfo } from "./Login User/getloginuserInfo";
import { showProductInCart } from "./showProductInCart";
import { subtotalInCart } from "./subtotalInCart";

let productData = [];
const getProductDetails = async () => {
  try {
    let resp = await getProductData();
    productData = [...resp];
    processCart();
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

const processCart = () => {
  let dataFromLs = getCartProductFromLs();
  let existingIds = dataFromLs.map((item) => {
    return item.id;
  });
  let cartData = productData.filter((currProd) => {
    return existingIds.includes(currProd.id);
  });
  //  all cart data
  cartData.map((elem) => {
    const lsProduct = dataFromLs.find((item) => item.id === elem.id);

    const { quantity, price } = lsProduct;
    const { id, category, image, product_name } = elem;

    const data = { id, category, image, product_name, quantity, price };
    showProductInCart(data);
  });
  // fix the subtotal in cart
  subtotalInCart();
};

// update user is present or not make icon profile and hove get login user info

let token = localStorage.getItem("token");

if (token) {
  getLoginUserInfo(token);
}
const inIt = async () => {
  await getProductDetails();
};
inIt();
