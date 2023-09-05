import { atom } from "recoil";

export const logListState = atom<
  {
    date: string;
    list: { content: string; checked: boolean }[];
  }[]
>({
  key: "logListState",
  default: [],
});
