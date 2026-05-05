<!-- src/components/home/HeroSection.vue -->
<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
  >
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-blue-50 opacity-70"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-100 opacity-40 -translate-x-1/2 translate-y-1/2"
      ></div>

      <svg
        class="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#1a56db"
              stroke-width="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="container-max w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- LEFT CONTENT -->
        <div class="max-w-xl">
          <!-- Badge + Logo -->
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-4 mb-6"
          >
            <div
              class="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full animate-fade-in"
            >
              <span
                class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"
              ></span>
              Licensed by Commissioner of Insurance, Kenya
            </div>

            <div class="flex justify-center md:justify-end w-full md:w-auto">
              <img
                src="/samirel_logo.png"
                alt="Samirel Logo"
                class="w-40 md:w-48 h-auto"
              />
            </div>
          </div>

          <!-- Heading -->
          <h1
            class="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.08] mb-6 animate-slide-up"
          >
            Secure Your
            <span class="text-blue-700"> Future</span>
            <br />Today
          </h1>

          <!-- Description -->
          <p
            class="text-lg text-gray-600 leading-relaxed mb-8 animate-slide-up animation-delay-200"
          >
            Since 2002, Samirel Insurance Agency has been Kenya's trusted
            partner in risk management — delivering tailored insurance solutions
            with professional excellence and genuine care.
          </p>

          <!-- CTA -->
          <div
            class="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300"
          >
            <RouterLink to="/services" class="btn-outline text-base px-8 py-4">
              Explore Services
            </RouterLink>
          </div>

          <!-- Stats -->
          <div
            class="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6 animate-slide-up animation-delay-400"
          >
            <div
              v-for="stat in trustStats"
              :key="stat.label"
              class="text-center"
            >
              <p class="text-2xl font-bold text-blue-700">
                {{ stat.value }}
              </p>
              <p class="text-xs text-gray-500 mt-1 font-medium">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT VISUAL -->
        <div class="relative hidden lg:block">
          <!-- Main Card (TOP LAYER) -->
          <div
            class="relative z-20 bg-blue-700 rounded-3xl p-8 text-white overflow-hidden shadow-2xl"
          >
            <div
              class="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-blue-600 opacity-50"
            ></div>
            <div
              class="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-blue-800 opacity-40"
            ></div>

            <h3 class="text-2xl font-bold mb-2 relative z-10">
              Quality Next to None
            </h3>

            <p class="text-blue-100 text-sm leading-relaxed relative z-10">
              Professional excellence in whatever magnitude of work — our motto
              since 2002.
            </p>

            <div class="flex flex-wrap gap-2 mt-6 relative z-10">
              <span
                v-for="tag in serviceTags"
                :key="tag"
                class="bg-blue-600 text-blue-100 text-xs px-3 py-1.5 rounded-full font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";

const trustStats = [
  { value: "20+", label: "Years Experience" },
  { value: "100%", label: "Kenyan Owned" },
  { value: "8+", label: "Insurer Partners" },
];

const serviceTags = [
  "Motor",
  "Medical",
  "Life & Pension",
  "Business",
  "Marine",
  "Travel",
];
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.6s ease forwards;
}

.animate-slide-up {
  animation: slide-up 0.7s ease forwards;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}
.animation-delay-300 {
  animation-delay: 0.3s;
}
.animation-delay-400 {
  animation-delay: 0.4s;
}
.animation-delay-500 {
  animation-delay: 0.5s;
}
</style>
