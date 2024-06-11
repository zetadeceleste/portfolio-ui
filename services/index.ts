import { API_SERVICE_LIST } from './apiInfo'
import { fetchData } from './fetchData'

const fetchServiceData = async (path: string) => await fetchData(path)

export const fetchAbout = () => fetchServiceData(API_SERVICE_LIST.about)

export const fetchAdditionalInformation = () =>
  fetchServiceData(API_SERVICE_LIST.additionalInformation)

export const fetchExperienceList = () =>
  fetchServiceData(API_SERVICE_LIST.experiences)

export const fetchSkillsList = () => fetchServiceData(API_SERVICE_LIST.skills)

export const fetchSocialLinks = () =>
  fetchServiceData(API_SERVICE_LIST.socialLinks)
