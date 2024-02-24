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
})
</script>
<template>
    <div class="image-frame">
        <img :src="imageSrc" :alt="altText" :width="width" :height="height" />
    </div>
</template>
<style scoped>
.image-frame {
    display: flex;
    width: fit-content;
    padding: 10px;
    border: 2px solid var(--color-text);
    background-color: #f0f0f0;
    margin: 20px;
}
</style>