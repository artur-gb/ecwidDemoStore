import { inject } from "vue";
import {
  IEcwidService,
  IEcwidServiceKey,
} from "./IEcwidService";

export const useEcwidService = () => {
  return inject(IEcwidServiceKey) as IEcwidService;
};