import { useEffect, useState } from 'react'

import List from '../List'
import Loader from '../Loader'

import { fetchSocialLinks } from '@/services'
import { SocialLinkListType } from '@/services/types'

const SocialLinks = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [socialLinkList, setSocialList] = useState<SocialLinkListType>([])

  useEffect(() => {
    const loadSocialLinkList = async () => {
      try {
        const data = await fetchSocialLinks()
        data?.length > 0 && setSocialList(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadSocialLinkList()
  }, [])

  if (isLoading) return <Loader />

  return <List data={socialLinkList} />
}

export default SocialLinks
