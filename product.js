import { getCartProductFromLs } from "./getCartProductFromLs";
import { showProduct } from "./showProduct";
import { getLoginUserInfo } from "./Login User/getloginuserInfo";
import { getProductData } from "./api/product";
getCartProductFromLs();
let token = localStorage.getItem("token");
if (token) {
  getLoginUserInfo(token);
}
const getProductDetails = async () => {
  try {
    let resp = await getProductData();
    if (resp && resp.length > 1) {
      showProduct(resp);
    }
  } catch (error) {
    console.log(error);
  }
};

getProductDetails();
