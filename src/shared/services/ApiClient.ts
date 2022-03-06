import axios from 'axios'

const BASE_URL = 'https://raw.githubusercontent.com/Ballerini-Server/dev-meet-backend/main'

export default class ApiClient {
  static baseURL = BASE_URL
  static client = axios.create({ baseURL: this.baseURL })

  static async getEventTypes() {
    const response = await ApiClient.client.get<IApiResponseType>('/events.json')
    return response.data.tipo
  }

  static async getEvents() {
    const response = await ApiClient.client.get<IApiResponseType>('/events.json')
    return response.data.events
  }
}
