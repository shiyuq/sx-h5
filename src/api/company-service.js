import { createInstance } from './general'
import config from '../config'

const baseUrl = config.customerService

const getCompanyList = async() => {
  const { data } = await createInstance(baseUrl).post('/company/list')
  return data
}

const getCompany = async(params) => {
  const { data } = await createInstance(baseUrl).post('/company/get-company-list', params)
  return data
}

export default {
  getCompanyList,
  getCompany
}
