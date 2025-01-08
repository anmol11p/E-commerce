import { getCartProductFromLs } from "./getCartProductFromLs";
import { whyChooseLeft } from "./whyChooseLeft";
import { whyChooseRight } from "./WhyChooseRight";
import rightData from "../src/api/whyChooseRight.json";
import leftData from "../src/api/whyChooseLeft.json";
import { getLoginUserInfo } from "./Login User/getloginuserInfo";

getCartProductFromLs();
whyChooseLeft(leftData);
whyChooseRight(rightData);

// update user is present or not make icon profile and hove get login user info

let token = localStorage.getItem("token");
if (token) {
  getLoginUserInfo(token);
}
