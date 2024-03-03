<script setup lang="ts">
import { ref } from 'vue';
import BaseWindowFrame from '@/components/BaseWindowFrame.vue';
import BaseImageFrame from '@/components/BaseImageFrame.vue';
const zoom = ref(false);
const zoomOut = ref(false);
const onZoom = () => {
    zoom.value = true;
    setTimeout(() => {
        zoom.value = false;
    }, 2000);
};
const onZoomOut = () => {
    zoomOut.value = true;
    setTimeout(() => {
        zoomOut.value = false;
    }, 2000);
};
</script>
<template>
    <base-window-frame class="profile-window" draggable="true" title="_mariam.png" size="small" bg-color="light-pink" height="250px">
        <div class="contents">
            <img src="/profile.png" :class="{ 'zoom': zoom, 'zoom-out': zoomOut }" alt="profile" width="200px" height="200px" />
            <div class="magnifying-icons">
                <svg class="icon" @click="onZoom">
                    <use xlink:href="../assets/sprites/solid.svg#magnifying-glass-plus"></use>
                </svg>
                <svg class="icon" @click="onZoomOut">
                    <use xlink:href="../assets/sprites/solid.svg#magnifying-glass-minus"></use>
                </svg>
            </div>
        </div>
    </base-window-frame>
</template>
<style scoped>
.profile-window {
    justify-self: center;
}
.contents {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-items: center;
}

.magnifying-icons {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    justify-items: center;
    align-items: center;
    gap: 30px;
    width: 50px;
}

.magnifying-icons .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.zoom {
    transition: transform 2s;
    transform: scale(2);
}

.zoom-out {
    transition: transform 2s;
    transform: scale(0.5);
}

@media(max-width: 700px) {
    /* .magnifying-icons {
        display: none;
    } */

}</style>