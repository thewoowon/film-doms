import { type ReactNode, type PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { flex } from '@/styles/emotion'

interface Props extends PropsWithChildren {
  right?: ReactNode
  width?: string
}

const ArticleLayout = ({ children, right = null, width }: Props) => {
  return (
    <Container right={right} width={width}>
      {children}
      {right}
    </Container>
  )
}

const Container = styled.div<{ right?: ReactNode; width?: string }>`
  width: ${props => props.width || '100%'};
  position: relative;
  ${props =>
    props.right
      ? flex({ justify: 'space-between' })
      : flex({ justify: 'center' })}
  padding-top: 40px;
  padding-bottom: 150px;
  margin: auto;
  flex-direction: ${props => (props.right ? 'row' : 'column')};
`

export default ArticleLayout
