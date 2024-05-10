<template>
  <div class="flex justify-center">
    <e-loader v-if="isLoading" />
    <div
      v-else-if="category && category.length>0"
      class="grid grid-col md:grid-cols-3 gap-2 items-center max-w-[1200px] p-4"
    >
      <button
        v-for="categoryItem in category"
        class="flex flex-col items-center hover:bg-slate-100 active:bg-slate-200 p-2 rounded-lg"
      >
        <router-link
          :to="{
            name: NamedRoutes.Product,
            params: {
              id: categoryItem.id,
            },
          }"
        >
          <img :src="categoryItem.imageUrl" class="rounded-lg" />
          <span>{{ categoryItem.name.toUpperCase() }}</span>
        </router-link>
      </button>
    </div>
    <div
      v-else
      class="flex flex-col justify-center items-center gap-2 text-slate-600"
    >
      <span class="text-3xl font-bold p-8">category not found</span>
      <empty-icon class="text-8xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { useRoute, RouterLink } from "vue-router";
import { NamedRoutes } from "../routes/root";

import { CategoryItem } from "../entities/CategoryItem";

import { useEcwidService } from "../service/useEcwidService";

import emptyIcon from "../assets/emptyIcon.vue";

import ELoader from "../components/ELoader.vue";

const route = useRoute();
const categoryId = computed(() => route.params.id as string);

const isLoading = ref(false);
const category = ref<CategoryItem[]>();

const storeId = 58958138;
const token = "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD";

const ecwidService = useEcwidService();

const loadCategory = async () => {
  if (!categoryId.value) {
    return;
  }

  isLoading.value = true;
  try {
    const result = await ecwidService.listProductsByCategory(
      storeId,
      token,
      categoryId.value
    );
    category.value = result ? result : undefined;
  } catch (error) {
    console.error(error);
  }
  isLoading.value = false;
};

onMounted(loadCategory);
</script>

<style scoped></style>
