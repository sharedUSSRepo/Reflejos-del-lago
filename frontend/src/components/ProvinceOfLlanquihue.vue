<script setup>
import { GoogleMap, Polygon } from 'vue3-google-map'
import PuertoVaras from '@/data/boundaries/PuertoVaras.json'
import Llanquihue from '@/data/boundaries/Llanquihue.json'
import Frutillar from '@/data/boundaries/Frutillar.json'
import LosMuermos from '@/data/boundaries/LosMuermos.json'

const api_key = process.env.VUE_APP_GOOGLE_MAPS_API_KEY
const center = { lat: -41.471798, lng: -72.9395915 }

const PuertoVarasOutline = PuertoVaras.map((ring) => ({
  paths: ring,
  strokeColor: '#FF0000',
  strokeOpacity: 0.7,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.1
}))

const LlanquihueOutline = Llanquihue.map((ring) => ({
  paths: ring,
  strokeColor: '#0389AB',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#0389AB',
  fillOpacity: 0.35,
}))

const LosMuermosOutline = LosMuermos.map((ring) => ({
  paths: ring,
  strokeColor: '#0000FF',
  strokeOpacity: 0.7,
  strokeWeight: 2,
  fillColor: '#0000FF',
  fillOpacity: 0.1
}))

const FrutillarOutline = Frutillar.map((ring) => ({
  paths: ring,
  strokeColor: '#e38010',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#e38010',
  fillOpacity: 0.35,
}))

</script>

<template>
  <GoogleMap :api-key="api_key" style="width: 100%; height: 500px" :center="center" :zoom="9">
    <Polygon v-for="(opts, idx) in PuertoVarasOutline" :key="idx" :options="opts" />
    <Polygon v-for="(opts, idx) in FrutillarOutline" :key="idx" :options="opts" />
    <Polygon v-for="(opts, idx) in LlanquihueOutline" :key="idx" :options="opts" />
    <Polygon v-for="(opts, idx) in LosMuermosOutline" :key="idx" :options="opts" />
  </GoogleMap>
</template>