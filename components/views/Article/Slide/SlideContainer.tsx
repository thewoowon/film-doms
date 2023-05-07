import { flexGap } from '@/styles/emotion'
import styled from '@emotion/styled'
import { Controller } from './Controller'
import { Slider } from './Slider'

const SlideContainer = () => {
  return (
    <Container>
      <Controller />
      <Slider />
    </Container>
  )
}

export default SlideContainer

const Container = styled.div`
  width: 100%;
  height: 500px;
  ${flexGap('30px', 'row')}
  position: relative;
`
