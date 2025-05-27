<script setup>
/* global google */
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { GoogleMap } from 'vue3-google-map';
import { Button } from 'primevue';
import { useRouter } from 'vue-router'

const apiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;
const center_minimap = { lat: -41.333333333333, lng: -72.833333333333 };
const router = useRouter()

const locations = {
  1: [-41.45099080993633, -72.91137907054409],
  2: [-41.459644059180015, -72.93679177759618],
  3: [-41.45513228470117, -72.89195690131898],
  4: [-41.461806416765384, -72.64398589175437],
  5: [-41.31999949376208, -72.98907216042424],
  6: [-41.308548071711755, -72.99303463925783],
  7: [-41.3158340494777, -72.98453779169408],
  8: [-41.47311841414483, -72.94185946177849],
  9: [-41.4854264163152, -72.96320953509274],
  10: [-41.48623176194037, -72.95197199101347],
  11: [-41.6923994215916, -72.64153124940076],
  12: [-41.213837022037175, -72.545831486531],
  13: [-41.173003665745526, -72.45131164385421],
  14: [-41.42599542673814, -72.91162419933077],
  15: [-41.40867838434889, -72.91527323966037],
  16: [-41.460307116508105, -72.95415636080865],
  17: [-41.490067585578274, -72.98449810287657],
  18: [-41.46890178868909, -72.92859436403779],
  19: [-41.317564933109885, -72.98188294157151],
  20: [-41.32024630499987, -72.98641626809182],
  21: [-41.31237220467475, -72.98355512412842],
  22: [-41.25419063697484, -73.00192888305423],
  23: [-41.25295947969833, -73.00696502897301],
  24: [-41.25521001012204, -73.00967242297534],
  25: [-41.32229164398774, -72.9495879531363],
  26: [-41.47555955130856, -72.94846318799955],
  27: [-41.48656238389718, -72.90188946175114],
  28: [-41.473000202195756, -72.9818917889913],
  29: [-41.47213560346924, -72.93952123853487],
  30: [-41.44646400777137, -72.93556075834246],
  31: [-41.39175423949062, -72.8898408785843],
  32: [-41.322620812538204, -72.97533428047507],
  33: [-41.32559205968696, -73.08239468941882],
  34: [-41.74829873888602, -73.71138324175386],
  35: [-41.61589130796214, -73.59461591231867],
  36: [-41.39187529038659, -73.45729297321735],
  37: [-41.138203719806356, -72.40119305861148],
  38: [-41.10429625328993, -72.49578904292123],
  39: [-41.38743264141984, -72.91532881918256],
  40: [-41.46373272455475, -72.91411747206524],
  41: [-41.45695039772679, -72.92496651071585],
  42: [-41.454518108737894, -72.91994668373646],
  43: [-41.31242922679622, -72.97863443344875],
  44: [-41.430198041603255, -73.09823480659892],
  45: [-41.264591261516536, -72.81562490809038],
  46: [-41.07012292913631, -72.93248495159025],
  47: [-41.139153749727264, -73.02627850891861],
  48: [-41.11813880675687, -73.05552526740057],
  49: [-41.11983752927158, -72.61785798464875],
  50: [-41.46411703570792, -72.90314271004647]
};


const getRandomId = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

const randomId = getRandomId(1,27)

const center = { lat: (locations[randomId])[0], lng: (locations[randomId])[1] };

onMounted(async () => {
  const loader = new Loader({
    apiKey: apiKey,
    version: "weekly",
  });

  await loader.load();

  new google.maps.StreetViewPanorama(document.getElementById("street-view"), {
    position: center,
    pov: { heading: 165, pitch: 0 },
    zoom: 1,
    addressControl: false,
    disableDefaultUI: true,
    showRoadLabels: false,
    // Unable camera movement
    // clickToGo: false,
    // linksControl: false,
    // panControl: false,
  });
});

const opacityValue = ref(0.5);
const heightValue = ref("250px");
const widthValue = ref("30%");

//This functions manage the Minimap´s properties according to mouse movement
function mouseEnterMiniMap() {
  widthValue.value = "40%";
  heightValue.value = "300px";
  opacityValue.value = 1;
}

function mouseLeaveMiniMap() {
  widthValue.value = "30%";
  heightValue.value = "250px";
  opacityValue.value = 0.5;
}

const mapInstance = ref(null)
const marker = ref(null)
const googleMapComponent = ref(null)
const clickedPosition = ref(null)
console.log("Mensaje de referencia")

onMounted(() => {
  const checkMap = setInterval(() => {
    const map = googleMapComponent.value?.map
    if (map) {
      clearInterval(checkMap)
      mapInstance.value = map
      console.log("Mapa cargado:", map)

      map.addListener("click", (event) => {
        clickedPosition.value = event.latLng.toJSON();
        console.log("Click detectado en:", event.latLng.toJSON())

        if (marker.value) {
          marker.value.setMap(null)
        }

        marker.value = new google.maps.Marker({
          position: event.latLng,
          map: map,
        })
      })
    }
  }, 200)
})

function handleGuess() {
  console.log("clickedPosition:", clickedPosition.value);

  if (!clickedPosition.value) {
    alert("¡Debes hacer clic en el mapa primero!");
    return;
  }

  Results(clickedPosition.value, center);
}

function Results(position, realPosition) {
  router.push({
    path: "/ResultsScreen",
    query: {
      miniLat: position?.lat ?? 0,
      miniLng : position?.lng ?? 0,
      realLat: realPosition.lat,
      realLng: realPosition.lng,
    }
    });
}

</script>

<template>
  <div class="relative z-0" id="street-view" style="width: 100%; height: 100vh">
    <div
      id="mapa" 
      :style="{
      position: 'absolute',
      right: '0',
      bottom: '0',
      width: widthValue,
      height: heightValue,
      opacity: opacityValue,
      zIndex: 10,
      transition: 'width 0.3s, height 0.3s, opacity 0.3s'}" 
      @mouseenter="mouseEnterMiniMap" 
      @mouseleave="mouseLeaveMiniMap">
      <GoogleMap
        ref="googleMapComponent"
        :api-key= apiKey
        style="height: 300px;"
        :center= center_minimap
        :zoom="7"
        :disable-default-ui="true"
      >
      </GoogleMap>
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-50">
        <Button @click="handleGuess" severity="success" raised>Adivinar</Button>
      </div>
    </div>
  </div>

</template>
