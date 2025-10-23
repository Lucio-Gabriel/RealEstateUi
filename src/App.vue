<script setup>
import Navbar from './components/Navbar.vue'; 
import Main from './components/Main.vue'; 
import BuildingSection from './components/BuildingSection.vue';
import SectionTrust from './components/SectionTrust.vue';
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-52">
    <Navbar />
    <Main />
    <BuildingSection/>
    <SectionTrust />
  </div>
</template>