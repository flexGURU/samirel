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
                src="/logo.png"
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
            Samirel Insurance Agency has been Kenya's trusted partner in risk
            management — delivering tailored insurance solutions with
            professional excellence and genuine care.
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
        <div class="relative hidden lg:flex flex-col gap-4 animate-slide-up animation-delay-200">

          <!-- Decorative accent blob behind video -->
          <div class="absolute -top-6 -right-6 w-64 h-64 rounded-full bg-blue-100 opacity-60 blur-2xl pointer-events-none"></div>
          <div class="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-blue-200 opacity-40 blur-2xl pointer-events-none"></div>

          <!-- Video Card -->
          <div class="relative z-20 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-blue-100 animate-float">
            <!-- Top bar label -->
            <div class="bg-blue-700 px-5 py-3 flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-red-400"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span class="w-3 h-3 rounded-full bg-green-400"></span>
              <span class="ml-2 text-blue-100 text-xs font-semibold tracking-wide uppercase">
                Samirel Insurance — Who We Are
              </span>
            </div>

            <!-- Iframe -->
            <div class="relative w-full" style="padding-top: 56.25%;">
              <iframe
                src="https://drive.google.com/file/d/1yfXus3VayRZpW3nKHn4ibLomh6RCepS8/preview"
                class="absolute inset-0 w-full h-full"
                allow="autoplay"
                allowfullscreen
                frameborder="0"
              ></iframe>
            </div>
          </div>

          <!-- Bottom pill tags row -->
          <div class="relative z-20 flex flex-wrap gap-2 justify-center mt-2">
            <span
              v-for="tag in serviceTags"
              :key="tag"
              class="bg-white border border-blue-100 text-blue-700 text-xs px-4 py-1.5 rounded-full font-semibold shadow-sm"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Quality badge -->
          <div class="relative z-20 flex justify-center mt-1">
            <div class="inline-flex items-center gap-2 bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg">
              <svg class="w-4 h-4 text-yellow-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Quality Next to None — Trusted by Kenyans
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
  animation: float 5s ease-in-out infinite;
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