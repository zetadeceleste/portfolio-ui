import { ItemType } from './item'

export type ExperienceType = {
  role: string
  company: string
  companyWebsite: string
  companyLocation: string
  companyType: string
  dateFrom: string
  responsibilities: ItemType[]
  accomplishments: ItemType[]
  mainTechStack: ItemType[]
  dateTo?: string
  current?: boolean
}
