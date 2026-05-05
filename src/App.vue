<script setup>
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
import X from "./x.vue";
</script>

<template>
  <TheNavbar />
  <X />

  <main class="min-h-screen">
    <router-view />
  </main>

  <TheFooter />
</template>