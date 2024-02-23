import { useRouter } from 'next/router'
import React from 'react'

import Loader from '@/components/common/Loader'

const Custom404Page: React.FC = () => {
  const router = useRouter()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return <Loader />
}

export default Custom404Page
