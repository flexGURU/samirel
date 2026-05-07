<!-- src/components/layout/TheNavbar.vue -->
<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white shadow-md py-3'
        : 'bg-white/90 backdrop-blur-sm py-5',
    ]"
  >
    <nav
      class="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3 group">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        >
          <img src="/logo.png" alt="" />
        </div>
        <div>
          <p
            class="font-bold text-gray-900 text-lg leading-tight tracking-tight"
            style="font-family: &quot;Playfair Display&quot;, serif"
          >
            Samirel
          </p>
          <p
            class="text-xs text-blue-700 font-medium tracking-widest uppercase leading-none"
          >
            Insurance Agency
          </p>
        </div>
      </RouterLink>

      <!-- Desktop Nav -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
            active-class="text-blue-700 bg-blue-50"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- CTA -->
      <div class="hidden lg:flex items-center gap-3">
        <a
          href="tel:0723383832"
          class="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          0723 383832
        </a>
        <!-- <RouterLink to="/get-quote" class="btn-primary text-sm py-2.5 px-5">
          Get a Quote
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </RouterLink> -->
      </div>

      <!-- Mobile burger -->
      <button
        class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!mobileOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-white border-t border-gray-100 shadow-lg"
      >
        <ul class="px-4 py-4 space-y-1">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              active-class="text-blue-700 bg-blue-50"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <div class="px-4 pb-5 pt-2 border-t border-gray-100">
          <!-- <RouterLink to="/get-quote" class="btn-primary w-full justify-center" @click="mobileOpen = false">
            Get a Free Quote
          </RouterLink> -->
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const scrolled = ref(false);
const mobileOpen = ref(false);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function handleScroll() {
  scrolled.value = window.scrollY > 20;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
