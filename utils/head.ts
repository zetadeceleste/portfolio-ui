import { WEBSITE_URL, COMMON_TITLE, PAGE_INFO_LIST } from '@/constants/pageInfo'
import { Page } from '@/types'

interface HeadInfo {
  title: string
  pageUrl: string
}

export const getHeadByPage = (page: Page): HeadInfo => {
  const title = `${COMMON_TITLE}${PAGE_INFO_LIST[page].title}`
  const pageUrl = `${WEBSITE_URL}${PAGE_INFO_LIST[page].path}`

  return { title, pageUrl }
}
