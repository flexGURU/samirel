<!-- src/components/home/WhyChooseUs.vue -->
<template>
  <section class="section-padding bg-blue-50">
    <div class="container-max px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: visual -->
        <div class="relative">
          <div class="bg-white rounded-3xl p-8 shadow-lg border border-blue-100">
            <h3 class="text-xl font-bold text-gray-900 mb-6" style="font-family:'Playfair Display',serif">Our Insurer Partners</h3>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="partner in partners"
                :key="partner"
                class="bg-blue-50 rounded-xl px-4 py-3 text-xs font-semibold text-blue-800 text-center hover:bg-blue-100 transition-colors cursor-default"
              >
                {{ partner }}
              </div>
            </div>
            <div class="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
              <p class="text-xs text-gray-500">All partners are vetted for financial stability</p>
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </div>
          </div>
          <!-- decorative offset box -->
          <div class="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-3xl -z-10 opacity-30"></div>
        </div>

        <!-- Right: reasons -->
        <div>
          <SectionHeader
            eyebrow="Why Samirel"
            title="A Partner You Can Rely On"
            subtitle="We don't just sell insurance — we become your dedicated risk management advisors, guiding you to the right cover at the right price."
            align="left"
          />

          <ul class="space-y-5 mt-8">
            <li v-for="(reason, i) in reasons" :key="i" class="reveal flex gap-4" :style="{transitionDelay: `${i*80}ms`}">
              <div class="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {{ i + 1 }}
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ reason.title }}</h4>
                <p class="text-sm text-gray-500 leading-relaxed">{{ reason.desc }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../shared/SectionHeader.vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
useScrollReveal()

const partners = [
  'Kenindia Assurance', 'Cannon Assurance', 'ICEA', 'Gateway Insurance',
  'Blue Shield', 'AAR Health Services', 'Health First Intl', 'Real Health Services',
]

const reasons = [
  {
    title: 'Free Risk Management Advisory',
    desc: 'Every client receives complimentary, expert risk identification and control advice — we analyse your unique exposure before recommending cover.',
  },
  {
    title: 'Competitive & Discounted Rates',
    desc: 'Our group scheme relationships and market access allow us to negotiate rates that individual clients simply cannot access on their own.',
  },
  {
    title: 'Reputable Insurer Placement',
    desc: 'We only place your business with financially stable, licensed insurance companies — so your claims are always honoured.',
  },
  {
    title: 'Claims Support & Advocacy',
    desc: 'When a loss occurs, we actively advocate for timely and equitable compensation on your behalf, removing the stress of navigating the process alone.',
  },
  {
    title: 'Tailor-Made Solutions',
    desc: 'We craft bespoke insurance packages to fit your exact risk profile — not generic, off-the-shelf products that leave gaps in your protection.',
  },
]
</script>