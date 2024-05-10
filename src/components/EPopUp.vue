<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg md:w-[30vw]">
      <div class="flex justify-between items-center">
        <span class="text-lg">Congratulations!</span>
        <button
          @click="() => emits('close')"
          class="text-xl hover:bg-slate-100 active:bg-slate-200 p-2 rounded-full text-slate-600"
        >
          <close-icon />
        </button>
      </div>
      <span class="text-sm">Thank you! Happy Birthday! byeee</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import closeIcon from "../assets/closeIcon.vue";

const emits = defineEmits<{
  (e: "close", value: void): void;
}>();
</script>
