import { useState } from 'react'
import styled from '@emotion/styled'
import { useFetchUserActivityComment } from '@/services/myPage'
import { colors, flex, flexCenter, flexGap, font } from '@/styles/emotion'
import { cutString } from '@/utils'
import { Pagination } from '@/components/common'

const CommentContainer = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: activityCommentList } = useFetchUserActivityComment({
    page: Math.max(currentPage - 1, 0),
    size: 10,
  })

  return (
    <Container>
      <Wrapper>
        <Title>
          &#39;{activityCommentList.totalElements}&#39; 개의 작성한 댓글이
          있습니다.
        </Title>
        <Table>
          <tbody>
            {activityCommentList.content.map(comment => {
              return (
                <Tr key={comment.id}>
                  <Td color={colors.primary.black} role="button">
                    {cutString(comment.content, 65)}
                    {'  '}
                    <CommentCount>{comment.childrenCommentCount}</CommentCount>
                  </Td>
                  <Td color="#888888">{comment.createdAt}</Td>
                </Tr>
              )
            })}
          </tbody>
        </Table>
      </Wrapper>
      <PaginationBox>
        <Pagination
          count={5}
          currentPage={currentPage}
          totalPage={activityCommentList.totalPages}
          onChange={page => setCurrentPage(page)}
        />
      </PaginationBox>
    </Container>
  )
}

const Table = styled.table`
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
`

const PaginationBox = styled.div`
  ${flexCenter}
`

const CommentCount = styled.span`
  ${font({ size: '16px', weight: '500', lineHeight: '27px' })}
  color: ${colors.primary.orange};
  text-decoration: underline;
  text-decoration-color: ${colors.primary.orange};
`

const Td = styled.td<{ color: string }>`
  ${font({ size: '16px', weight: '500', lineHeight: '24px' })}
  color: ${({ color }) => color};
  cursor: pointer;
`

const Tr = styled.tr`
  ${flex({ justify: 'space-between' })}
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #dddddd;

  &:first-of-type {
    border-top: 1px solid #dddddd;
  }
`

const Title = styled.h1`
  ${font({ size: '16px', weight: '700', lineHeight: '24px' })}
  color: ${colors.grey[900]};
  padding: 20px;
`

const Container = styled.div`
  ${flexGap('40px')}
  width: 100%;
`

export default CommentContainer
