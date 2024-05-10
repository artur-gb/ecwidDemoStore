<template>
  <div class="flex justify-center">
    <e-loader v-if="isLoading" />
    <div
      v-else-if="product"
      class="flex flex-col gap-2 justify-center items-center text-center max-w-[800px] p-4"
    >
      <img :src="product.imageUrl" class="max-h-[60vh] rounded-lg" />
      <span class="text-lg">{{ product.name.toUpperCase() }}</span>
      <div class="flex items-center">
        <span>{{ product.price }} </span>
        <ruble-icon />
      </div>
      <button
        @click="store?.addProduct(product)"
        class="flex items-center gap-1 text-lg bg-slate-600 hover:bg-slate-700 active:bg-slate-800 px-4 py-2 rounded-full text-white"
      >
        <add-to-cart-icon />
        buy
      </button>
    </div>
    <div
      v-else
      class="flex flex-col justify-center items-center gap-2 text-slate-600"
    >
      <span class="text-3xl font-bold p-8">product not found</span>
      <empty-icon class="text-8xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { useRoute } from "vue-router";

import { useEcwidService } from "../service/useEcwidService";
import { Product } from "../entities/Product";
import { useStore } from "../store/useStore";

import rubleIcon from "../assets/rubleIcon.vue";
import addToCartIcon from "../assets/addToCartIcon.vue";
import emptyIcon from "../assets/emptyIcon.vue";

import ELoader from "../components/ELoader.vue";

const route = useRoute();
const productId = computed(() => route.params.id as string);

const isLoading = ref(false);
const product = ref<Product>();

const store = useStore();

const storeId = 58958138;
const token = "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD";

const ecwidService = useEcwidService();

const loadProduct = async () => {
  if (!productId.value) {
    return;
  }

  isLoading.value = true;
  try {
    const result = await ecwidService.getProduct(
      storeId,
      token,
      productId.value
    );
    product.value = result ? result : undefined;
  } catch (error) {
    console.error(error);
  }
  isLoading.value = false;
};

onMounted(loadProduct);
</script>

<style scoped></style>
