<script setup>
import { GoogleMap, Polygon } from 'vue3-google-map'
import PuertoVaras from '@/data/boundaries/PuertoVaras.json'
import Llanquihue from '@/data/boundaries/Llanquihue.json'

const boundary = []
PuertoVaras.forEach(node => {
    boundary.push({lat: node.lat, lng: node.lng});
});

const Llanquihueboundary = []
Llanquihue.forEach(node => {
    Llanquihueboundary.push({lat: node.lat, lng: node.lng});
});


const api_key = process.env.VUE_APP_GOOGLE_MAPS_API_KEY

const center = { lat: 24.886, lng: -70.268 }
const PuertoVarasOutline = {
  paths: boundary,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
}
const LlanquihueOutline = {
  paths: Llanquihueboundary,
  strokeColor: '#0389AB',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#0389AB',
  fillOpacity: 0.35,
}
</script>

<template>
  <GoogleMap
    :api-key="api_key"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="5"
  >
    <Polygon :options="LlanquihueOutline" />
    <Polygon :options="PuertoVarasOutline" />
  </GoogleMap>
</template>