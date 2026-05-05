<!-- src/pages/HomePage.vue -->
<template>
  <div>
    <HeroSection />
    <StatsBar />
    <ServicesGrid />
    <WhyChooseUs />

    <!-- Premium Financing callout -->
    <section class="section-padding bg-white">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div class="absolute right-0 top-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 -translate-y-1/2 translate-x-1/4"></div>
          <div class="relative z-10 max-w-lg">
            <p class="text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">Premium Financing</p>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-3" style="font-family:'Playfair Display',serif">
              Can't Pay Your Premium Upfront?
            </h3>
            <p class="text-blue-100 leading-relaxed text-sm">
              Our premium financing arrangement provides flexible repayment terms so you can maintain full insurance cover without disrupting your cash flow.
            </p>
          </div>
          <RouterLink to="/contact" class="relative z-10 bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap shrink-0">
            Contact Us →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Clients showcase -->
    <section class="section-padding bg-gray-50">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trusted By"
          title="Clients We're Proud to Serve"
          subtitle="From schools to automobile companies, Samirel manages insurance for a diverse and growing portfolio of Kenyan organisations."
        />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div
            v-for="client in clients"
            :key="client"
            class="reveal bg-white rounded-2xl px-6 py-5 text-center border border-gray-100 shadow-sm text-sm font-semibold text-gray-700 hover:border-blue-200 hover:text-blue-700 transition-all"
          >
            {{ client }}
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/home/HeroSection.vue'
import StatsBar from '../components/home/StatsBar.vue'
import ServicesGrid from '../components/home/ServicesGrid.vue'
import WhyChooseUs from '../components/home/WhyChooseUs.vue'
import CtaBanner from '../components/home/CtaBanner.vue'
import SectionHeader from '../components/shared/SectionHeader.vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const clients = [
  'Technical Institute Group of Schools',
  'Glad Toto Nursery & Primary School',
  'Hilltop Primary & Secondary',
  'Billmaker Associates',
  'Siat Architects',
  'Daewoo Motors',
  'Kingway Motors',
  'Bomas of Kenya Ltd',
]
</script>