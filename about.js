import { getCartProductFromLs } from "./getCartProductFromLs";
import leftData from "./api/whyChooseLeft.json";
import { whyChooseLeft } from "./whyChooseLeft";
import { whyChooseRight } from "./WhyChooseRight";
import rightData from "./api/whyChooseRight.json";
import { getLoginUserInfo } from "./Login User/getloginuserInfo";

getCartProductFromLs();
whyChooseLeft(leftData);
whyChooseRight(rightData);

// update user is present or not make icon profile and hove get login user info

let token = localStorage.getItem("token");
if (token) {
  getLoginUserInfo(token);
}
console.log("first")
