<!-- src/pages/ProductsPage.vue -->
<template>
  <div class="pt-24">
    <!-- Header -->
    <section class="bg-blue-700 section-padding relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="white" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p class="text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">Comprehensive Coverage</p>
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-5" style="font-family:'Playfair Display',serif">Our Products</h1>
        <p class="text-blue-100 text-lg max-w-2xl mx-auto">Tailored insurance products for every individual, family, and business in Kenya.</p>

        <!-- Tab navigation -->
        <div class="flex flex-wrap justify-center gap-2 mt-8">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all',
              activeTab === tab.id
                ? 'bg-white text-blue-700 shadow'
                : 'bg-blue-600/50 text-white hover:bg-blue-600'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Product Sections -->
    <section class="section-padding bg-white">
      <div class="container-max px-4 sm:px-6 lg:px-8">

        <!-- Motor -->
        <div v-show="activeTab === 'all' || activeTab === 'motor'" id="motor" class="mb-16">
          <SectionHeader eyebrow="Motor Insurance" title="Drive with Confidence" align="left"
            subtitle="Whether you drive a personal vehicle or manage a fleet, we have the right motor cover for you." />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div v-for="product in motorProducts" :key="product.name" class="reveal card p-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl shrink-0">{{ product.icon }}</div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">{{ product.name }}</h4>
                  <p class="text-sm text-gray-500 leading-relaxed mb-3">{{ product.desc }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in product.tags" :key="tag" class="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Medical -->
        <div v-show="activeTab === 'all' || activeTab === 'medical'" id="medical" class="mb-16">
          <SectionHeader eyebrow="Medical Insurance" title="Your Health, Our Priority" align="left"
            subtitle="Individual and group medical schemes arranged with Kenya's top health insurance providers." />
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div v-for="product in medicalProducts" :key="product.name" class="reveal card p-6 hover:-translate-y-1 transition-transform">
              <div class="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-lg mb-4">{{ product.icon }}</div>
              <h4 class="font-bold text-gray-900 mb-2">{{ product.name }}</h4>
              <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ product.desc }}</p>
              <ul class="space-y-1.5">
                <li v-for="f in product.features" :key="f" class="flex items-center gap-2 text-xs text-gray-600">
                  <svg class="w-3.5 h-3.5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ f }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Life & Pension -->
        <div v-show="activeTab === 'all' || activeTab === 'life'" id="life" class="mb-16">
          <SectionHeader eyebrow="Life & Pension" title="Secure Tomorrow, Today" align="left"
            subtitle="Protect your family and plan for retirement with policies arranged through our trusted insurer network." />
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div v-for="(product, i) in lifeProducts" :key="product.name" class="reveal card p-6" :style="{transitionDelay:`${i*60}ms`}">
              <div class="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-lg mb-4">{{ product.icon }}</div>
              <h4 class="font-bold text-gray-900 mb-2">{{ product.name }}</h4>
              <p class="text-sm text-gray-500 leading-relaxed">{{ product.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Business -->
        <div v-show="activeTab === 'all' || activeTab === 'business'" id="business" class="mb-16">
          <SectionHeader eyebrow="Business Insurance" title="Protect Your Enterprise" align="left"
            subtitle="A single combined package that covers all the risks your SME or corporation faces." />
          <div class="bg-blue-50 rounded-3xl p-8 mt-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div v-for="(item, i) in businessItems" :key="item.title" class="reveal bg-white rounded-2xl p-5" :style="{transitionDelay:`${i*60}ms`}">
                <div class="text-xl mb-3">{{ item.icon }}</div>
                <h4 class="font-bold text-gray-900 text-sm mb-1">{{ item.title }}</h4>
                <p class="text-xs text-gray-500 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Products -->
        <div v-show="activeTab === 'all' || activeTab === 'other'" id="other" class="mb-8">
          <SectionHeader eyebrow="Additional Products" title="More Ways We Protect You" align="left" />
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div v-for="(p, i) in otherProducts" :key="p.name" class="reveal card p-5 text-center hover:border-blue-200 transition-colors" :style="{transitionDelay:`${i*50}ms`}">
              <div class="text-2xl mb-3">{{ p.icon }}</div>
              <h4 class="font-semibold text-gray-900 text-sm mb-1">{{ p.name }}</h4>
              <p class="text-xs text-gray-400">{{ p.short }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="container-max px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-blue-700 rounded-3xl p-8 text-center text-white">
        <h3 class="text-2xl font-bold mb-3" style="font-family:'Playfair Display',serif">Not sure which product is right for you?</h3>
        <p class="text-blue-100 mb-6">Our advisors will analyse your needs and recommend the perfect cover — at no charge.</p>
        <RouterLink to="/contact" class="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
          Get in Touch →
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SectionHeader from '../components/shared/SectionHeader.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const activeTab = ref('all')

const tabs = [
  { id: 'all', label: 'All Products' },
  { id: 'motor', label: 'Motor' },
  { id: 'medical', label: 'Medical' },
  { id: 'life', label: 'Life & Pension' },
  { id: 'business', label: 'Business' },
  { id: 'other', label: 'Other' },
]

const motorProducts = [
  {
    icon: '🛡️', name: 'Third-Party Insurance',
    desc: 'The minimum legal requirement for all road users in Kenya. Covers injury or death to third parties and damage to their property arising from your vehicle.',
    tags: ['Legal requirement', 'Third-party bodily injury', 'Property damage'],
  },
  {
    icon: '🚘', name: 'Comprehensive Motor Cover',
    desc: 'Full protection for your vehicle including accident damage, fire, and theft — plus all the benefits of third-party cover. Ideal for new or high-value vehicles.',
    tags: ['Accident damage', 'Theft cover', 'Fire damage', 'Third-party included'],
  },
  {
    icon: '🚛', name: 'Commercial Vehicle & Fleet',
    desc: 'Cost-effective group rates for business vehicles, matatus, trucks, and delivery vans. Fleet policies simplify administration and reduce overall premiums.',
    tags: ['Fleet discounts', 'Commercial vehicles', 'PSV cover', 'Goods in transit'],
  },
  {
    icon: '🔧', name: 'Motor Comprehensive Plus',
    desc: 'Enhanced cover adding personal accident benefits, emergency medical expenses, and roadside assistance for the most complete protection available.',
    tags: ['Personal accident rider', 'Emergency medical', 'Roadside assistance'],
  },
]

const medicalProducts = [
  {
    icon: '👤', name: 'Individual Medical Cover',
    desc: 'Comprehensive inpatient and outpatient cover for individuals seeking quality healthcare without out-of-pocket financial stress.',
    features: ['Inpatient hospitalisation', 'Outpatient consultation', 'Prescription drugs', 'Diagnostic tests', 'Maternity benefits'],
  },
  {
    icon: '👨‍👩‍👧', name: 'Family Medical Cover',
    desc: 'Extend your protection to your entire household — spouse and children — under a single, affordable family policy.',
    features: ['Spouse & children covered', 'Paediatric care', 'Dental & optical add-ons', 'Last expense cover', 'Nationwide hospital network'],
  },
  {
    icon: '🏢', name: 'Corporate / Group Scheme',
    desc: 'Attract and retain top talent with comprehensive employee medical cover. We negotiate group rates that provide excellent benefits at reduced premiums.',
    features: ['Group discounts', 'HR administration support', 'Claims reporting', 'Annual review & renewal', 'Customisable benefit limits'],
  },
]

const lifeProducts = [
  { icon: '🌟', name: 'Group Life Policy', desc: 'Provides a lump-sum payment to beneficiaries upon an employee\'s death — a critical employee benefit and statutory requirement for many organisations.' },
  { icon: '🏦', name: 'Personal Pension Plan', desc: 'Start saving for retirement early with a disciplined, tax-efficient personal pension plan. The earlier you begin, the more you accumulate.' },
  { icon: '🏗️', name: 'Occupational Retirement Benefit Scheme', desc: 'A formalised employer-sponsored retirement savings scheme that benefits both employer and employee through shared contributions and tax advantages.' },
  { icon: '💳', name: 'Credit Life', desc: 'Covers outstanding loan balances in the event of the borrower\'s death or total permanent disability — protecting your family from inherited debt.' },
  { icon: '🪦', name: 'Group Last Expense Cover', desc: 'Provides immediate funds to cover funeral and last expense costs, relieving family members of financial burden during a difficult time.' },
  { icon: '🏠', name: 'Group Mortgage Protection', desc: 'Ensures your mortgage is paid off if you pass away before completion — so your family keeps the home regardless of what happens to you.' },
]

const businessItems = [
  { icon: '🔥', title: 'Fire & Allied Perils', desc: 'Covers damage to business premises and contents from fire, lightning, explosion, and allied risks including storm and flooding.' },
  { icon: '🔓', title: 'Burglary & Theft', desc: 'Compensates for loss or damage to business property caused by theft involving forcible and violent entry.' },
  { icon: '💵', title: 'Money Cover', desc: 'Covers cash and negotiable instruments whether on premises, in transit, or in the hands of directors and trusted employees.' },
  { icon: '👷', title: 'Workmen\'s Compensation', desc: 'Meets your statutory obligation to compensate employees for injury, illness, or death arising in the course of employment.' },
  { icon: '🦺', title: 'Group Personal Accident', desc: 'Provides monetary payments to employees or their families in the event of accidental injury or death at work.' },
  { icon: '⚖️', title: 'Professional & Public Liability', desc: 'Protects your business against claims of negligence, professional errors, or injury and property damage caused to third parties.' },
]

const otherProducts = [
  { icon: '💻', name: 'All Risks – Computer', short: 'Equipment & devices' },
  { icon: '🚢', name: 'Marine Insurance', short: 'Cargo & vessels' },
  { icon: '✈️', name: 'Travel Insurance', short: 'Domestic & international' },
  { icon: '🚚', name: 'Goods in Transit', short: 'Cargo protection' },
  { icon: '📜', name: 'Bonds', short: 'Performance & bid bonds' },
  { icon: '⛳', name: 'Golfers Insurance', short: 'Equipment & liability' },
  { icon: '🔐', name: 'Fidelity Guarantee', short: 'Employee dishonesty' },
  { icon: '💰', name: 'Premium Financing', short: 'Flexible repayment' },
]
</script>