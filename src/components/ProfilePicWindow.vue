<script setup lang="ts">
import BaseWindowFrame from '@/components/BaseWindowFrame.vue';
import BaseImageFrame from '@/components/BaseImageFrame.vue';
</script>
<template>
    <base-window-frame title="" size="small" bg-color="light-pink">
        <div class="contents">
            <base-image-frame image-src="/profilePic.jpeg"></base-image-frame>
            <div class="magnifying-icons">
                <svg class="icon">
                    <use xlink:href="../assets/sprites/solid.svg#magnifying-glass-plus"></use>
                </svg>
                <svg class="icon">
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
}
</style>