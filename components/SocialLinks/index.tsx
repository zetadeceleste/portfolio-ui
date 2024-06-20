import { useEffect, useState } from 'react'

import List from '../List'
import Loader from '../Loader'

import { fetchSocialLinksData } from '@/services'
import { SocialLinkListType } from '@/services/types'

const SocialLinks = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [socialLinkListData, setSocialListData] = useState<SocialLinkListType>(
    [],
  )

  useEffect(() => {
    const loadSocialLinkListData = async () => {
      try {
        const data = await fetchSocialLinksData()
        data?.length > 0 && setSocialListData(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadSocialLinkListData()
  }, [])

  if (isLoading) return <Loader />

  return <List data={socialLinkListData} />
}

export default SocialLinks
