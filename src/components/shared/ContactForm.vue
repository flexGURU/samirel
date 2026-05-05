<!-- src/components/shared/ContactForm.vue -->
<template>
  <form class="space-y-5" @submit.prevent="handleSubmit" novalidate>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span class="text-red-500">*</span></label>
        <input
          v-model="form.name"
          type="text"
          placeholder="John Kamau"
          class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          :class="{ 'border-red-400': errors.name }"
        />
        <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span class="text-red-500">*</span></label>
        <input
          v-model="form.phone"
          type="tel"
          placeholder="+254 700 000 000"
          class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          :class="{ 'border-red-400': errors.phone }"
        />
        <p v-if="errors.phone" class="text-xs text-red-500 mt-1">{{ errors.phone }}</p>
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
      <input
        v-model="form.email"
        type="email"
        placeholder="you@example.com"
        class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1.5">Insurance Type <span class="text-red-500">*</span></label>
      <select
        v-model="form.type"
        class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
        :class="{ 'border-red-400': errors.type }"
      >
        <option value="" disabled>Select insurance type...</option>
        <option v-for="opt in insuranceTypes" :key="opt" :value="opt">{{ opt }}</option>
      </select>
      <p v-if="errors.type" class="text-xs text-red-500 mt-1">{{ errors.type }}</p>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1.5">Message / Additional Details</label>
      <textarea
        v-model="form.message"
        rows="4"
        placeholder="Tell us about your needs, number of employees, vehicle details, etc."
        class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
      ></textarea>
    </div>

    <button
      type="submit"
      class="btn-primary w-full justify-center py-4 text-base"
      :disabled="submitted"
    >
      <span v-if="!submitted">{{ submitLabel }}</span>
      <span v-else class="flex items-center gap-2">
        <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        Submitted! We'll be in touch shortly.
      </span>
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

defineProps({
  submitLabel: { type: String, default: 'Send Message' },
})

const form = reactive({ name: '', phone: '', email: '', type: '', message: '' })
const errors = reactive({ name: '', phone: '', type: '' })
const submitted = ref(false)

const insuranceTypes = [
  'Motor Insurance',
  'Medical / Health Insurance',
  'Life & Pension',
  'Business Insurance',
  'Personal Accident',
  'Domestic Package',
  'Marine & Goods in Transit',
  'Travel Insurance',
  'Premium Financing',
  'Other',
]

function validate() {
  errors.name = form.name.trim() ? '' : 'Full name is required.'
  errors.phone = form.phone.trim() ? '' : 'Phone number is required.'
  errors.type = form.type ? '' : 'Please select an insurance type.'
  return !errors.name && !errors.phone && !errors.type
}

function handleSubmit() {
  if (!validate()) return
  // In a real project, POST to your backend or emailjs here.
  submitted.value = true
}
</script>