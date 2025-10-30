<script setup>
import Navbar from './components/Navbar.vue'; 
import Main from './components/Main.vue'; 
import BuildingSection from './components/BuildingSection.vue';
import SectionTrust from './components/SectionTrust.vue';
import Services from './components/Services.vue';
import SectionProperty from './components/SectionProperty.vue';
import SectionAreas from './components/SectionAreas.vue';
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-52">
    <Navbar />
    <Main />
    <BuildingSection/>
    <SectionTrust />
    <Services />
    <SectionProperty />
    <SectionAreas />
  </div>
</template>