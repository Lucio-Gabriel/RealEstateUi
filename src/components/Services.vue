<script setup lang="ts">
import Clock from './svg/Clock.vue';
import HouseCash from './svg/HouseCash.vue';
import HouseSec from './svg/HouseSec.vue';
import Medal from './svg/Medal.vue';

</script>

<template>
    <section class="max-w-6xl mx-auto m-32">
        <div class="flex flex-col items-center justify-center">
            <h2 class="font-semibold text-5xl">
                Nossos Serviços
            </h2>

            <p class="max-w-md text-center text-slate-600 font-normal mt-10">
                Melhore seus anúncios de imóveis e vídeos com
                legendas precisas e envolventes.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 mt-10 justify-center">
            <div class="bg-primary flex gap-5 py-10 px-5  rounded-[16px] md:ml-5 mt-3">
                <div>
                    <HouseCash />
                </div>

                <div class="flex flex-col gap-3">
                    <h3 class="text-xl text-white font-semibold">Impostos acessíveis</h3>

                    <p class="max-w-md text-slate-400 text-base">
                        Ajudamos você a encontrar um lar, oferecendo uma experiência imobiliária
                    </p>
                </div>
            </div>

            <div class="bg-slate-300 flex gap-5 py-10 px-5  rounded-[16px] md:ml-5 mt-3">
                <div>
                    <Medal />
                </div>

                <div class="flex flex-col gap-3">
                    <h3 class="text-xl text-black font-semibold">Casas de qualidade garantida</h3>

                    <p class="max-w-md text-black text-base">
                        Ajudamos você a encontrar um lar, oferecendo uma experiência imobiliária
                    </p>
                </div>
            </div>

            <div class="bg-slate-300 flex gap-5 py-10 px-5  rounded-[16px] md:ml-5 mt-3">
                <div>
                    <Clock />
                </div>

                <div class="flex flex-col gap-3">
                    <h3 class="text-xl text-black font-semibold">Casas de qualidade garantida</h3>

                    <p class="max-w-md text-black text-base">
                        Ajudamos você a encontrar um lar, oferecendo uma experiência imobiliária
                    </p>
                </div>
            </div>

            <div class="bg-slate-300 flex gap-5 py-10 px-5  rounded-[16px] md:ml-5 mt-3">
                <div>
                    <HouseSec />
                </div>

                <div class="flex flex-col gap-3">
                    <h3 class="text-xl text-black font-semibold">Processo rápido e fácil</h3>

                    <p class="max-w-md text-black text-base">
                        Ajudamos você a encontrar um lar, oferecendo uma experiência imobiliária
                    </p>
                </div>
            </div>
        </div>

        <div class="flex items-end justify-end mt-10">
            <a href="#" class="flex items-center gap-3 px-10 py-4 bg-primary hover:bg-blue-800 duration-300 text-white font-semibold rounded-lg">
                Explorar

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
    </section>
</template>