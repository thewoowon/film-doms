import styled from '@emotion/styled'
import { Slider } from './Slider'

const SlideContainer = () => {
  return (
    <Container>
      <Slider />
    </Container>
  )
}

export default SlideContainer

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`
