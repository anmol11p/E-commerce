import { getCartProductFromLs } from "./getCartProductFromLs";
import { getLoginUserInfo } from "./Login User/getloginuserInfo";
getCartProductFromLs();
// update user is present or not make icon profile and hove get login user info

let token = localStorage.getItem("token");
if (token) {
  getLoginUserInfo(token);
}
