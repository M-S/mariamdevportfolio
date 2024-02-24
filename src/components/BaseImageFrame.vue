<script setup lang="ts">
const props = defineProps({
    width: {
        type: String,
        default: "200px"
    },
    altText: {
        type: String,
        default: 'Picture'
    },
    imageSrc: {
        type: String,
        required: true
    },
    height: {
        type: String,
        default: "200px"
    }
});
const dummyUrl = "/sandglass.png";
</script>
<template>
    <div class="image-frame">
        <img class="image" v-if="imageSrc" :src="imageSrc" :alt="altText" :width="width" :height="height" />
        <img v-else :src="dummyUrl" :alt="altText" width="200px" height="200px" />
    </div>
</template>
<style scoped>
.image-frame {
    width: fit-content;
    margin: 20px;
    overflow: hidden;
}
.imgage {
    border: 2px solid var(--color-text);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>