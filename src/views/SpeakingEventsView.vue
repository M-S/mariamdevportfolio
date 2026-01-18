<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BaseWindowFrame from '@/components/BaseWindowFrame.vue'
import { fetchMySpeakingEvents } from '@/services/sessonize.service'

type Session = {
  id: number
  title: string
  description: string
  sessionUrl: string
  languageCode: string
  language: string
}

type Event = {
  id: number
  name: string
  eventStartDate: string
  eventEndDate: string
  location: string
  website: string
}

const mySpeakingSessions = ref<Session[]>([])
const mySpeakingEvents = ref<Event[]>([])
const isLoading = ref(true)

const getFormattedDate = (date: string) => {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const getEventDate = (event: Event) => {
  const startDate = getFormattedDate(event.eventStartDate)
  const endDate = getFormattedDate(event.eventEndDate)
  if (startDate === endDate) return startDate
  return `${startDate} - ${endDate}`
}

onMounted(async () => {
  try {
    const sessionizeData = await fetchMySpeakingEvents()
    mySpeakingSessions.value = sessionizeData.sessions
    mySpeakingEvents.value = sessionizeData.events
  } catch (error) {
    console.error('Error fetching speaking events:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="speaking-page">
    <div class="speaking-image">
      <img src="/speaking.png" alt="Speaking at conferences" class="image" />
    </div>
    <div class="page-container">
      <div class="page-header">
        <h1>Speaking & Events</h1>
        <p class="subtitle">Sharing knowledge at conferences and community events</p>
      </div>

      <div v-if="!isLoading && mySpeakingSessions.length" class="speaking-content">
        <!-- Current Sessions -->
        <base-window-frame title="Current Sessions" subtitle="Active talk proposals" variant="elevated" color="primary"
          padding="lg" class="sessions-card">
          <div class="sessions-list">
            <div v-for="session in mySpeakingSessions" :key="session.id" class="session-item">
              <div class="session-header">
                <h3 class="session-title">{{ session.title }}</h3>
                <span v-if="session.language" class="language-badge">{{ session.language }}</span>
              </div>
              <p class="session-description">{{ session.description }}</p>
            </div>
          </div>

          <div class="sessions-footer">
            <a href="https://sessionize.com/MariamReba/" target="_blank" rel="noopener noreferrer"
              class="sessionize-link">
              View all proposals on Sessionize
              <svg class="icon" style="width: 16px; height: 16px; margin-left: 0.5rem">
                <use xlink:href="../assets/sprites/solid.svg#arrow-up-right"></use>
              </svg>
            </a>
          </div>
        </base-window-frame>

        <!-- Past Speaking Events -->
        <base-window-frame title="Past Speaking Events" subtitle="Conference and meetup appearances" variant="elevated"
          color="success" padding="lg" class="events-card">
          <div v-if="mySpeakingEvents.length" class="events-table-wrapper">
            <table class="events-table">
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th class="location-col">Location</th>
                  <th class="date-col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in mySpeakingEvents" :key="event.id">
                  <td class="event-name">
                    <a :href="event.website" target="_blank" rel="noopener noreferrer" class="event-link">
                      {{ event.name }}
                    </a>
                  </td>
                  <td class="location-col">
                    <span class="location-badge">
                      {{ event.location ? event.location : '🌐 Online' }}
                    </span>
                  </td>
                  <td class="date-col">{{ getEventDate(event) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="no-events">
            <p>No past events recorded yet.</p>
          </div>
        </base-window-frame>
      </div>

      <div v-else-if="isLoading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading speaking events...</p>
      </div>

      <div v-else class="empty-state">
        <svg class="empty-icon" viewBox="0 0 24 24">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        <p>Unable to load speaking events. Please try again later.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.speaking-page {
  min-height: 100vh;
  background: var(--color-background);
  padding: var(--spacing-2xl) var(--spacing-xl);
}

.speaking-image {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-2xl);
}

.speaking-image .image {
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: var(--radius-lg);
}

.page-container {
  padding: var(--spacing-2xl) var(--spacing-xl);
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0 0 var(--spacing-md) 0;
}

.subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.speaking-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.sessions-card,
.events-card {
  width: 100%;
}

/* Sessions List */
.sessions-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.session-item {
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-background-soft);
  transition: all var(--transition-fast);
}

.session-item:hover {
  border-color: var(--color-primary);
  background: var(--color-background-mute);
}

.session-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.session-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-heading);
  flex: 1;
}

.language-badge {
  padding: 4px 12px;
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
}

.session-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sessions-footer {
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
}

.sessionize-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.sessionize-link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

/* Events Table */
.events-table-wrapper {
  overflow-x: auto;
}

.events-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.events-table thead {
  background: var(--color-background-soft);
}

.events-table th {
  padding: var(--spacing-lg);
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-heading);
  border-bottom: 2px solid var(--color-border);
}

.events-table td {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  font-size: 0.95rem;
  color: var(--color-text);
}

.events-table tbody tr:last-child td {
  border-bottom: none;
}

.events-table tbody tr:hover {
  background: var(--color-background-soft);
}

.event-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.event-link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

.location-col,
.date-col {
  text-align: center;
}

.location-badge {
  display: inline-block;
  padding: 4px 12px;
  background: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.8125rem;
  white-space: nowrap;
}

/* Loading State */
.loading-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  gap: var(--spacing-lg);
  color: var(--color-text-secondary);
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  gap: var(--spacing-lg);
  color: var(--color-text-secondary);
}

.empty-icon {
  width: 64px;
  height: 64px;
  fill: var(--color-border);
  opacity: 0.5;
}

.no-events {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .events-table {
    font-size: 0.875rem;
  }

  .events-table th,
  .events-table td {
    padding: var(--spacing-md);
  }

  .location-col,
  .date-col {
    display: none;
  }

  .location-col:first-child,
  .date-col:first-child {
    display: table-cell;
  }
}

@media (max-width: 640px) {
  .speaking-page {
    padding: var(--spacing-xl);
  }

  .page-header h1 {
    font-size: 1.875rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .session-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .language-badge {
    padding: 3px 10px;
    font-size: 0.7rem;
  }

  .session-item {
    padding: var(--spacing-md);
  }

  .events-table th,
  .events-table td {
    padding: var(--spacing-sm);
  }

  .event-name {
    word-break: break-word;
  }
}
</style>