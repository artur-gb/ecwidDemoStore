import { InjectionKey, Ref, readonly, ref } from "vue";

import { Product } from "../entities/Product";

interface StoreState {
  productNumber: Readonly<Ref<number>>;
  products: Readonly<Ref<Product[]>>;
  addProduct(product: Product): void;
  resetProducts(): void;
  deleteProduct(index: number): void;
}

const productNumber = ref(0);
const products = ref<Product[]>([]);

const addProduct = (product: Product) => {
  productNumber.value = productNumber.value + 1;
  products.value.push(product);
};

const resetProducts = () => {
  productNumber.value = 0;
  products.value = [];
};

const deleteProduct = (index: number) => {
  productNumber.value = productNumber.value - 1;
  products.value.splice(index, 1);
};

export const storeSymbol = Symbol() as InjectionKey<StoreState>;

export function createStore() {
  return {
    productNumber: readonly(productNumber),
    products: readonly(products),
    addProduct,
    resetProducts,
    deleteProduct,
  };
}
