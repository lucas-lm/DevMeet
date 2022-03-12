import axios from 'axios'

const BASE_URL = 'https://raw.githubusercontent.com/lucas-lm/dev-meet-fake-backend/main'

const getOffsetISODate = (m: number) => {
  const now = new Date()
  const offsetDate = new Date(now.setMinutes(now.getMinutes() + m))
  return offsetDate.toISOString()
}

const staticStartDate = Array(8).fill(null).map((_, i) => getOffsetISODate(i*2 + 1))

const generateFakeEvents = (
  startDateOffset: number = 1,
  publishDateOffset: number = -60,
  ) => Array(8).fill(null).map((_, i) => ({
    id: `FAKE_${i+1}`,
    tipoId: i+1,
    dataInicio: staticStartDate[i],
    dataPublicacao: getOffsetISODate(publishDateOffset),
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar massa libero, nec pretium erat cursus nec. Aliquam tincidunt nec ex eget scelerisque. Duis congue mauris at vestibulum commodo. Donec.',
    link: 'https://lucas-lm.github.io',
    organizador: 'Self',
    titulo: `How to create fake things number ${i+1}`
}))

const generateRandomLink = () => {
  const links = [
    'https://lucas-lm.github.io',
    'https://github.com/lucas-lm',
    'https://github.com/Ballerini-Server',
    'https://github.com/rafaballerini',
    'https://expo.io',
    'https://reactnative.dev/',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://linkedin.com/in/lucas-lm',
    'https://www.youtube.com/watch?v=6qQJvUfBDOQ'
  ]
  return links[Math.floor(Math.random()*links.length)]
}

export default class ApiClient {
  static baseURL = BASE_URL
  static client = axios.create({ baseURL: this.baseURL })

  private static async getFakeEvents() {
    const response = await ApiClient.client.get<IApiResponseType>('/events.json')
    const { events, tipo } = response.data
    const modifiedEvents = events.map(evt => ({...evt, link: generateRandomLink()}))
    return {events: [...generateFakeEvents(), ...modifiedEvents], eventTypes: tipo}
  }

  static async getEventTypes() {
    const { events, eventTypes } = await ApiClient.getFakeEvents()

    const typesWithCount = eventTypes.map(item => {
      const count = events.filter(evt => evt.tipoId === item.id).length
      return {...item, count}
    })

    return typesWithCount
  }

  static async getEvents(categoryId?: number) {
    const { events } = await ApiClient.getFakeEvents()
    return categoryId ? events.filter(evt => evt.tipoId === categoryId) : events
  }

  static async getEventById(eventId: string) {
    const { events } = await ApiClient.getFakeEvents()
    return events.find(evt => evt.id === eventId)
  }

}
