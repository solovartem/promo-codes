import axios from "axios"
import config from "../utils/config"
import { Financial, Section, Service } from "../types/types"

const fetchServices = async (): Promise<Service[]> => {
  const response = await axios.get(`${config.URL}/services`)
  return response.data
}

const fetchFinancials = async (): Promise<Financial[]> => {
  const response = await axios.get(`${config.URL}/financials`)
  return response.data
}

const fetchSections = async (): Promise<Section[]> => {
  const response = await axios.get(`${config.URL}/sections`)
  return response.data
}

const activateService = async (id: number): Promise<void> => {
  await axios.patch(`${config.URL}/services/${id}`, { activated: true })
}

export default { fetchServices, fetchFinancials, fetchSections, activateService }
