import { pagesPath } from './pages'

import { WebsitePageType } from '@/types'

export const WEBSITE_PAGES: WebsitePageType[] = [
  { link: pagesPath.HOME, text: 'home', textTag: <>home</>, optional: true },
  { link: pagesPath.ABOUT, text: 'about', textTag: <>about</> },
  {
    link: pagesPath.WORK_EXPERIENCE,
    text: 'work experience',
    textTag: (
      <>
        work <br />
        experience
      </>
    ),
  },
  { link: pagesPath.SKILLS, text: 'skills', textTag: <>skills</> },
  {
    link: pagesPath.ADDITIONAL_INFORMATION,
    text: '+info',
    textTag: <>+info</>,
  },
  { link: pagesPath.CONTACT, text: 'contact', textTag: <>contact</> },
]
