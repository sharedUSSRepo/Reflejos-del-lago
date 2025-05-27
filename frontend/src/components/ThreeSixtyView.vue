<template>
  <View360
    v-if="imgExists"
    :projection="projection"
    :rotate="false"
    :autoplay="{ 
      speed: 0.4,               // positive = clockwise, negative = CCW
      delay: 0,               // ms before start; 0 = immediate
      pauseOnHover: false     // keep spinning even if the mouse is over it
    }"
    canvasClass="w-full h-full"
  />
</template>

<script setup>
import { View360, EquirectProjection } from "@egjs/vue3-view360";
import { defineProps, ref, onMounted } from "vue";

const props = defineProps(["image"]);
const imgExists = ref(false);

const imageSrc = `/dataset/${props.image}.jpg`;
const projection = new EquirectProjection({
  src: imageSrc,
});

/**
 * Check if the image exists
 * @param {string} imageSrc - The source of the image
 */
onMounted(() => {
  const img = new Image();
  img.src = imageSrc;
  img.onload = () => {
    imgExists.value = true;
  };
  img.onerror = () => {
    imgExists.value = false;
    console.log(`Image not found: ${imageSrc}`);
  };
});
</script>