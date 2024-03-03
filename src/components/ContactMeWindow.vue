<script setup lang="ts">
import BaseWindowFrameVue from './BaseWindowFrame.vue';
</script>
<template>
    <BaseWindowFrameVue class="contact-me" color="white" title="📹 Contact or Follow Me" height="fit-content" width="fit-content">
        <div class="social-links">
            <div>
                <a href="mailto:gigabit.02shuffle@icloud.com" target="_blank">
                    <img src="/email.png" alt="email" width="100px" height="100px">
                </a>
            </div>
            <div>
                <a href="https://twitter.com/MariamReba" target="_blank">
                    <img src="/twitter.png" alt="twitter" width="100px" height="100px">
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/mariam-reba-alexander-2231a2119/" target="_blank">
                    <img src="/linkedin.png" alt="linkedin" width="100px" height="100px">
                </a>
            </div>
            <div>
                <a href="https://mastodon.social/@MariamReba" target="_blank">
                    <img src="/mastodon.svg" alt="mastodon" width="100px" height="100px">
                </a>
            </div>
        </div>
    </BaseWindowFrameVue>
</template>
<style scoped>
.social-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 40px;
    justify-items: center;
    align-items: center;
    margin: 30px;
}

@media (min-width: 1024px) {
    .social-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 40px;
    justify-items: center;
    align-items: center;
    margin: 30px;
}

.social-links img {
    cursor: pointer;
    transition: transform 0.5s;
    padding: 5px;
}

.social-links img:hover {
    transform: scale(1.2);
}

.social-links img:active,
.social-links img:focus,
.social-links img:visited {
    outline: 2px solid var(--mp-blue);
}
}
</style>