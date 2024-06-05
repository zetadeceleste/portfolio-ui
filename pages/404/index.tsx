import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Loader from '@/components/Loader'
import { PAGE_INFO_LIST } from '@/constants/pageInfo'

interface Props {
  isUnderConstruction?: boolean
}

const Custom404Page = ({ isUnderConstruction }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (isUnderConstruction) {
      router.push(PAGE_INFO_LIST.SITE_UNDER_CONSTRUCTION.path)
    } else {
      router.push(PAGE_INFO_LIST.HOME.path)
    }
  }, [router])

  return <Loader />
}

export default Custom404Page
