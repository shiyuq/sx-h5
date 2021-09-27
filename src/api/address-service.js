import { createInstance } from './general'
import config from '../config'

const baseUrl = config.customerService

const getAddressList = async() => {
  const { data } = await createInstance(baseUrl).post('/address/list')
  return data
}

export default {
  getAddressList
}
