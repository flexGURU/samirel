<!-- src/components/home/ServicesGrid.vue -->
<template>
  <section class="section-padding bg-white">
    <div class="container-max">
      <SectionHeader
        eyebrow="What We Cover"
        title="Insurance for Every Stage of Life"
        subtitle="From personal protection to full corporate risk management, Samirel offers a comprehensive suite of insurance products backed by reputable and financially stable underwriters."
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="reveal card p-6 group cursor-pointer"
          :style="{ transitionDelay: `${index * 60}ms` }"
        >
          <div :class="`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.iconBg}`">
            <component :is="'svg'" class="w-6 h-6" :class="service.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="service.svgPath" />
          </div>
          <h3 class="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">{{ service.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ service.description }}</p>
          <RouterLink :to="service.link" class="text-blue-700 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
            Learn more
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SectionHeader from '../shared/SectionHeader.vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

useScrollReveal()

const services = [
  {
    title: 'Motor Insurance',
    description: 'Third-party liability or comprehensive cover for your vehicle. We ensure fast, equitable compensation and repair support when you need it most.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-700',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
    link: '/products#motor',
  },
  {
    title: 'Medical Insurance',
    description: 'Individual and group medical covers for employees and families, partnering with top providers like AAR Health Services and Real Health Services.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
    link: '/products#medical',
  },
  {
    title: 'Life & Pension',
    description: 'Secure your family\'s future with group life policies, personal pension plans, and occupational retirement benefit schemes for individuals and corporates.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-700',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>',
    link: '/products#life',
  },
  {
    title: 'Business Insurance',
    description: 'Combined packages for SMEs covering fire & allied perils, burglary, money loss, workmen\'s compensation, and group personal accident.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
    link: '/products#business',
  },
  {
    title: 'Personal Accident',
    description: 'Monetary payments for injury or death from accidents. Cover extends to medical bills, artificial limbs, and funeral expenses for complete peace of mind.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-700',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
    link: '/products#personal-accident',
  },
  {
    title: 'Marine & Transit',
    description: 'Protect goods in transit, marine cargo, and imports/exports. We also cover bonds, travel, fidelity guarantees, and all-risk computer equipment.',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-700',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>',
    link: '/products#marine',
  },
]
</script>