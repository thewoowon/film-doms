import { flexCenter, mediaQuery } from '@/styles/emotion'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const Recent = ({ id, category, title, comment }: Recent) => {
  const { push } = useRouter()

  return (
    <Container onClick={() => push(`/community/recent/${id}`)}>
      <Badge>
        <BadgeText>{category}</BadgeText>
      </Badge>
      <Box>
        <Title>{title}</Title>
        <CommentCount>[{comment.length}]</CommentCount>
      </Box>
    </Container>
  )
}

const CommentCount = styled.div`
  color: #f0380f;
  font-size: 12px;
  line-height: 18px;
  ${flexCenter}

  ${mediaQuery.tablet`
    line-height: 21px;
  `}

  ${mediaQuery.laptop`
    font-size: 14px;
  `}

  ${mediaQuery.pc`
    font-size: 16px;
  `}
`

const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
  padding-right: 6px;

  ${mediaQuery.tablet`
    font-size: 16px;
    line-height: 24px;
  `}

  ${mediaQuery.pc`
    font-size: 18px;
    line-height: 27px;
  `}
`

const Box = styled.div`
  display: flex;
  overflow: hidden;
  padding-right: 1rem;
`

const BadgeText = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 6rem;

  ${mediaQuery.tablet`
    font-size: 14px;
    line-height: 21px;
  `}

  ${mediaQuery.pc`
    font-size: 16px;
  `}
`

const Badge = styled.div`
  width: max-content;
  height: 20px;
  border-radius: 4px;
  padding: 1px 12px;
  background-color: #f5f5f5;
  flex-shrink: 0;

  ${mediaQuery.tablet`
    height: 23px;
  `}

  ${mediaQuery.pc`
    height: 24px;
  `}
`

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`

export default Recent
