import leftData from "../src/api/whyChooseLeft.json";
import { showProduct } from "./showProduct";
import { whyChooseLeft } from "./whyChooseLeft";
import { whyChooseRight } from "./WhyChooseRight";
import rightData from "../src/api/whyChooseRight.json";
import { getLoginUserInfo } from "./Login User/getloginuserInfo";
import { getProductData } from "./api/product";
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

// const getProductDetails = async () => {
//   try {
//     let resp = await getProductData();
//   } catch (error) {
//     console.log(error);
//   }}