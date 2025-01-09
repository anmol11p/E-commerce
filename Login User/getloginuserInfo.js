import { getUser } from "../api/getUser";
import { uiProfile } from "./uiProfile";

export const getLoginUserInfo = async (token) => {
  let userInfo = await getUser(token);
  //   update in ui
  uiProfile(userInfo.data);
};
