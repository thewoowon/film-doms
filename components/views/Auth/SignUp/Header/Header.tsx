import { font } from '@/styles/emotion'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <Container>
      <Title>회원가입</Title>
    </Container>
  )
}

const Title = styled.h1`
  ${font({ size: '32px', weight: '700', lineHeight: '36px' })}
`

const Container = styled.div`
  width: 100%;
`

export default Header
