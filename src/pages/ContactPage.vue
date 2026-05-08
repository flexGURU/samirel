<!-- src/pages/ContactPage.vue -->
<template>
  <div class="pt-24">
    <!-- Header -->
    <section class="bg-blue-700 section-padding relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0L0 0 0 40"
                fill="none"
                stroke="white"
                stroke-width="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p
          class="text-blue-300 text-xs font-bold uppercase tracking-widest mb-4"
        >
          We're Here to Help
        </p>
        <h1
          class="text-4xl lg:text-6xl font-bold text-white mb-5"
          style="font-family: &quot;Playfair Display&quot;, serif"
        >
          Get In Touch
        </h1>
        <p class="text-blue-100 text-lg max-w-xl mx-auto">
          Have a question about your cover or need expert risk advice? Our team
          is ready to help you make the right choices.
        </p>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact info -->
          <div>
            <h2
              class="text-2xl font-bold text-gray-900 mb-8"
              style="font-family: &quot;Playfair Display&quot;, serif"
            >
              Contact Information
            </h2>

            <!-- Offices -->
            <div class="space-y-5 mb-10">
              <div
                v-for="office in offices"
                :key="office.name"
                class="card p-5 flex gap-4"
              >
                <div
                  class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">
                    {{ office.name }}
                  </p>
                  <p class="text-xs text-gray-500 mt-0.5">
                    {{ office.address }}
                  </p>
                  <a
                    :href="`tel:${office.tel}`"
                    class="text-xs text-blue-700 font-medium mt-1 inline-block hover:underline"
                    >{{ office.tel }}</a
                  >
                </div>
              </div>
            </div>

            <!-- Direct contacts -->
            <div class="space-y-4">
              <a
                href="tel:0720913174"
                class="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div
                  class="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wide"
                  >
                    Mobile
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors"
                  >
                    +254 735 531 198 / +254 723 383 832
                  </p>
                </div>
              </a>

              <a
                href="mailto:samirelinsurance@gmail.com"
                class="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div
                  class="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wide"
                  >
                    Email
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors"
                  >
                    samirelinsurance@gmail.com
                  </p>
                </div>
              </a>

              <div class="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                <div
                  class="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wide"
                  >
                    Fax
                  </p>
                  <p class="text-sm font-semibold text-gray-900">214662</p>
                </div>
              </div>
            </div>

            <!-- Banking partners -->
            <div class="mt-8 p-5 bg-blue-50 rounded-2xl">
              <p
                class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3"
              >
                Principal Bankers
              </p>
              <div class="flex flex-col gap-2">
                <p class="text-sm font-medium text-gray-800">
                  🏦 Co-operative Bank of Kenya — University Way Branch
                </p>
                <p class="text-sm font-medium text-gray-800">
                  🏦 Equity Bank Limited — Fourways Towers Head Office
                </p>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div>
            <h2
              class="text-2xl font-bold text-gray-900 mb-8"
              style="font-family: &quot;Playfair Display&quot;, serif"
            >
              Send Us a Message
            </h2>
            <ContactForm submit-label="Send Message" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ContactForm from "../components/shared/ContactForm.vue";

const offices = [
  {
    name: "Head Office — Kenindia House",
    address: "2nd Floor, Door C2, Loita Street, Nairobi · P.O. Box 66002-00800",
    tel: "245744",
  },
  {
    name: "Branch — Uchumi House",
    address: "9th Floor, Door 903, Moi Avenue, Nairobi",
    tel: "248923",
  },
];
</script>
