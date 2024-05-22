import { ItemType } from './item'

export type ExperienceType = {
  role: string
  dateFrom: string
  company: string
  companyWebsite: string
  companyType: string
  jobLocation: string
  jobType: 'freelance' | 'full-time' | 'part-time' | 'internship'
  dateTo?: string
  current?: boolean
  responsibilities?: ItemType[]
  accomplishments?: ItemType[]
  mainTechStack?: ItemType[]
}
