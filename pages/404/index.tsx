import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Loader from '@/components/common/Loader'
import { pages } from '@/constants/pages'

interface Props {
  isUnderConstruction?: boolean
}

const Custom404Page = ({ isUnderConstruction }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (isUnderConstruction) {
      router.push(pages.SITE_UNDER_CONSTRUCTION)
    } else {
      router.push(pages.HOME)
    }
  }, [router])

  return <Loader />
}

export default Custom404Page
