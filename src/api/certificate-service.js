import { createInstance } from './general'
import config from '../config'

const baseUrl = config.customerService

const getCertificateList = async() => {
  const { data } = await createInstance(baseUrl).post('/certificate/list')
  return data
}

const getCertificate = async(params) => {
  const { data } = await createInstance(baseUrl).post('/certificate/get-certificate-list', params)
  return data
}

export default {
  getCertificateList,
  getCertificate
}
