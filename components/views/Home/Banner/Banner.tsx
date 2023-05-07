import { useFetchBannerList } from '@/services/main'
import Slider from './Slider'

const Banner = () => {
  const { data: banners } = useFetchBannerList()
  return <Slider banners={banners} />
}

export default Banner
