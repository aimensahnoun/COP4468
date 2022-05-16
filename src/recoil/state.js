//Recoil import
import { atom } from "recoil";

export const UsersState = atom({
  key: "UsersState",
  default: [],
});

export const postState = atom({
  key: "PostsState",
  default: [],
})