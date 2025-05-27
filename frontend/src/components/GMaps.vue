<script setup>
import { GoogleMap, Marker, Polyline } from 'vue3-google-map'
import { useRoute } from 'vue-router'

const apiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;
const route = useRoute()


const miniLat = parseFloat(route.query.miniLat)
const miniLng = parseFloat(route.query.miniLng)
const realLat = parseFloat(route.query.realLat)
const realLng = parseFloat(route.query.realLng)

const Minimapa = {lat: miniLat, lng: miniLng}
const Coordenadas_Real = {lat: realLat, lng: realLng}

const center = {lat: realLat, lng: realLng}

const line_coordinates = [
  { lat: miniLat, lng: miniLng },
  { lat: realLat, lng: realLng },
]

const line_properties = {
  path: line_coordinates,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2,
}

// function haversineDistance(miniLat, miniLng, realLat, realLng) {
//   const R = 6371000 // radio de la Tierra en metros
//   const toRadians = deg => deg * (Math.PI / 180)

//   const dLat = toRadians(realLat -miniLat)
//   const dLon = toRadians(realLng - miniLng)

//   const a = Math.sin(dLat / 2) ** 2 +
//             Math.cos(toRadians(miniLat)) * Math.cos(toRadians(realLat)) *
//             Math.sin(dLon / 2) ** 2

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

//   return R * c // en metros
// }

</script>

<template>
  <GoogleMap
  :api-key="apiKey"
  style="width: 100%; height: 100vh"
  :center="center"
  :zoom="12"
  >
    <Marker :options="{
      position: Minimapa,
      label: {text: 'Tu Respuesta', color: 'blue', fontSize: '14px'}
    }" />
    <Marker :options="{
      position: Coordenadas_Real,
      label: {text: 'Coordenadas Reales', color: 'green', fontSize: '14px'}
      }" />
    <Polyline :options="line_properties" />
  </GoogleMap>
</template>