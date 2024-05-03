import { ItemType } from './item'

export type ExperienceType = {
  role: string
  dateFrom: string
  mainTechStack: ItemType[]
  location: string
  company?: string
  companyWebsite?: string
  companyType?: string
  responsibilities?: ItemType[]
  accomplishments?: ItemType[]
  dateTo?: string
  current?: boolean
  jobType?: 'freelance' | 'full-time' | 'part-time' | 'internship'
}
