<!-- src/pages/GetQuotePage.vue -->
<template>
  <div class="pt-24 min-h-screen bg-gray-50">

    <!-- Page Header -->
    <section class="bg-blue-700 py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p class="text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">Free & No Obligation</p>
        <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4" style="font-family:'Playfair Display',serif">
          Get Your Free Quote
        </h1>
        <p class="text-blue-100 text-base max-w-xl mx-auto">
          Answer a few quick questions and our team will get back to you within 24 hours with a tailored, competitive quote.
        </p>
      </div>
    </section>

    <!-- Progress + Form -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">

        <!-- Step Progress Bar -->
        <div class="flex items-center justify-between mb-10 relative">
          <!-- connector line -->
          <div class="absolute top-5 left-0 right-0 h-px bg-gray-200 z-0"></div>
          <div
            class="absolute top-5 left-0 h-px bg-blue-700 z-0 transition-all duration-500"
            :style="{ width: progressWidth }"
          ></div>

          <div
            v-for="(step, i) in steps"
            :key="step.label"
            class="flex flex-col items-center gap-2 relative z-10"
          >
            <div
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300',
                currentStep > i + 1
                  ? 'bg-blue-700 border-blue-700 text-white'
                  : currentStep === i + 1
                  ? 'bg-white border-blue-700 text-blue-700 shadow-md shadow-blue-100'
                  : 'bg-white border-gray-200 text-gray-400',
              ]"
            >
              <svg v-if="currentStep > i + 1" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span v-else>{{ i + 1 }}</span>
            </div>
            <span
              :class="[
                'text-xs font-semibold hidden sm:block',
                currentStep === i + 1 ? 'text-blue-700' : currentStep > i + 1 ? 'text-gray-700' : 'text-gray-400',
              ]"
            >
              {{ step.label }}
            </span>
          </div>
        </div>

        <!-- Form Card -->
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          <!-- Step 1: Insurance Type -->
          <Transition name="slide-fade" mode="out-in">
            <div v-if="currentStep === 1" key="step1" class="p-8 lg:p-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-2" style="font-family:'Playfair Display',serif">
                What would you like to insure?
              </h2>
              <p class="text-gray-500 text-sm mb-8">Select all the insurance types you're interested in. You can choose more than one.</p>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <button
                  v-for="type in insuranceTypes"
                  :key="type.value"
                  type="button"
                  @click="toggleType(type.value)"
                  :class="[
                    'flex flex-col items-center gap-3 p-5 rounded-2xl border-2 text-center transition-all duration-200',
                    form.types.includes(type.value)
                      ? 'border-blue-700 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 text-gray-700',
                  ]"
                >
                  <span class="text-3xl">{{ type.icon }}</span>
                  <span class="text-xs font-semibold leading-tight">{{ type.label }}</span>
                  <div
                    :class="[
                      'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all',
                      form.types.includes(type.value) ? 'border-blue-700 bg-blue-700' : 'border-gray-300',
                    ]"
                  >
                    <svg v-if="form.types.includes(type.value)" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </button>
              </div>

              <p v-if="errors.types" class="text-xs text-red-500 mt-4">{{ errors.types }}</p>
            </div>
          </Transition>

          <!-- Step 2: Coverage Details -->
          <Transition name="slide-fade" mode="out-in">
            <div v-if="currentStep === 2" key="step2" class="p-8 lg:p-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-2" style="font-family:'Playfair Display',serif">
                Tell us about your coverage needs
              </h2>
              <p class="text-gray-500 text-sm mb-8">Help us understand the scope so we can find the most competitive terms.</p>

              <div class="space-y-6">

                <!-- Cover type -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-3">Who is this cover for?</label>
                  <div class="grid grid-cols-3 gap-3">
                    <button
                      v-for="opt in coverFor"
                      :key="opt.value"
                      type="button"
                      @click="form.coverFor = opt.value"
                      :class="[
                        'py-3 px-4 rounded-xl border-2 text-sm font-semibold text-center transition-all',
                        form.coverFor === opt.value
                          ? 'border-blue-700 bg-blue-50 text-blue-700'
                          : 'border-gray-200 text-gray-600 hover:border-blue-200',
                      ]"
                    >
                      {{ opt.label }}
                    </button>
                  </div>
                  <p v-if="errors.coverFor" class="text-xs text-red-500 mt-1">{{ errors.coverFor }}</p>
                </div>

                <!-- Number of people (if group or family) -->
                <div v-if="form.coverFor === 'group' || form.coverFor === 'family'">
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                    {{ form.coverFor === 'group' ? 'Number of employees / members' : 'Number of family members' }}
                  </label>
                  <input
                    v-model="form.memberCount"
                    type="number"
                    min="1"
                    placeholder="e.g. 25"
                    class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <!-- Motor specific -->
                <div v-if="form.types.includes('motor')" class="bg-blue-50 rounded-2xl p-5 space-y-4">
                  <p class="text-xs font-bold text-blue-700 uppercase tracking-widest">Motor Details</p>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-gray-600 mb-1.5">Vehicle Make</label>
                      <input v-model="form.vehicleMake" type="text" placeholder="e.g. Toyota"
                        class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"/>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-600 mb-1.5">Year of Manufacture</label>
                      <input v-model="form.vehicleYear" type="number" placeholder="e.g. 2019"
                        class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"/>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-600 mb-1.5">Estimated Value (KES)</label>
                      <input v-model="form.vehicleValue" type="number" placeholder="e.g. 1500000"
                        class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"/>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-600 mb-1.5">Cover Type</label>
                      <select v-model="form.motorCoverType"
                        class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white">
                        <option value="">Select...</option>
                        <option value="third-party">Third Party Only</option>
                        <option value="comprehensive">Comprehensive</option>
                        <option value="fleet">Fleet / Commercial</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Business specific -->
                <div v-if="form.types.includes('business')" class="bg-amber-50 rounded-2xl p-5 space-y-4">
                  <p class="text-xs font-bold text-amber-700 uppercase tracking-widest">Business Details</p>
                  <div>
                    <label class="block text-xs font-semibold text-gray-600 mb-1.5">Nature of Business</label>
                    <input v-model="form.businessNature" type="text" placeholder="e.g. Retail shop, School, Clinic"
                      class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"/>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-600 mb-1.5">Approximate Annual Turnover (KES)</label>
                    <input v-model="form.turnover" type="number" placeholder="e.g. 5000000"
                      class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"/>
                  </div>
                </div>

                <!-- Additional notes -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">Any additional details? <span class="font-normal text-gray-400">(optional)</span></label>
                  <textarea
                    v-model="form.notes"
                    rows="3"
                    placeholder="e.g. existing cover details, specific requirements, renewal date..."
                    class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Step 3: Personal Details -->
          <Transition name="slide-fade" mode="out-in">
            <div v-if="currentStep === 3" key="step3" class="p-8 lg:p-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-2" style="font-family:'Playfair Display',serif">
                Your contact details
              </h2>
              <p class="text-gray-500 text-sm mb-8">So our advisors can reach you with your personalised quote.</p>

              <div class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span class="text-red-500">*</span></label>
                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="Jane Wanjiku"
                      :class="inputClass(errors.name)"
                    />
                    <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number <span class="text-red-500">*</span></label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      :class="inputClass(errors.phone)"
                    />
                    <p v-if="errors.phone" class="text-xs text-red-500 mt-1">{{ errors.phone }}</p>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="jane@example.com"
                    :class="inputClass(errors.email)"
                  />
                  <p v-if="errors.email" class="text-xs text-red-500 mt-1">{{ errors.email }}</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Location / Town</label>
                    <input
                      v-model="form.location"
                      type="text"
                      placeholder="e.g. Nairobi, Mombasa"
                      class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Contact Method</label>
                    <select
                      v-model="form.contactMethod"
                      class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
                    >
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">Best Time to Reach You</label>
                  <div class="flex flex-wrap gap-3">
                    <button
                      v-for="time in contactTimes"
                      :key="time"
                      type="button"
                      @click="form.bestTime = time"
                      :class="[
                        'px-4 py-2 rounded-full border text-xs font-semibold transition-all',
                        form.bestTime === time
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-gray-200 text-gray-600 hover:border-blue-300',
                      ]"
                    >
                      {{ time }}
                    </button>
                  </div>
                </div>

                <!-- Consent -->
                <div class="flex items-start gap-3 pt-2">
                  <input
                    id="consent"
                    v-model="form.consent"
                    type="checkbox"
                    class="mt-0.5 w-4 h-4 accent-blue-700 cursor-pointer"
                  />
                  <label for="consent" class="text-xs text-gray-500 leading-relaxed cursor-pointer">
                    I agree to be contacted by Samirel Insurance Agency regarding my quote request. My details will not be shared with third parties without my consent.
                  </label>
                </div>
                <p v-if="errors.consent" class="text-xs text-red-500">{{ errors.consent }}</p>
              </div>
            </div>
          </Transition>

          <!-- Step 4: Review & Submit -->
          <Transition name="slide-fade" mode="out-in">
            <div v-if="currentStep === 4 && !submitted" key="step4" class="p-8 lg:p-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-2" style="font-family:'Playfair Display',serif">
                Review your request
              </h2>
              <p class="text-gray-500 text-sm mb-8">Please confirm the details below before submitting.</p>

              <div class="space-y-4">
                <!-- Summary cards -->
                <div class="bg-blue-50 rounded-2xl p-5">
                  <p class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">Insurance Types Selected</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="t in form.types"
                      :key="t"
                      class="bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {{ insuranceTypes.find(x => x.value === t)?.label }}
                    </span>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="bg-gray-50 rounded-2xl p-5">
                    <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Coverage</p>
                    <p class="text-sm font-semibold text-gray-900 capitalize">{{ form.coverFor || '—' }}</p>
                    <p v-if="form.memberCount" class="text-xs text-gray-500 mt-1">{{ form.memberCount }} members</p>
                    <p v-if="form.vehicleMake" class="text-xs text-gray-500 mt-1">{{ form.vehicleMake }} ({{ form.vehicleYear }})</p>
                    <p v-if="form.businessNature" class="text-xs text-gray-500 mt-1">{{ form.businessNature }}</p>
                  </div>

                  <div class="bg-gray-50 rounded-2xl p-5">
                    <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Contact Info</p>
                    <p class="text-sm font-semibold text-gray-900">{{ form.name }}</p>
                    <p class="text-xs text-gray-500 mt-1">{{ form.phone }}</p>
                    <p class="text-xs text-gray-500">{{ form.email }}</p>
                    <p class="text-xs text-gray-500 mt-1 capitalize">Via {{ form.contactMethod }} · {{ form.bestTime }}</p>
                  </div>
                </div>

                <div v-if="form.notes" class="bg-gray-50 rounded-2xl p-5">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Additional Notes</p>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ form.notes }}</p>
                </div>
              </div>

              <!-- Reassurance strip -->
              <div class="mt-6 grid grid-cols-3 gap-3 text-center">
                <div v-for="r in reassurances" :key="r.label" class="bg-white rounded-xl border border-gray-100 p-3">
                  <span class="text-xl block mb-1">{{ r.icon }}</span>
                  <p class="text-xs font-semibold text-gray-700">{{ r.label }}</p>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Success State -->
          <Transition name="slide-fade" mode="out-in">
            <div v-if="submitted" key="success" class="p-8 lg:p-10 text-center">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-3" style="font-family:'Playfair Display',serif">
                Quote Request Received!
              </h2>
              <p class="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-6">
                Thank you, <strong class="text-gray-800">{{ form.name }}</strong>. Our team will review your request and contact you via <strong class="text-gray-800 capitalize">{{ form.contactMethod }}</strong> within <strong class="text-gray-800">24 hours</strong> with a competitive, tailored quote.
              </p>
              <div class="bg-blue-50 rounded-2xl p-5 max-w-sm mx-auto mb-8">
                <p class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">Need to reach us sooner?</p>
                <a href="tel:0720913174" class="text-sm font-semibold text-blue-700 hover:underline flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call 0720-913174
                </a>
              </div>
              <RouterLink to="/" class="btn-primary mx-auto">
                Back to Home
              </RouterLink>
            </div>
          </Transition>

          <!-- Navigation Buttons -->
          <div v-if="!submitted" class="px-8 lg:px-10 pb-8 flex items-center justify-between gap-4 border-t border-gray-100 pt-6">
            <button
              v-if="currentStep > 1"
              type="button"
              @click="prevStep"
              class="btn-outline py-3 px-6"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
              Back
            </button>
            <div v-else></div>

            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-400 font-medium">Step {{ currentStep }} of {{ steps.length }}</span>
            </div>

            <button
              v-if="currentStep < steps.length"
              type="button"
              @click="nextStep"
              class="btn-primary py-3 px-6"
            >
              Continue
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>

            <button
              v-if="currentStep === steps.length"
              type="button"
              @click="handleSubmit"
              class="btn-primary py-3 px-8 bg-green-600 hover:bg-green-700"
            >
              Submit Request
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </button>
          </div>
        </div>

        <!-- Side trust badges -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div v-for="badge in trustBadges" :key="badge.label" class="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-4">
            <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <span class="text-lg">{{ badge.icon }}</span>
            </div>
            <div class="text-left">
              <p class="text-xs font-bold text-gray-800">{{ badge.label }}</p>
              <p class="text-xs text-gray-400">{{ badge.sub }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentStep = ref(1)
const submitted = ref(false)

const steps = [
  { label: 'Insurance Type' },
  { label: 'Coverage Details' },
  { label: 'Your Details' },
  { label: 'Review & Submit' },
]

const progressWidth = computed(() => {
  return `${((currentStep.value - 1) / (steps.length - 1)) * 100}%`
})

const form = reactive({
  // Step 1
  types: [],
  // Step 2
  coverFor: '',
  memberCount: '',
  vehicleMake: '',
  vehicleYear: '',
  vehicleValue: '',
  motorCoverType: '',
  businessNature: '',
  turnover: '',
  notes: '',
  // Step 3
  name: '',
  phone: '',
  email: '',
  location: '',
  contactMethod: 'phone',
  bestTime: 'Morning (8am – 12pm)',
  consent: false,
})

const errors = reactive({
  types: '',
  coverFor: '',
  name: '',
  phone: '',
  email: '',
  consent: '',
})

const insuranceTypes = [
  { value: 'motor', label: 'Motor Insurance', icon: '🚗' },
  { value: 'medical', label: 'Medical / Health', icon: '🏥' },
  { value: 'life', label: 'Life & Pension', icon: '💼' },
  { value: 'business', label: 'Business Insurance', icon: '🏢' },
  { value: 'personal-accident', label: 'Personal Accident', icon: '🦺' },
  { value: 'domestic', label: 'Domestic Package', icon: '🏠' },
  { value: 'marine', label: 'Marine & Transit', icon: '🚢' },
  { value: 'travel', label: 'Travel Insurance', icon: '✈️' },
  { value: 'bonds', label: 'Bonds & Guarantees', icon: '📜' },
  { value: 'financing', label: 'Premium Financing', icon: '💰' },
  { value: 'computer', label: 'Computer / All Risks', icon: '💻' },
  { value: 'other', label: 'Other / Not Sure', icon: '🔍' },
]

const coverFor = [
  { value: 'individual', label: 'Individual' },
  { value: 'family', label: 'Family' },
  { value: 'group', label: 'Business / Group' },
]

const contactTimes = [
  'Morning (8am – 12pm)',
  'Afternoon (12pm – 5pm)',
  'Evening (5pm – 7pm)',
  'Any Time',
]

const reassurances = [
  { icon: '🔒', label: 'Your data is secure' },
  { icon: '⚡', label: 'Response within 24hrs' },
  { icon: '💸', label: 'No obligation quote' },
]

const trustBadges = [
  { icon: '🛡️', label: 'Licensed Agency', sub: 'Commissioner of Insurance, Kenya' },
  { icon: '🏦', label: 'Reputable Insurers', sub: 'Vetted & financially stable' },
  { icon: '🤝', label: 'Free Advisory', sub: 'No hidden consultation fees' },
]

function inputClass(hasError) {
  return [
    'w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition',
    hasError ? 'border-red-400' : 'border-gray-200',
  ]
}

function toggleType(value) {
  const idx = form.types.indexOf(value)
  if (idx === -1) form.types.push(value)
  else form.types.splice(idx, 1)
}

function validateStep(step) {
  let valid = true
  if (step === 1) {
    errors.types = form.types.length === 0 ? 'Please select at least one insurance type.' : ''
    valid = !errors.types
  }
  if (step === 2) {
    errors.coverFor = form.coverFor === '' ? 'Please select who the cover is for.' : ''
    valid = !errors.coverFor
  }
  if (step === 3) {
    errors.name = form.name.trim() ? '' : 'Full name is required.'
    errors.phone = form.phone.trim() ? '' : 'Phone number is required.'
    errors.email = form.email.trim() ? (/.+@.+\..+/.test(form.email) ? '' : 'Enter a valid email address.') : 'Email is required.'
    errors.consent = form.consent ? '' : 'Please accept the terms to continue.'
    valid = !errors.name && !errors.phone && !errors.email && !errors.consent
  }
  return valid
}

function nextStep() {
  if (validateStep(currentStep.value)) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function prevStep() {
  currentStep.value--
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleSubmit() {
  // In production: POST form data to your backend or an email service
  submitted.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>