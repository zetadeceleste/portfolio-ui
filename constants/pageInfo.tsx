import { Page, PageInfoType } from '@/types/'

export const AUTHOR = 'Celeste Zapata'
export const PAGE_IMAGE_PATH = '/images/home-page-mobile.webp'
export const TITLE = 'Celeste Zapata | Developer'
export const MAIN_DESCRIPTION =
  "I'm Celeste Zapata, a developer with 6+ years of cross-industry experience. Tech lead bridging engineering and business goals, delivering scalable, high-quality solutions."
export const KEYWORDS =
  'Celeste Zapata, Developer, Web Developer, Frontend, Front-End, Fullstack, Full-Stack, Growth Engineer, Tech Lead, Development, Engineering, React, ReactJS, React.js, Next.js, JavaScript, TypeScript, SEO, Ruby on Rails, Web Accessibility, Quality Score, AI, Portfolio, Resume'

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
