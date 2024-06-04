import { Page, PageInfoType } from '@/types/'

export const WEBSITE_URL = 'https://zetadeceleste.dev'
export const COMMON_TITLE = 'Celeste Zapata | '

export const PAGE_INFO_LIST: PageInfoType = {
  [Page.HOME]: {
    path: '/',
    title: 'Developer',
    text: 'home',
    hideOnHeader: true,
  },
  [Page.ABOUT]: {
    path: '/about',
    title: 'About me',
    text: 'about',
  },
  [Page.WORK_EXPERIENCE]: {
    path: '/work-experience',
    title: 'Work experience',
    text: 'work experience',
  },
  [Page.SKILLS]: {
    path: '/skills',
    title: 'Skills',
    text: 'skills',
  },
  [Page.ADDITIONAL_INFORMATION]: {
    path: '/additional-information',
    title: 'Education, languages & volunteering',
    text: '+info',
  },
  [Page.CONTACT]: {
    path: '/contact',
    title: 'Let´s work together!',
    text: 'contact',
  },
  [Page.SITE_UNDER_CONSTRUCTION]: {
    path: '/site-under-construction',
    title: 'Site under construction',
    hideOnHeader: true,
    hideOnMenu: true,
  },
}
