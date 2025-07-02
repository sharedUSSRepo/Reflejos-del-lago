<template>
    <!-- Polaroid container with 360° background -->
    <Dialog v-model:visible="loginRegisterVisible" :header="(isLoginScreen) ? 'Login' : 'Register'"
        :style="{ width: '25rem' }" position="topright" :modal="true" :draggable="false">

        <div v-if=(currentUser) class="flex flex-col gap-4 w-full">
            <h1>Bienvenido, {{ currentUser.username }}!</h1>
            <Button v-if="currentUser" text size="small" label="Cerrar sesión" severity="danger" @click="logout" />
        </div>
        <div v-else>
            <span class="text-surface-500 dark:text-surface-400 block mb-8">
                {{ isLoginScreen ? 'Inicia sesión con tus credenciales.' : 'Crea una cuenta nueva.' }}
            </span>
            <div v-if="isLoginScreen" class="flex flex-col gap-4 w-full">
                <!-- LOGIN FORM -->
                <IftaLabel class="w-full">
                    <InputText id="username" v-model="username" class="w-full" />
                    <label for="username">Usuario</label>
                </IftaLabel>
                <IftaLabel class="w-full my-4">
                    <InputText id="password" v-model="password" class="w-full" type="password" />
                    <label for="password">Contraseña</label>
                </IftaLabel>
                <Message v-if="errorMessage" severity="error" size="small" variant="simple" :closable="false"
                    class="mb-4">
                    {{ errorMessage }}
                </Message>
                <div class="flex justify-end gap-2">
                    <Button label="Entrar" @click="sendLogin" class="w-full" />
                </div>
            </div>
            <div v-else class="flex flex-col gap-4 w-full">
                <!-- REGISTER FORM -->
                <IftaLabel class="w-full">
                    <InputText id="username" v-model="username" class="w-full" />
                    <label for="username">Usuario</label>
                </IftaLabel>
                <IftaLabel class="w-full my-4">
                    <InputText id="password" v-model="password" class="w-full" type="password" />
                    <label for="password">Contraseña</label>
                </IftaLabel>
                <Message v-if="errorMessage" severity="error" size="small" variant="simple" :closable="false"
                    class="mb-4">
                    {{ errorMessage }}
                </Message>
                <div class="flex justify-end gap-2">
                    <Button label="Registrarse" @click="sendRegister" class="w-full" />
                </div>
            </div>
            <!-- TOGGLE BUTTON -->
            <div class="text-center mt-6 flex justify-center">
                <Button text size="small" @click="isLoginScreen = !isLoginScreen"
                    :label="isLoginScreen ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'" />
            </div>
        </div>

    </Dialog>

    <div class="relative min-h-screen">

        <!-- 360° background -->
        <ThreeSixtyView v-if="show360" image="example4"
            class="absolute inset-0 pointer-events-none w-full h-full opacity-50" />
        <div class="absolute top-2 right-2 z-20">
            <Avatar icon="pi pi-user" class="cursor-pointer bg-green-500 text-white" size="large" shape="circle"
                @click="openPosition" />
        </div>

        <!-- HEADER: top-aligned, but centered logo & text -->
        <div class="relative z-10 bg-transparent pt-8 px-8 text-center">
            <img src="../assets/images/logo.png" alt="logo" class="h-32 w-auto mx-auto" />
            <p class="mt-4 text-white font-minecraft">
                ¿Qué tanto conoces sobre la provincia de Llanquihue?
            </p>
            <GameModes class="mt-7" />
        </div>
    </div>

    <!-- Welcome -->
    <div class="mx-24">
        <h1 class="text-center text-4xl font-minecraft mt-4">Bienvenido</h1>
        <div class="grid grid-cols-2 gap-4 justify-items-center">
            <!-- First element -->
            <Card style="width: 25rem; overflow: hidden">
                <template #header>
                    <div class="h-96 w-96">
                        <ProvinceOfLlanquihue></ProvinceOfLlanquihue>
                    </div>
                    <!-- <img alt="user header" src="../assets/images/landingPage/card.jpg" /> -->
                </template>
                <template #title>Reflejos del Lago</template>
                <template #subtitle>Explora la provincia</template>
                <template #content>
                    <p class="m-0">
                        Explora la provincia de Llanquihue a través de sus paisajes. Ubicada en la región de Los Lagos,
                        Chile, esta provincia
                        es famosa por sus impresionantes vistas del Lago Llanquihue, el volcán Osorno y la
                        cordillera de los Andes.
                    </p>
                </template>
            </Card>

            <!-- Second element -->
            <DataTable :value="leaderboard" class="w-full">
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="text-xl font-bold">Tabla de clasificaciones</span>
                        <Button @click="loadLeaderboard" icon="pi pi-refresh" rounded raised />
                    </div>
                </template>
                <Column header="">
                    <template #body="slotProps">
                        {{ slotProps.index + 1 }}
                    </template>
                </Column>
                <Column field="username" header="Nombre"></Column>
                <Column field="score" header="Puntaje"></Column>
                <Column field="total_plays" header="Partidas jugadas"></Column>
                <Column field="average_score" header="Puntaje promedio"></Column>
            </DataTable>
        </div>
        <div class="w-full my-5">
            <!-- <h1 class="font-bold text-2xl">Modos</h1>
            <p>Disfruta de los siguientes modos para desafiar tu conocimiento.</p> -->
            <Accordion value="0">
                <AccordionPanel value="0">
                    <AccordionHeader>Modo normal</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            Prepárate para una inmersión total en la belleza de la Provincia de Llanquihue con este
                            desafiante
                            modo de juego GeoGuessr. ¿Crees conocer sus lagos, volcanes y pintorescos pueblos? ¡Es hora
                            de poner
                            a prueba tus conocimientos geográficos y tu ojo para el detalle! <br>
                            Te lanzarás a un punto aleatorio en la vasta y diversa Provincia de Llanquihue.
                            Desde
                            las orillas del Lago Llanquihue hasta los rincones más remotos de la cordillera, cada ronda
                            es una
                            nueva incógnita. Tendrás libertad para mover la cámara, avanzar y retroceder, explorando
                            cada calle,
                            cada sendero y cada detalle que pueda darte una pista. <br>
                            ¡Afina tu vista, confía en tu intuición y sumérgete en el corazón de Llanquihue!
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                    <AccordionHeader>Sin movimiento</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            Prepárate para una experiencia que pondrá a prueba tu agudeza visual y tu
                            conocimiento de
                            la Provincia de Llanquihue como nunca antes. En este modo de juego, la clave no es la
                            exploración,
                            ¡sino la observación!<br>
                            Serás transportado a un punto aleatorio dentro de la fascinante Provincia de
                            Llanquihue.
                            Pero aquí está el giro: no podrás moverte. Tu ubicación será fija, una ventana única a un
                            rincón de
                            este hermoso territorio. <br>
                            ¡Agudiza tus sentidos y demuestra que puedes identificar cualquier lugar de Llanquihue con
                            solo una
                            mirada!
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                    <AccordionHeader>Modo infinito</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            Prepárate para una inmersión sin fin en la asombrosa geografía de la Provincia de Llanquihue
                            con
                            este emocionante modo de juego GeoGuessr. ¿Crees poder dominar cada rincón, cada lago y cada
                            volcán?
                            ¡Es hora de poner a prueba tu resistencia geográfica y tu habilidad para la exploración!
                            <br>
                            Te lanzarás a un punto aleatorio en la vasta y diversa Provincia de Llanquihue. A diferencia
                            de
                            otros modos, aquí la aventura nunca termina. Cada ronda es una nueva oportunidad para
                            descubrir un
                            paisaje diferente, un pueblo encantador o un camino escondido. <br>
                            ¡La Provincia de Llanquihue te espera con un sinfín de paisajes por explorar! ¿Hasta dónde
                            crees que
                            podrás llegar?
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </div>

    <!-- Footer -->
    <div>
        <footer class="text-gray-300 p-4 mt-8">
            <img src="../assets/images/logo.png" alt="Logo of Reflejos del lago" class="h-12 w-auto">
            <div class="container mx-auto text-left">
                <p class="text-sm">© 2025 Reflejos del lago. Todos los derechos reservados.</p>
                <a href="https://github.com/sharedUSSRepo/Reflejos-del-lago" target="_blank">
                    <strong class="text-sm">Desarrollado por Alan y Vinbu</strong>
                </a>
            </div>
        </footer>
    </div>
</template>

<script setup>
import GameModes from '@/components/GameModes.vue';
import ProvinceOfLlanquihue from '@/components/ProvinceOfLlanquihue.vue';
import Card from 'primevue/card';
import Accordion from 'primevue/accordion';
import Button from 'primevue/button';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';
import Avatar from 'primevue/avatar';
// import { leaderboard } from '@/data/leaderboard';
// import ThreeSixtyView from '../components/ThreeSixtyView.vue'
import { defineAsyncComponent } from 'vue';
import axios from 'axios'
import { ref, onMounted, nextTick  } from 'vue';
// import ColumnGroup from 'primevue/columngroup';   // optional
// import Row from 'primevue/row';   

const ThreeSixtyView = defineAsyncComponent(() => import('../components/ThreeSixtyView.vue'));
let leaderboard = ref([])
const show360 = ref(false);
const loginRegisterVisible = ref(false);
const username = ref('');
const password = ref('');
const isLoginScreen = ref(true);
const currentUser = ref(null);
const errorMessage = ref('');

onMounted(async () => {
    loadLeaderboard();
    getUserData();

    await nextTick();

    setTimeout(() => {
        show360.value = true;
    }, 300);
});

const openPosition = () => {
    loginRegisterVisible.value = true;
    isLoginScreen.value = true; // always open in login first
};

let loadLeaderboard = function () {
    console.log('Loading leaderboard...');
    axios.get('http://localhost:3000/leaderboard').then(response => {
        leaderboard.value = response.data.users;
    })
}

let getUserData = function () {
    console.log('getting user data...');
    axios.get('http://localhost:3000/landingPage', { withCredentials: true })
        .then(response => {
            console.log("User is logged in:", response.data);
            currentUser.value = response.data.user;
        })
        .catch(err => {
            console.warn("User not logged in", err);
            currentUser.value = null;
        });
}

let sendRegister = function () {
    axios.put('http://localhost:3000/user/register', { username: username.value, password: password.value })
        .then(response => {
            console.log('Type updated successfully:', response.data);
        }).catch(err => {
            errorMessage.value = err.response?.data?.error || 'Error desconocido';
        });
}

let sendLogin = function () {
    axios.post('http://localhost:3000/user/login', { username: username.value, password: password.value }, { withCredentials: true })
        .then(response => {
            console.log('Login successful:', response.data);
            window.location.reload();
        })
        .catch(err => {
            errorMessage.value = err.response?.data?.error || 'Error desconocido';
        });
}

const logout = async () => {
    try {
        await axios.post('http://localhost:3000/user/logout', {}, { withCredentials: true });
        currentUser.value = null;
        loginRegisterVisible.value = false;
        console.log("Logged out");
        window.location.reload();
    } catch (err) {
        console.error("Logout failed", err);
    }
};

</script>