import { WEBSITE_URL, PAGE_INFO_LIST, AUTHOR } from '@/constants/pageInfo'
import { Page } from '@/types'

interface HeadInfo {
  title: string
  pageUrl: string
}

export const getHeadByPage = (page: Page): HeadInfo => {
  const title = `${AUTHOR} | ${PAGE_INFO_LIST[page].title}`
  const pageUrl = `${WEBSITE_URL}${PAGE_INFO_LIST[page].path}`

  return { title, pageUrl }
}
