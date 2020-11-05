
import { api } from './AxiosService'
import { AppState } from '../AppState'

class CarService {
  async getAll () {
    try {
      const res = await api.get('/cars')
      AppState.cars = res.data.data
      console.log(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const carService = new CarService()
