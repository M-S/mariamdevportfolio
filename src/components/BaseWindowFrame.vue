<script setup lang="ts">
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
                <svg class="icon">
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

@media (min-width: 700px) {
    .window-frame.small {
        width: 300px;
        height: 300px;
    }

    .window-frame.medium {
        width: 500px;
        height: 500px;
    }

    .window-frame.large {
        width: 800px;
        height: 800px;
    }
}

.title {
    font-weight: bold;
}
</style>