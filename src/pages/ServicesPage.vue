<!-- src/pages/ServicesPage.vue -->
<template>
  <div class="pt-24">
    <!-- Header -->
    <section class="bg-blue-700 section-padding relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="white" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p class="text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">Full Spectrum Cover</p>
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-5" style="font-family:'Playfair Display',serif">Our Services</h1>
        <p class="text-blue-100 text-lg max-w-2xl mx-auto">
          Comprehensive insurance and risk management services for individuals, families, SMEs, and large corporates across Kenya.
        </p>
      </div>
    </section>

    <!-- Risk Management Process -->
    <section class="section-padding bg-white">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Approach"
          title="How We Manage Your Risk"
          subtitle="We follow a rigorous five-step process to ensure your business is placed with the right insurer at the best possible terms."
        />
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12 relative">
          <!-- Connector line (desktop) -->
          <div class="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-blue-100 z-0"></div>
          <div
            v-for="(step, i) in process"
            :key="step.title"
            class="reveal flex flex-col items-center text-center relative z-10"
            :style="{transitionDelay:`${i*100}ms`}"
          >
            <div class="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
              {{ i + 1 }}
            </div>
            <h4 class="font-bold text-gray-900 text-sm mb-2">{{ step.title }}</h4>
            <p class="text-xs text-gray-500 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Services -->
    <section class="section-padding bg-gray-50">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="What We Offer" title="Service Categories" />
        <div class="space-y-8 mt-12">
          <div v-for="(category, i) in categories" :key="category.title" class="reveal card overflow-hidden" :style="{transitionDelay:`${i*80}ms`}">
            <div class="flex flex-col lg:flex-row">
              <div :class="`${category.accent} p-8 lg:w-72 flex-shrink-0 flex flex-col justify-center`">
                <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <span class="text-2xl">{{ category.icon }}</span>
                </div>
                <h3 class="font-bold text-white text-xl mb-2" style="font-family:'Playfair Display',serif">{{ category.title }}</h3>
                <p class="text-white/80 text-sm">{{ category.tagline }}</p>
              </div>
              <div class="p-8 flex-1">
                <p class="text-gray-600 text-sm leading-relaxed mb-6">{{ category.description }}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div v-for="item in category.items" :key="item" class="flex items-start gap-2 text-sm text-gray-700">
                    <svg class="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ item }}
                  </div>
                </div>
                <RouterLink to="/contact" class="btn-primary mt-6 inline-flex text-sm py-2.5">
                  Reach Out →
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Financing section -->
    <section class="section-padding bg-blue-50">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="Premium Financing"
            title="Flexible Premium Payment Options"
            subtitle="Insurance shouldn't be a cash flow burden. Our premium financing arrangement lets you spread your premium payments over flexible terms while enjoying uninterrupted coverage."
          />
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div class="card p-6 text-center reveal">
              <p class="text-3xl font-bold text-blue-700 mb-2" style="font-family:'Playfair Display',serif">Flexible</p>
              <p class="text-sm text-gray-500">Repayment terms tailored to your cash flow cycle</p>
            </div>
            <div class="card p-6 text-center reveal" style="transition-delay:80ms">
              <p class="text-3xl font-bold text-blue-700 mb-2" style="font-family:'Playfair Display',serif">Uninterrupted</p>
              <p class="text-sm text-gray-500">Full cover maintained from day one of your policy</p>
            </div>
            <div class="card p-6 text-center reveal" style="transition-delay:160ms">
              <p class="text-3xl font-bold text-blue-700 mb-2" style="font-family:'Playfair Display',serif">Accessible</p>
              <p class="text-sm text-gray-500">Available for individuals, SMEs, and corporates alike</p>
            </div>
          </div>
          <RouterLink to="/contact" class="btn-primary mt-10 mx-auto">Enquire About Financing</RouterLink>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SectionHeader from '../components/shared/SectionHeader.vue'
import CtaBanner from '../components/home/CtaBanner.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const process = [
  { title: 'Understand Your Needs', desc: 'Careful study of your risk exposure, synthesised into clear concepts.' },
  { title: 'Prepare Proposals', desc: 'Diligent preparation of tailored briefs and insurance proposals.' },
  { title: 'Collaborate & Organise', desc: 'Coordinating all necessary parties for a smooth placement.' },
  { title: 'Select Insurer', desc: 'Prequalifying and selecting the most suitable insurer for your risk.' },
  { title: 'Ongoing Service', desc: 'Regular communication, progress updates, and claims support.' },
]

const categories = [
  {
    title: 'Motor Insurance',
    icon: '🚗',
    accent: 'bg-blue-700',
    tagline: 'Third-party to comprehensive cover',
    description: 'We offer both third-party liability and comprehensive motor insurance, ensuring you are protected against property damage, theft, and third-party claims. Our team assists you through the entire repair or replacement process.',
    items: ['Third-party liability cover', 'Comprehensive vehicle cover', 'Vehicle replacement on theft', 'Accident repair support', 'Emergency breakdown assistance', 'Fleet insurance for businesses'],
  },
  {
    title: 'Medical & Health Insurance',
    icon: '🏥',
    accent: 'bg-red-600',
    tagline: 'Individual, family, and group schemes',
    description: 'Partnering with AAR Health Services, Health First International, and Real Health Services, we arrange individual and corporate medical covers that ensure your team and family receive quality healthcare without financial stress.',
    items: ['Individual medical cover', 'Group employee health schemes', 'Family medical covers', 'Inpatient & outpatient benefits', 'Dental and optical cover', 'Critical illness benefits'],
  },
  {
    title: 'Life & Pension Schemes',
    icon: '💼',
    accent: 'bg-green-700',
    tagline: 'Securing futures today',
    description: 'Protect your loved ones and plan for retirement with our comprehensive life and pension portfolio. We arrange group life policies, personal pension plans, and occupational retirement benefit schemes for corporates and individuals.',
    items: ['Group life policies', 'Personal pension plans', 'Occupational retirement schemes', 'Group last expense cover', 'Credit life insurance', 'Income protection'],
  },
  {
    title: 'Business Insurance',
    icon: '🏢',
    accent: 'bg-amber-600',
    tagline: 'Combined packages for every SME',
    description: 'Our combined business insurance package can be arranged to cover all the risks a small or medium enterprise faces under one convenient, cost-effective policy.',
    items: ['Fire and allied perils', 'Burglary and theft', 'Money cover (premises, transit, employees)', 'Workmen\'s compensation', 'Group personal accident', 'Professional and public liability'],
  },
]
</script>