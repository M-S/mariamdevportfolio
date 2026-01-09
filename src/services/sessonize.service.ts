import sesionizeEventsCopy from '@/assets/data/sessionizeEvents.json'
const SESSIONIZE_API_URL = 'https://sessionize.com/api/speaker/json/ejwqtrmri5'

export const fetchMySpeakingEvents = async () => {
  try {
    const response = await fetch(SESSIONIZE_API_URL)
    const data = await response.json()
    return data;
  } catch (error) {
    return sesionizeEventsCopy;
  }
}
