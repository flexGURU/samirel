<!-- src/components/home/StatsBar.vue -->
<template>
  <section class="bg-blue-700 py-10">
    <div class="container-max px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="text-4xl font-bold text-white mb-1" style="font-family:'Playfair Display',serif">{{ stat.value }}</p>
          <p class="text-blue-200 text-sm font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '2002', label: 'Year Established' },
  { value: '8+', label: 'Insurer Partners' },
  { value: '2', label: 'Nairobi Offices' },
  { value: '100%', label: 'Kenyan Owned' },
]
</script>