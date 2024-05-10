import { CategoryItem } from "../entities/CategoryItem";
import { Product } from "../entities/Product";
import { IEcwidService } from "./IEcwidService";

export class ApiEcwidService implements IEcwidService {
  async getCategoryList(
    storeId: number,
    token: string
  ): Promise<CategoryItem[] | null> {
    const headers = {
      Authorization: token,
    };

    const response = await fetch(
      `https://app.ecwid.com/api/v3/${storeId}/categories`,
      {
        method: "GET",
        headers,
      }
    );

    if (response.status !== 200) {
      throw new Error(`List error: ${await response.text()}`);
    }

    const result = await response.json();
    return result.items as CategoryItem[];
  }

  async getProduct(
    storeId: number,
    token: string,
    productId: string
  ): Promise<Product | null> {
    const headers = {
      Authorization: token,
    };

    const response = await fetch(
      `https://app.ecwid.com/api/v3/${storeId}/products/${productId}`,
      {
        method: "GET",
        headers,
      }
    );

    if (response.status !== 200) {
      throw new Error(`List error: ${await response.text()}`);
    }

    const result = (await response.json()) as Product;
    return result;
  }

  async listProductsByCategory(
    storeId: number,
    token: string,
    categoryId: string
  ): Promise<Product[] | null> {
    const headers = {
      Authorization: token,
    };

    const response = await fetch(
      `https://app.ecwid.com/api/v3/${storeId}/products?category=${categoryId}`,
      {
        method: "GET",
        headers,
      }
    );

    if (response.status !== 200) {
      throw new Error(`List error: ${await response.text()}`);
    }

    const result = await response.json();
    return result.items as Product[];
  }
}
