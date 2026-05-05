<!-- src/components/home/CtaBanner.vue -->
<template>
  <section class="section-padding bg-blue-700 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600 opacity-50"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-800 opacity-50"
      ></div>
      <svg
        class="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <p
        class="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-4"
      >
        Risk is inevitable — let's manage it together
      </p>
      <h2
        class="text-4xl lg:text-5xl font-bold text-white mb-5"
        style="font-family: &quot;Playfair Display&quot;, serif"
      >
        Ready to Secure Your Future?
      </h2>
      <p class="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Speak to one of our expert advisors today. We'll analyse your risk
        exposure, recommend the right cover, and place your business with the
        most suitable insurer — all at no extra advisory cost.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <!-- <RouterLink
          to="/get-quote"
          class="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
        >
          Get a Free Quote
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </RouterLink> -->
        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
        >
          Talk to Us
        </RouterLink>
      </div>

      <div
        class="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200"
      >
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          No hidden fees
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          Free advisory consultation
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          Claims support included
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
