import { createInstance } from './general'
import config from '../config'

const baseUrl = config.customerService

const getLueyingList = async() => {
  const { data } = await createInstance(baseUrl).post('camera/list')
  return data
}

const getLueying = async(params) => {
  const { data } = await createInstance(baseUrl).post('/camera/get-camera-list', params)
  return data
}

// const getTrainDetail = async(params) => {
//   const { data } = await createInstance(baseUrl).post('/train/get', params)
//   return data
// }

export default {
  getLueyingList,
  getLueying
}
