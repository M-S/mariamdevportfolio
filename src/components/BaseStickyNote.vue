<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
    bgColor?: string;
    tilt?: string;
}
const props = defineProps<Props>();
</script>
<template>
    <div class="sticky-note"
        :class="[`bg-color-${props.bgColor || 'yellow'}`, props.tilt ? `tilt-${props.tilt}` : 'tilt-right']">
        <slot></slot>
    </div>
</template>
<style scoped>
.sticky-note {
    background-color: var(--mp-yellow);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    max-width: 400px;
    max-height: 400px;
    position: sticky;
    top: 20px;
    padding: 10px;
}

.bg-color-yellow {
    background-color: var(--mp-yellow);
}

.bg-color-green {
    background-color: var(--mp-green);
}

.bg-color-blue {
    background-color: var(--mp-blue);
}

.bg-color-pink {
    background-color: var(--mp-pink);
}

.tilt-right {
    transform: rotate(5deg);
}

.tilt-left {
    transform: rotate(-5deg);
}

.sticky-note:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
</style>