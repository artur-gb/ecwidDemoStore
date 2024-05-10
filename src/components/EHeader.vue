<template>
  <div
    class="flex justify-between items-center bg-slate-600 h-10 sticky top-0 px-2"
  >
    <span class="text-white uppercase text-2xl font-bold">
      {{ route.name ? pageName[route.name?.toString()] : "" }}
    </span>
    <router-link
      :to="{
        name: NamedRoutes.Cart,
      }"
    >
      <button class="flex items-center text-xl p-2 gap-2 text-white">
        {{ store?.productNumber }}
        <cart-icon />
        <!-- <img src="../assets/cart.svg" /> -->
      </button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../store/useStore";
import { RouterLink, useRoute } from "vue-router";
import { NamedRoutes } from "../routes/root";

import cartIcon from "../assets/cartIcon.vue";

const route = useRoute();
const store = useStore();

interface PageName {
  [key: string]: string;
}

const pageName: PageName = {
  [NamedRoutes.CategoryList]: "Categories",
  [NamedRoutes.Category]: "Category",
  [NamedRoutes.Product]: "Product",
  [NamedRoutes.Cart]: "Cart",
};
</script>

<style scoped></style>
