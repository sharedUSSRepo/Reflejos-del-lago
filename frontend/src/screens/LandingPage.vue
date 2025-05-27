<template>
    <div class="bg-gray-800 min-h-screen justify-center">
        <div class="">
            <img src="../assets/images/logo.png" alt="logo" class="h-32 w-auto mx-auto">
            <p class="text-center text-white font-minecraft">¿Qué tanto conoces sobre la provincia de Llanquihue?</p>
        </div>
        <GameModes class="mt-7" />
    </div>
    <h1 class="text-center text-4xl font-minecraft mt-4">Bienvenido</h1>
    <div class="grid grid-cols-2 grid-rows-3 gap-4 justify-items-center">
        <!-- First element -->
        <Card style="width: 25rem; overflow: hidden">
            <template #header>
                <img alt="user header" src="../assets/images/landingPage/card.jpg" />
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
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button label="Cancel" severity="secondary" outlined class="w-full" />
                    <Button label="Save" class="w-full" />
                </div>
            </template>
        </Card>

        <!-- Second element -->
        <div class="w-full">
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
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
    </div>
</template>

<script setup>
import GameModes from '@/components/GameModes.vue';
import Card from 'primevue/card';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';


</script>