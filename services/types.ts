import { ExperienceType, ItemType } from '@/types'

export type AboutType = {
  about: string
}

export type AdditionalInformationType = {
  education: {
    degree: string
    institution: string
    duration: string
    location: string
  }
  languages: string[]
  volunteering: ItemType[]
}

export type ExperienceListType = ExperienceType[]

export type SkillLinkListType = {
  tech_skills: ItemType[]
  soft_skills: ItemType[]
}

export type SocialLinkListType = ItemType[]
