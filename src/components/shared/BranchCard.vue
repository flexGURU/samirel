<!-- src/components/shared/ProductCard.vue -->
<template>
  <div class="card p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300">
    <div :class="`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`">
      <slot name="icon" />
    </div>
    <div class="flex-1">
      <h3 class="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">{{ title }}</h3>
      <p class="text-gray-500 text-sm leading-relaxed">{{ description }}</p>
    </div>
    <div v-if="features && features.length" class="space-y-1.5">
      <div v-for="feature in features" :key="feature" class="flex items-center gap-2 text-xs text-gray-500">
        <svg class="w-3.5 h-3.5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        {{ feature }}
      </div>
    </div>
    <RouterLink v-if="link" :to="link" class="btn-ghost text-sm mt-auto">
      Learn more
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  title: { type: String, required: true },
  description: String,
  features: Array,
  iconBg: { type: String, default: 'bg-blue-50' },
  link: String,
})
</script>


<!-- src/components/shared/BranchCard.vue -->
<template>
  <div class="card p-6 flex gap-5">
    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
      <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    </div>
    <div>
      <p class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">{{ label }}</p>
      <h4 class="font-bold text-gray-900 text-base mb-1">{{ building }}</h4>
      <p class="text-sm text-gray-500">{{ floor }}</p>
      <p class="text-sm text-gray-500">{{ street }}</p>
      <a v-if="tel" :href="`tel:${tel}`" class="text-sm text-blue-700 font-medium mt-2 inline-flex items-center gap-1 hover:underline">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        {{ tel }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  building: String,
  floor: String,
  street: String,
  tel: String,
})
</script>