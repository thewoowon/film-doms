import { A11y, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import styled from '@emotion/styled'
import Image from 'next/image'
import { imageList } from './data'
import SlidePrev from '@/assets/svgs/common/SlidePrev'
import SlideNext from '@/assets/svgs/common/SlideNext'

const Slider = () => {
  return (
    <SliderContainer>
      <button className="_swiper-button-prev">
        <SlidePrev />
      </button>
      <SwiperContainer>
        <Swiper
          navigation={{
            nextEl: '._swiper-button-next',
            prevEl: '._swiper-button-prev',
          }}
          slidesPerView={3}
          spaceBetween={30}
          id="carousel"
          loop={true}
          modules={[Navigation, A11y]}
        >
          {imageList.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  alt={'critic'}
                  width={450}
                  height={550}
                  src={slide.image}
                  priority
                />
                <CriticTextArea>
                  {slide.title.split('|').map((title, index) => (
                    <TitleArea key={index}>{title}</TitleArea>
                  ))}
                  <AuthorArea>{slide.author}</AuthorArea>
                </CriticTextArea>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </SwiperContainer>
      <button className="_swiper-button-next">
        <SlideNext />
      </button>
    </SliderContainer>
  )
}

export default Slider

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const SwiperContainer = styled.div`
  max-width: 1430px;
  width: 100%;
  margin: 0 40px;
`

const CriticTextArea = styled.div`
  position: absolute;
  bottom: 0;
  padding: 26px 34px;
`

const TitleArea = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: #ffffff;
`

const AuthorArea = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`
