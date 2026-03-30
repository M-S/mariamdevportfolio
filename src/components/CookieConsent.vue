<script setup lang="ts">
import { ref, onMounted } from 'vue'
const STORAGE_KEY = 'cookie_consent'
const show = ref(false)

interface Consent { analytics: boolean }

function readConsent(): Consent | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return null
        return JSON.parse(raw)
    } catch {
        return null
    }
}

function saveConsent(consent: Consent) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
    } catch {
        // empty catch
    }
}

function accept() {
    const consent = { analytics: true }
    saveConsent(consent);
    analyticsConsentGranted();
    show.value = false
}

function reject() {
    const consent = { analytics: false }
    saveConsent(consent)
    show.value = false
}

function analyticsConsentGranted() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
}
onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtag('consent', 'default', {
        'analytics_storage': 'denied'
    });
    const consent = readConsent()
    if (!consent) {
        show.value = true
    } else if (consent.analytics) {
        analyticsConsentGranted();
    }
})
</script>

<template>
    <div v-if="show" class="cookie-consent" role="dialog" aria-live="polite">
        <div class="cookie-content">
            <div class="cookie-message">
                I use cookies to improve the site and to provide analytics. Do you consent to analytics cookies?
            </div>
            <div class="cookie-actions">
                <button class="btn btn-accept" @click="accept">Accept analytics</button>
                <button class="btn btn-reject" @click="reject">Reject</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cookie-consent {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    z-index: 1200;
    max-width: 360px;
    width: calc(100% - 48px);
}

.cookie-content {
    background: var(--color-background);
    border: 2px solid var(--color-text);
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: background-color 0.5s, border-color 0.5s;
}

.cookie-message {
    color: var(--color-text);
    font-size: 0.95rem;
    line-height: 1.6;
}

.cookie-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
}

.btn {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid var(--color-text);
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    background: var(--color-background);
    color: var(--color-text);
    transition: background-color 0.5s, transform 0.2s;
    white-space: nowrap;
}

.btn:hover {
    background: var(--color-background-mute);
    transform: scale(1.05);
}

.btn:active {
    transform: scale(0.98);
}

.btn-accept {
    background: var(--color-heading);
    color: var(--color-background);
    border-color: var(--color-heading);
}

.btn-accept:hover {
    background: var(--mp-text-light-1);
    transform: scale(1.05);
}

.btn-reject {
    background: var(--color-background);
    color: var(--color-text);
    border-color: var(--color-border-hover);
}

.btn-reject:hover {
    background: var(--color-background-mute);
    transform: scale(1.05);
}

@media (prefers-color-scheme: dark) {
    .btn-accept {
        background: var(--color-heading);
        color: var(--color-background);
        border-color: var(--color-heading);
    }

    .btn-accept:hover {
        background: rgba(255, 255, 255, 0.9);
        transform: scale(1.05);
    }
}
</style>