import { Page, PageInfoType } from '@/types/'

export const AUTHOR = 'Celeste Zapata'
export const PAGE_IMAGE_PATH = '/images/hero-mobile.webp'
export const TITLE = 'Celeste Zapata | Developer'
export const MAIN_DESCRIPTION =
  "Hi! I'm Celeste Zapata, a Developer specializing in Growth Engineering & Frontend Development. With 5+ years of experience collaborating across industries."
export const KEYWORDS =
  'Celeste Zapata, Developer, Web Developer, Frontend, Front-End, Growth Engineer, Development, Engineering, React, ReactJS, React.js, Next.js, JavaScript, TypeScript, SEO, Ruby on Rails, Web Accessibility, Quality Score, Portfolio, Resume'

export const WEBSITE_URL = 'https://zetadeceleste.dev'
export const COMMON_TITLE = 'Celeste Zapata | '

export const PAGE_INFO_LIST: PageInfoType = {
  [Page.HERO]: {
    path: '/',
    title: 'Developer',
    text: 'hero',
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
