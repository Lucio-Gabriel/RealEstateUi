<template>
    <section class="max-w-8xl mx-auto flex flex-col items-center justify-center hero-overlay-bg md:h-[500px]" style="border-radius: 50px;">
        <div>
            <h2 class="text-white text-5xl font-extrabold">Encontre suas propriedades</h2>
        </div>
        <div class="bg-white p-2 mt-10 rounded-full w-full max-w-xl">
            <div class="flex items-center">
                <div class="relative grow">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-community w-4 h-4 text-gray-500 dark:text-gray-400">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                            <path d="M13 7l0 .01" /><path d="M17 7l0 .01" /><path d="M17 11l0 .01" />
                            <path d="M17 15l0 .01" />
                        </svg>
                    </div>
                    <input type="search" class="w-full ps-10 pe-10 py-2 bg-slate-200 rounded-full border-none focus:ring-0 focus:outline-none" placeholder="Encontre Seu Imóvel">
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal w-4 h-4 text-gray-500 dark:text-gray-400">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" />
                            <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M4 18l11 0" /><path d="M19 18l1 0" />
                        </svg>
                    </div>
                </div>
    
                <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-[#1F3777] rounded-full duration-300 hover:bg-blue-800 focus:ring-4">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
    </section>
</template>

<style>
    .hero-overlay-bg {
        background-image: linear-gradient(rgba(26, 51, 57, 0.7), rgba(36, 61, 67, 0.4)), url('/src/assets/edificio.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
</style>