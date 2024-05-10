import { InjectionKey } from "vue";

import { CategoryItem } from "../entities/CategoryItem";
import { Product } from "../entities/Product";

export interface IEcwidService {
  getCategoryList(
    storeId: number,
    token: string
  ): Promise<CategoryItem[] | null>;
  getProduct(
    storeId: number,
    token: string,
    productId: string
  ): Promise<Product | null>;
  listProductsByCategory(
    storeId: number,
    token: string,
    categoryId: string
  ): Promise<Product[] | null>;
}

export const IEcwidServiceKey = Symbol() as InjectionKey<IEcwidService>;
