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
    <base-window-frame draggable="true" title="_mariam.png" size="small" bg-color="light-pink">
        <div class="contents">
            <base-image-frame :class="{ 'zoom': zoom, 'zoom-out': zoomOut }" image-src="/profilePic.jpeg"></base-image-frame>
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
.contents {
    display: flex;
    align-items: center;
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
    width: 20px;
    height: 20px;
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
    .magnifying-icons {
        display: none;
    }

    .contents {
        background-image: url('/security.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
    }

}</style>