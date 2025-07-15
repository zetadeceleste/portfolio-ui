export enum Page {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  ADDITIONAL_INFORMATION = 'ADDITIONAL_INFORMATION',
  CONTACT = 'CONTACT',
  SITE_UNDER_CONSTRUCTION = 'SITE_UNDER_CONSTRUCTION',
  SKILLS = 'SKILLS',
  WORK_EXPERIENCE = 'WORK_EXPERIENCE',
}

export type PageInfoType = {
  [key in Page]: {
    path: string
    title: string
    text?: string
    hideOnHeader?: boolean
    hideOnMenu?: boolean
  }
}
