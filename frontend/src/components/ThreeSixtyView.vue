<template>
  <View360 v-if="imgExists" :projection="projection" />
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