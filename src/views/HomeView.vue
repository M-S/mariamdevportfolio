<script setup lang="ts">
import ProfilePicWindow from '@/components/ProfilePicWindow.vue';
import AboutMeWindow from '@/components/AboutMeWindow.vue';
import TechBlogsVue from '@/components/TechBlogs.vue';
import ContactMeWindow from '@/components/ContactMeWindow.vue';
import CertificationsWindow from '@/components/CertificationsWindow.vue';
import StickyNote from '@/components/BaseStickyNote.vue';
</script>
<template>
  <div class="home">
    <div class="row-1">
      <ProfilePicWindow />
      <AboutMeWindow />
    </div>
    <div class="row-3">
      <CertificationsWindow />
      <StickyNote>
        <h2>My Cyber Learning Profiles</h2>
        <h3>Hackthebox</h3>
        <p>Student ID: HTB-95B6A9AFA3</p>
        <h3>Secure Code Warrior</h3>
        <p><a href="https://portal.securecodewarrior.com/#/stats/62605a718feac6007f2642c3" target="_blank">Profile</a>
        </p>
        <h3>TryHackMe</h3>
        <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4444453"
          style='border:none;'></iframe>
      </StickyNote>
    </div>
    <div class="row-3">
      <ContactMeWindow />
      <img class="social-media" src="/social-media.png" alt="social media icons" width="200px">
    </div>
    <div class="row-2">
      <TechBlogsVue />
    </div>

  </div>
  <div>
    <a href="https://www.flaticon.com/free-stickers/coding" title="coding stickers">Coding stickers created by Stickers
      -
      Flaticon</a>,
    <a href="https://www.flaticon.com/free-stickers/certificate" title="certificate stickers">Certificate stickers
      created by Stickers - Flaticon</a>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 20px;
  justify-items: center;

  a {
    color: var(--mp-blue);
    font-weight: bold;
  }

  a:hover {
    color: var(--color-bg);
    cursor: pointer;
  }

  a::after {
    text-decoration: none;
    content: " 🔗";
  }
}

.row-1,
.row-2,
.row-3 {
  display: grid;
  gap: 20px;
  justify-items: center;
  vertical-align: middle;
}


@media (min-width: 1024px) {
  .row-1 {
    background-image: url('/coding.png');
    background-size: 300px 300px;
    background-repeat: no-repeat;
    background-position: bottom left;
    background-position-x: 125px;
    grid-template-columns: 2fr 3fr;
    height: fit-content
  }

  .row-2 {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
  }

  .row-3 {
    margin: 20px;
    grid-template-columns: 2fr 1fr;
  }

}
</style>
