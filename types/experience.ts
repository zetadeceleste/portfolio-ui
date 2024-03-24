import { ItemType } from './item'

export type ExperienceType = {
  role: string | undefined
  company: string | undefined
  companyWebsite: string | undefined
  companyLocation: string | undefined
  companyType: string | undefined
  dateFrom: string | undefined
  responsibilities: ItemType[]
  accomplishments: ItemType[]
  mainTechStack: ItemType[]
  dateTo?: string | undefined
  current?: boolean | undefined
}
