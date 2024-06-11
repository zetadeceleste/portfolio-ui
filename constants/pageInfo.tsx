import { Page, PageInfoType } from '@/types/'

export const AUTHOR = 'Celeste Zapata'
export const AUTHOR_JOB_TITLE = 'Developer'
export const AUTHOR_USERNAME = 'zetadeceleste'
export const AUTHOR_ORGANIZATION = 'chikilabs'
export const AUTHOR_TWITTER = `https://twitter.com/${AUTHOR_USERNAME}`
export const AUTHOR_LINKEDIN = `https://www.linkedin.com/in/${AUTHOR_USERNAME}`
export const AUTHOR_GITHUB = `https://github.com/${AUTHOR_USERNAME}`

export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL
export const WEBSITE_TITLE = `${AUTHOR} | Developer`
export const WEBSITE_SHORT_DESCRIPTION =
  'Developer focused in Growth Engineering & Frontend Development'
export const WEBSITE_DESCRIPTION =
  "Hi! I'm Celeste Zapata, a Developer specializing in Growth Engineering & Frontend Development. With 5+ years of experience collaborating across industries."
export const WEBSITE_KEYWORDS =
  'Celeste Zapata, Developer, Web Developer, UI Developer, Front-end, Frontend, Front End, Growth Engineer, Development, Engineering, React, ReactJS, React.js, NextJS, Next.js, JavaScript, TypeScript, SEO, Ruby on Rails, Web Accessibility, WCAG 3, Quality Score, Portfolio, Resume'

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
