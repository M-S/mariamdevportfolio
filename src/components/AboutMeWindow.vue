<script setup lang="ts">
import BaseWindowFrame from '@/components/BaseWindowFrame.vue';
import router from '@/router';
</script>
<template>
    <base-window-frame title="Hello 👋🏼" color="blue" size="medium">
        <div class="search-bar">
            <svg class="icon">
                <use xlink:href="../assets/sprites/solid.svg#chevron-left"></use>
            </svg>
            <svg class="icon">
                <use xlink:href="../assets/sprites/solid.svg#chevron-right"></use>
            </svg>
            <div class="search-input-box">
                <svg class="icon">
                    <use xlink:href="../assets/sprites/solid.svg#magnifying-glass"></use>
                </svg> Mariam Reba Alexander
            </div>
            <svg class="icon rotate">
                <use xlink:href="../assets/sprites/solid.svg#rotate-right"></use>
            </svg>
            <svg class="icon">
                <use xlink:href="../assets/sprites/solid.svg#bars"></use>
            </svg>
        </div>
        <div class="about-content">
            <p>Software Engineer working at Maersk, based in Copenhagen. Skilled in front-end development with an interest in Cybersecurity.
                <a href="https://sessionize.com/MariamReba/" target="_blank">Tech conference speaker</a> and <a
                    href="https://dev.to/ms_74" target="_blank">tech
                    blogger</a>.
            </p>
            <button @click="router.push('/about')">Read More</button>
        </div>
    </base-window-frame>
</template>
<style scoped>
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

.search-bar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    padding: 10px;
    border: none;
    color: var(--color-bg);
}

.search-input-box {
    width: 70%;
    padding: 6px 20px;
    border: 2px solid var(--color-text);
    border-radius: 20px;
}

.about-content {
    padding: 20px;
    margin: 5px 20px 20px 20px;
    text-align: center;
    border: 2px solid var(--color-text);
}

@media (min-width: 768px) {
    .about-content {
        margin-bottom: 5px;
    }
}

.rotate {
    transition: transform 2s;
}

.rotate:hover {
    transform: rotate(360deg);
}
</style>