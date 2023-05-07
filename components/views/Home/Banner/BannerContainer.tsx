import { Suspense } from 'react'
import Banner from './Banner'
import { Loading } from '@/components/common'

const BannerContainer = () => {
  return (
    <Suspense fallback={<Loading width="1280px" height="512px" />}>
      <Banner />
    </Suspense>
  )
}

export default BannerContainer
