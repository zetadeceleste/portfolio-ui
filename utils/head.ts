import {
  pagesPath,
  pagesTitle,
  COMMON_TITLE,
  WEBSITE_URL,
  Page,
} from '@/constants/pages'

export const getHeadByPage = (page: Page) => {
  const title = `${COMMON_TITLE}${pagesTitle[page]}`
  const pageUrl = `${WEBSITE_URL}${pagesPath[page]}`

  return {
    title,
    pageUrl,
  }
}
