import axios from 'axios'

const BASE_URL = 'https://raw.githubusercontent.com/Ballerini-Server/dev-meet-backend/main'

export default class ApiClient {
  static baseURL = BASE_URL
  static client = axios.create({ baseURL: this.baseURL })

  static async getEventTypes() {
    const response = await ApiClient.client.get<IApiResponseType>('/events.json')
    return response.data.tipo
  }

  static async getEvents(categoryId?: number) {
    const response = await ApiClient.client.get<IApiResponseType>('/events.json')
    const { events } = response.data
    return categoryId ? events.filter(evt => evt.tipoId === categoryId) : events
  }

  static async getEventById(eventId: string) {
    const response = await ApiClient.client.get<IApiResponseType>('/events.json')
    const { events } = response.data
    return events.find(evt => evt.id === eventId)
  }

}
