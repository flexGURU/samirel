<script setup>
import { RouterView } from "vue-router";
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
</script>

<template>
  <TheNavbar />

  <main class="min-h-screen">
    <RouterView />
  </main>

  <TheFooter />
</template>
