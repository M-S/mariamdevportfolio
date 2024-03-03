<script setup lang="ts">
import { computed } from 'vue';
const currentDate = new Date();
const startWorkDate = "2017-01-01";
const yearsOfExperience = computed(() => (Math.floor((currentDate.getTime() - new Date(startWorkDate).getTime()) / (1000 * 60 * 60 * 24 * 365))));

</script>
<template>
  <div class="about">
    <h1>About me</h1>
    <p>
      I am a frontend developer and a tech speaker and has experience for over {{ yearsOfExperience }} years in the IT
      industry. I started with
      open-source microcontrollers and Android UI, where I used Python, BASIC, Java, C, and C++ on various projects.
      I have been working as a frontend web developer, since 2017 and have mostly worked with frameworks like Angular and
      Vue. I have also created company websites in Shopify.

      Working alongside agile teams, I've tackled a wide range of exciting projects, from developing quote and booking
      applications, dashboards, to integrating Bing maps for container and ship tracking. Recently, I had the opportunity
      to build quote and booking systems for Maersk Air and LCL product, using Vue.
    </p>
    <p>My proficiency extends beyond frontend development, as I'm skilled in an array of frameworks and tools such as
      Cypress, Jest, and Vitest for testing, Github Actions for CI/CD, and Figma and Miro for design. Additionally, I've
      am also serving as a Frontend Community host, Cyber Security Champion, and Conference Speaker about web
      technologies.</p>
    <p>I have a desire for continuous learning and I am currently in my pursuit of ISC2 certification for Cybersecurity.
      I'm also a tech blogger, sharing my expertise and insights on dev.to to inspire and educate others.
    </p>
    <p>
      My ultimate goal is to create innovative, secure, and reliable solutions that make a positive impact on businesses
      and communities. Through my tireless efforts, I strive to improve lives and elevate the industry as a whole.
    </p>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  min-width: 80vw;
}
</style>
