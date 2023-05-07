import { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import styled from '@emotion/styled'

const Slider = () => {
  return (
    <SliderContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        id="carousel"
        loop={true}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          style={{
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',
            /* Center slide text vertically */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Rainbow />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',

            /* Center slide text vertically */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Rainbow />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',

            /* Center slide text vertically */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Rainbow />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',

            /* Center slide text vertically */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Rainbow />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',

            /* Center slide text vertically */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Rainbow />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',

            /* Center slide text vertically */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Rainbow />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',

            /* Center slide text vertically */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Rainbow />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  )
}

export default Slider

const SliderContainer = styled.div`
  width: 950px;
  flex-grow: 1;
  height: 500px;
  position: relative;
`

const Rainbow = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  animation: rainbow 18s ease infinite;
  background-size: 1800% 1800%;
  @keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
`
