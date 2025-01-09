import leftData from "./api/whyChooseLeft.json";
import { whyChooseLeft } from "./whyChooseLeft";
import { whyChooseRight } from "./WhyChooseRight";
import rightData from "./api/whyChooseRight.json";
import {getProductData} from "./api/product"
import { getLoginUserInfo } from "./Login User/getloginuserInfo";
import { showProduct } from "./showProduct";

whyChooseLeft(leftData);
whyChooseRight(rightData);


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
