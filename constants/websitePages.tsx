import { pages } from './pages'

import { WebsitePageType } from '@/types'

export const WEBSITE_PAGES: WebsitePageType[] = [
  { link: pages.HOME, text: 'home', textTag: <>home</> },
  { link: pages.ABOUT, text: 'about', textTag: <>about</> },
  {
    link: pages.WORK_EXPERIENCE,
    text: 'work experience',
    textTag: (
      <>
        work <br />
        experience
      </>
    ),
  },
  { link: pages.SKILLS, text: 'skills', textTag: <>skills</> },
  {
    link: pages.ADDITIONAL_INFORMATION,
    text: '+info',
    textTag: <>+info</>,
  },
  { link: pages.CONTACT, text: 'contact', textTag: <>contact</> },
]
