import { ItemType } from './item'

export type ExperienceType = {
  role: string
  dateFrom: string
  mainTechStack: ItemType[]
  jobLocation: string
  companyWebsite?: string
  company?: string
  dateTo?: string
  current?: boolean
  companyType?: string
  jobType?: 'freelance' | 'full-time' | 'part-time' | 'internship'
  responsibilities?: ItemType[]
  accomplishments?: ItemType[]
}
