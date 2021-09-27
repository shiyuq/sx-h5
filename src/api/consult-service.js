import { createInstance } from './general'
import config from '../config'

const baseUrl = config.customerService

const addConsult = async(params) => {
  const { data } = await createInstance(baseUrl).post('/consult/add', params)
  return data
}

export default {
  addConsult
}
