<template>
  <e-header />
  <router-view/>
</template>

<script setup lang="ts">
import EHeader from "./components/EHeader.vue";

import { RouterView } from "vue-router";
</script>

<style scoped></style>
