<!-- src/components/shared/SectionHeader.vue -->
<template>
  <div :class="['mb-4', alignClass]">
    <p v-if="eyebrow" class="text-blue-700 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2" :class="eyebrowAlign">
      <span class="block w-6 h-px bg-blue-700"></span>
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">{{ title }}</h2>
    <p v-if="subtitle" class="text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl" :class="subtitleAlign">{{ subtitle }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  eyebrow: String,
  title: { type: String, required: true },
  subtitle: String,
  align: { type: String, default: 'center' }, // 'left' | 'center'
})

const alignClass = computed(() => props.align === 'center' ? 'text-center' : 'text-left')
const eyebrowAlign = computed(() => props.align === 'center' ? 'justify-center' : '')
const subtitleAlign = computed(() => props.align === 'center' ? 'mx-auto' : '')
</script>