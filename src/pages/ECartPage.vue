<template>
  <e-pop-up
    v-if="openPopUp"
    @close="
      () => {
        openPopUp = false;
      }
    "
  />
  <div class="flex justify-center">
    <div v-if="products?.length" class="flex flex-col justify-center">
      <div
        class="grid grid-col md:grid-cols-3 gap-2 p-4 items-center max-w-[1200px]"
      >
        <div
          v-for="(product, index) in products"
          class="flex flex-col items-center gap-1"
        >
          <img :src="product.imageUrl" class="max-h-[60vh] rounded-lg" />
          <span class="text-lg">{{ product.name.toUpperCase() }}</span>
          <div class="flex items-center">
            <span>{{ product.price }} </span>
            <ruble-icon />
          </div>
          <button
            @click="deleteItem(index)"
            class="flex items-center gap-1 text-lg bg-slate-600 hover:bg-slate-700 active:bg-slate-800 px-4 py-2 rounded-full text-white"
          >
            <delete-icon />
            delete
          </button>
        </div>
      </div>
      <div class="flex justify-center sticky bottom-0 pb-2">
        <button
          @click="purchaseItems"
          class="flex items-center gap-1 text-lg font-bold bg-white hover:bg-slate-100 active:bg-slate-200 px-4 py-2 rounded-full text-slate-600"
        >
          <place-order-icon />
          place order
        </button>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col justify-center items-center gap-2 text-slate-600"
    >
      <span class="text-3xl font-bold p-8">cart is empty</span>
      <empty-icon class="text-8xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../store/useStore";

import EPopUp from "../components/EPopUp.vue";

import rubleIcon from "../assets/rubleIcon.vue";
import deleteIcon from "../assets/deleteIcon.vue";
import placeOrderIcon from "../assets/placeOrderIcon.vue";
import emptyIcon from "../assets/emptyIcon.vue";

const store = useStore();
const products = ref(store?.products);

const deleteItem = (index: number) => {
  store?.deleteProduct(index);
};

const purchaseItems = () => {
  store?.resetProducts();
  openPopUp.value = true;
};

const openPopUp = ref(false);
</script>

<style scoped></style>
