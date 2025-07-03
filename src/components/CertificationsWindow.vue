<script setup lang="ts">
import BaseWindowFrame from '@/components/BaseWindowFrame.vue';
import router from '@/router';
</script>
<template>
    <base-window-frame title="Certifications 🎯" color="white" size="medium">
        <div class="certifications-content">
            <img class="certification" src="/diploma.png" alt="diploma icon" width="150px">
            <p>Here are some of my certifications:</p>
            <div class="certifications-list">
                <ul>
                    <li><a href="https://www.credly.com/badges/bb0d725c-4ef3-4844-a4e6-b82ddf7e0077/public_url"
                            target="_blank">ISC2 Certified in Cybersecurity (CC)</a></li>
                    <li><a href="https://www.credly.com/badges/8f85ae5e-52f6-4a6c-ba3d-94720d544108/public_url"
                            target="_blank">CompTIA Security+ ce Certification</a></li>
                    <li><a href="https://www.credly.com/badges/19308c84-b5e7-4315-a13a-04e123be0e83"
                            target="_blank">Microsoft Certified: Azure Fundamentals</a></li>
                </ul>
            </div>
            <p>View more on my <a href="https://www.linkedin.com/in/mariam-reba-alexander-2231a2119/"
                    target="_blank">LinkedIn profile</a>.</p>
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

.certifications-content {
    padding: 20px;
    margin: 5px 20px 20px 20px;
    text-align: center;

    .certifications-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    ul {
        /*list-style-type: none;*/
        padding: 0;
        margin: 0;
    }

    li {
        text-align: left;
        margin: 4px 0;
    }

}
</style>