
import { api } from './AxiosService'
import { AppState } from '../AppState'

class HouseService {
  async getAll () {
    try {
      const res = await api.get('/houses')
      AppState.houses = res.data.data
      console.log(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const houseService = new HouseService()
