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
  <div>
    <h2>Speaking</h2>
    <h3>Current Sessions</h3>
    <ul>
      <li v-for="session in mySpeakingSessions" :key="session.id">
        <h4>{{ session.title }}</h4>
        <p>{{ session.description }}</p>
      </li>
      <a :href="`https://sessionize.com/MariamReba/`" target="_blank" rel="noopener noreferrer">
        Contact on Sessionize to speak at a future event.
      </a>
    </ul>
    <h3>Past Events</h3>
    <ul>
      <li v-for="event in mySpeakingEvents" :key="event.id">
        <a :href="event.website" target="_blank" rel="noopener noreferrer">
          {{ event.name }}
        </a>
        <p>{{ event.location }}</p>
        <p>{{ getEventDate(event) }}</p>
      </li>

    </ul>
  </div>
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
  content: ' 🔗';
}
ul {
  list-style: none;
}
</style>