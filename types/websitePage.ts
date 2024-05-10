import { pages } from '@/constants/pages'

export type WebsitePageType = {
  link:
    | pages.HOME
    | pages.ABOUT
    | pages.WORK_EXPERIENCE
    | pages.SKILLS
    | pages.ADDITIONAL_INFORMATION
    | pages.CONTACT
  text: string
  textTag: JSX.Element
  optional?: boolean
}
