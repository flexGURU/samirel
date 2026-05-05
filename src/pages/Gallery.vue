<!-- src/pages/GalleryPage.vue -->
<template>
  <div class="pt-24 min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-blue-700 py-16 text-center text-white">
      <h1 class="text-4xl lg:text-5xl font-bold mb-4">Our Gallery</h1>
      <p class="text-blue-100 text-sm max-w-xl mx-auto">
        A visual story of Samirel Insurance Agency.
      </p>
    </section>

    <!-- Controls -->
    <div class="bg-white border-b sticky top-20 z-30">
      <div
        class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center"
      >
        <div class="flex gap-2">
          <button
            v-for="opt in layouts"
            :key="opt.value"
            @click="layout = opt.value"
            :class="[
              'px-3 py-1 text-xs rounded-lg',
              layout === opt.value ? 'bg-blue-700 text-white' : 'bg-gray-100',
            ]"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <section class="max-w-7xl mx-auto px-4 py-10">
      <div
        :class="[
          'grid gap-3',
          layout === 'grid2' && 'grid-cols-1 sm:grid-cols-2',
          layout === 'grid3' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          layout === 'grid4' && 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
        ]"
      >
        <div
          v-for="(img, i) in images"
          :key="i"
          class="group relative rounded-2xl overflow-hidden cursor-pointer"
          @click="openLightbox(i)"
        >
          <div class="aspect-square">
            <img
              :src="img"
              alt=""
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Clean hover (NO text) -->
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"
          ></div>

          <!-- Zoom icon -->
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
          >
            <div class="bg-white rounded-full p-3 shadow-lg">🔍</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div
      v-if="lightbox.open"
      class="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
      @click.self="closeLightbox"
    >
      <img
        :src="images[lightbox.index]"
        class="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
      />

      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white text-xl"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// ✅ Load images properly
const modules = import.meta.glob("/src/assets/images/*", { eager: true });

const images = Object.values(modules).map((m) => m.default);

// ✅ Default = 3 columns
const layout = ref("grid3");

const layouts = [
  { value: "grid2", label: "2 cols" },
  { value: "grid3", label: "3 cols" },
  { value: "grid4", label: "4 cols" },
];

// Lightbox
const lightbox = reactive({ open: false, index: 0 });

function openLightbox(i) {
  lightbox.index = i;
  lightbox.open = true;
}

function closeLightbox() {
  lightbox.open = false;
}
</script>
