<script setup lang="ts">
import { ref, defineProps, withDefaults } from 'vue';
interface Props {
    title?: string
    size?: string
    color?: string,
    bgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Title',
    size: 'medium',
    color: 'orange',
    bgColor: 'white'
})
const shake = ref(false);
const close = () => {
    shake.value = true;
    setTimeout(() => {
        shake.value = false;
    }, 500);
};
</script>
<template>
    <div class="window-frame" :class="[size, bgColor]">
        <div class="title-bar" :class="color">
            <span class="title">{{ props.title }}</span>
            <span class="icons">
                <svg class="icon">
                    <use xlink:href="../assets/sprites/regular.svg#window-minimize"></use>
                </svg>
                <svg class="icon">
                    <use xlink:href="../assets/sprites/regular.svg#window-maximize"></use>
                </svg>
                <svg class="icon" :class="{ 'shake': shake }" @click="close">
                    <use xlink:href="../assets/sprites/regular.svg#rectangle-xmark"></use>
                </svg>
            </span>
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
</template>
<style scoped>
.window-frame {
    border: 2px solid var(--color-text);
    background-color: #fff;
    margin: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80vw;
    overflow: hidden;
}

.window-frame.white {
    background-color: #fff;
}

.window-frame.black {
    background-color: #000;
}

.window-frame.pink {
    background-color: var(--mp-pink);
}

.window-frame.light-pink {
    background-color: var(--mp-pink-light);
}

.window-frame.light-green {
    background-color: var(--mp-green-light);
}


.title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid var(--color-text);
}

.title-bar.pink {
    background-color: var(--mp-pink);
}

.title-bar.blue {
    background-color: var(--mp-blue);
}

.title-bar.green {
    background-color: var(--mp-green);
}

.title-bar.orange {
    background-color: var(--mp-orange);
}

.icon {
    width: 20px;
    height: 20px;
    margin-left: 6px;
}

.content {
    height: 92%;
    overflow: auto;
    background: var(--color-background);
}

@media (min-width: 700px) {

    .window-frame.small {
        width: 300px;
        height: 300px;
    }

    .window-frame.medium {
        width: 600px;
        height: 500px;
    }

    .window-frame.large {
        width: 800px;
        height: 800px;
    }
}

.title {
    font-weight: bold;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }

    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }

    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }

    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }

    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }

    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }

    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }

    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }

    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }

    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }

    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
}

.shake {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
}</style>
