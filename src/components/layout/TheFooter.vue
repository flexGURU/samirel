<!-- src/components/layout/TheFooter.vue -->
<template>
  <footer class="bg-gray-950 text-gray-300">
    <!-- Top section -->
    <div class="container-max section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-5">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            >
              <img
                src="/samirel_logo.png"
                alt="Samirel Logo"
                class="w-full h-full text-white border rounded-full"
              />
            </div>
            <div>
              <p
                class="font-bold text-white text-lg leading-tight"
                style="font-family: &quot;Playfair Display&quot;, serif"
              >
                Samirel
              </p>
              <p
                class="text-xs text-blue-400 tracking-widest uppercase font-medium"
              >
                Insurance Agency
              </p>
            </div>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed mb-6">
            Professional excellence in whatever magnitude of work. Serving Kenya
            since 2002 with comprehensive risk management and insurance
            solutions.
          </p>
          <div class="flex items-center gap-2">
            <span
              class="w-2 h-2 rounded-full bg-green-400 animate-pulse"
            ></span>
            <span class="text-xs text-gray-400"
              >Licensed by Commissioner of Insurance</span
            >
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4
            class="text-white font-semibold text-sm uppercase tracking-widest mb-5"
          >
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <svg
                  class="w-3 h-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <path d="M0 0l8 4-8 4V0z" />
                </svg>
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h4
            class="text-white font-semibold text-sm uppercase tracking-widest mb-5"
          >
            Our Products
          </h4>
          <ul class="space-y-3">
            <li v-for="product in products" :key="product">
              <span class="text-sm text-gray-400 flex items-center gap-2">
                <svg
                  class="w-3 h-3 text-blue-600 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <path d="M0 0l8 4-8 4V0z" />
                </svg>
                {{ product }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4
            class="text-white font-semibold text-sm uppercase tracking-widest mb-5"
          >
            Get In Touch
          </h4>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <svg
                class="w-4 h-4 text-blue-500 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div class="text-sm text-gray-400">
                <p class="text-gray-300 font-medium">Head Office</p>
                <p>Kenindia House, 2nd Floor, Door C2</p>
                <p>Loita Street, Nairobi</p>
              </div>
            </li>
            <li class="flex gap-3">
              <svg
                class="w-4 h-4 text-blue-500 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <div class="text-sm text-gray-400">
                <p class="text-gray-300 font-medium">Branch Office</p>
                <p>Uchumi House, 9th Floor, Door 903</p>
                <p>Moi Avenue, Nairobi</p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <svg
                class="w-4 h-4 text-blue-500 shrink-0"
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
              <div class="text-sm">
                <a
                  href="tel:245744"
                  class="text-gray-400 hover:text-blue-400 transition-colors block"
                  >245744 / 248923</a
                >
                <a
                  href="tel:0720913174"
                  class="text-gray-400 hover:text-blue-400 transition-colors block"
                  >0720-913174</a
                >
              </div>
            </li>
            <li class="flex items-center gap-3">
              <svg
                class="w-4 h-4 text-blue-500 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:samirelinsuranceagency@yahoo.com"
                class="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                samirelinsuranceagency@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-800">
      <div
        class="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p class="text-xs text-gray-500">
          © {{ currentYear }} Samirel Insurance Agency. All rights reserved. |
          Licensed by the Commissioner of Insurance, Kenya.
        </p>
        <div class="flex items-center gap-1 text-xs text-gray-500">
          <span>Bankers:</span>
          <span class="text-gray-400 font-medium">Co-operative Bank</span>
          <span>&amp;</span>
          <span class="text-gray-400 font-medium">Equity Bank</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const currentYear = computed(() => new Date().getFullYear());

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/products", label: "Products" },
  //   { to: '/get-quote', label: 'Get a Quote' },
  { to: "/contact", label: "Contact Us" },
];

const products = [
  "Motor Insurance",
  "Medical Insurance",
  "Life & Pension",
  "Business Insurance",
  "Personal Accident",
  "Domestic Package",
  "Marine & Transit",
  "Premium Financing",
];
</script>
