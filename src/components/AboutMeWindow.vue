<script setup lang="ts">
import BaseWindowFrame from '@/components/BaseWindowFrame.vue';
</script>
<template>
    <base-window-frame title="ABOUT" color="blue" size="medium">
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
            <svg class="icon">
                <use xlink:href="../assets/sprites/solid.svg#rotate-right"></use>
            </svg>
            <svg class="icon">
                <use xlink:href="../assets/sprites/solid.svg#bars"></use>
            </svg>
        </div>
        <div class="about-content">
            <p>Software Engineer working at Maersk, based in Copenhagen. Skilled in Vue, Cypress, and Jest with a passion
                for
                solving complex front-end problems, secure coding, testing, DevOps, data analytics, and automation.
                Tech conference speaker and tech blogger on dev.to platform.</p>
            <button>Read More</button>
            <svg class="icon">
                <use xlink:href="../assets/sprites/solid.svg#hourglass"></use>
            </svg>
        </div>

    </base-window-frame>
</template>
<style scoped>
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
    margin: 5px 20px;
    text-align: center;
    border: 2px solid var(--color-text);
}
</style>