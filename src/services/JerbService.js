
import { api } from './AxiosService'
import { AppState } from '../AppState'

class JerbService {
  async getAllHouses () {
    try {
      const res = await api.get('/jobs')
      AppState.jerbs = res.data.data
      console.log(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const jerbService = new JerbService()
