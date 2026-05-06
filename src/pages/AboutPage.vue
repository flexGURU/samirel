<!-- src/pages/AboutPage.vue -->
<template>
  <div class="pt-24">
    <!-- Page header -->
    <section class="bg-blue-700 section-padding relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="white" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p class="text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">Who We Are</p>
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-5" style="font-family:'Playfair Display',serif">About Samirel</h1>
        <p class="text-blue-100 text-lg max-w-2xl mx-auto">
          Two decades of professional excellence, dedication, and genuine client care in Kenyan insurance.
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section-padding bg-white">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Our Story" title="Built on Trust" align="left" />
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Samirel Insurance Agency was founded in 2002 as a sole proprietorship and duly registered under the Registration of Companies and Business Names Act. In the same year, we obtained our valid practicing license from the Commissioner of Insurance under the Ministry of Finance — a mark of credibility we have maintained to this day.
              </p>
              <p>
                From our head office at Kenindia House on Loita Street and our branch at Uchumi House on Moi Avenue, we serve clients across Nairobi and beyond. Our 100% Kenyan ownership reflects our deep commitment to the local economy and our clients' success.
              </p>
              <p>
                We do not discriminate, discredit, or undermine any work given by our clients. Whether you are a small school or a large corporation, you receive the same level of excellent, personalised service from our dedicated team of professionals.
              </p>
            </div>
          </div>
          <!-- Timeline -->
          <div class="space-y-6">
            <div v-for="(milestone, i) in milestones" :key="i" class="reveal flex gap-5" :style="{transitionDelay:`${i*80}ms`}">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold shrink-0">{{ i + 1 }}</div>
                <div v-if="i < milestones.length - 1" class="w-px flex-1 bg-blue-100 mt-2"></div>
              </div>
              <div class="pb-6">
                <p class="text-blue-700 text-xs font-bold uppercase tracking-widest mb-1">{{ milestone.year }}</p>
                <h4 class="font-bold text-gray-900 mb-1">{{ milestone.title }}</h4>
                <p class="text-sm text-gray-500 leading-relaxed">{{ milestone.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section-padding bg-blue-50">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span class="block w-6 h-px bg-blue-700"></span> Our Mission <span class="block w-6 h-px bg-blue-700"></span>
          </p>
          <blockquote class="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug" style="font-family:'Playfair Display',serif">
            "To be a customer-focused, nationwide insurance agency striving for excellence — providing risk management advisory services and placing business with reputable, financially stable insurers that offer competitive rates and timely claims assistance."
          </blockquote>
          <p class="mt-6 text-gray-500 text-sm">— M.O. Atong', Principal Officer, Samirel Insurance Agency</p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-white">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="What Drives Us" title="Our Core Values" />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div v-for="(value, i) in values" :key="value.title" class="reveal card p-6 text-center" :style="{transitionDelay:`${i*80}ms`}">
            <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">{{ value.icon }}</span>
            </div>
            <h4 class="font-bold text-gray-900 mb-2">{{ value.title }}</h4>
            <p class="text-sm text-gray-500 leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Principal -->
    <section class="section-padding bg-gray-50">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
          <SectionHeader eyebrow="Leadership" title="Our Principal Officer" />
          <div class="card p-8 mt-8 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left">
            <div class="w-24 h-24 rounded-2xl bg-blue-700 flex items-center justify-center text-white text-3xl font-bold shrink-0" style="font-family:'Playfair Display',serif">
              MA
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">M.O. Atong'</h3>
              <p class="text-blue-700 text-sm font-semibold mb-3">Principal Officer & Founder</p>
              <p class="text-gray-500 text-sm leading-relaxed">
                A College of Insurance graduate (C.O.P. Kenya), Mr. Atong' founded Samirel with the conviction that every Kenyan business and family deserves access to professional, affordable insurance. His hands-on approach and passion for client service have shaped the agency's culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Offices -->
    <section class="section-padding bg-white">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Find Us" title="Our Offices" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
          <BranchCard
            label="Head Office"
            building="Kenindia House"
            floor="2nd Floor, Door C2"
            street="Loita Street, Nairobi"
            tel="245744"
          />
          <BranchCard
            label="Branch Office"
            building="Uchumi House"
            floor="9th Floor, Door 903"
            street="Moi Avenue, Nairobi"
            tel="248923"
          />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup>
import SectionHeader from '../components/shared/SectionHeader.vue'
import CtaBanner from '../components/home/CtaBanner.vue'
import { useScrollReveal } from '../composables/useScrollReveal'

// NOTE: Import BranchCard from Cards.vue — separate the two components in production
// import BranchCard from '@/components/shared/BranchCard.vue'
// For now, inline a simple version:
import { defineComponent } from 'vue'
const BranchCard = defineComponent({
  props: ['label','building','floor','street','tel'],
  template: `
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
        <a :href="'tel:'+tel" class="text-sm text-blue-700 font-medium mt-2 inline-block hover:underline">📞 {{ tel }}</a>
      </div>
    </div>
  `
})

useScrollReveal()

const milestones = [
  { year: '2002', title: 'Foundation & Licensing', desc: 'Registered under the Business Names Act and licensed by the Commissioner of Insurance, Kenya.' },
  { year: '2005+', title: 'Portfolio Growth', desc: 'Expanded client base to include schools, architectural firms, automobile companies, and corporates.' },
  { year: '2010+', title: 'Branch Expansion', desc: 'Opened our second office at Uchumi House, Moi Avenue to better serve Nairobi CBD clients.' },
  { year: 'Today', title: 'Trusted Across Kenya', desc: 'Managing motor, medical, life, business, and marine insurance for individuals and corporates across Kenya.' },
]

const values = [
  { icon: '🎯', title: 'Professional Excellence', desc: 'Quality next to none — every client receives the same high standard of service regardless of account size.' },
  { icon: '🤝', title: 'Client-First Approach', desc: 'We carefully study your needs, provide tailored advice, and maintain transparent communication throughout.' },
  { icon: '🔒', title: 'Integrity', desc: 'Honest, ethical conduct in every interaction. We only recommend cover that truly serves your interests.' },
  { icon: '💡', title: 'Proactive Advisory', desc: 'We identify risks before they become losses, putting proactive risk management at the heart of what we do.' },
]
</script>