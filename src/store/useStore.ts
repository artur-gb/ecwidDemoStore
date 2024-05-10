import { inject } from "vue";
import { storeSymbol } from "./store";

export const useStore = () => {
  return inject(storeSymbol);
};
