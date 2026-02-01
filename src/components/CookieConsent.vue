<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initGTM, isGTMInitialized } from '@/services/gtm.service'

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
    saveConsent(consent)
    // Initialize GTM using env variable
    const gtmId = import.meta.env.VITE_GTM_ID as string | undefined
    if (gtmId) initGTM(gtmId)
    show.value = false
}

function reject() {
    const consent = { analytics: false }
    saveConsent(consent)
    show.value = false
}

onMounted(() => {
    const consent = readConsent()
    if (!consent) {
        show.value = true
        return
    }

    if (consent.analytics) {
        const gtmId = import.meta.env.VITE_GTM_ID as string | undefined
        if (gtmId && !isGTMInitialized()) initGTM(gtmId)
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
    right: var(--spacing-lg);
    bottom: var(--spacing-lg);
    z-index: 1200;
    max-width: 360px;
    width: calc(100% - 48px);
}

.cookie-content {
    background: var(--color-background);
    border: 1px solid var(--color-border);
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.cookie-message {
    color: var(--color-text);
    font-size: 0.95rem;
}

.cookie-actions {
    display: flex;
    gap: var(--spacing-sm);
    justify-content: flex-end;
}

.btn {
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius-md);
    border: 1px solid transparent;
    cursor: pointer;
    font-weight: 700;
}

.btn-accept {
    background: var(--mp-indigo);
    color: white;
}

.btn-reject {
    background: transparent;
    color: var(--color-text);
    border-color: var(--color-border);
}
</style>
