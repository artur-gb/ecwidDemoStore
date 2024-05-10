import { createRouter, createWebHistory } from "vue-router";

import ECategoryListPage from "../pages/ECategoryListPage.vue";
import ECategoryPage from "../pages/ECategoryPage.vue";
import EProductPage from "../pages/EProductPage.vue";
import ECartPage from "../pages/ECartPage.vue";

export enum NamedRoutes {
  CategoryList = "CategoryList",
  Category = "Category",
  Product = "Product",
  Cart = "Cart",
}

export const buildRouter = () => {
  //   const routerBase = props.routerBase ? (props.routerBase as string) : "";

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: `/`,
        redirect: "/category",
        // component: NavBar,
        children: [
          {
            path: "category",
            // name: NamedRoutes.TemplatesRoot,
            children: [
              {
                path: "",
                name: NamedRoutes.CategoryList,
                component: ECategoryListPage,
              },
              {
                path: ":id",
                name: NamedRoutes.Category,
                component: ECategoryPage,
              },
            ],
          },
          {
            path: "product",
            // name: NamedRoutes.TemplatesRoot,
            children: [
              {
                path: ":id",
                name: NamedRoutes.Product,
                component: EProductPage,
              },
            ],
          },
          {
            path: "cart",
            name: NamedRoutes.Cart,
            component: ECartPage,
          },
        ],
      },
    ],
  });

  return router;
};
