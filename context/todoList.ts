import { atom } from "recoil";

export const todoListState = atom<{ content: string; checked: boolean }[]>({
  key: "todoListState",
  default: [],
});
