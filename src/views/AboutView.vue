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
      I am a Software Engineer at Maersk, based in Copenhagen, Denmark, with over {{ yearsOfExperience
      }} years of experience in the IT industry. Since 2017, I have worked as a Frontend Web Developer, primarily using
      frameworks such as Angular and Vue. Additionally, I have developed company websites using Shopify. </p>

    <p>Working alongside agile teams, I've engaged in a variety of exciting projects, including the development of quote
      and booking applications, dashboards, and the integration of Bing Maps for container and ship tracking. Currently,
      I am involved in building quote and booking systems for Maersk Air and LCL cargo, where I have played a
      significant role in migrating to Vue 3 and TypeScript. I have also contributed to the creation of shared design
      system components and improved automation workflows and libraries.
    </p>
    <p>
      I am skilled in tools such as Cypress, Jest, and Vitest for testing, as well as GitHub Actions for CI/CD.
      Additionally, I have acted as a Frontend Developer Community Host and Coordinator for company events. I am
      passionate about secure coding practices and am a member of the Cybersecurity Champions group at Maersk. I have
      participated as a speaker at conferences and meetups, discussing frontend technologies and security best
      practices.
    </p>
    <p>
      I am ISC2 certified in cybersecurity and have a strong desire for continuous learning. I am actively pursuing the
      CompTIA Security+ certification and the Google Cybersecurity Professional certification and preparing for the OSCP
      penetration testing exam, all with a keen interest in cybersecurity roles where I can effectively leverage my
      programming skills. I am eager to contribute to a dynamic team and address real-world security challenges.
    </p>
    <p>
      In addition to my professional work, I am a tech blogger, sharing my expertise and insights on dev.to to inspire
      and educate others. My ultimate goal is to create innovative, secure, and reliable solutions that positively
      impact businesses and communities. Through my efforts, I strive to improve lives and elevate the industry as a
      whole.
    </p>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  min-width: 80vw;
}
</style>
