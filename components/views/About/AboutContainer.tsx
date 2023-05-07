import styled from '@emotion/styled'
import { commons } from './constants'
import { CommonSection, TopSection } from './Section'

const AboutContainer = () => {
  return (
    <Container>
      <TopSection />
      {commons.map((common, index) => (
        <CommonSection key={index} {...common} />
      ))}
    </Container>
  )
}

export default AboutContainer

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  background-color: #111111;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  overflow: hidden;
  position: relative;
  z-index: 1;
`
