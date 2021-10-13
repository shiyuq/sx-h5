import { createInstance } from './general'
import config from '../config'

const baseUrl = config.customerService

const getTrainList = async() => {
  const { data } = await createInstance(baseUrl).post('/train/list')
  return data
}

const getTrains = async(params) => {
  const { data } = await createInstance(baseUrl).post('/train/get-train-list', params)
  return data
}

const getTrainDetail = async(params) => {
  const { data } = await createInstance(baseUrl).post('/train/get', params)
  return data
}

const getRecmdTrain = async(params) => {
  const { data } = await createInstance(baseUrl).post('/train/get-recmd-train', params)
  return data
}

export default {
  getTrainList,
  getTrains,
  getTrainDetail,
  getRecmdTrain
}
