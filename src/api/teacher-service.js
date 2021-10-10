import { createInstance } from './general'
import config from '../config'

const baseUrl = config.customerService

const getTeacherList = async() => {
  const { data } = await createInstance(baseUrl).post('/teacher/list')
  return data
}

const getTeacher = async(params) => {
  const { data } = await createInstance(baseUrl).post('/teacher/get-teacher-list', params)
  return data
}

export default {
  getTeacherList,
  getTeacher
}
