import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import Image from 'next/image'
import { flexCenter } from '@/styles/emotion'
import styled from '@emotion/styled'

function SliderWrapper({ banners }: { banners: Main.Banner[] }) {
  return (
    <SliderOutsideAlign>
      <Swiper
        id="carousel"
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        width={1280}
        height={440}
        pagination={{ clickable: true }}
        style={{ position: 'relative' }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners.map(({ id, type, title, subtitle, image }) => (
          <SwiperSlide key={id}>
            <Image src={image} alt={title} width={1280} height={440} priority />
            <TextArea>
              <TypeText>{type}</TypeText>
              <TitleText>{title}</TitleText>
              <SubTitleText>{subtitle}</SubTitleText>
            </TextArea>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderOutsideAlign>
  )
}

export default SliderWrapper

const SliderOutsideAlign = styled.div`
  width: 1280px;
  ${flexCenter}
  padding-top: 40px;
  padding-bottom: 32px;
`
const TextArea = styled.div`
  position: absolute;
  color: white;
  top: 80px;
  left: 80px;
  font-family: Pretendard;
  font-weight: 700;
`

const TypeText = styled.div`
  font-size: 20px;
  line-height: 0px;
  text-transform: capitalize;
`

const TitleText = styled.div`
  padding-top: 28px;
  font-size: 40px;
  line-height: 60px;
`

const SubTitleText = styled.div`
  font-size: 40px;
  line-height: 60px;
`
