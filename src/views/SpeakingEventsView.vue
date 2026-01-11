<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

const mySpeakingSessions = ref<Session[]>([]);
const mySpeakingEvents = ref<Event[]>([]);
const getFormattedDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
const getEventDate = (event: Event) => {
  const startDate = getFormattedDate(event.eventStartDate)
  const endDate = getFormattedDate(event.eventEndDate);
  if (startDate === endDate) return startDate;
  return `${startDate} - ${endDate}`;
}
onMounted(async () => {
  try {
    const sessionizeData = await fetchMySpeakingEvents();
    mySpeakingSessions.value = sessionizeData.sessions;
    mySpeakingEvents.value = sessionizeData.events;
  } catch (error) {
    console.error('Error fetching speaking events:', error)
  }
})
</script>

<template>
  <div class="speaking-events-wrapper" v-if="mySpeakingSessions.length">
    <h1>Speaking</h1>
    <img src="/speaking.png" alt="speaking icon" width="400px" />
    <h2>Current Sessions</h2>
    <ul>
      <li v-for="session in mySpeakingSessions" :key="session.id">
        <h3 class="section-title">{{ session.title }}</h3>
        <p class="session-description">{{ session.description }}</p>
      </li>
      <a :href="`https://sessionize.com/MariamReba/`" target="_blank" rel="noopener noreferrer">
        Read more on sessionize
      </a>
    </ul>
    <h2>Past Speaking Events</h2>
    <table class="past-events-table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in mySpeakingEvents" :key="event.id">
          <td>
            <a :href="event.website" target="_blank" rel="noopener noreferrer">{{ event.name }}</a>
          </td>
          <td>{{ event.location ? event.location : 'Online' }}</td>
          <td>{{ getEventDate(event) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="loading" v-else></div>
</template>

<style scoped>
.speaking-events-wrapper {
  text-align: center;

  img {
    border: 1px solid var(--color-border);
    box-shadow: 0 0 10px var(--color-border);
    @media(max-width: 768px) {
      width: 80vw;
    }
  }
}

.past-events-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: left;
  border: 1px solid var(--color-border);

  tr,
  th,
  td {
    padding: 10px;
    border: 1px solid var(--color-border);
  }

  th {
    font-weight: bold;
  }
}

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
  content: ' 🔗';
}

ul {
  list-style: none;
}

.session-description {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.loading {
  display: flex;
  justify-content: center;
  height: 200px;
  align-items: center;
}

@keyframes loadingDots {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.loading::after {
  content: ' ';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 5px;
  border-radius: 50%;
  background: var(--mp-blue);
  animation: loadingDots 1s infinite;
  box-shadow: 12px 0 0 var(--mp-blue), 24px 0 0 var(--mp-blue);
  animation-delay: 0s, 0.5s, 0.9s;
}
</style>