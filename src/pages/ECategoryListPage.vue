<template>
  <div class="flex justify-center">
    <div class="flex flex-col max-w-[1200px]">
      <e-loader v-if="isCategoriesLoading" />
      <div
        v-else-if="categories.length > 0"
        class="grid grid-col md:grid-cols-3 gap-2 items-center p-4"
      >
        <button
          v-for="category in categories"
          class="flex flex-col items-center hover:bg-slate-100 active:bg-slate-200 p-2 rounded-lg"
        >
          <router-link
            :to="{
              name: NamedRoutes.Category,
              params: {
                id: category.id,
              },
            }"
          >
            <img :src="category.imageUrl" class="rounded-lg" />
            <span>{{ category.name.toUpperCase() }}</span>
          </router-link>
        </button>
      </div>
      <div
        v-else
        class="flex flex-col justify-center items-center gap-2 text-slate-600"
      >
        <span class="text-3xl font-bold p-8">categories not found</span>
        <empty-icon class="text-8xl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import { RouterLink } from "vue-router";
import { NamedRoutes } from "../routes/root";

import { useEcwidService } from "../service/useEcwidService";
import { CategoryItem } from "../entities/CategoryItem";

import ELoader from "../components/ELoader.vue";

import emptyIcon from "../assets/emptyIcon.vue";

const ecwidService = useEcwidService();
const storeId = 58958138;
const token = "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD";

const categories = ref<CategoryItem[]>([]);
const isCategoriesLoading = ref(false);

const fetchCategories = async () => {
  isCategoriesLoading.value = true;
  try {
    const result = await ecwidService.getCategoryList(storeId, token);
    categories.value = result ? result : [];
  } catch (error) {
    console.error(error);
  }
  isCategoriesLoading.value = false;
};

onMounted(fetchCategories);
</script>

<style scoped></style>
