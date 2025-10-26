<script setup lang="ts">
import Bathtub from './svg/Bathtub.vue';
import Bed from './svg/bed.vue';
import Layer from './svg/Layer.vue';
import Location from './svg/Location.vue';

</script>

<template>
    <section class="max-w-6xl mx-auto m-32">
        <div class="flex justify-between items-center">
            <div>
                <h3 class="max-w-md font-semibold text-5xl">
                    Descubra o Imóvel Ideal Para Você
                </h3>
            </div>

            <div>
                <p class="max-w-md text-slate-600 font-normal text-sm mr-10">
                    Encontre seu imóvel Eu reuni mais de 50 exemplos de scripts 
                    automatizados de mensagens de texto imobiliárias para usar 
                    em sua primeira campanha de mensagens de texto.
                </p> 
            </div>
        </div>

        <div class="grid grid-cols-2 gap-6 mt-14">
            <div class="h-96 relative">
                <img 
                    src="/src/assets/images/predio2.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 w-[440px] h-32 bg-white bg-opacity-60 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <h3 class="text-black-primary text-xl font-semibold ml-5">Skyper Pool Apartament</h3>

                    <p class="flex items-center text-slate-700 text-xs ml-4">
                        <Location />
                        <span class="ml-2">
                            Road 12, Dhanmondi, Dhaka
                        </span>
                    </p>

                    <div class="flex gap-20 items-center">
                        <h3 class="text-red-500 text-base font-semibold ml-5">
                            BDT 1,45,0000
                        </h3>

                        <ul class="flex gap-6 items-center">
                            <li class="flex gap-2 text-slate-700">
                                <Bed />
                                4
                            </li>
                            <li class="flex item gap-2 text-slate-700">
                                <Bathtub />
                                4
                            </li>
                            <li class="flex gap-2 text-slate-700">
                                <Layer />
                                230 ft
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="h-96 relative">
                <img 
                    src="/src/assets/images/predio1.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 w-[440px] h-32 bg-white bg-opacity-60 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <h3 class="text-black-primary text-xl font-semibold ml-5">
                        Cedar Residence
                    </h3>

                    <p class="flex items-center text-slate-700 text-xs ml-4">
                        <Location />
                        <span class="ml-2">
                            Road 12, Dhanmondi, Dhaka
                        </span>
                    </p>

                    <div class="flex gap-20 items-center">
                        <h3 class="text-red-500 text-base font-semibold ml-5">
                            BDT 1,25,0000
                        </h3>

                        <ul class="flex gap-6 items-center">
                            <li class="flex gap-2 text-slate-700">
                                <Bed />
                                4
                            </li>
                            <li class="flex item gap-2 text-slate-700">
                                <Bathtub />
                                4
                            </li>
                            <li class="flex gap-2 text-slate-700">
                                <Layer />
                                230 ft
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="h-96 relative">
                <img 
                    src="/src/assets/images/predio3.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 w-[440px] h-32 bg-white bg-opacity-60 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <h3 class="text-black-primary text-xl font-semibold ml-5">Skyper Pool Apartament</h3>

                    <p class="flex items-center text-slate-700 text-xs ml-4">
                        <Location />
                        <span class="ml-2">
                            Road 12, Dhanmondi, Dhaka
                        </span>
                    </p>

                    <div class="flex gap-20 items-center">
                        <h3 class="text-red-500 text-base font-semibold ml-5">
                            BDT 1,45,0000
                        </h3>

                        <ul class="flex gap-6 items-center">
                            <li class="flex gap-2 text-slate-700">
                                <Bed />
                                4
                            </li>
                            <li class="flex item gap-2 text-slate-700">
                                <Bathtub />
                                4
                            </li>
                            <li class="flex gap-2 text-slate-700">
                                <Layer />
                                230 ft
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="h-96 relative">
                <img 
                    src="/src/assets/images/predio5.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center rounded-lg">
                    <img src="/src/assets/images/selo-fundo.png" alt="selo site">
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