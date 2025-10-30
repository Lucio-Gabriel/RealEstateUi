<template>
    <section class="max-w-6xl mx-auto m-32">
        <div class="flex justify-between items-center">
            <div>
                <h3 class="max-w-md font-semibold text-5xl">
                    Encontre Imóveis Nessas Áreas
                </h3>
            </div>

            <div>
                <p class="max-w-md text-slate-600 font-normal text-sm mr-10 mt-3">
                    Encontre seu imóvel Eu reuni mais de 50 exemplos de scripts 
                    automatizados de mensagens de texto imobiliárias para usar 
                    em sua primeira campanha de mensagens de texto.
                </p> 
            </div>
        </div>

        <div class="flex items-center justify-end mt-14 gap-5">
            <a href="#" class="py-3 px-10 bg-primary text-white rounded-[20px] text-xs font-semibold">
                All
            </a>

            <a href="#" class="py-3 px-10 border border-primary text-primary hover:bg-primary hover:text-white duration-300 rounded-[25px] text-xs font-semibold">
                Dhanmondi
            </a>

            <a href="#" class="py-3 px-10 border border-primary text-primary hover:bg-primary hover:text-white duration-300 rounded-[25px] text-xs font-semibold">
                Banani
            </a>

            <a href="#" class="py-3 px-10 border border-primary text-primary hover:bg-primary hover:text-white duration-300 rounded-[25px] text-xs font-semibold">
                Uttara
            </a>

            <a href="#" class="py-3 px-10 border border-primary text-primary hover:bg-primary hover:text-white duration-300 rounded-[25px] text-xs font-semibold">
                Mirpur
            </a>

            <a href="#" class="py-3 px-10 border border-primary text-primary hover:bg-primary hover:text-white duration-300 rounded-[25px] text-xs font-semibold">
                Basundhara
            </a>

            <a href="#" class="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-right size-6">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 4l3 8l-3 8" />
                </svg>
            </a>
        </div>

        <div class="grid grid-cols-3 gap-7 mt-14">
            <div class="h-96 w-[570px] relative">
                <img 
                    src="/src/assets/images/predio3.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <p class="flex items-center text-white text-md ml-4 font-normal">
                        <Location />
                        <span class="ml-2">
                            8 Properties
                        </span>
                    </p>
                    
                    <h3 class="text-white text-2xl font-semibold ml-5">
                        Gazipur
                    </h3>
                </div>
            </div>

            <div class="h-96 w-[266px] relative ml-48">
                <img 
                    src="/src/assets/images/predio4.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <p class="flex items-center text-white text-md ml-4 font-normal">
                        <Location />
                        <span class="ml-2">
                            8 Uttara
                        </span>
                    </p>
                    
                    <h3 class="text-white text-2xl font-semibold ml-5">
                        Mirpur
                    </h3>
                </div>
            </div>

            <div class="h-96 w-[266px] relative ml-24">
                <img 
                    src="/src/assets/images/predio2.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <p class="flex items-center text-white text-md ml-4 font-normal">
                        <Location />
                        <span class="ml-2">
                            8 Properties
                        </span>
                    </p>
                    
                    <h3 class="text-white text-2xl font-semibold ml-5">
                        Bashundhara
                    </h3>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-6 mt-6">
            <div class="h-96 relative">
                <img 
                    src="/src/assets/images/predio1.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <p class="flex items-center text-white text-md ml-4 font-normal">
                        <Location />
                        <span class="ml-2">
                            8 Properties
                        </span>
                    </p>
                    
                    <h3 class="text-white text-2xl font-semibold ml-5">
                        Gulshan
                    </h3>
                </div>
            </div>

            <div class="h-96 relative">
                <img 
                    src="/src/assets/images/predio2.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <p class="flex items-center text-white text-md ml-4 font-normal">
                        <Location />
                        <span class="ml-2">
                            8 Properties
                        </span>
                    </p>
                    
                    <h3 class="text-white text-2xl font-semibold ml-5">
                        Dhanmondi
                    </h3>
                </div>
            </div>

            <div class="h-96 relative">
                <img 
                    src="/src/assets/images/predio3.jpg" 
                    alt="foto hotel"
                    class="rounded-lg w-full h-full object-cover"
                />

                <div class="absolute inset-0 mt-56 ml-5 flex flex-col items-start justify-center gap-2 rounded-lg">
                    <p class="flex items-center text-white text-md ml-4 font-normal">
                        <Location />
                        <span class="ml-2">
                            8 Properties
                        </span>
                    </p>
                    
                    <h3 class="text-white text-2xl font-semibold ml-5">
                        Dhanmondi
                    </h3>
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