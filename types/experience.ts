import { ItemType } from './item'

export type ExperienceType = {
  role: string
  company: string
  companyWebsite: string
  companyLocation: string
  companyType: string
  dateFrom: string
  dateTo?: string
  responsibilities: ItemType[]
  accomplishments: ItemType[]
  mainTechStack: ItemType[]
  current?: boolean
}
