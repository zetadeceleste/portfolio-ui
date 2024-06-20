import { API_SERVICE_LIST } from './apiInfo'
import { fetchData } from './fetchData'

const fetchServiceData = async (path: string) => await fetchData(path)

export const fetchAboutData = () => fetchServiceData(API_SERVICE_LIST.about)

export const fetchAdditionalInformationData = () =>
  fetchServiceData(API_SERVICE_LIST.additionalInformation)

export const fetchExperienceListData = () =>
  fetchServiceData(API_SERVICE_LIST.experiences)

export const fetchSkillsListData = () =>
  fetchServiceData(API_SERVICE_LIST.skills)

export const fetchSocialLinksData = () =>
  fetchServiceData(API_SERVICE_LIST.socialLinks)
